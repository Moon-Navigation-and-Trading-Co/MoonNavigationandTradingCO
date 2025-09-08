import { boolean, timestamp, pgSchema, pgTable, text, numeric, uuid, date, jsonb } from "drizzle-orm/pg-core";

// Since `auth` schema and `auth.users` table already exist, you can directly reference them
const authUsers = pgSchema("auth").table("users", {
    id: uuid("id").primaryKey().notNull(),
});

// Define the Users table where the primary key `id` references `auth.users.id`
export const usersTable = pgTable("users", {
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
export const airFreightServicesTable = pgTable("air_freight_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table

    // Foreign key referencing the users table
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id
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
export const localInlandServicesTable = pgTable("local_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

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
export const InternationalInlandServicesTable = pgTable("international_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

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
export const containerInlandServicesTable = pgTable("container_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),
    // Value-added (VAD) details
    inland_container: text("inland_container"), // Value-added inland container service

    // Service contract details
    service_contract: text("service_contract"), // Container contract details

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

//Contact Requests
export const contactRequestsTable = pgTable("ContactRequests", {
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
export const lessThanContainerLoad = pgTable("less_than_container_load", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

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
export const standardContainer = pgTable("standard_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

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
export const oversizedContainer = pgTable("oversized_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

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
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),

});

export const hss = pgTable("handling_stevedoring_storage", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    location: jsonb("location").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),

})


export const buy_container = pgTable("buy_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id


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
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id


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
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),
    quotation_number: text("quotation_number"),

})

export const buy_vessel = pgTable("buy_vessel", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id


    // Container Type
    container_type: text("container_type").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Number of containers
    container_number: numeric("container_number").notNull(),


    // Pick up details
    delivery_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location").notNull(),

    // Required Specifications
    required_specifications: text("required_specifications").notNull(),

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

export const rent_vessel = pgTable("rent_vessel", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id


    // Container Type
    container_type: text("container_type").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Number of containers
    container_number: numeric("container_number").notNull(),

    rental_duration: numeric("rental_duration").notNull(),

    // Pick up details
    delivery_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location").notNull(),

    // Required Specifications
    required_specifications: text("required_specifications").notNull(),

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

export const request_for_pda = pgTable("request_for_pda", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => usersTable.id),

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
    eta_expected_date: text("eta_expected_date"),
    total_expected_berthing_days: numeric("total_expected_berthing_days").notNull(),
    total_expected_anchor_days: numeric("total_expected_anchor_days").notNull(),

    // Bunkering services
    bunkering_mgo: boolean("bunkering_mgo").default(false),
    bunkering_mgo_details: text("bunkering_mgo_details"),
    bunkering_vlsfo: boolean("bunkering_vlsfo").default(false),
    bunkering_vlsfo_details: text("bunkering_vlsfo_details"),
    bunkering_hfo: boolean("bunkering_hfo").default(false),
    bunkering_hfo_details: text("bunkering_hfo_details"),
    bunkering_other: boolean("bunkering_other").default(false),
    bunkering_other_details: text("bunkering_other_details"),
    bunkering_details: text("bunkering_details"),

    // Chandlery services
    chandlery_fresh_dry_provisions: boolean("chandlery_fresh_dry_provisions").default(false),
    chandlery_fresh_dry_provisions_details: text("chandlery_fresh_dry_provisions_details"),
    chandlery_spare_parts_tools: boolean("chandlery_spare_parts_tools").default(false),
    chandlery_spare_parts_tools_details: text("chandlery_spare_parts_tools_details"),
    chandlery_deck_engine_stores: boolean("chandlery_deck_engine_stores").default(false),
    chandlery_deck_engine_stores_details: text("chandlery_deck_engine_stores_details"),
    chandlery_details: text("chandlery_details"),

    // Crew services
    crew_change_assistance: boolean("crew_change_assistance").default(false),
    crew_change_assistance_details: text("crew_change_assistance_details"),
    crew_transport_accommodation: boolean("crew_transport_accommodation").default(false),
    crew_transport_accommodation_details: text("crew_transport_accommodation_details"),
    crew_medical_assistance: boolean("crew_medical_assistance").default(false),
    crew_medical_assistance_details: text("crew_medical_assistance_details"),
    crew_other: boolean("crew_other").default(false),
    crew_other_details: text("crew_other_details"),
    crew_details: text("crew_details"),

    // Cargo services
    cargo_stevedoring: boolean("cargo_stevedoring").default(false),
    cargo_stevedoring_details: text("cargo_stevedoring_details"),
    cargo_surveys: boolean("cargo_surveys").default(false),
    cargo_surveys_details: text("cargo_surveys_details"),
    cargo_lashing_securing: boolean("cargo_lashing_securing").default(false),
    cargo_lashing_securing_details: text("cargo_lashing_securing_details"),
    cargo_other: boolean("cargo_other").default(false),
    cargo_other_details: text("cargo_other_details"),
    cargo_details: text("cargo_details"),

    // Other services
    other_waste_disposal: boolean("other_waste_disposal").default(false),
    other_waste_disposal_details: text("other_waste_disposal_details"),
    other_fresh_water: boolean("other_fresh_water").default(false),
    other_fresh_water_details: text("other_fresh_water_details"),
    other_services_other: boolean("other_services_other").default(false),
    other_services_other_details: text("other_services_other_details"),
    other_services_details: text("other_services_details"),

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
})

export const sign_crew_members = pgTable("sign_crew_members", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),

    // Port Details
    port_name: text("port_name").notNull(),
    at_anchor: boolean("at_anchor").default(false),
    at_berth: boolean("at_berth").default(false),

    // Sign on off
    sign_on: boolean("sign_on").default(false),
    sign_off: boolean("sign_off").default(false),
    crew_nationalities_sign_on: jsonb("crew_nationalities_sign_on").notNull(), // Stores an array of crew members
    hotel_sign_on: boolean("hotel_sign_on").default(false),
    hotel_special_req_sign_on: text("hotel_special_req_sign_on"),
    transport_sign_on: boolean("transport_sign_on").default(false),
    transport_special_req_sign_on: text("transport_special_req_sign_on"),
    crew_nationalities_sign_off: jsonb("crew_nationalities_sign_off").notNull(), // Stores an array of crew members
    hotel_sign_off: boolean("hotel_sign_off").default(false),
    hotel_special_req_sign_off: text("hotel_special_req_sign_off"),
    transport_sign_off: boolean("transport_sign_off").default(false),
    transport_special_req_sign_off: text("transport_special_req_sign_off"),

    // Company Details
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

export const transit_spare_parts = pgTable("transfer_spare_parts", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),

    // Port Details
    port_name: text("port_name").notNull(),
    at_anchor: boolean("at_anchor").default(false),
    at_berth: boolean("at_berth").default(false),
    special_request: text("special_request"),

    // Company Details
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

export const special_services = pgTable("special_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),

    // Port Details
    port_name: text("port_name").notNull(),
    at_anchor: boolean("at_anchor").default(false),
    at_berth: boolean("at_berth").default(false),
    special_request: text("special_request"),

    // Company Details
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

// Bunkering Oil Supply
export const bunkering_oil_supply = pgTable("bunkering_oil_supply", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => usersTable.id),

    vessel_name: text("vessel_name").notNull(),
    vessel_imo: text("vessel_imo").notNull(),
    port_name: text("port_name").notNull(),
    flag: text("flag").notNull(),
    eta: text("eta").notNull(),
    etd: text("etd").notNull(),
    location: text("location").notNull(),
    expected_delivery_date: text("expected_delivery_date").notNull(),
    bunkering_services: text("bunkering_services").notNull(),
    lubricant_oil_services: text("lubricant_oil_services").notNull(),
    ship_chandlery_services: text("ship_chandlery_services").notNull(),
    additional_information: text("additional_information"),

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

export const international_trading = pgTable("international_trading", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // from
    from: text("from").notNull(),
    to: text("to").notNull(),
    incoterm: text("incoterm").notNull(),

    type: text("type").notNull(),
    quantity: numeric("quantity").notNull(),
    length: numeric("length").notNull(),
    width: numeric("width").notNull(),
    height: numeric("height").notNull(),
    weight: numeric("weight").notNull(),
    file: text("file"), // File field, allowing various file types
    additional_information: text("additional_information"),

    // Shipping Method
    shipping_method: text("shipping_method").notNull(),
    shipping_details: text("shipping_details").notNull(),

    // Company Details
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

export const ship_maintenance = pgTable("ship_maintenance", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Request
    request: text("request").notNull(),

    // Company Details
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
// Ship Management
export const ship_management = pgTable("ship_management", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Request
    request: text("request").notNull(),

    // Company Details
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


// Ocean Freight
export const project_cargo_services = pgTable("project_cargo_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(), // From location

    // Commodity details
    commodity_type: text("commodity_type").notNull(), // Type
    dangerous: boolean("dangerous").default(true),     // Dangerous goods
    commoditiy_details: text("commoditiy_details"),     // Commodity details
    length: numeric("length").notNull(),                // Length of the goods
    width: numeric("width").notNull(),                  // Width of the goods
    height: numeric("height").notNull(),                // Height of the goods
    weight: numeric("weight").notNull(),                // Weight of the goods
    file: text("file"),                      // Optional file upload
    additional_information: text("additional_information"), // Additional details

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),

    // Service Contract
    service_contract: numeric("service_contract"),

    // VAD
    value_added_service: text("value_added_service"), // Value-added inland container service   

    // Company Details
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

// Ocean Freight
export const roll_on_off = pgTable("roll_on_off", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(), // From location

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),

    // Service Contract
    service_contract: numeric("service_contract"),

    // VAD
    value_added_service: text("value_added_service"), // Value-added inland container service   

    // Company Details
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

// Ocean Freight
export const heavy_lift = pgTable("heavy_lift", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(), // From location

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),

    // Service Contract
    service_contract: numeric("service_contract"),

    // VAD
    value_added_service: text("value_added_service"), // Value-added inland container service   

    // Company Details
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

// Ocean Freight
export const dangerous_cargo_services = pgTable("dangerous_cargo_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(), // From location

    // Commodity details
    commodities: jsonb("commodities").notNull(),

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),

    // Service Contract
    service_contract: numeric("service_contract"),

    // VAD
    value_added_service: text("value_added_service"), // Value-added inland container service   

    // Company Details
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

// Inverstor Form

export const investor_form = pgTable("investor_form", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    first_name: text("first_name").notNull(),
    last_name: text("last_name").notNull(),
    title: text("title").notNull(),
    email: text("email").notNull(),
    additional_email: text("additional_email").notNull(),
    organization_name: text("organization_name").notNull(),
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number").notNull(),
    check_size: text("check_size").notNull(),
    average_check_size: numeric("average_check_size").notNull(),
    accredited: text("accredited").notNull(),
    qualified: text("qualified").notNull(),
    quotation_number: text("quotation_number"),

})

export const OutofGauge = pgTable("out_of_gauge", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Commodity details
    commodities: jsonb("commodities").notNull(),

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
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    additional_email: text("additional_email"),      // Additional email address
    phone_number: text("phone_number").notNull(),
    additional_phone_number: text("additional_phone_number"),              // Company phone number
    quotation_number: text("quotation_number"),

});

// Suez Canal Transit
export const suezCanalTransitTable = pgTable("suez_canal_transit", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => usersTable.id),
    date: text("date").notNull(),
    vessel: jsonb("vessel").notNull(),
    cargo: jsonb("cargo").notNull(),
    unit_carriage: jsonb("unit_carriage").notNull(),
    transit: jsonb("transit").notNull(),
    additional_services: jsonb("additional_services").notNull(),
    additional_notes: text("additional_notes"),
    company_details: jsonb("company_details").notNull(),
    quotation_number: text("quotation_number"),
});

// Ocean Freight Quotations
export const oceanFreightQuotationsTable = pgTable("ocean_freight_quotations", {
    id: uuid().primaryKey().defaultRandom(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
    user_id: uuid().notNull().references(() => usersTable.id),

    // Form type
    form_type: text("form_type").notNull(),

    // Routing details
    routing: jsonb("routing").notNull(),

    // Entry mode and cargo details
    entry_mode: text("entry_mode").notNull(), // "itemized" or "consolidated"
    itemized_data: jsonb("itemized_data"), // JSON array for itemized cargo
    consolidated_data: jsonb("consolidated_data"), // JSON object for consolidated cargo

    // Supporting files
    supporting_files: text("supporting_files"),

    // Additional information
    additional_information: text("additional_information"),

    // Dates
    effective_date: date("effective_date").notNull(),
    expiry_date: date("expiry_date").notNull(),
    service_contract_number: text("service_contract_number"),

    // Additional services
    additional_services: jsonb("additional_services").notNull(),

    // Company details (nested structure)
    company_details: jsonb("company_details").notNull(),
    quotation_number: text("quotation_number"),

});

// Livestock Transportation
export const livestockTransportationTable = pgTable("livestock_transportation", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),

    // Livestock details
    livestock_details: jsonb("livestock_details").notNull(), // JSON array for livestock entries

    // Special handling requirements
    special_handling: text("special_handling"),

    // Supporting files
    supporting_files: jsonb("supporting_files"),
    cargo_lifting_points: boolean("cargo_lifting_points").default(false),

    // Additional information
    additional_information: text("additional_information"),

    // Service contract
    service_contract: text("service_contract"),

    // Transport modes
    transport_modes: jsonb("transport_modes").notNull(),

    // Additional services
    additional_services: jsonb("additional_services").notNull(),

    // Insurance
    insurance: jsonb("insurance").notNull(),

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

// Tankers Quotation
export const tankersQuotationTable = pgTable("tankers_quotation", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    routing: jsonb("routing").notNull(),

    // Dates
    effective_date: text("effective_date").notNull(),
    expiry_date: text("expiry_date").notNull(),

    // Cargo details
    cargo_details: jsonb("cargo_details").notNull(), // JSON object for cargo information

    // Vessel specifications
    vessel_specs: jsonb("vessel_specs").notNull(), // JSON object for vessel specifications

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
});

// Quotation Numbers Tracking Table
export const quotationNumbersTable = pgTable("quotation_numbers", {
    id: uuid().primaryKey().defaultRandom(),
    form_type: text("form_type").notNull().unique(),
    current_count: numeric("current_count").notNull().default("0"),
    last_updated: timestamp("last_updated", { withTimezone: true }).defaultNow(),
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
