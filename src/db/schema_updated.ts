// ... existing code before rent_vessel ...

// Rent Vessel - Updated with missing fields
export const rent_vessel = pgTable("rent_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    vessel_condition: text("vessel_condition").notNull(),
    vessel_number: numeric("vessel_number").notNull(),
    rental_duration: numeric("rental_duration").notNull(),
    duration_unit: text("duration_unit"), // Added missing field
    
    // Delivery details
    delivery_date: date("delivery_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    drop_off_location: text("drop_off_location"), // Added missing field
    detailed_location: text("detailed_location"), // Made nullable
    
    // Trading and specifications
    trading_area: text("trading_area"), // Added missing field
    required_specifications: text("required_specifications"), // Made nullable
    
    // Budget
    budget: numeric("budget"),
    
    // Additional information
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
    quotation_number: text("quotation_number"),
})

// ... rest of existing code ...
