import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email } = await request.json();
    console.log(`Feedback Received from ${name} with email ${email}`);

    // Mock successful submission
    return NextResponse.json({
      message: "Feedback Successfully Recieved",
      status: 201,
    });
  } catch (error) {
    console.error("Error receiving feedback", { error: error.message });
    return NextResponse.json({
      message: "Failed to recieve feedback",
      status: 500,
    });
  }
}

export async function GET(request) {
  try {
    // Mock data retrieval
    const contacts = [
        { name: "John Doe", email: "john@example.com", message: "Hello!", date: new Date() },
        { name: "Jane Doe", email: "jane@example.com", message: "Hi there!", date: new Date() },
    ];

    return NextResponse.json({
      contacts,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        totalContacts: 2,
        contactsPerPage: 10,
      },
    });
  } catch (error) {
    console.error("Error retrieving contacts", {
      error: error.message,
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
