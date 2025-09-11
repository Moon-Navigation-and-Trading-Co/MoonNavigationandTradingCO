import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import { generate_quotation_number } from '@/utils/quotation/generator';
import { generate_form_email_template, convert_form_data_to_fields, get_form_type_display_name } from "@/utils/email/template-generator";
import { logError } from "@/utils/logError";

// Create Supabase client with service role key (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Form type to table name mapping
const FORM_TYPE_TO_TABLE: Record<string, string> = {
  'ocean_freight_quotation': 'ocean_freight_quotation',
  'project_cargo_quotation': 'ocean_freight_quotation',
  'roll_on_off_quotation': 'ocean_freight_quotation',
  'heavy_lift_quotation': 'ocean_freight_quotation',
  'dangerous_cargo_quotation': 'ocean_freight_quotation',
  'break_bulk_quotation': 'ocean_freight_quotation',
  'livestock_transportation': 'livestock_transportation',
  'tankers_quotation': 'tankers_quotation',
  'air_freight': 'air_freight_services',
  'inland_freight': 'local_inland_services',
  'international_trading': 'international_trading_services',
  'ship_agency': 'ship_agency_services',
  'suez_canal_transit': 'suez_canal_transit',
  'handling_stevedoring_storage': 'handling_stevedoring_storage',
  'customs_clearance': 'customs_clearance_services',
  'container_services': 'container_services_table',
  'roll_on_off': 'roll_on_off_services',
  'special_services': 'special_services_table',
  'ship_management': 'ship_management',
  'docking_maintenance': 'docking_maintenance',
  'buy_rent_containers': 'buy_rent_containers',
  'buy_rent_vessels': 'buy_rent_vessels',
  'out_gauge': 'out_gauge_services',
  'investor_form': 'investor_form',
  'schedule_meeting': 'schedule_meeting',
  'contact_form': 'ContactRequests'
};

// Create HTML email template for form submissions
const createFormEmailTemplate = (formData: any, formType: string) => {
  const fields = convert_form_data_to_fields(formData);
  
  return generate_form_email_template({
    title: `New ${formType.replace(/_/g, " ").replace(/([A-Z])/g, " $1").trim().replace(/\b\w/g, (l: string) => l.toUpperCase())} Request - Moon Navigation and Trading Co.`,
    formType: get_form_type_display_name(formType),
    fields,
    additionalInfo: "We will contact you as soon as possible!"
  });
};

// Create confirmation email template for form submitters
const createConfirmationEmailTemplate = (formData: any, formType: string, referenceNumber: string) => {
  const getCustomerName = (): string => {
    if (formData.company_details?.contact_person_name) return formData.company_details.contact_person_name;
    if (formData.companyDetails?.contactPersonName) return formData.companyDetails.contactPersonName;
    if (formData.contactPersonName) return formData.contactPersonName;
    if (formData.name) return formData.name;
    if (formData.firstName) return formData.firstName;
    return 'Valued Customer';
  };

  const customerName = getCustomerName();
  const formDisplayName = formType.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, (l: string) => l.toUpperCase());

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Thank You - Form Submission Confirmation</title></head><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f0f9ff"><div style="max-width:600px;margin:0 auto;padding:12px"><div style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:white;padding:20px;border-radius:8px;text-align:center;margin-bottom:12px"><div style="width:50px;height:50px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:20px">✅</div><h1 style="margin:0;font-size:20px">Thank You, ${customerName}!</h1><p style="margin:6px 0 0 0;font-size:13px;opacity:0.9">Your form has been successfully submitted</p><div style="background:rgba(255,255,255,0.2);padding:6px 12px;border-radius:12px;display:inline-block;margin-top:10px;font-size:11px;font-weight:500">📋 ${formDisplayName}</div></div><div style="background:white;padding:16px;border-radius:8px;border:1px solid #e2e8f0"><div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:16px;border-radius:6px;border:1px solid #0ea5e9;margin-bottom:16px;text-align:center"><h3 style="color:#0c4a6e;font-size:16px;margin:0 0 8px 0">🎉 Submission Confirmed</h3><p style="color:#0369a1;font-size:12px;margin:0 0 8px 0">We have received your ${formDisplayName.toLowerCase()} and our team will review it shortly.</p><div style="background:white;padding:8px;border-radius:4px;margin-top:8px"><strong style="color:#1e40af">Reference Number: ${referenceNumber}</strong></div></div><div style="margin-bottom:16px"><h3 style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:white;padding:8px;margin:0;font-size:13px;border-radius:6px">📞 What Happens Next?</h3><div style="padding:12px 0"><div style="margin-bottom:8px;color:#374151;font-size:12px">✅ Our team will review your submission within 24 hours</div><div style="margin-bottom:8px;color:#374151;font-size:12px">✅ We will contact you via email or phone with a detailed quotation</div><div style="margin-bottom:8px;color:#374151;font-size:12px">✅ You can reference this submission using: <strong>${referenceNumber}</strong></div></div></div><div style="margin-bottom:16px"><h3 style="background:linear-gradient(135deg,#0ea5e9,#38bdf8);color:white;padding:8px;margin:0;font-size:13px;border-radius:6px">📞 Contact Information</h3><div style="padding:12px 0;color:#374151;font-size:12px"><div style="margin-bottom:6px"><strong>Email:</strong> quotation@moon-navigation.com</div><div style="margin-bottom:6px"><strong>Alternative Email:</strong> quotes@moon-navigation.com</div><div style="margin-bottom:6px"><strong>Phone:</strong> Available upon request</div><div><strong>Website:</strong> www.moon-navigation.com</div></div></div><div style="text-align:center;padding:16px 0;border-top:1px solid #e2e8f0;margin-top:16px"><p style="color:#6b7280;font-size:11px;margin:0">Thank you for choosing Moon Navigation and Trading Co.</p><p style="color:#9ca3af;font-size:10px;margin:4px 0 0 0">This is an automated confirmation. Please do not reply to this email.</p></div></div></div></body></html>`;
};

