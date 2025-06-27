# Email Functionality Setup Guide

## Overview
This project now includes email functionality for all form submissions. When users submit forms, email notifications are automatically sent to the configured recipients.

## Email System Architecture

### 1. Email API Route
- **File**: `src/app/[locale]/api/supabase-email/route.ts`
- **Purpose**: Handles all form submission emails
- **Template**: Creates beautiful HTML emails with form data

### 2. Email Helper
- **File**: `utils/email-helper.ts`
- **Purpose**: Provides a simple function to send emails from any component

### 3. Forms with Email Functionality
All the following forms now send email notifications:

- ✅ Air Freight Forms (`/air-freight-forms`)
- ✅ Inland Services Forms (`/inland-services-forms`)
- ✅ International Trading Forms (`/international-trading-forms`)
- ✅ Container Services Forms (`/container-services-forms`)
- ✅ Ocean Freight Forms (`/ocean-freight-forms`)
- ✅ Special Services Forms (`/special-services-forms`)
- ✅ Contact Form (`/contact`)
- ✅ Schedule Meeting Form (`/schedule-meeting`) - Already had email

## Environment Variables Required

Add these to your `.env.local` file and Vercel environment variables:

```bash
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password

# Supabase Configuration (already configured)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this password in `GMAIL_APP_PASSWORD`

## Email Recipients

By default, emails are sent to:
- `Mariiamhamdyy1@gmail.com`
- `Farida.ashraf@hotmail.co.uk`

You can customize recipients by passing a `recipientEmails` array to the `sendFormEmail` function.

## Email Template

The email template includes:
- Form type and submission time
- All form data in a structured format
- Professional styling with Moon Navigation branding
- Responsive design

## Usage in Forms

To add email functionality to a new form:

```typescript
import { sendFormEmail } from '@/utils/email-helper';

// After successful form submission
try {
  await sendFormEmail(formData, 'form_type_name');
} catch (emailError) {
  console.error('Email sending failed:', emailError);
  // Don't fail the form submission if email fails
}
```

## Error Handling

- Email failures don't prevent form submission
- Errors are logged to console for debugging
- Users still get success messages even if email fails

## Testing

To test email functionality:
1. Set up environment variables
2. Submit any form
3. Check the configured email addresses for notifications
4. Check browser console for any email errors

## Future Enhancements

For true Supabase SMTP integration:
1. Set up Supabase Edge Functions
2. Configure Supabase SMTP settings
3. Update the API route to use Supabase functions instead of nodemailer

## Troubleshooting

### Email not sending
1. Check environment variables are set correctly
2. Verify Gmail app password is correct
3. Check browser console for errors
4. Ensure Gmail account has "Less secure app access" enabled or use app password

### Form submission fails
1. Check Supabase connection
2. Verify database table exists
3. Check form validation

### Email template issues
1. Check the `createFormEmailTemplate` function in the API route
2. Verify form data structure
3. Test with simple form data first 