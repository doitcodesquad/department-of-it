import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    // Mock registration logic
    console.log(`Member registration attempt for Name: ${name} & Email: ${email}`);

    // Assuming email is not already taken
    return NextResponse.json({
      message: "Successfully created Member",
      status: 200,
    });

  } catch (error) {
    console.error("Error creating member", { error: error.message });
    return NextResponse.json({
      message: "Failed to create member",
      status: 500,
    });
  }
}
