CREATE TABLE IF NOT EXISTS "customs_clearance" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"user_id" uuid NOT NULL,
	"clearance_type" text NOT NULL,
	"port_airport" text,
	"origin_port" text,
	"destination_port" text,
	"expected_date" text NOT NULL,
	"commodity" text NOT NULL,
	"is_dangerous" boolean DEFAULT false,
	"un_number_class" text,
	"shipment_mode" text NOT NULL,
	"container_type" text,
	"container_size" text,
	"number_of_containers" numeric,
	"total_weight" numeric NOT NULL,
	"weight_unit" text DEFAULT 'kg',
	"total_volume" numeric,
	"number_of_trucks" numeric,
	"country_of_origin" text NOT NULL,
	"final_destination" text NOT NULL,
	"additional_services" text,
	"supporting_files" jsonb DEFAULT '[]'::jsonb,
	"company_name" text NOT NULL,
	"contact_person" text NOT NULL,
	"title" text NOT NULL,
	"city_country" text NOT NULL,
	"company_email" text NOT NULL,
	"additional_email" text,
	"phone_number" text NOT NULL,
	"additional_phone" text,
	"quotation_number" text
);
--> statement-breakpoint
DROP TABLE "ocean_freight_quotations";--> statement-breakpoint
DROP TABLE "ship_management";--> statement-breakpoint
DROP TABLE "suez_canal_transit";--> statement-breakpoint
ALTER TABLE "investor_form" DROP CONSTRAINT "investor_form_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP CONSTRAINT "project_cargo_services_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ALTER COLUMN "vessel_imo" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ALTER COLUMN "company_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ALTER COLUMN "location" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "roll_on_off" ALTER COLUMN "service_contract" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "special_services" ALTER COLUMN "vessel_imo" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "international_inland_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "out_of_gauge" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "air_freight_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "vessel_flag" text NOT NULL;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "vessel_eta" text NOT NULL;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "vessel_etd" text NOT NULL;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "vessel_location" text NOT NULL;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "services" jsonb DEFAULT '{}'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "supporting_files" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "buy_container" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "vessel_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "vessel_condition" text NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "vessel_number" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "delivery_date" date NOT NULL;--> statement-breakpoint
ALTER TABLE "buy_vessel" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "ContactRequests" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "container_details" jsonb DEFAULT '[]'::jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "supporting_files" jsonb DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "effective_date" date;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "expiry_date" date;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "additional_services" jsonb DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "container_inland_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "full_name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "position_title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "nationality" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "city_country_residence" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "investor_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "investor_type_other" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "investment_range" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "average_check_size" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "preferred_investment_type" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "preferred_investment_type_other" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "areas_of_interest" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "areas_of_interest_other" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "interest_rate_type" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "fixed_interest_rate" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "background_linkedin" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "investment_interest_reason" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "require_nda" text NOT NULL;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "additional_notes" text;--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "heavy_lift" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "import_export" text NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "port_airport" text NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "entry_mode" text NOT NULL;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "itemized_data" jsonb;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "consolidated_data" jsonb;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "handling_stevedoring" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "loading_cargo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "discharging_cargo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "lashing_cargo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "unlashing_cargo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "port_handling_stevedoring" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "cargo_reception_delivery" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "reception_before_shipment" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "reception_after_discharge" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "storage_warehousing" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "temporary_storage" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "additional_services" jsonb DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "supporting_files" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "international_trading" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "less_than_container_load" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "livestock_transportation" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "local_inland_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "oversized_container" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "services" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "vessel_condition" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "project_cargo_services" ADD COLUMN "contract_duration" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_container" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "rent_vessel" ADD COLUMN "vessel_type" text NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_vessel" ADD COLUMN "vessel_condition" text NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_vessel" ADD COLUMN "vessel_number" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_vessel" ADD COLUMN "delivery_date" date NOT NULL;--> statement-breakpoint
ALTER TABLE "rent_vessel" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "vessel_flag" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "deadweight" text NOT NULL;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "draft" text NOT NULL;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "call_for_other" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_purpose_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "discharged_cargo_type" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "discharged_dangerous_cargo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "total_days_needed_for_discharging" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "loaded_cargo_type" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "loaded_dangerous_cargo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "total_days_needed_for_loading" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "eta_expected_date" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "total_expected_anchor_days" numeric NOT NULL;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_mgo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_mgo_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_vlsfo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_vlsfo_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_hfo" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_hfo_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_other" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_other_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "bunkering_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_fresh_dry_provisions" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_fresh_dry_provisions_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_spare_parts_tools" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_spare_parts_tools_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_deck_engine_stores" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_deck_engine_stores_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "chandlery_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_change_assistance" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_change_assistance_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_transport_accommodation" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_transport_accommodation_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_medical_assistance" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_medical_assistance_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_other" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_other_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "crew_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_stevedoring" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_stevedoring_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_surveys" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_surveys_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_lashing_securing" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_lashing_securing_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_other" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_other_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "cargo_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_waste_disposal" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_waste_disposal_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_fresh_water" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_fresh_water_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_services_other" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_services_other_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "other_services_details" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "supporting_files" text;--> statement-breakpoint
ALTER TABLE "request_for_pda" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "roll_on_off" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "vessel" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "required_services" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "dry_docking_repairs" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "mechanical_services" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "requested_services_details" text;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "supporting_files" text;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "additional_information" text;--> statement-breakpoint
ALTER TABLE "ship_maintenance" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "vessel_location" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "vessel_flag" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "port_of_crew_change" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "vessel_eta" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "vessel_etd" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "sign_on_members" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "sign_off_members" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "special_requests_on" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "special_requests_off" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "special_instructions" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "supporting_files" text;--> statement-breakpoint
ALTER TABLE "sign_crew_members" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "vessel_flag" text NOT NULL;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "vessel_eta" text NOT NULL;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "vessel_etd" text NOT NULL;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "vessel_location" text NOT NULL;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "requested_services" text NOT NULL;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "supporting_files" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "special_services" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "standard_container" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "tankers_quotation" ADD COLUMN "quotation_number" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "vessel_location" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "vessel_flag" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "port_of_crew_change" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "vessel_eta" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "vessel_etd" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "airport_pickup" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "special_requests" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "supporting_files" text;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "request" text NOT NULL;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "spare_parts" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" ADD COLUMN "quotation_number" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "customs_clearance" ADD CONSTRAINT "customs_clearance_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "flag";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "eta";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "etd";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "location";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "bunkering_services";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "lubricant_oil_services";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "ship_chandlery_services";--> statement-breakpoint
ALTER TABLE "bunkering_oil_supply" DROP COLUMN IF EXISTS "additional_phone_number";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "container_type";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "container_condition";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "container_number";--> statement-breakpoint
ALTER TABLE "buy_vessel" DROP COLUMN IF EXISTS "pick_up_date";--> statement-breakpoint
ALTER TABLE "container_inland_services" DROP COLUMN IF EXISTS "commodities";--> statement-breakpoint
ALTER TABLE "container_inland_services" DROP COLUMN IF EXISTS "inland_container";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "service_contract";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "value_added_service";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "contact_person_name";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "country_of_origin";--> statement-breakpoint
ALTER TABLE "dangerous_cargo_services" DROP COLUMN IF EXISTS "company_email";--> statement-breakpoint
ALTER TABLE "handling_stevedoring_storage" DROP COLUMN IF EXISTS "commodities";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "first_name";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "last_name";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "email";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "additional_email";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "organization_name";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "additional_phone_number";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "check_size";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "average_check_size";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "accredited";--> statement-breakpoint
ALTER TABLE "investor_form" DROP COLUMN IF EXISTS "qualified";--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "country_of_origin";--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "company_email";--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "additional_email";--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "oversized_container" DROP COLUMN IF EXISTS "additional_phone_number";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "user_id";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "routing";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "commodity_type";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "dangerous";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "commoditiy_details";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "length";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "width";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "height";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "weight";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "file";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "additional_information";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "effective_date";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "expiry_date";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "service_contract";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "value_added_service";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "company_name";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "contact_person_name";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "country_of_origin";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "company_email";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "additional_email";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "project_cargo_services" DROP COLUMN IF EXISTS "additional_phone_number";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "contact_person_name";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "country_of_origin";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "company_email";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "additional_email";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "rent_container" DROP COLUMN IF EXISTS "additional_phone_number";--> statement-breakpoint
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "container_type";--> statement-breakpoint
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "container_condition";--> statement-breakpoint
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "container_number";--> statement-breakpoint
ALTER TABLE "rent_vessel" DROP COLUMN IF EXISTS "pick_up_date";--> statement-breakpoint
ALTER TABLE "request_for_pda" DROP COLUMN IF EXISTS "flag";--> statement-breakpoint
ALTER TABLE "request_for_pda" DROP COLUMN IF EXISTS "eta";--> statement-breakpoint
ALTER TABLE "request_for_pda" DROP COLUMN IF EXISTS "ship_dead_weight";--> statement-breakpoint
ALTER TABLE "request_for_pda" DROP COLUMN IF EXISTS "ship_draft";--> statement-breakpoint
ALTER TABLE "request_for_pda" DROP COLUMN IF EXISTS "total_waiting_anchor";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "request";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "company_name";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "contact_person_name";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "country_of_origin";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "company_email";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "additional_email";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "ship_maintenance" DROP COLUMN IF EXISTS "additional_phone_number";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "at_anchor";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "at_berth";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "crew_nationalities_sign_on";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "hotel_sign_on";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "hotel_special_req_sign_on";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_sign_on";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_special_req_sign_on";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "crew_nationalities_sign_off";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "hotel_sign_off";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "hotel_special_req_sign_off";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_sign_off";--> statement-breakpoint
ALTER TABLE "sign_crew_members" DROP COLUMN IF EXISTS "transport_special_req_sign_off";--> statement-breakpoint
ALTER TABLE "special_services" DROP COLUMN IF EXISTS "at_anchor";--> statement-breakpoint
ALTER TABLE "special_services" DROP COLUMN IF EXISTS "at_berth";--> statement-breakpoint
ALTER TABLE "special_services" DROP COLUMN IF EXISTS "special_request";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "at_anchor";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "at_berth";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "special_request";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "company_name";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "contact_person_name";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "title";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "country_of_origin";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "company_email";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "additional_email";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "transfer_spare_parts" DROP COLUMN IF EXISTS "additional_phone_number";