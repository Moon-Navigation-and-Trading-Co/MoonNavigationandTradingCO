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

// Air Services
export const air_freight_services_table = pgTable("air_freight_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table

    // Foreign key referencing the users table
    user_id: uuid().notNull().references(() => users_table.id), // References user.id
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone

    // Routing details
    routing: jsonb("routing").notNull(), // From location

    // Ready to load date
    ready_to_load: date("ready_to_load").notNull(),

    // Transportation details
    transportation_method: text("transportation_method").notNull(), // Enum-like with values 'standard' or 'uld'

    // Commodity details
    commodities: jsonb("commodities").notNull(), // From location

    additional_information: text("additional_information"), // Additional details


    // Recommended actions
    import: boolean("import_service").default(false),
    export: boolean("export_service").default(false),

    // VAD details
    value_added_service: text("value_added_service"),

    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    country_of_origin: text("country_of_origin").notNull(),
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),

});

// Inland Services
export const local_inland_services_table = pgTable("local_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    date: date("date").notNull(), // Date of the service
    // VAD (Value Added Services) details
    inland_container: boolean("inland_container").default(false), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),
});

// Inland Services
export const international_inland_services_table = pgTable("international_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id

    routing: jsonb("routing").notNull(), // From location

    date: date("date").notNull(), // Date of the service

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    // VAD (Value Added Services) details
    inland_container: boolean("inland_container").default(false), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),
});

// Inland Services
// Container Inland Services - Updated to match current form
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
    effective_date: date("effective_date"),
    expiry_date: date("expiry_date"),
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Additional services
    additional_services: jsonb("additional_services").default({}),
    
    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    country_of_origin: text("country_of_origin").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),});
//Contact Requests
export const contact_requests_table = pgTable("contact_requests", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    // Contact details
    title: text("title"),
    name: text("name").notNull(), // Name of the contact
    company_name: text("company_name").notNull(), // Company name of the contact
    email: text("email").notNull(), // Email of the contact
    number: text("number").notNull(), // Phone number of the contact
    message: text("message").notNull(), // Message from the contact
    quotation_number: text("quotation_number"),
});

// Container Services
export const less_than_container_load = pgTable("less_than_container_load", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    type_of_commodity: text("type_of_commodity").notNull(), // Type
    gross_volume: numeric("gross_volume").notNull(),
    cargo_weight: numeric("cargo_weight").notNull(),
    package_type: text("package_type").notNull(),
    validity: text("validity").notNull(),

    // Recommedned Services
    import_service: boolean("import_service").default(false),
    export_service: boolean("export_service").default(false),
    additional_information: text("additional_information"), // Additional details

    // Value-added (VAD) details
    vad: text("vad"), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),

});

// Container Services
export const standard_container = pgTable("standard_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    file: text("file"),
    additional_information: text("additional_information"), // Additional details

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),

    // Service Contract
    service_contract: text("service_contract"),

    // Value-added (VAD) details
    value_added_services: text("value_added_services"), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),

});

// Container Services
export const oversized_container = pgTable("oversized_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    shipment_type: text("shipment_type").notNull(),

    // Recommedned Services
    file: text("file"),
    additional_information: text("additional_information"), // Additional details

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),

    // Service Contract
    service_contract: text("service_contract"),

    // Value-added (VAD) details
    value_added_services: text("value_added_services"), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),export const hss = pgTable("handling_stevedoring_storage", {
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


export const buy_container = pgTable("buy_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id


    // Container Type
    container_type: text("container_type").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Number of containers
    container_number: numeric("container_number").notNull(),


    // Pick up details
    pick_up_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),

    // Budget
    budget: numeric("budget"),

    // Additional information
    additional_information: text("additional_information"),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
})

export const rent_container = pgTable("rent_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => users_table.id), // References user.id


    // Container Type
    container_type: text("container_type").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Number of containers
    container_number: numeric("container_number").notNull(),

    rental_duration: numeric("rental_duration").notNull(),

    // Pick up details
    pick_up_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    drop_off_location: text("drop_off_location").notNull(),
    detailed_location: text("detailed_location"),

    // Budget
    budget: numeric("budget"),

    // Additional information
    additional_information: text("additional_information"),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),export const buy_vessel = pgTable("buy_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    vessel_condition: text("vessel_condition").notNull(),
    vessel_number: numeric("vessel_number").notNull(),
    
    // Delivery details
    delivery_date: date("delivery_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location").notNull(),
    
    // Required specifications
    required_specifications: text("required_specifications").notNull(),
    
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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),export const rent_vessel = pgTable("rent_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    vessel_condition: text("vessel_condition").notNull(),
    vessel_number: numeric("vessel_number").notNull(),
    rental_duration: numeric("rental_duration").notNull(),
    
    // Delivery details
    delivery_date: date("delivery_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location").notNull(),
    
    // Required specifications
    required_specifications: text("required_specifications").notNull(),
    
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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),})

