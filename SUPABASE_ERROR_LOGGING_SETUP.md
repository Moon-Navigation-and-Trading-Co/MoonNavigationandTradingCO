# Supabase Error Logging Setup

## 🎯 What This Does

Your application now logs all errors to a Supabase table, giving you:
- ✅ **Free error history** (no cost)
- ✅ **User context** (which user had the error)
- ✅ **Page context** (which page had the error)
- ✅ **Stack traces** (full error details)
- ✅ **Admin dashboard** (view errors in your app)

## 🗄️ Step 1: Create the Database Table

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project
3. Go to **SQL Editor**
4. Copy and paste the contents of `ERROR_LOGS_SETUP.sql`
5. Click **Run** to create the table

## 🔧 Step 2: Test the Setup

### In Development:
```typescript
// This will show in your console
logError("Test error", new Error("Something went wrong"));
```

### In Production:
```typescript
// This will save to Supabase
logError("Email sending failed", emailError);
```

## 📊 Step 3: View Error Logs

### Option 1: Admin Dashboard
Visit: `https://yourwebsite.com/admin/errors`
- View all errors in a nice interface
- See error details, stack traces, and user info
- Clear old errors (7+ days)

### Option 2: Supabase Dashboard
1. Go to **Table Editor** in Supabase
2. Select the `error_logs` table
3. View all errors with full details

## 📈 What Gets Logged

Each error log includes:
- **Message**: The error message you provided
- **Error Details**: The actual error object
- **Stack Trace**: Full error stack for debugging
- **User ID**: Which user experienced the error (if logged in)
- **Page URL**: Which page had the error
- **User Agent**: Browser/device info
- **Timestamp**: When the error occurred

## 🔒 Security

- Only authenticated users can insert error logs
- Users can only see their own errors
- Admins can see all errors
- Old errors are automatically cleaned up

## 🚀 Benefits

### Before:
- ❌ Errors only in console (development only)
- ❌ No error history
- ❌ No user context
- ❌ No production monitoring

### After:
- ✅ Errors saved to database
- ✅ Complete error history
- ✅ User and page context
- ✅ Production error monitoring
- ✅ Admin dashboard for viewing
- ✅ Free (no additional cost)

## 🛠️ Customization

You can modify `utils/logError.ts` to:
- Add more context (form data, API responses, etc.)
- Send email alerts for critical errors
- Add error categorization
- Set up automated error reports

## 📱 Next Steps

1. Run the SQL to create the table
2. Deploy your application
3. Monitor errors at `/admin/errors`
4. Set up regular error reviews
5. Fix errors based on the logs

Your application now has professional error monitoring! 🎉