export async function POST(request: Request) {
  try {
    const { formData, formType, userId } = await request.json();

    if (!formData || !formType) {
      return Response.json({ success: false, error: 'Missing required data' }, { status: 400 });
    }

    // Generate quotation number
    const quotationNumber = await generate_quotation_number(formType);

    // Get table name for this form type
    const tableName = FORM_TYPE_TO_TABLE[formType];
    if (!tableName) {
      return Response.json({ success: false, error: `Unknown form type: ${formType}` }, { status: 400 });
    }

    // Flatten form data for database insertion - map to actual database columns
    const flattenedData = {
      user_id: userId || null,
      quotation_number: quotationNumber,
      // Map form data to actual database columns
      routing: formData.routing,
      entry_mode: formData.entry_mode,
      itemized_data: formData.itemized_data ? JSON.stringify(formData.itemized_data) : null,
      consolidated_data: formData.consolidated_data ? JSON.stringify(formData.consolidated_data) : null,
      supporting_files: formData.supporting_files ? JSON.stringify(formData.supporting_files) : null,
      additional_information: formData.additional_information,
      effective_date: formData.effective_date,
      expiry_date: formData.expiry_date,
      service_contract_number: formData.service_contract_number,
      additional_services: formData.additional_services,
      // Company details mapping
      company_name: formData.company_details?.company_name,
      contact_person_name: formData.company_details?.contact_person_name,
      title: formData.company_details?.title,
      country_of_origin: formData.company_details?.country_of_origin,
      company_email: formData.company_details?.company_email,
      additional_email: formData.company_details?.additional_email,
      phone_number: formData.company_details?.phone_number,
      additional_phone_number: formData.company_details?.additional_phone_number,
    };

    // Step 1: Send email first (hybrid pattern)
    try {
      const adminEmailTemplate = createFormEmailTemplate(formData, formType);
      const confirmationEmailTemplate = createConfirmationEmailTemplate(formData, formType, quotationNumber);

      // Send admin notification email
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'quotation@moon-navigation.com',
        subject: `New ${formType.replace(/_/g, " ").replace(/([A-Z])/g, " $1").trim().replace(/\b\w/g, (l: string) => l.toUpperCase())} Request - ${quotationNumber}`,
        html: adminEmailTemplate,
      });

      // Send confirmation email to customer
      const customerEmail = formData.company_details?.company_email || formData.email || formData.companyEmail;
      if (customerEmail) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: customerEmail,
          subject: `Thank You for Your ${formType.replace(/_/g, " ").replace(/([A-Z])/g, " $1").trim().replace(/\b\w/g, (l: string) => l.toUpperCase())} Request - ${quotationNumber}`,
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
    const { data, error } = await supabaseAdmin
      .from(tableName)
      .insert([flattenedData]);

    if (error) {
      console.error("❌ Database error:", error);
      logError("Quotation DB insert failed:", error);
      return Response.json({ 
        success: false, 
        error: "Email sent, but saving to database failed.",
        emailSent: true 
      }, { status: 500 });
    }

    console.log("✅ Database insert successful");

    return Response.json({ 
      success: true, 
      quotationNumber,
      message: "Form submitted successfully" 
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