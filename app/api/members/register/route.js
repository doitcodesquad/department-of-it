import dbConnect from "@/lib/db";
import Member from "@/models/Member";
import { NextResponse } from "next/server";
import logger from "@/utils/logger";
export async function POST(request) {
  try {
    await dbConnect();

    const { name, email, password } = await request.json();
    const memberExists = await Member.findOne({ email });
    if (!memberExists) {
      await Member.create({ name, email, password });
      await logger.info("Member created", { name, email });
      return NextResponse.json({
        message: "Successfully created Member",
        status: 200,
      });
    }
    await logger.info("Member Already Exists", { email });
    return NextResponse.json({
      message: "Member Already Exists with provided Email",
      status: 400,
    });
  } catch (error) {
    await logger.error("Error creating member", { error: error.message });
    return NextResponse.json({
      message: "Failed to create member",
      status: 500,
    });
  }
}
