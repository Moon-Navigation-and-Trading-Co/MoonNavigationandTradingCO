import { boolean, timestamp, pgSchema, pgTable, text, numeric, uuid, date, jsonb } from "drizzle-orm/pg-core";
import { Weight } from "lucide-react";

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
    from: text("from").notNull(),
    to: text("to").notNull(),

    // Service details
    service_mode: text("service_mode").notNull(), // Enum-like with values 'cy' or 'sd'
    service_from: text("service_from").notNull(),
    service_to: text("service_to").notNull(),

    // Transportation details
    transportation_method: text("transportation_method").notNull(), // Enum-like with values 'standard' or 'uld'

    // Commodity details
    temperature: boolean("temperature").default(false),
    dangerous: boolean("dangerous").default(false),
    length: numeric("length").notNull(),
    width: numeric("width").notNull(),
    height: numeric("height").notNull(),
    weight: numeric("weight").notNull(),
    file: text("file"), // File field, allowing various file types
    additional_information: text("additional_information"),

    // Recommended actions
    import: boolean("import_service").default(false),
    export: boolean("export_service").default(false),

    // VAD details
    inland_container: boolean("value_added_service").default(false),

    // Company details
    company_name: text("company_name").notNull(),
    contact_person_name: text("contact_person_name").notNull(),
    title: text("title").notNull(),
    country_of_origin: text("country_of_origin").notNull(),
    company_email: text("company_email").notNull(),
    phone: text("phone").notNull(),
});

// Inland Services
export const localInlandServicesTable = pgTable("local_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location
    date: date("date").notNull(), // Date of the service

    // Commodity details
    temperature: boolean("temperature").default(false), // Temperature-sensitive shipment
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
    oversized: boolean("oversized").default(false),     // Oversized goods
    length: numeric("length").notNull(),                // Length of the goods
    width: numeric("width").notNull(),                  // Width of the goods
    height: numeric("height").notNull(),                // Height of the goods
    weight: numeric("weight").notNull(),                // Weight of the goods
    file: text("file"),                      // Optional file upload
    additional_information: text("additional_information"), // Additional details

    // VAD (Value Added Services) details
    inland_container: boolean("inland_container").default(false), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone: text("phone").notNull(),                            // Company phone number
});

// Inland Services
export const InternationalInlandServicesTable = pgTable("international_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location
    date: date("date").notNull(), // Date of the service

    // Commodity details
    temperature: boolean("temperature").default(false), // Temperature-sensitive shipment
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
    oversized: boolean("oversized").default(false),     // Oversized goods
    length: numeric("length").notNull(),                // Length of the goods
    width: numeric("width").notNull(),                  // Width of the goods
    height: numeric("height").notNull(),                // Height of the goods
    weight: numeric("weight").notNull(),                // Weight of the goods
    file: text("file"),                      // Optional file upload
    additional_information: text("additional_information"), // Additional details

    // VAD (Value Added Services) details
    inland_container: boolean("inland_container").default(false), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone: text("phone").notNull(),                            // Company phone number
});

// Inland Services
export const containerInlandServicesTable = pgTable("container_inland_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location
    date: date("date").notNull(), // Date of the service

    // Commodity details
    temperature: boolean("temperature").default(false), // Temperature-sensitive shipment
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
    oversized: boolean("oversized").default(false),     // Oversized goods
    file: text("file"),                      // Optional file upload
    additional_information: text("additional_information"), // Additional details

    // Value-added (VAD) details
    inland_container: boolean("inland_container").default(false), // Value-added inland container service

    // Service contract details
    container: text("container"), // Container contract details

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),              // Company phone number

    // Container details
    container_type: text("container_type").notNull(),          // Container type (e.g., dry, refrigerated)
    container_number: numeric("container_number").notNull(),   // Number of containers
    container_weight: numeric("container_weight").notNull(),   // Container weight
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
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location
    pick_up: boolean("pick_up").default(false),
    delivery: boolean("delivery").default(false),
    location_information: text("location_information"),


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
    vad: boolean("vad").default(false), // Value-added inland container service

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),              // Company phone number

});

// Container Services
export const standardContainer = pgTable("standard_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location

    service_mode: text("service_mode").notNull(), // Enum-like with values 'cy' or 'sd'
    service_from: text("service_from").notNull(),
    service_to: text("service_to").notNull(),

    // Commodity details
    temperature: boolean("temperature").default(false), // Temperature-sensitive shipment
    dangerous: boolean("dangerous").default(false),     // Dangerous goods

    // Container details
    container_type: text("container_type").notNull(),          // Container type (e.g., dry, refrigerated)
    container_number: numeric("container_number").notNull(),   // Number of containers
    container_weight: numeric("container_weight").notNull(),   // Container weight
    own_container: boolean("own_container"),
    import_return_or_triangulation: boolean("import_return_or_triangulation"),

    // Recommedned Services
    import_service: boolean("import_service").default(false),
    export_service: boolean("export_service").default(false),
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
    phone_number: text("phone_number").notNull(),              // Company phone number

});

// Container Services
export const oversizedContainer = pgTable("oversized_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location

    // Service Mode
    service_mode: text("service_mode").notNull(), // Enum-like with values 'cy' or 'sd'
    service_from: text("service_from").notNull(),
    service_to: text("service_to").notNull(),

    // Cargo details
    dangerous: boolean("dangerous").default(false),          // Container type (e.g., dry, refrigerated)
    container_type: text("container_type").notNull(),
    container_number: numeric("container_number").notNull(),   // Number of containers
    container_weight: numeric("container_weight").notNull(),   // Container weight
    own_container: boolean("own_container"),
    import_return_or_triangulation: boolean("import_return_or_triangulation"),

    // cargo dimensions if oversized
    length: numeric("length").notNull(),
    width: numeric("width").notNull(),
    height: numeric("height").notNull(),
    weight: numeric("weight").notNull(),

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
    phone_number: text("phone_number").notNull(),              // Company phone number

});

