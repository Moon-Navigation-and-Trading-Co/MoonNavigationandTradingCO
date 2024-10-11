import { boolean, timestamp, pgSchema, pgTable, text, numeric, uuid, date } from "drizzle-orm/pg-core";

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

// Define the Air Freight Services table
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

// Define the Local Inland Services table
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

// Define the Container Inland Services table
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

