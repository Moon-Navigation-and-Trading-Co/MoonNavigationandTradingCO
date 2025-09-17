import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import { generate_quotation_number } from '@/utils/quotation/generator';
import { generate_form_email_template, convert_form_data_to_fields, get_form_type_display_name } from "@/utils/email/template-generator";
import { logError } from "@/utils/logError";

// Form type to table name mapping
const FORM_TYPE_TO_TABLE: Record<string, string> = {
  'ocean_freight_quotation': 'ocean_freight_quotation',
  'project_cargo_quotation': 'ocean_freight_quotation',
  'roll_on_off_quotation': 'ocean_freight_quotation',
  'heavy_lift_quotation': 'ocean_freight_quotation',
  'dangerous_cargo_quotation': 'ocean_freight_quotation',
  'break_bulk_quotation': 'ocean_freight_quotation',
  'less_than_container_load_quotation': 'ocean_freight_quotation',
  'livestock_transportation_quotation': 'ocean_freight_quotation',
  'oversized_container_quotation': 'ocean_freight_quotation',
  'transit_spare_parts_quotation': 'ocean_freight_quotation',
  'vessel_purchase_quotation': 'vessel_purchase_quotation',
  'vessel_rental_quotation': 'vessel_rental_quotation',
  'container_purchase_quotation': 'container_purchase_quotation',
  'container_rental_quotation': 'container_rental_quotation',
  'international_trading_quotation': 'international_trading_quotation',
  'inland_services_quotation': 'inland_services_quotation',
  'air_freight_quotation': 'air_freight_quotation',
  'customs_clearance_quotation': 'customs_clearance_quotation',
  'handling_stevedoring_storage_quotation': 'handling_stevedoring_storage_quotation',
  'ship_agency_quotation': 'ship_agency_quotation',
  'ship_management_quotation': 'ship_management_quotation',
  'ship_maintenance_quotation': 'ship_maintenance_quotation',
  'special_services_quotation': 'special_services_quotation',
  'suez_canal_quotation': 'suez_canal_quotation',
  'out_gauge_quotation': 'out_gauge_quotation',
  'request_for_pda_quotation': 'request_for_pda_quotation',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData, formType } = body;

    if (!formData || !formType) {
      return Response.json({ success: false, error: 'Missing required data' }, { status: 400 });
    }

    // Get table name for this form type
    const tableName = FORM_TYPE_TO_TABLE[formType];
    if (!tableName) {
      return Response.json({ success: false, error: `Unknown form type: ${formType}` }, { status: 400 });
    }

    // Generate quotation number (await the async function)
    const quotationNumber = await generate_quotation_number(formType);

    // Flatten the form data for database insertion
    const flattenedData = {
      ...formData,
      quotation_number: quotationNumber,
      form_type: formType,
      entry_mode: formData.entry_mode,
      // Add other common fields as needed
      company_details: formData.company_details || {},
      routing: formData.routing || [],
      commodity_details: formData.commodity_details || [],
      country_of_origin: formData.company_details?.country_of_origin,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Step 1: Send email first (hybrid pattern)
    try {
      // Convert form data to fields for email template
      const fields = convert_form_data_to_fields(formData);
      const formDisplayName = get_form_type_display_name(formType);
      
      const adminEmailTemplate = generate_form_email_template({
        title: `New ${formDisplayName} Request`,
        quotationNumber,
        formType,
        fields,
        additionalInfo: `Reference: ${quotationNumber}`
      });

      const confirmationEmailTemplate = generate_form_email_template({
        title: `Thank You for Your ${formDisplayName} Request`,
        quotationNumber,
        formType,
        fields,
        additionalInfo: `We have received your request and will contact you soon. Reference: ${quotationNumber}`
      });

      // Send admin notification email
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'webmail.cloudsmartly.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'quotation@moon-navigation.com',
        subject: `New ${formDisplayName} Request - ${quotationNumber}`,
        html: adminEmailTemplate,
      });

      // Send confirmation email to customer
      const customerEmail = formData.company_details?.company_email || formData.email || formData.companyEmail;
      if (customerEmail) {
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: customerEmail,
          subject: `Thank You for Your ${formDisplayName} Request - ${quotationNumber}`,
          html: confirmationEmailTemplate,
        });
      }

      console.log("📧 Emails sent successfully");
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);
      logError("Quotation Email failed:", emailError);
      // Continue even if email fails
    }

    // Step 2: Insert into database
    // Create Supabase client with service role key (bypasses RLS)
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    const { data, error } = await supabaseAdmin
      .from(tableName)
      .insert([flattenedData]);

    if (error) {
      console.error("❌ Database error:", error);
      logError("Quotation Database error:", error);
      return Response.json({
        success: false,
        error: "Email sent, but saving to database failed.",
        quotationNumber
      }, { status: 500 });
    }

    console.log("✅ Quotation saved successfully");

    return Response.json({
      success: true,
      quotationNumber,
      message: "Quotation request submitted successfully"
    });

  } catch (error) {
    console.error("❌ API error:", error);
    logError("Quotation API error:", error);
    return Response.json({
      success: false,
      error: "An unexpected error occurred"
    }, { status: 500 });
  }
}
