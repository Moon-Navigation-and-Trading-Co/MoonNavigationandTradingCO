import { boolean, timestamp, pgSchema, pgTable, text, numeric, uuid, date, jsonb } from "drizzle-orm/pg-core";

// Since `auth` schema and `auth.users` table already exist, you can directly reference them
const authUsers = pgSchema("auth").table("users", {
    id: uuid("id").primaryKey().notNull(),
});

// Define the Users table where the primary key `id` references `auth.users.id`
export const users_table = pgTable("users", {
    id: uuid().primaryKey().notNull().references(() => authUsers.id, { onDelete: "cascade" }), // Primary key references `auth.users.id`

    // Additional fields
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    name: text("name").notNull(), // Name field
    phone: text("phone").notNull(), // Phone field
    email: text("email").notNull().unique(), // Email field, must be unique
    
    // Admin fields
    role: text("role").default("user").notNull(), // 'user', 'admin', 'super_admin'
    is_active: boolean("is_active").default(true).notNull(), // Account status
    permissions: jsonb("permissions"), // JSON object for granular permissions
});

// Air Services - Updated to match form structure
export const air_freight_services_table = pgTable("air_freight_services", {
    id: uuid().primaryKey().defaultRandom(),
    user_id: uuid().notNull().references(() => users_table.id),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),

    // Routing details
    routing: jsonb("routing").notNull(), // Array of routing objects

    // Ready to load date
    ready_to_load: text("ready_to_load").notNull(), // Changed from date to text to match form

    // Transportation details
    transportation: jsonb("transportation").notNull(), // Nested object with transportation_method

    // Entry mode and cargo data
    entry_mode: text("entry_mode").notNull(), // "itemized" or "consolidated"
    itemized_data: jsonb("itemized_data"), // Array of itemized cargo details
    consolidated_data: jsonb("consolidated_data"), // Consolidated cargo details

    // Supporting files and additional info
    supporting_files: text("supporting_files"), // Fixed: removed .optional()
    additional_information: text("additional_information"), // Fixed: removed .optional()

    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),
    service_contract_number: text("service_contract_number"), // Fixed: removed .optional()

    // Additional services
    additional_services: jsonb("additional_services").notNull(), // Nested object with service booleans

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(), // Nested object with all company fields
});

// Local Inland Services - Updated to match form structure
export const local_inland_services_table = pgTable("local_inland_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Date
    date: text("date").notNull(), // Changed from date to text to match form

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    // VAD (Value Added Services) details
    inland_container: boolean("inland_container").default(false),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// International Inland Services - Updated to match form structure
export const international_inland_services_table = pgTable("international_inland_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Date
    date: text("date").notNull(), // Changed from date to text to match form

    // Entry mode and cargo data
    entry_mode: text("entry_mode"), // "itemized" or "consolidated"
    itemized_data: jsonb("itemized_data"), // Array of itemized cargo details
    consolidated_data: jsonb("consolidated_data"), // Consolidated cargo details
    commodities: jsonb("commodities"), // Basic commodities array (legacy)

    // Additional form fields
    supporting_files: jsonb("supporting_files"), // Array of supporting files
    additional_details: text("additional_details"), // Additional details text
    commercial_terms: text("commercial_terms"), // Commercial terms text
    additional_services: jsonb("additional_services"), // Additional services object

    // VAD (Value Added Services) details
    inland_container: boolean("inland_container").default(false),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Container Inland Services - Updated to match form structure
export const container_inland_services_table = pgTable("container_inland_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Container details array
    container_details: jsonb("container_details").notNull().default([]),
    
    // Supporting files
    supporting_files: jsonb("supporting_files").default({}),
    
    // Additional information
    additional_information: text("additional_information"),
    
    // Dates
    effective_date: text("effective_date"), // Changed from date to text
    expiry_date: text("expiry_date"), // Changed from date to text
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Additional services
    additional_services: jsonb("additional_services").default({}),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Contact Requests - Updated to match contact form fields
export const contact_requests_table = pgTable("ContactRequests", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    // Contact details - Updated to match form
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    title: text("title"),
    company_name: text("company_name"),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    country_of_origin: text("country_of_origin"),
    message: text("message").notNull(),
    quotation_number: text("quotation_number"),
});

// Less Than Container Load - Updated to match form structure
export const less_than_container_load = pgTable("less_than_container_load", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodity_details: jsonb("commodity_details").notNull(),

    // Supporting files
    supporting_files: jsonb("supporting_files").notNull(),

    // Validity
    validity: jsonb("validity").notNull(),

    // Recommended Services
    recommended_services: jsonb("recommended_services").notNull(),

    // Additional Services
    additional_services: jsonb("additional_services").notNull(),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),

    quotation_number: text("quotation_number"),
});

