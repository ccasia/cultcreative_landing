# Google Sheets Integration Setup

## Overview
Form submissions from both the New Landing and For Brands pages are automatically sent to Google Sheets.

## Setup Instructions

### 1. Create Google Sheets Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Cult Creative Form Submissions"
3. Create two sheets:
   - **Sheet 1**: Rename to "New Landing Submissions"
   - **Sheet 2**: Rename to "For Brands Submissions"

### 2. Add Headers
Add these headers to the first row of each sheet:

```
Timestamp | Location | Name | Phone | Company | Email | Industry | Budget | Form Type
```

### 3. Set Up Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable the Google Sheets API:
   - Go to APIs & Services > Library
   - Search for "Google Sheets API"
   - Click Enable

4. Create a Service Account:
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > Service Account
   - Fill in the details and create
   - Go to the service account and create a JSON key
   - Download the JSON file

### 4. Share Spreadsheet with Service Account
1. Open the JSON key file and copy the `client_email`
2. Open your Google Sheets spreadsheet
3. Click Share
4. Paste the service account email and give it Editor access
5. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

### 5. Add Environment Variables

Add these to your `.env.local` file:

```env
GOOGLE_PROJECT_ID=your_project_id
GOOGLE_PRIVATE_KEY_ID=your_private_key_id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_SHEETS_ID=your_spreadsheet_id
```

**Note**: When copying the private key, replace actual newlines with `\n` in the string.

### 6. Install Dependencies

```bash
npm install googleapis
```

## How It Works

### Form Submission Flow
1. User fills out form on either New Landing or For Brands page
2. Form includes locale (my/sg) and form type (landing/brands)
3. On submit, data is sent to `/api/submit-form` endpoint
4. API validates data and appends to appropriate Google Sheets
5. User receives success/error notification

### Data Captured
- **Timestamp**: ISO format timestamp of submission
- **Location**: MY (Malaysia) or SG (Singapore)
- **Name**: User's name
- **Phone**: Phone number
- **Company**: Company name
- **Email**: Email address
- **Industry**: Selected industry
- **Budget**: Selected budget range
- **Form Type**: "landing" or "brands"

## Troubleshooting

### "GOOGLE_SHEETS_ID not configured"
- Ensure `GOOGLE_SHEETS_ID` is set in `.env.local`
- Restart the development server after adding env variables

### "Permission denied" errors
- Verify the service account email has Editor access to the spreadsheet
- Check that the private key is correctly formatted in `.env.local`

### Form not submitting
- Check browser console for errors
- Verify API route is accessible at `/api/submit-form`
- Check server logs for detailed error messages

## Files Modified/Created

- `/src/lib/googleSheets.ts` - Google Sheets API utility functions
- `/src/app/api/submit-form/route.ts` - API endpoint for form submissions
- `/src/app/[locale]/sections/newLanding/SixthSection.jsx` - Updated with form submission
- `/src/app/[locale]/sections/forBrands/SixthSection.jsx` - Updated with form submission
