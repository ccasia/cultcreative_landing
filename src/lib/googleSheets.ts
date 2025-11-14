import { google } from "googleapis";

const sheets = google.sheets("v4");

// Initialize auth with service account
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: "service_account",
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
  } as Record<string, string | undefined>,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function appendToSheet(
  spreadsheetId: string,
  range: string,
  values: (string | number | boolean)[][]
) {
  try {
    const response = await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error appending to sheet:", error);
    throw error;
  }
}

export async function createSheet(spreadsheetId: string, sheetTitle: string) {
  try {
    const response = await sheets.spreadsheets.batchUpdate({
      auth,
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetTitle,
              },
            },
          },
        ],
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating sheet:", error);
    throw error;
  }
}
