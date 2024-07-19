import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import logger from "@/utils/logger";
export const dynamic = "force-dynamic";
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const userId = searchParams.get("userId");
    const method = searchParams.get("method");
    const route = searchParams.get("route");
    const status = searchParams.get("status");
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const db = await getDb();
    const collection = db.collection("audit_logs");
    let filter = {};

    if (userId) filter.userId = userId;
    if (method) filter.method = method;
    if (route) filter.route = { $regex: route, $options: "i" };
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

    if (logs.length === 0) {
      console.error(
        "No logs found with the current filter. Retrieving all logs."
      );
      filter = {};
      const allTotal = await collection.countDocuments();
      const allLogs = await collection
        .find()
        .sort({ timestamp: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray();

      return NextResponse.json({
        logs: allLogs,
        pagination: {
          total: allTotal,
          page,
          limit,
          totalPages: Math.ceil(allTotal / limit),
        },
      });
    }

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
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { level, message, meta } = await req.json();
  await logger[level](message, meta);
  return new Response(JSON.stringify({ status: "logged" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