// Standard Container - Updated to match form structure
export const standard_container = pgTable("standard_container", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    file: text("file"),
    additional_information: text("additional_information"),

    // Dates
    effective_date: text("effective_date").notNull(), // Changed from date to text
    expiry_date: text("expiry_date").notNull(), // Changed from date to text

    // Service Contract
    service_contract: text("service_contract"),

    // Value-added (VAD) details
    value_added_services: text("value_added_services"),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Oversized Container - Updated to match form structure
export const oversized_container = pgTable("oversized_container", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    shipment_type: text("shipment_type").notNull(),

    // Recommended Services
    file: text("file"),
    additional_information: text("additional_information"),

    // Dates
    effective_date: text("effective_date").notNull(), // Changed from date to text
    expiry_date: text("expiry_date").notNull(), // Changed from date to text

    // Service Contract
    service_contract: text("service_contract"),

    // Value-added (VAD) details
    value_added_services: text("value_added_services"),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Handling, Stevedoring & Storage Services - Updated to match form structure
export const hss = pgTable("handling_stevedoring_storage", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Basic information
    import_export: text("import_export").notNull(), // import, export
    port_airport: text("port_airport").notNull(),
    location: text("location").notNull(),
    
    // Entry mode
    entry_mode: text("entry_mode").notNull(), // itemized, consolidated
    itemized_data: jsonb("itemized_data"),
    consolidated_data: jsonb("consolidated_data"),
    
    // Service selections
    handling_stevedoring: boolean("handling_stevedoring").default(false),
    loading_cargo: boolean("loading_cargo").default(false),
    discharging_cargo: boolean("discharging_cargo").default(false),
    lashing_cargo: boolean("lashing_cargo").default(false),
    unlashing_cargo: boolean("unlashing_cargo").default(false),
    port_handling_stevedoring: boolean("port_handling_stevedoring").default(false),
    cargo_reception_delivery: boolean("cargo_reception_delivery").default(false),
    reception_before_shipment: boolean("reception_before_shipment").default(false),
    reception_after_discharge: boolean("reception_after_discharge").default(false),
    storage_warehousing: boolean("storage_warehousing").default(false),
    temporary_storage: boolean("temporary_storage").default(false),
    
    // Additional services
    additional_services: jsonb("additional_services").default({}),
    
    // Supporting files
    supporting_files: jsonb("supporting_files").default([]),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Buy Container - Updated to match form structure
export const buy_container = pgTable("buy_container", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Container details - Updated to match nested form structure
    container: jsonb("container").notNull(), // { type, number, condition }

    // Date and pickup details
    date: text("date").notNull(), // Changed from date to text to match form
    pick_up_location: text("pick_up_location").notNull(),

    // Budget
    budget: numeric("budget"),

    // Additional information
    additional_information: text("additional_information"),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Rent Container - Updated to match form structure
export const rent_container = pgTable("rent_container", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Container Type
    container_type: text("container_type").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Number of containers
    container_number: numeric("container_number").notNull(),

    rental_duration: numeric("rental_duration").notNull(),

    // Pick up details
    pick_up_date: text("pick_up_date").notNull(), // Changed from date to text
    pick_up_location: text("pick_up_location").notNull(),
    drop_off_location: text("drop_off_location").notNull(),
    detailed_location: text("detailed_location"),

    // Budget
    budget: numeric("budget"),

    // Additional information
    additional_information: text("additional_information"),

    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Buy Vessel - Updated to match form structure
export const buy_vessel = pgTable("buy_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    vessel_condition: text("vessel_condition").notNull(),
    vessel_number: numeric("vessel_number").notNull(),
    
    // Delivery details
    delivery_date: text("delivery_date").notNull(), // Changed from date to text
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location").notNull(),
    
    // Required specifications
    required_specifications: text("required_specifications").notNull(),
    
    // Budget
    budget: numeric("budget"),
    
    // Additional information
    additional_information: text("additional_information"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Rent Vessel - Updated to match form structure
export const rent_vessel = pgTable("rent_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    vessel_condition: text("vessel_condition").notNull(),
    vessel_number: numeric("vessel_number").notNull(),
    rental_duration: numeric("rental_duration").notNull(),
    
    // Delivery details
    delivery_date: text("delivery_date").notNull(), // Changed from date to text
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location").notNull(),
    
    // Required specifications
    required_specifications: text("required_specifications").notNull(),
    
    // Budget
    budget: numeric("budget"),
    
    // Additional information
    additional_information: text("additional_information"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Request for PDA - Already correctly structured
export const request_for_pda = pgTable("request_for_pda", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Port details (nested object)
    port: jsonb("port").notNull(), // { name: string }

    // Vessel details (nested object)
    vessel: jsonb("vessel").notNull(), // { name, imo, type, flag, ship_gross_tonnage, ship_net_tonnage, deadweight, draft, length }

    // Call for purposes
    call_for_commercial: boolean("call_for_commercial").default(false),
    call_for_maintenance: boolean("call_for_maintenance").default(false),
    call_for_other: boolean("call_for_other").default(false),
    other_purpose_details: text("other_purpose_details"),

    // Discharged cargo details
    total_discharged_cargo: numeric("total_discharged_cargo").notNull(),
    discharged_cargo_type: text("discharged_cargo_type"),
    discharged_dangerous_cargo: boolean("discharged_dangerous_cargo").default(false),
    total_days_needed_for_discharging: numeric("total_days_needed_for_discharging").notNull(),

    // Loaded cargo details
    total_loaded_cargo: numeric("total_loaded_cargo").notNull(),
    loaded_cargo_type: text("loaded_cargo_type"),
    loaded_dangerous_cargo: boolean("loaded_dangerous_cargo").default(false),
    total_days_needed_for_loading: numeric("total_days_needed_for_loading").notNull(),

    // Timing details
    eta_expected_date: text("eta_expected_date"),
    total_expected_berthing_days: numeric("total_expected_berthing_days").notNull(),
    total_expected_anchor_days: numeric("total_expected_anchor_days").notNull(),

    // Services (nested object structure)
    services: jsonb("services").notNull().default({}), // { bunkering: {...}, chandlery: {...}, crew: {...}, cargo: {...}, other: {...} }

    // Additional information
    additional_information: text("additional_information"),
    supporting_files: text("supporting_files"),

    // Company details (nested object)
    company_details: jsonb("company_details").notNull(), // { company_name, contact_person_name, title, country_of_origin, company_email, additional_email, phone_number, additional_phone_number }

    quotation_number: text("quotation_number"),
});

// Sign On/Off Crew Members - Already correctly structured
export const sign_crew_members = pgTable("sign_crew_members", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Port details (nested object)
    port: jsonb("port").notNull(), // { name: string }
    
    // Vessel details (nested object)
    vessel: jsonb("vessel").notNull(), // { name, imo, location, flag, port_of_crew_change, eta, etd }
    
    // Crew details (nested object)
    crew: jsonb("crew").notNull(), // { on, off, sign_on_members: [...], sign_off_members: [...], special_requests_on, special_requests_off, special_instructions, supporting_files }
    
    // Company details (nested object)
    company_details: jsonb("company_details").notNull(), // { company_name, contact_person_name, title, country_of_origin, company_email, additional_email, phone_number, additional_phone_number }

    quotation_number: text("quotation_number"),
});

// Transit Spare Parts - Already correctly structured
export const transit_spare_parts = pgTable("transfer_spare_parts", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Port details (nested object)
    port: jsonb("port").notNull(), // { name: string }
    
    // Vessel details (nested object)
    vessel: jsonb("vessel").notNull(), // { name, imo, type, flag, ship_gross_tonnage, ship_net_tonnage, deadweight, draft, length, location, port_of_crew_change, eta, etd, airport_pickup, special_requests, supporting_files }
    
    // Spare parts array
    spare_parts: jsonb("spare_parts").default([]), // Array of spare part objects
    
    // Company details (nested object)
    company_details: jsonb("company_details").notNull(), // { company_name, contact_person_name, title, country_of_origin, company_email, additional_email, phone_number, additional_phone_number }

    quotation_number: text("quotation_number"),
});

// Special Services - Already correctly structured
export const special_services = pgTable("special_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details (nested object)
    vessel: jsonb("vessel").notNull(), // { name, imo, port_name, flag, eta, etd, location }
    
    // Service details
    requested_services: text("requested_services").notNull(),
    supporting_files: jsonb("supporting_files").default([]), // Array of files
    
    // Company details (nested object)
    company_details: jsonb("company_details").notNull(), // { company_name, contact_person_name, title, country_of_origin, company_email, additional_email, phone_number, additional_phone_number }

    quotation_number: text("quotation_number"),
});

// Bunkering Oil Supply - Already correctly structured
export const bunkering_oil_supply = pgTable("bunkering_oil_supply", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details (nested object)
    vessel: jsonb("vessel").notNull(), // { name, imo, port_name, flag, eta, etd, location, expected_delivery_date }
    
    // Services (nested object structure)
    services: jsonb("services").notNull().default({}), // { bunkering: {...}, lubricant_oil: {...}, ship_chandlery: {...} }
    
    // Additional information
    additional_information: text("additional_information"),
    supporting_files: jsonb("supporting_files").default([]), // Array of files
    
    // Company details (nested object)
    company_details: jsonb("company_details").notNull(), // { company_name, contact_person_name, title, country_of_origin, company_email, additional_email, phone_number, additional_phone_number }

    quotation_number: text("quotation_number"),
});

// Suez Canal Transit - Already correctly structured
export const suez_canal_transit = pgTable("suez_canal_transit", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Date
    date: text("date").notNull(),
    
    // Vessel details (nested object)
    vessel: jsonb("vessel").notNull(), // { name, imo, flag, type, grt, scgt, nrt, scnt, loa, beam, draft, dwt, status, floating_units, passed_canal_before, last_passage_date }
    
    // Cargo details (nested object)
    cargo: jsonb("cargo").notNull(), // { commodity, quantity, total_cargo, cargo_unit, gas_free_ammonia, military_navy_cargo, additional_details, manifest }
    
    // Unit carriage details (nested object)
    unit_carriage: jsonb("unit_carriage").default({}), // { large_units, unit_size, floating_units_carried, container_tiers }
    
    // Transit details (nested object)
    transit: jsonb("transit").notNull(), // { eta, direction, round_trip, origin_port, gulf_caribbean, destination_port }
    
    // Additional services (nested object)
    additional_services: jsonb("additional_services").default({}), // { tug_assistance, crew_change, bunkering, freshwater, spare_parts, other, other_details }
    
    // Additional information
    additional_notes: text("additional_notes"),
    supporting_files: jsonb("supporting_files").default([]), // Array of files
    
    // Company details (nested object)
    company_details: jsonb("company_details").notNull(), // { company_name, contact_person_name, title, country_of_origin, company_email, additional_email, phone_number, additional_phone_number }

    quotation_number: text("quotation_number"),
});

// Ship Management - Updated to match form structure
export const ship_management = pgTable("ship_management", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel: jsonb("vessel").notNull(), // Contains name, imo, flag, type, grt, nrt, loa, dwt, current_port, owner_company
    
    // Services
    services: jsonb("services").notNull(), // Contains all service checkboxes and other_details
    
    // Vessel condition
    vessel_condition: jsonb("vessel_condition").notNull(), // Contains is_operational, current_condition
    
    // Contract duration
    contract_duration: jsonb("contract_duration").notNull(), // Contains duration_type, start_date
    
    // Additional information
    additional_information: text("additional_information"),
    supporting_files: jsonb("supporting_files").default({}), // Contains file uploads and requirements
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Sell Container - Updated to match form structure
export const sell_container = pgTable("sell_container", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Container details
    container_type: text("container_type").notNull(),
    container_number: numeric("container_number").notNull(),
    container_condition: text("container_condition").notNull(), // new, one-trip, used
    
    // Date and location
    date: text("date").notNull(), // Changed from date to text
    pick_up_location: text("pick_up_location").notNull(),
    drop_off_location: text("drop_off_location").notNull(),
    detailed_location: text("detailed_location"),
    
    // Rental details
    rental_duration: numeric("rental_duration").notNull(),
    duration_unit: text("duration_unit").notNull(), // days, weeks, months
    
    // Budget and additional info
    budget: numeric("budget"),
    additional_information: text("additional_information"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Sell Vessel - Updated to match form structure
export const sell_vessel = pgTable("sell_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    
    // Date and location
    date: text("date").notNull(), // Changed from date to text
    pick_up_location: text("pick_up_location").notNull(),
    drop_off_location: text("drop_off_location").notNull(),
    detailed_location: text("detailed_location"),
    
    // Trading and specifications
    trading_area: text("trading_area"),
    required_specification: text("required_specification").notNull(),
    
    // Rental details
    rental_duration: numeric("rental_duration").notNull(),
    duration_unit: text("duration_unit").notNull(), // days, weeks, months
    
    // Budget and additional info
    budget: numeric("budget"),
    additional_information: text("additional_information"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Ocean Freight Quotation - Updated to match form structure
export const ocean_freight_quotation = pgTable("ocean_freight_quotation", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(), // Array of from/to country and port combinations
    
    // Entry mode
    entry_mode: text("entry_mode").notNull(), // itemized or consolidated
    
    // Itemized data (if entry_mode is itemized)
    itemized_data: jsonb("itemized_data").default([]), // Array of commodity details
    
    // Consolidated data (if entry_mode is consolidated)
    consolidated_data: jsonb("consolidated_data").default({}), // Consolidated commodity information
    
    // Supporting files
    supporting_files: text("supporting_files"),
    
    // Additional information
    additional_information: text("additional_information"),

    // Dates
    effective_date: text("effective_date").notNull(), // Changed from date to text
    expiry_date: text("expiry_date").notNull(), // Changed from date to text
    
    // Service contract
    service_contract_number: text("service_contract_number"),
    
    // Additional services
    additional_services: jsonb("additional_services").default({}), // Contains all service checkboxes and other_details
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// Container Services - Updated to match form structure
export const container_services_table = pgTable("container_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details (array of routing objects)
    routing: jsonb("routing").notNull(),
    
    // Cargo specifications (array of cargo specification objects)
    cargo_specifications: jsonb("cargo_specifications").notNull().default([]),
    
    // Commodities (array of commodity objects)
    commodities: jsonb("commodities").notNull().default([]),
    
    // Dates
    effective_date: text("effective_date"), // Changed from date to text
    expiry_date: text("expiry_date"), // Changed from date to text
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Additional services (object with boolean flags and text fields)
    additional_services: jsonb("additional_services").default({}),
    
    // Supporting files (object with boolean flags and file arrays)
    supporting_files: jsonb("supporting_files").default({}),
    
    // VAD (Value Added Details) - object with inland container info
    vad: jsonb("vad").default({}),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
});

// MISSING TABLES - Adding them now

// Customs Clearance - Added to match form structure
export const customs_clearance = pgTable("customs_clearance", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Basic Information
    clearance_type: text("clearance_type").notNull(),
    port_airport: text("port_airport"),
    origin_port: text("origin_port"),
    destination_port: text("destination_port"),
    expected_date: text("expected_date").notNull(),
    
    // Commodity Details
    commodity: text("commodity").notNull(),
    commodity_description: text("commodity_description").notNull(),
    hs_code: text("hs_code").notNull(),
    is_dangerous: boolean("is_dangerous").default(false),
    un_number_class: text("un_number_class"),
    shipment_mode: text("shipment_mode").notNull(),
    container_type: text("container_type"),
    container_size: text("container_size"),
    number_of_containers: numeric("number_of_containers"),
    total_weight: numeric("total_weight").notNull(),
    weight_unit: text("weight_unit").default("kg"),
    total_volume: numeric("total_volume"),
    number_of_trucks: numeric("number_of_trucks"),
    country_of_origin: text("country_of_origin").notNull(),
    final_destination: text("final_destination").notNull(),
    
    // Additional services and files
    additional_services: text("additional_services"),
    supporting_files: jsonb("supporting_files").default([]),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Roll On/Off - Added to match form structure
export const roll_on_off = pgTable("roll_on_off", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // Dates
    effective_date: text("effective_date").notNull(), // Changed from date to text
    expiry_date: text("expiry_date").notNull(), // Changed from date to text
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Value-added service
    value_added_service: text("value_added_service"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Heavy Lift - Added to match form structure
export const heavy_lift = pgTable("heavy_lift", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // Dates
    effective_date: text("effective_date").notNull(), // Changed from date to text
    expiry_date: text("expiry_date").notNull(), // Changed from date to text
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Value-added service
    value_added_service: text("value_added_service"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Investor Form - Updated to match form field names
export const investor_form = pgTable("investor_form", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().references(() => users_table.id), // Made nullable
    
    // Personal/Company Information - Updated to match form
    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    title: text("title").notNull(),
    organization_name: text("organization_name"),
    email: text("email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    
    // Investment Interest - Updated to match form
    accredited: text("accredited"),
    qualified: text("qualified"),
    check_size: text("check_size"),
    average_check_size: text("average_check_size"),
    
    quotation_number: text("quotation_number"),
});

// Out of Gauge - Added to match form structure
export const out_of_gauge = pgTable("out_of_gauge", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // File and additional info
    file: text("file"),
    additional_information: text("additional_information"),
    
    // Dates
    effective_date: text("effective_date").notNull(), // Changed from date to text
    expiry_date: text("expiry_date").notNull(), // Changed from date to text
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Value-added services
    value_added_services: text("value_added_services"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Livestock Transportation - Added to match form structure
export const livestock_transportation = pgTable("livestock_transportation", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),

    // Livestock details
    livestock_details: jsonb("livestock_details").notNull(),

    // Special handling
    special_handling: text("special_handling"),

    // Supporting files
    supporting_files: jsonb("supporting_files"),
    
    // Insurance
    insurance: jsonb("insurance").notNull(),
    
    // Additional services
    additional_services: jsonb("additional_services").notNull(),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Tankers Quotation - Added to match form structure
export const tankers_quotation = pgTable("tankers_quotation", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),
    
    // Cargo details
    cargo_details: jsonb("cargo_details").notNull(),
    
    // Vessel specifications
    vessel_specs: jsonb("vessel_specs").notNull(),
    
    // Supporting files
    supporting_files: jsonb("supporting_files"),
    
    // Cargo lifting points
    cargo_lifting_points: boolean("cargo_lifting_points").default(false),
    
    // Additional information
    additional_information: text("additional_information"),
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Safety compliance
    safety_compliance: jsonb("safety_compliance").notNull(),
    
    // Marine insurance
    marine_insurance: jsonb("marine_insurance").notNull(),
    
    // Additional services
    additional_services: jsonb("additional_services").notNull(),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Project Cargo Services - Added to match form structure
export const project_cargo_services = pgTable("project_cargo_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Value-added service
    value_added_service: text("value_added_service"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Ship Maintenance - Added to match form structure
export const ship_maintenance = pgTable("ship_maintenance", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel: jsonb("vessel").notNull(),
    
    // Required services
    required_services: jsonb("required_services").notNull(),
    
    // Dry docking repairs
    dry_docking_repairs: jsonb("dry_docking_repairs").notNull(),
    
    // Mechanical services
    mechanical_services: jsonb("mechanical_services").notNull(),
    
    // Additional details
    requested_services_details: text("requested_services_details"),
    supporting_files: text("supporting_files"),
    additional_information: text("additional_information"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// International Trading - Added to match form structure
export const international_trading = pgTable("international_trading", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Transportation details
    transportation: jsonb("transportation").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Value-added service
    value_added_service: text("value_added_service"),
    
    // Company details - Updated to nested object
    company_details: jsonb("company_details").notNull(),
    
    quotation_number: text("quotation_number"),
});

// Additional tables that may be needed based on the forms
// Add any missing tables here as needed
