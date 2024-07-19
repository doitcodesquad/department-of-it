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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const email = searchParams.get("email");
  const name = searchParams.get("name");

  const skip = (page - 1) * limit;

  try {
    await dbConnect();

    let filter = {};
    if (email) filter.email = new RegExp(email, "i");
    if (name) filter.name = new RegExp(name, "i");

    const totalContacts = await Contact.countDocuments(filter);

    const contacts = await Contact.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalContacts / limit);

    await logger.info("Contacts retrieved", {
      action: "Get Contacts",
      filters: { email, name },
      pagination: { page, limit },
    });

    return NextResponse.json({
      contacts,
      pagination: {
        currentPage: page,
        totalPages,
        totalContacts,
        contactsPerPage: limit,
      },
    });
  } catch (error) {
    await logger.error("Error retrieving contacts", {
      error: error.message,
      action: "Get Contacts",
    });
    return NextResponse.json(
      {
        message: "Failed to retrieve contacts",
        status: 500,
      },
      { status: 500 }
    );
  }
}
