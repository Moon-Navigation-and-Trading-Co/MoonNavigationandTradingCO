# Form Email Configuration Summary

## Email Server Setup
Your forms are configured to send email notifications using the CloudSmartly email server.

### Server Configuration
- **SMTP Server**: `webmail.cloudsmartly.com`
- **Port**: `465` (SSL)
- **Security**: SSL encryption enabled
- **Authentication**: Required

### Email Addresses
- **From Address**: `quotation@moon-navigation.com`
- **To Addresses**: 
  - `quotation@moon-navigation.com`
  - `quotes@moon-navigation.com`

## Environment Variables Required

### Local Development (.env.local)
```bash
SMTP_HOST=webmail.cloudsmartly.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=quotation@moon-navigation.com
SMTP_PASSWORD=your-email-password
```

### Production (Vercel)
Set these environment variables in your Vercel dashboard:
- `SMTP_HOST`: `webmail.cloudsmartly.com`
- `SMTP_PORT`: `465`
- `SMTP_SECURE`: `true`
- `SMTP_USER`: `quotation@moon-navigation.com`
- `SMTP_PASSWORD`: Your email password

## Forms That Send Emails

All the following forms will send email notifications to both `quotation@moon-navigation.com` and `quotes@moon-navigation.com`:

✅ **Air Freight Forms** (`/air-freight-forms`)
✅ **Inland Services Forms** (`/inland-services-forms`)
✅ **International Trading Forms** (`/international-trading-forms`)
✅ **Container Services Forms** (`/container-services-forms`)
✅ **Ocean Freight Forms** (`/ocean-freight-forms`)
✅ **Special Services Forms** (`/special-services-forms`)
✅ **Contact Form** (`/contact`)
✅ **Schedule Meeting Form** (`/schedule-meeting`)
✅ **Ship Management Forms** (`/ship-management-forms`)
✅ **Buy/Rent Container Forms** (`/buy-rent-container-forms`)
✅ **Buy/Rent Vessels Forms** (`/buy-rent-vessels-forms`)
✅ **Customs Clearance Forms** (`/customs-clearance-forms`)
✅ **Handling/Stevedoring/Storage Forms** (`/handling-stevedoring-storage-forms`)
✅ **Out Gauge Forms** (`/out-gauge-forms`)
✅ **Ship Agency Forms** (`/ship-agency-forms`)
✅ **Ship Maintenance Forms** (`/ship-maintenance-forms`)
✅ **Suez Canal Forms** (`/suez-canal-form`)

## Email Template Features

- **Professional Design**: Clean, branded HTML templates
- **Form Data**: All submitted form fields are included
- **Submission Time**: Automatic timestamp
- **Form Type**: Clear identification of which form was submitted
- **Responsive**: Works on all devices

## Testing

1. **Local Testing**: Submit any form on your development server
2. **Check Emails**: Monitor both `quotation@moon-navigation.com` and `quotes@moon-navigation.com`
3. **Console Logs**: Check browser console for any email errors
4. **Production**: Deploy and test on live site

## Troubleshooting

If emails are not being received:

1. **Check Environment Variables**: Ensure all SMTP settings are correct
2. **Verify Credentials**: Confirm email username and password
3. **SSL Settings**: Ensure port 465 with SSL is configured
4. **Email Provider**: Contact CloudSmartly if SMTP access issues
5. **Console Errors**: Check browser console for detailed error messages

## Security Notes

- ✅ SSL encryption for all email communications
- ✅ Environment variables for sensitive data
- ✅ No hardcoded credentials in code
- ✅ Professional email templates with proper formatting 