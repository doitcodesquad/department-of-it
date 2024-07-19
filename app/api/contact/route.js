// Import necessary modules
import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import logger from "@/utils/logger";

export async function POST(request) {
  try {
    await dbConnect();

    const { name, email, message, image } = await request.json();

    await Contact.create({ name, email, message, image });

    await logger.info(
      "Feedback Recieved from " + name + " bearing Email " + email
    );

    return NextResponse.json({
      message: "Feedback Successfully Recieved",
      status: 201,
    });
  } catch (error) {
    await logger.error("Error recieving feedback", { error: error.message });
    return NextResponse.json({
      message: "Failed to recieve feedback",
      status: 500,
    });
  }
}
