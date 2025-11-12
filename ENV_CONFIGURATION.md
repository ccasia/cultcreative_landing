# Environment Configuration for Google Sheets Integration

## Your Sheet Details
- **Sheet ID**: `1ryIQJNqotuRbQQob4S2xQjDW3jzPCPOA2JkCsJ4iEw4`
- **Sheet Name**: `Brands`
- **All form submissions** (from both /my and /sg, landing and brands pages) will go to this single sheet

## Add to `.env.local`

Add these environment variables to your `.env.local` file (create it in the root directory if it doesn't exist):

```env
GOOGLE_PROJECT_ID=your_project_id
GOOGLE_PRIVATE_KEY_ID=your_private_key_id
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=spreadsheet-cc@cult-creative-421007.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_SHEETS_ID=1ryIQJNqotuRbQQob4S2xQjDW3jzPCPOA2JkCsJ4iEw4
```

## How to Get Service Account Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project (or create one)
3. Enable Google Sheets API:
   - APIs & Services > Library
   - Search "Google Sheets API"
   - Click Enable

4. Create Service Account:
   - APIs & Services > Credentials
   - Create Credentials > Service Account
   - Fill in details and create
   - Go to the service account
   - Keys tab > Add Key > Create new key > JSON
   - Download the JSON file

5. From the JSON file, copy:
   - `project_id` → GOOGLE_PROJECT_ID
   - `private_key_id` → GOOGLE_PRIVATE_KEY_ID
   - `private_key` → GOOGLE_PRIVATE_KEY (keep the `\n` characters)
   - `client_email` → GOOGLE_CLIENT_EMAIL
   - `client_id` → GOOGLE_CLIENT_ID

## Share Sheet with Service Account

1. Copy the `client_email` from the JSON file
2. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1ryIQJNqotuRbQQob4S2xQjDW3jzPCPOA2JkCsJ4iEw4
3. Click Share (top right)
4. Paste the service account email
5. Give it **Editor** access
6. Click Share

## Sheet Headers

Make sure your "Brands" sheet has these headers in row 1:

```
Timestamp | Location | Name | Phone | Company | Email | Industry | Budget | Form Type
```

## Data Flow

- **New Landing page** (/my/new-landing or /sg/new-landing) → Brands sheet
- **For Brands page** (/my/for-brands or /sg/for-brands) → Brands sheet
- **Location**: MY or SG (based on current locale)
- **Form Type**: "landing" or "brands"

## Testing

1. Add all environment variables to `.env.local`
2. Restart the development server
3. Fill out a form on either page
4. Check your Google Sheet - new row should appear within seconds

## Troubleshooting

- **"Permission denied"**: Service account email not shared with sheet
- **"GOOGLE_SHEETS_ID not configured"**: Env variables not set or server not restarted
- **Form not submitting**: Check browser console for errors, check server logs
