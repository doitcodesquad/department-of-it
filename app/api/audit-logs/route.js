import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { getToken } from "next-auth/jwt";
import logger from "@/utils/logger";

export async function GET(request) {
  try {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      await logger.error("Unauthorized Access", {
        url: request.url,
        method: "GET",
        ip: request.headers.get("x-forwarded-for"),
      });
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 100;
    const userId = searchParams.get("userId");
    const method = searchParams.get("method");
    const url = searchParams.get("url");
    const status = searchParams.get("status");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("audit_logs");

    const filter = {};
    if (userId) filter.userId = userId;
    if (method) filter.method = method;
    if (url) filter.url = { $regex: url, $options: "i" };
    if (status) filter.status = parseInt(status);
    if (startDate || endDate) {
      filter.timestamp = {};
      if (startDate) filter.timestamp.$gte = new Date(startDate);
      if (endDate) filter.timestamp.$lte = new Date(endDate);
    }

    const total = await collection.countDocuments(filter);

    const logs = await collection
      .find(filter)
      .sort({ timestamp: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    await logger.info("API Access", {
      url: request.url,
      method: "GET",
      ip: request.headers.get("x-forwarded-for"),
    });
    return NextResponse.json({
      logs,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Failed to fetch audit logs:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