export const request_for_pda = pgTable("request_for_pda", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
    // Port details
    port_name: text("port_name").notNull(),

    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),
    vessel_type: text("vessel_type").notNull(),
    vessel_flag: text("vessel_flag"),
    ship_gross_tonnage: text("ship_gross_tonnage").notNull(),
    ship_net_tonnage: text("ship_net_tonnage").notNull(),
    deadweight: text("deadweight").notNull(),
    draft: text("draft").notNull(),
    vessel_length: numeric("vessel_length").notNull(),

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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),    total_expected_berthing_days: numeric("total_expected_berthing_days").notNull(),
    total_expected_anchor_days: numeric("total_expected_anchor_days").notNull(),

    // Bunkering services
    bunkering_mgo: boolean("bunkering_mgo").default(false),
    bunkering_mgo_details: text("bunkering_mgo_details"),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
    // Chandlery services
    chandlery_fresh_dry_provisions: boolean("chandlery_fresh_dry_provisions").default(false),
    chandlery_fresh_dry_provisions_details: text("chandlery_fresh_dry_provisions_details"),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
    // Additional information
    additional_information: text("additional_information"),
    supporting_files: text("supporting_files"),

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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),export const sign_crew_members = pgTable("sign_crew_members", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Port details
    port_name: text("port_name").notNull(),
    
    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),
    vessel_location: text("vessel_location"), // 'at_anchor', 'at_berth', 'suez_canal_passage'
    vessel_flag: text("vessel_flag"),
    port_of_crew_change: text("port_of_crew_change"),
    vessel_eta: text("vessel_eta"),
    vessel_etd: text("vessel_etd"),
    
    // Sign On/Off flags
    sign_on: boolean("sign_on").default(false),
    sign_off: boolean("sign_off").default(false),
    
    // Sign On crew members (JSON array)
    sign_on_members: jsonb("sign_on_members").default([]),
    
    // Sign Off crew members (JSON array)  
    sign_off_members: jsonb("sign_off_members").default([]),
    
    // Special requests and instructions
    special_requests_on: text("special_requests_on"),
    special_requests_off: text("special_requests_off"),
    special_instructions: text("special_instructions"),
    supporting_files: text("supporting_files"),
    
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

    quotation_number: text("quotation_number"),
});export const transit_spare_parts = pgTable("transfer_spare_parts", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Port details
    port_name: text("port_name").notNull(),
    
    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),
    vessel_location: text("vessel_location"), // 'at_anchor', 'at_berth', 'suez_canal_passage'
    vessel_flag: text("vessel_flag"),
    port_of_crew_change: text("port_of_crew_change"),
    vessel_eta: text("vessel_eta"),
    vessel_etd: text("vessel_etd"),
    airport_pickup: text("airport_pickup"),
    special_requests: text("special_requests"),
    supporting_files: text("supporting_files"),
    request: text("request").notNull(),
    
    // Spare parts array (JSON)
    spare_parts: jsonb("spare_parts").default([]),
    
    // Company details

    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: text("vessel_imo").notNull(),
    port_name: text("port_name").notNull(),
    vessel_flag: text("vessel_flag").notNull(),
    vessel_eta: text("vessel_eta").notNull(),
    vessel_etd: text("vessel_etd").notNull(),
    vessel_location: text("vessel_location").notNull(),
    
    // Service details
    requested_services: text("requested_services").notNull(),
    supporting_files: jsonb("supporting_files").default([]),
    
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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
// Bunkering Oil Supply - Updated to match current form
export const bunkering_oil_supply = pgTable("bunkering_oil_supply", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: text("vessel_imo"),
    port_name: text("port_name").notNull(),
    vessel_flag: text("vessel_flag").notNull(),
    vessel_eta: text("vessel_eta").notNull(),
    vessel_etd: text("vessel_etd").notNull(),
    vessel_location: text("vessel_location").notNull(),
    expected_delivery_date: text("expected_delivery_date").notNull(),
    
    // Services (JSON structure)
    services: jsonb("services").notNull().default({}),
    
    // Additional information
    additional_information: text("additional_information"),
    supporting_files: jsonb("supporting_files").default([]),
    
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
});

