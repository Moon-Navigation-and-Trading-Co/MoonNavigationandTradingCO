import { pgTable, text, uuid, timestamp, boolean, integer, date, jsonb } from 'drizzle-orm/pg-core';

// Users table
export const users_table = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Rent Vessel - Updated with missing fields
export const rent_vessel = pgTable("rent_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    container_type: text("container_type").notNull(),
    rental_duration: integer("rental_duration").notNull(),
    duration_unit: text("duration_unit").notNull(),
    delivery_date: date("delivery_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    drop_off_location: text("drop_off_location").notNull(),
    detailed_location: text("detailed_location"),
    trading_area: text("trading_area"),
    required_specification: text("required_specification").notNull(),
    budget: integer("budget"),
    additional_information: text("additional_information"),
    
    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    country_of_origin: text("country_of_origin").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    
    // Form metadata
    form_type: text("form_type").notNull().default("rent_vessel"),
    quotation_number: text("quotation_number"),
});
