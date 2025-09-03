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
# CloudSmartly Email Server SMTP Configuration
SMTP_HOST=webmail.cloudsmartly.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=quotation@moon-navigation.com
SMTP_PASSWORD=your-email-password

# Supabase Configuration (already configured)
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Email Server Setup

1. **Incoming Server (IMAP)**:
   - Server: webmail.cloudsmartly.com
   - Security: SSL
   - Port: 993
   - IMAP path prefix: Optional

2. **Outgoing Server (SMTP)**:
   - Server: webmail.cloudsmartly.com
   - Security: SSL
   - Port: 465
   - Authentication: Required

3. **Configuration Notes**:
   - Use SSL encryption for both incoming and outgoing
   - Ensure your email credentials are correct
   - The application uses SMTP for sending emails only

## Email Recipients

By default, emails are sent to:
- `quotation@moon-navigation.com`
- `quotes@moon-navigation.com`

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
2. Verify CloudSmartly email credentials are correct
3. Check browser console for errors
4. Ensure SSL settings are properly configured (port 465 with secure: true)
5. Verify the email account has SMTP access enabled

### Form submission fails
1. Check Supabase connection
2. Verify database table exists
3. Check form validation

### Email template issues
1. Check the `createFormEmailTemplate` function in the API route
2. Verify form data structure
3. Test with simple form data first 