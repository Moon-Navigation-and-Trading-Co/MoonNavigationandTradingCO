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

    additional_information: text("additional_information"), // Additional details

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
});

// Inland Services
export const InternationalInlandServicesTable = pgTable("international_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    routing: jsonb("routing").notNull(), // From location

    date: date("date").notNull(), // Date of the service
    additional_information: text("additional_information"), // Additional details

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

    additional_information: text("additional_information"), // Additional details

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

})

export const request_for_pda = pgTable("request_for_pda", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    //port details
    port_name: text("port_name").notNull(),

    // vessel details
    vessel_name: text("vessel_name").notNull(),
    vessel_imo: numeric("vessel_imo").notNull(),
    vessel_type: text("vessel_type").notNull(),
    flag: text("flag"),
    vessel_length: numeric("vessel_length").notNull(),
    eta: date("eta").notNull(),
    ship_gross_tonnage: text("ship_gross_tonnage").notNull(),
    ship_net_tonnage: text("ship_net_tonnage").notNull(),
    ship_dead_weight: text("ship_dead_weight").notNull(),
    ship_draft: text("ship_draft").notNull(),
    call_for_commercial: boolean("call_for_commercial").default(false),
    call_for_maintenane: boolean("call_for_maintenance").default(false),
    total_discharged_cargo: numeric("total_discharged_cargo").notNull(),
    total_loaded_cargo: numeric("total_loaded_cargo").notNull(),
    total_expected_berthing_days: numeric("total_expected_berthing_days").notNull(),
    total_waiting_anchor: numeric("total_waiting_anchor").notNull(),

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

})

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
    commoditiy_details: text("commoditiy_details").notNull(), length: numeric("length").notNull(),                // Length of the goods
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
    organization_name: text("organization_name").notNull(),
    phone_number: text("phone_number").notNull(),
    check_size: text("check_size").notNull(),
    accredited: boolean("accredited").default(false),
    qualified: boolean("qualified").default(false)

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

});
