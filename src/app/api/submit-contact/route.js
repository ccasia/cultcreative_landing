import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { createContact } from "@/app/[locale]/components/google-sheet-actions.js";

const prisma = new PrismaClient();

export const POST = async (req) => {
  try {
    // Parse the request body
    const { name, email, subject, message } = await req.json();

    // Prepare data for the database
    const data = {
      createdOn: new Date(),
      name,
      email,
      subject,
      message,
    };

    // Save the data to the database using Prisma
    await prisma.contact.create({ data });

    // If in production, log the contact to Google Sheets
    if (process.env.NODE_ENV === "production") {
      await createContact(data);
    }

    // Return a success message
    return NextResponse.json({ message: `Submitted. Thanks, ${data.name}!` }, { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);

    // Return an error response with 500 status
    return NextResponse.json({ error: "Form failed to submit. Please contact our admin." }, { status: 500 });
  }
};