// International Trading - Updated to match current form
export const international_trading = pgTable("international_trading", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Trading details
    from: text("from").notNull(),
    to: text("to").notNull(),
    incoterm: text("incoterm").notNull(),
    
    // Cargo details
    type: text("type").notNull(),
    quantity: numeric("quantity").notNull(),
    length: numeric("length").notNull(),
    width: numeric("width").notNull(),
    height: numeric("height").notNull(),
    weight: numeric("weight").notNull(),
    file: text("file"),
    additional_information: text("additional_information"),
    
    // Shipping method
    shipping_method: text("shipping_method").notNull(),
    shipping_details: text("shipping_details").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
// Ocean Freight
export const project_cargo_services = pgTable("project_cargo_services", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Services
    services: jsonb("services").notNull(),
    
    // Vessel condition
    vessel_condition: jsonb("vessel_condition").notNull(),
    
    // Contract duration
    contract_duration: jsonb("contract_duration").notNull(),
    
    // Additional information
    additional_information: text("additional_information"),
    supporting_files: jsonb("supporting_files").default([]),
    
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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
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
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
// Customs Clearance Solutions - New table to match current form
export const customs_clearance = pgTable("customs_clearance", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Clearance details
    clearance_type: text("clearance_type").notNull(), // import, export, transit, re-export
    port_airport: text("port_airport"),
    origin_port: text("origin_port"),
    destination_port: text("destination_port"),
    expected_date: text("expected_date").notNull(),
    
    // Commodity details
    commodity: text("commodity").notNull(),
    is_dangerous: boolean("is_dangerous").default(false),
    un_number_class: text("un_number_class"),
    
    // Shipment details
    shipment_mode: text("shipment_mode").notNull(), // sea, air, inland
    container_type: text("container_type"), // fcl, lcl, non-containerized
    container_size: text("container_size"),
    number_of_containers: numeric("number_of_containers"),
    total_weight: numeric("total_weight").notNull(),
    weight_unit: text("weight_unit").default("kg"),
    total_volume: numeric("total_volume"),
    number_of_trucks: numeric("number_of_trucks"),
    
    // Location details
    country_of_origin: text("country_of_origin").notNull(),
    final_destination: text("final_destination").notNull(),
    
    // Additional services
    additional_services: text("additional_services"),
    supporting_files: jsonb("supporting_files").default([]),
    
    // Company details
    company_name: text("company_name").notNull(),
    contact_person: text("contact_person").notNull(),
    title: text("title").notNull(),
    city_country: text("city_country").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
// Roll On/Off - Updated to match current form
export const roll_on_off = pgTable("roll_on_off", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),    title: text("title").notNull(),
    country_of_origin: text("country_of_origin").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),
// Heavy Lift - Updated to match current form
export const heavy_lift = pgTable("heavy_lift", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Routing details
    routing: jsonb("routing").notNull(),
    
    // Commodity details
    commodities: jsonb("commodities").notNull(),
    
    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Value-added service
    value_added_service: text("value_added_service"),
    
    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    country_of_origin: text("country_of_origin").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),});

// Investor Form
export const investor_form = pgTable("investor_form", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Personal/Company Information
    full_name: text("full_name").notNull(),
    company_name: text("company_name"),
    position_title: text("position_title").notNull(),
    nationality: text("nationality").notNull(),
    email: text("email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    city_country_residence: text("city_country_residence").notNull(),
    
    // Investment Interest
    investor_type: text("investor_type").notNull(),
    investor_type_other: text("investor_type_other"),
    investment_range: text("investment_range").notNull(),
    average_check_size: text("average_check_size"),
    preferred_investment_type: jsonb("preferred_investment_type").notNull(),
    preferred_investment_type_other: text("preferred_investment_type_other"),
    
    // Area of Interest
    areas_of_interest: jsonb("areas_of_interest").notNull(),
    areas_of_interest_other: text("areas_of_interest_other"),
    
    // Preferred Interest Rate
    interest_rate_type: text("interest_rate_type"),
    fixed_interest_rate: text("fixed_interest_rate"),
    
    // Background & Intent
    background_linkedin: text("background_linkedin"),
    investment_interest_reason: text("investment_interest_reason"),
    require_nda: text("require_nda").notNull(),
    
    // Additional Notes
    additional_notes: text("additional_notes"),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),    // Additional information
    additional_information: text("additional_information"),
    
    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),});

// Livestock Transportation
export const livestock_transportation_table = pgTable("livestock_transportation", {
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

    // Special handling requirements
    special_handling: text("special_handling"),

    // Supporting files
    supporting_files: jsonb("supporting_files"),
    
    // Insurance
    insurance: jsonb("insurance").notNull(),
    
    // Additional services
    additional_services: jsonb("additional_services").notNull(),
    
    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    city_country: text("city_country").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone: text("additional_phone"),
    quotation_number: text("quotation_number"),
});

// Tankers Quotation - Updated to match current form
export const tankers_quotation_table = pgTable("tankers_quotation", {
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
    cargo_lifting_points: boolean("cargo_lifting_points").default(false),
    
    // Additional information
    additional_information: text("additional_information"),
    
    // Service contract
    service_contract: text("service_contract"),
    
    // Safety & compliance
    safety_compliance: jsonb("safety_compliance").notNull(),
    
    // Marine insurance
    marine_insurance: jsonb("marine_insurance").notNull(),
    
    // Additional services
    additional_services: jsonb("additional_services").notNull(),
    
    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    city_country: text("city_country").notNull(),
    company_email: text("company_email").notNull(),
    additional_email: text("additional_email"),
    phone_number: text("phone_number").notNull(),
    additional_phone: text("additional_phone"),
    quotation_number: text("quotation_number"),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),});

// Sell Vessel - New table to match current form
export const sell_vessel = pgTable("sell_vessel", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => users_table.id),
    
    // Vessel details
    vessel_type: text("vessel_type").notNull(),
    
    // Date and location
    date: date("date").notNull(),
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
});

// Ocean Freight Quotation - New table to match current form
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
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),
    
    // Service contract
    service_contract_number: text("service_contract_number"),
    
    // Additional services
    additional_services: jsonb("additional_services").default({}), // Contains all service checkboxes and other_details
    
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
});