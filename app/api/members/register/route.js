import dbConnect from "@/lib/db";
import Member from "@/models/Member";
import { NextResponse } from "next/server";
import logger from "@/utils/logger";
export async function POST(request) {
  try {
    await dbConnect();

    const {
      username,
      name,
      email,
      password,
      memberType,
      isOutsider,
      club,
      college,
      department,
      programme,
      course,
      bio,
      semester,
      socials,
    } = await request.json();

    const memberExists = await Member.findOne({ email });
    if (!memberExists) {
      await Member.create({
        username,
        name,
        email,
        password,
        memberType,
        isOutsider,
        club,
        college,
        department,
        programme,
        course,
        bio,
        socials,
        semester,
      });
      await logger.info(
        "Member created " + "Name : " + name + " & Email : " + email
      );
      return NextResponse.json({
        message: "Successfully created Member",
        status: 200,
      });
    }
    await logger.info("Member Already Exists with Provided Email " + email);
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
