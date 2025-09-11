# Vessel Tables Creation Guide

## ❌ Error: "Could not find the table 'public.buy_vessel' in the schema cache"

This error means the `buy_vessel` and `rent_vessel` tables don't exist in your Supabase database.

## 🚀 Solution: Run Database Migration

### Option 1: Clean Recreate (Recommended)
Execute: `supabase/migrations/20250110000003_create_vessel_tables.sql`
- Drops existing tables and recreates them with correct structure
- Includes RLS policies and constraints
- Use this if you don't have important data in existing tables

### Option 2: Safe Add (If you have existing data)
Execute: `supabase/migrations/20250110000004_ensure_vessel_tables_exist.sql`
- Creates tables if they don't exist
- Adds missing columns to existing tables
- Preserves existing data
- Use this if you have data you want to keep

## 📋 What the Migration Does:

### Creates buy_vessel table with:
- ✅ vessel_type, vessel_condition, vessel_number
- ✅ delivery_date, pick_up_location, detailed_location
- ✅ required_specifications, budget, additional_information
- ✅ All company details fields
- ✅ RLS policies for user data access

### Creates rent_vessel table with:
- ✅ All buy_vessel fields PLUS:
- ✅ rental_duration, duration_unit
- ✅ drop_off_location, trading_area
- ✅ RLS policies for user data access

## 🔧 How to Execute:

1. **Via Supabase Dashboard:**
   - Go to SQL Editor
   - Copy and paste the migration script
   - Click "Run"

2. **Via CLI (if you have access):**
   ```bash
   npx supabase db push
   ```

## ✅ After Migration:
- Both vessel forms will work correctly
- All form fields will be properly saved
- No more "table not found" errors

Choose Option 1 for a clean setup, or Option 2 if you have existing data to preserve.
