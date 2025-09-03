-- Create admin roles table
CREATE TABLE IF NOT EXISTS "admin_roles" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" text NOT NULL UNIQUE,
  "description" text,
  "permissions" jsonb DEFAULT '[]',
  "created_at" timestamp with time zone DEFAULT now(),
  "updated_at" timestamp with time zone DEFAULT now()
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS "admin_users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" uuid REFERENCES "users"("id") ON DELETE CASCADE,
  "role_id" uuid REFERENCES "admin_roles"("id") ON DELETE SET NULL,
  "is_active" boolean DEFAULT true,
  "last_login" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now(),
  "updated_at" timestamp with time zone DEFAULT now()
);

-- Create audit logs table
CREATE TABLE IF NOT EXISTS "audit_logs" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "admin_user_id" uuid REFERENCES "admin_users"("id") ON DELETE SET NULL,
  "action" text NOT NULL,
  "table_name" text,
  "record_id" uuid,
  "old_values" jsonb,
  "new_values" jsonb,
  "ip_address" inet,
  "user_agent" text,
  "created_at" timestamp with time zone DEFAULT now()
);

-- Create admin sessions table
CREATE TABLE IF NOT EXISTS "admin_sessions" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "admin_user_id" uuid REFERENCES "admin_users"("id") ON DELETE CASCADE,
  "session_token" text NOT NULL UNIQUE,
  "expires_at" timestamp with time zone NOT NULL,
  "ip_address" inet,
  "user_agent" text,
  "created_at" timestamp with time zone DEFAULT now()
);

-- Insert default admin roles
INSERT INTO "admin_roles" ("name", "description", "permissions") VALUES
  ('super_admin', 'Full system access', '["*"]'),
  ('admin', 'General admin access', '["users:read", "users:update", "forms:read", "forms:update", "analytics:read"]'),
  ('moderator', 'Limited admin access', '["users:read", "forms:read", "analytics:read"]')
ON CONFLICT ("name") DO NOTHING;

-- Enable RLS on admin tables
ALTER TABLE "admin_roles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "admin_users" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "audit_logs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "admin_sessions" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for admin tables
CREATE POLICY "Super admins can manage all admin data" ON "admin_roles"
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM "admin_users" au
      JOIN "admin_roles" ar ON au.role_id = ar.id
      WHERE au.user_id = auth.uid() AND ar.name = 'super_admin'
    )
  );

CREATE POLICY "Admins can view admin roles" ON "admin_roles"
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM "admin_users" au
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Super admins can manage admin users" ON "admin_users"
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM "admin_users" au
      JOIN "admin_roles" ar ON au.role_id = ar.id
      WHERE au.user_id = auth.uid() AND ar.name = 'super_admin'
    )
  );

CREATE POLICY "Admin users can view their own record" ON "admin_users"
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can view audit logs" ON "audit_logs"
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM "admin_users" au
      WHERE au.user_id = auth.uid() AND au.is_active = true
    )
  );

CREATE POLICY "Admins can manage their own sessions" ON "admin_sessions"
  FOR ALL USING (admin_user_id IN (
    SELECT id FROM "admin_users" WHERE user_id = auth.uid()
  ));

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "idx_admin_users_user_id" ON "admin_users"("user_id");
CREATE INDEX IF NOT EXISTS "idx_admin_users_role_id" ON "admin_users"("role_id");
CREATE INDEX IF NOT EXISTS "idx_audit_logs_admin_user_id" ON "audit_logs"("admin_user_id");
CREATE INDEX IF NOT EXISTS "idx_audit_logs_created_at" ON "audit_logs"("created_at");
CREATE INDEX IF NOT EXISTS "idx_admin_sessions_token" ON "admin_sessions"("session_token");
CREATE INDEX IF NOT EXISTS "idx_admin_sessions_expires_at" ON "admin_sessions"("expires_at"); 