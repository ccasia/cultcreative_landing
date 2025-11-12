import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const sheets = google.sheets("v4");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, company, email, industry, budget, locale, formType } = body;

    // Validate required fields
    if (!name || !email || !industry || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const spreadsheetId = "1ryIQJNqotuRbQQob4S2xQjDW3jzPCPOA2JkCsJ4iEw4";
    const sheetName = "Brands";

    const formData = {
      timestamp,
      location: locale?.toUpperCase() || "MY",
      name,
      phone: phone || "",
      company: company || "",
      email,
      industry,
      budget,
      formType: formType || "landing",
    };

    // Log the submission
    console.log("Form submission received:", formData);

    // Initialize auth with service account credentials
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          type: "service_account",
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          client_id: process.env.GOOGLE_CLIENT_ID,
        } as any,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      console.log("Auth initialized with service account:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);

      const response = await sheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: `'${sheetName}'!A:I`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              formData.timestamp,
              formData.location,
              formData.name,
              formData.phone,
              formData.company,
              formData.email,
              formData.industry,
              formData.budget,
              formData.formType,
            ],
          ],
        },
      });

      console.log("Successfully appended to Google Sheets:", response.data);
    } catch (sheetsError) {
      console.error("Error appending to Google Sheets:", sheetsError);
      // Don't fail the request if Google Sheets fails
    }

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit form", details: String(error) },
      { status: 500 }
    );
  }
}