export const hss = pgTable("handling_stevedoring_storage", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id
    location: text("location").notNull(), // Enum-like with values 'cy' or 'sd'
    detailed: text("detailed").notNull(),

    // Cargo details
    dangerous: boolean("dangerous").default(false),
    oversized: boolean("oversized").default(false),
    temperature: boolean("temperature").default(false),
    container_type: text("container_type").notNull(),
    container_number: numeric("container_number").notNull(),   // Number of containers
    container_weight: numeric("container_weight").notNull(),   // Container weight

    // cargo dimensions if oversized
    length: numeric("length").notNull(),
    width: numeric("width").notNull(),
    height: numeric("height").notNull(),
    weight: numeric("weight").notNull(),

    // Recommedned Services
    file: text("file"),
    additional_information: text("additional_information"), // Additional details

    // Handling/Stevedoring Requirements
    handling: boolean("handling").default(false),
    loading: boolean("loading").default(false),
    discharging: boolean("discharging").default(false),
    lashing: boolean("lashing").default(false),
    unlashing: boolean("unlashing").default(false),
    safekeeping_before: boolean("safekeeping_before").default(false),
    safekeeping_after: boolean("safekeeping_after").default(false),
    temporary_storage: boolean("temporary_storage").default(false),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

})


export const buy_container = pgTable("buy_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Pick up details
    pick_up_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),

    // Budget
    budget: numeric("budget"),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),
})

export const rent_container = pgTable("rent_container", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Container Details
    container_type: text("container_type").notNull(),
    container_size: text("container_size").notNull(),
    number_of_containers: numeric("number_of_containers").notNull(),

    // Rental Duration
    rental_duration: text("rental_duration").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Pick up details
    pick_up_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location"),

    // Budget
    budget: numeric("budget"),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

})

export const buy_vessel = pgTable("buy_vessel", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Container Details
    vessel_type: text("vessel_type").notNull(),
    vessel_size: text("vessel_size").notNull(),
    number_of_containers: numeric("number_of_vessels").notNull(),
    new: boolean("new").default(false),
    one_trip: boolean("one_trip").default(false),
    used: boolean("used").default(false),

    // Rental Duration
    delivery_date: date("delivery_date").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Pick up details
    pick_up_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location"),

    // Required Specifications
    required_specifications: text("required_specifications").notNull(),

    // Budget
    budget: numeric("budget"),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

    // Additional Services/Amenities
    additional_services: text("additional_services")

})

export const rent_vessel = pgTable("rent_vessel", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Container Details
    vassal_type: text("vessel_type").notNull(),
    vassal_size: text("vessel_size").notNull(),
    number_of_vessels: numeric("number_of_vessels").notNull(),

    // Rental Duration
    rental_duration: text("rental_duration").notNull(),

    // Container Condition
    container_condition: text("container_condition").notNull(),

    // Delivery Date
    delivery_date: date("delivery_date").notNull(),

    // Pick up details
    pick_up_date: date("pick_up_date").notNull(),
    pick_up_location: text("pick_up_location").notNull(),
    detailed_location: text("detailed_location"),

    // Required Specifications
    required_specifications: text("required_specifications").notNull(),

    // Budget
    budget: numeric("budget"),

    // Company details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

    // Additional Services/Amenities
    additional_services: text("additional_services")

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
    eta: text("eta").notNull(),
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
    phone_number: text("phone_number").notNull(),

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
    phone_number: text("phone_number").notNull(),

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
    phone_number: text("phone_number").notNull(),

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
    phone_number: text("phone_number").notNull(),

})

export const international_trading = pgTable("international_trading", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

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
    sea: boolean("sea").default(false),
    land: boolean("land").default(false),
    air: boolean("air").default(false),
    more_decleration: text("more_decleration").notNull(),

    // Company Details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),


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
    phone_number: text("phone_number").notNull(),

})

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
    phone_number: text("phone_number").notNull(),

})


// Ocean Freight
export const project_cargo_services = pgTable("project_cargo_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location

    // Commodity details
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
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
    vad: boolean("vad").default(false), // Value-added inland container service   

    // Company Details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

})

// Ocean Freight
export const roll_on_off = pgTable("roll_on_off", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location

    // Commodity details
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
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
    vad: boolean("vad").default(false), // Value-added inland container service   

    // Company Details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

})

// Ocean Freight
export const heavy_lift = pgTable("heavy_lift", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location

    // Commodity details
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
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
    vad: boolean("vad").default(false), // Value-added inland container service   

    // Company Details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

})

// Ocean Freight
export const dangerous_cargo_services = pgTable("dangerous_cargo_services", {
    id: uuid().primaryKey().defaultRandom(), // Unique random ID for each entry in the table
    created_at: timestamp("created_at", { withTimezone: true }).defaultNow(), // Timestamp with timezone
    user_id: uuid().notNull().references(() => usersTable.id), // References user.id

    // Routing details
    from: text("from").notNull(), // From location
    to: text("to").notNull(),     // To location

    // Commodity details
    dangerous: boolean("dangerous").default(false),     // Dangerous goods
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
    vad: boolean("vad").default(false), // Value-added inland container service   

    // Company Details
    company_name: text("company_name").notNull(),              // Company name
    contact_person_name: text("contact_person_name").notNull(), // Contact person name
    title: text("title").notNull(),                            // Contact person title
    country_of_origin: text("country_of_origin").notNull(),    // Country of origin
    company_email: text("company_email").notNull(),            // Company email address
    phone_number: text("phone_number").notNull(),

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
