# Admin Dashboard Setup Guide

## Overview
This guide outlines the steps needed to create and set up an admin dashboard for the Moon Navigation and Trading CO platform. The admin dashboard provides comprehensive management capabilities for user accounts, form submissions, and business analytics.

## Prerequisites
- Node.js 18+ installed
- Supabase project configured
- Existing Moon Navigation and Trading CO application

## Steps to Create Admin Dashboard

### 1. Database Schema Updates

The admin dashboard requires additional fields in the users table for role-based access control:

```sql
-- Add admin fields to users table
ALTER TABLE "users" 
ADD COLUMN IF NOT EXISTS "role" text DEFAULT 'user' NOT NULL,
ADD COLUMN IF NOT EXISTS "is_active" boolean DEFAULT true NOT NULL,
ADD COLUMN IF NOT EXISTS "permissions" jsonb;
```

**Migration File**: `supabase/migrations/0060_add_admin_fields.sql`

### 2. Install Required Dependencies

```bash
npm install @radix-ui/react-tabs
```

### 3. Create Admin Middleware

**File**: `utils/supabase/admin-middleware.ts`

This middleware checks if users have admin privileges before allowing access to admin routes.

### 4. Update Main Middleware

**File**: `src/middleware.ts`

Add admin route protection to the existing middleware.

### 5. Create Admin Layout

**File**: `src/app/[locale]/admin/layout.tsx`

Provides the admin dashboard layout with sidebar navigation and header.

### 6. Create Admin Components

#### Admin Header
**File**: `components/admin/admin-header.tsx`
- User profile dropdown
- Role badge display
- Logout functionality

#### Admin Sidebar
**File**: `components/admin/admin-sidebar.tsx`
- Navigation menu for different admin sections
- Active state indicators
- Service-specific navigation items

### 7. Create Admin Pages

#### Main Dashboard
**File**: `src/app/[locale]/admin/page.tsx`
- Overview statistics
- Quick action cards
- Recent activity feed

#### User Management
**File**: `src/app/[locale]/admin/users/page.tsx`
- View all users
- Role management
- Account status management
- Search and filter functionality

#### Form Submissions
**File**: `src/app/[locale]/admin/submissions/page.tsx`
- View all form submissions
- Service-specific tabs
- Submission details and actions
- Export functionality

#### Analytics
**File**: `src/app/[locale]/admin/analytics/page.tsx`
- Business metrics
- Submission trends
- Service distribution charts
- Recent activity tracking

### 8. Set Up Admin User

To create the first admin user, you need to:

1. **Register a new user** through the normal signup process
2. **Update the user's role** in the database:

```sql
UPDATE users 
SET role = 'super_admin', 
    is_active = true,
    permissions = '{"all": true}'
WHERE email = 'admin@moonnavigation.com';
```

### 9. Configure Row Level Security (RLS)

The migration includes RLS policies for admin access:

```sql
-- Admin access to users table
CREATE POLICY "Admins can view all users" ON "users"
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );

-- Admin access to form tables
CREATE POLICY "Admins can view all air freight services" ON "air_freight_services"
    FOR SELECT USING (
        auth.uid() IN (
            SELECT id FROM users WHERE role IN ('admin', 'super_admin')
        )
    );
```

## Admin Dashboard Features

### Role-Based Access Control
- **Super Admin**: Full access to all features
- **Admin**: Limited admin access
- **User**: Standard user access

### User Management
- View all registered users
- Manage user roles and permissions
- Activate/deactivate user accounts
- Search and filter users

### Form Submission Management
- View all form submissions across services
- Service-specific organization
- Submission details and processing
- Export capabilities

### Analytics and Reporting
- Business metrics dashboard
- Submission trends
- Service distribution
- Recent activity tracking

### Security Features
- Admin-only route protection
- Role-based middleware
- Secure authentication checks
- Row-level security policies

## File Structure

```
src/
├── app/[locale]/admin/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── users/
│   │   └── page.tsx
│   ├── submissions/
│   │   └── page.tsx
│   └── analytics/
│       └── page.tsx
├── components/admin/
│   ├── admin-header.tsx
│   └── admin-sidebar.tsx
└── utils/supabase/
    └── admin-middleware.ts
```

## Environment Variables

Ensure these environment variables are configured:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Email Configuration (for notifications)
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

## Usage Instructions

### Accessing the Admin Dashboard
1. Navigate to `/admin` in your application
2. Sign in with admin credentials
3. Access different sections via the sidebar navigation

### Managing Users
1. Go to `/admin/users`
2. View all registered users
3. Use search and filter options
4. Click actions menu for user management

### Reviewing Submissions
1. Go to `/admin/submissions`
2. Browse submissions by service type
3. View submission details
4. Process and respond to requests

### Viewing Analytics
1. Go to `/admin/analytics`
2. Review business metrics
3. Analyze submission trends
4. Monitor recent activity

## Security Considerations

1. **Admin Access**: Only users with admin roles can access the dashboard
2. **Route Protection**: All admin routes are protected by middleware
3. **Database Security**: RLS policies ensure data access control
4. **Session Management**: Proper authentication checks on all admin pages

## Customization

### Adding New Admin Sections
1. Create new page in `src/app/[locale]/admin/`
2. Add navigation item to `admin-sidebar.tsx`
3. Update middleware if needed
4. Add appropriate RLS policies

### Styling Customization
- Modify Tailwind classes in components
- Update color schemes in `tailwind.config.ts`
- Customize component variants

### Feature Extensions
- Add more analytics charts
- Implement real-time notifications
- Add bulk operations
- Create custom reports

## Troubleshooting

### Common Issues

1. **Access Denied**: Ensure user has admin role in database
2. **Missing Dependencies**: Run `npm install` to install required packages
3. **Database Errors**: Check RLS policies and migration status
4. **Styling Issues**: Verify Tailwind CSS configuration

### Debug Steps
1. Check browser console for errors
2. Verify Supabase connection
3. Confirm user role in database
4. Test middleware functionality

## Support

For issues or questions regarding the admin dashboard setup, refer to:
- Supabase documentation
- Next.js documentation
- Tailwind CSS documentation
- Project-specific documentation in `/docs` 