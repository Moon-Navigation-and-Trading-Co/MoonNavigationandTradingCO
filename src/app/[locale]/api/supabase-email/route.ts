import nodemailer from 'nodemailer';

import { generateFormEmailTemplate, convertFormDataToFields, getFormTypeDisplayName } from "@/utils/email/template-generator";

// Create HTML email template for form submissions using the new generator
const createFormEmailTemplate = (formData: any, formType: string) => {
  const fields = convertFormDataToFields(formData);
  
  return generateFormEmailTemplate({
    title: `New ${formType.replace(/_/g, " ").replace(/([A-Z])/g, " $1").trim().replace(/\b\w/g, (l: string) => l.toUpperCase())} Request - Moon Navigation and Trading Co.`,
    formType: getFormTypeDisplayName(formType),
    fields,
    additionalInfo: "We will contact you as soon as possible!"
  });
};
// Create confirmation email template for form submitters
const createConfirmationEmailTemplate = (formData: any, formType: string, referenceNumber: string) => {
  const getCustomerName = (): string => {
    // Try different possible name fields across form types
    if (formData.company_details?.contact_person_name) return formData.company_details.contact_person_name;
    if (formData.companyDetails?.contactPersonName) return formData.companyDetails.contactPersonName;
    if (formData.contactPersonName) return formData.contactPersonName;
    if (formData.name) return formData.name;
    if (formData.firstName) return formData.firstName;
    return 'Valued Customer';
  };

  const customerName = getCustomerName();
  const formDisplayName = formType.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, (l: string) => l.toUpperCase());

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Thank You - Form Submission Confirmation</title></head><body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f0f9ff"><div style="max-width:600px;margin:0 auto;padding:12px"><div style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:white;padding:20px;border-radius:8px;text-align:center;margin-bottom:12px"><div style="width:50px;height:50px;background:rgba(255,255,255,0.2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:20px">✅</div><h1 style="margin:0;font-size:20px">Thank You, ${customerName}!</h1><p style="margin:6px 0 0 0;font-size:13px;opacity:0.9">Your form has been successfully submitted</p><div style="background:rgba(255,255,255,0.2);padding:6px 12px;border-radius:12px;display:inline-block;margin-top:10px;font-size:11px;font-weight:500">📋 ${formDisplayName}</div></div><div style="background:white;padding:16px;border-radius:8px;border:1px solid #e2e8f0"><div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:16px;border-radius:6px;border:1px solid #0ea5e9;margin-bottom:16px;text-align:center"><h3 style="color:#0c4a6e;font-size:16px;margin:0 0 8px 0">🎉 Submission Confirmed</h3><p style="color:#0369a1;font-size:12px;margin:0 0 8px 0">We have received your ${formDisplayName.toLowerCase()} and our team will review it shortly.</p><div style="background:white;padding:8px;border-radius:4px;margin-top:8px"><strong style="color:#1e40af">Reference Number: ${referenceNumber}</strong></div></div><div style="margin-bottom:16px"><h3 style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:white;padding:8px;margin:0;font-size:13px;border-radius:6px">📞 What Happens Next?</h3><div style="padding:12px 0"><div style="margin-bottom:8px;color:#374151;font-size:12px">✅ Our team will review your submission within 24 hours</div><div style="margin-bottom:8px;color:#374151;font-size:12px">✅ We will contact you via email or phone with a detailed quotation</div><div style="margin-bottom:8px;color:#374151;font-size:12px">✅ You can reference this submission using: <strong>${referenceNumber}</strong></div></div></div><div style="margin-bottom:16px"><h3 style="background:linear-gradient(135deg,#0ea5e9,#38bdf8);color:white;padding:8px;margin:0;font-size:13px;border-radius:6px">📞 Contact Information</h3><div style="padding:12px 0;color:#374151;font-size:12px"><div style="margin-bottom:6px"><strong>Email:</strong> quotation@moon-navigation.com</div><div style="margin-bottom:6px"><strong>Alternative Email:</strong> quotes@moon-navigation.com</div><div style="margin-bottom:6px"><strong>Phone:</strong> Available upon request</div><div><strong>Website:</strong> www.moon-navigation.com</div></div></div><div style="background:#f0f9ff;padding:12px;border-radius:6px;border:1px solid #0ea5e9;text-align:center"><div style="color:#0369a1;font-size:11px"><strong>Submitted:</strong> ${new Date().toLocaleString()}</div><div style="color:#0369a1;font-size:11px;margin-top:4px"><strong>Reference:</strong> ${referenceNumber}</div></div></div><div style="text-align:center;margin-top:12px;color:#64748b;font-size:9px"><p style="margin:0 0 3px 0">Thank you for choosing Moon Navigation and Trading Co.</p><p style="margin:0">© 2024 Moon Navigation and Trading Co. All rights reserved.</p></div></div></body></html>`;
};

// Extract customer email from form data
const extractCustomerEmail = (formData: any): string | null => {
  // Try different possible email fields across form types
  if (formData.company_details?.company_email) return formData.company_details.company_email;
  if (formData.companyDetails?.companyEmail) return formData.companyDetails.companyEmail;
  if (formData.companyDetails?.email) return formData.companyDetails.email;
  if (formData.company_email) return formData.company_email;
  if (formData.email) return formData.email;
  if (formData.companyEmail) return formData.companyEmail;
  return null;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formData, formType, recipientEmails } = body;

    if (!formData || !formType) {
      return new Response(JSON.stringify({ 
        error: 'Missing required fields: formData and formType' 
      }), { status: 400 });
    }

    // Check if email service is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return new Response(JSON.stringify({ 
        error: 'Email service not configured. Please contact administrator.' 
      }), { status: 503 });
    }

    // Create transporter for CloudSmartly email server
    const createTransporter = () => {
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'webmail.cloudsmartly.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: true, // SSL for port 465
        auth: {
          user: process.env.SMTP_USER || 'quotation@moon-navigation.com',
          pass: process.env.SMTP_PASSWORD,
        },
      });
    };

    const transporter = createTransporter();

    // Generate reference number
    const referenceNumber = `MN-${Date.now().toString().slice(-8)}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;

    // Send notification email to company
    const notificationMailOptions = {
      from: process.env.SMTP_USER || 'quotation@moon-navigation.com',
      to: recipientEmails || ['quotation@moon-navigation.com', 'quotes@moon-navigation.com'],
      subject: `New Form Submission - ${formType.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim().replace(/\b\w/g, (l: string) => l.toUpperCase())} - Ref: ${referenceNumber}`,
      html: createFormEmailTemplate(formData, formType),
    };

    await transporter.sendMail(notificationMailOptions);

    // Extract customer email and send confirmation
    const customerEmail = extractCustomerEmail(formData);
    if (customerEmail) {
      const confirmationMailOptions = {
        from: process.env.SMTP_USER || 'quotation@moon-navigation.com',
        to: customerEmail,
        subject: `Thank You - Form Submission Confirmed - Ref: ${referenceNumber}`,
        html: createConfirmationEmailTemplate(formData, formType, referenceNumber),
      };

      try {
        await transporter.sendMail(confirmationMailOptions);
        console.log(`Confirmation email sent to: ${customerEmail}`);
      } catch (confirmationError) {
        console.error('Confirmation email failed:', confirmationError);
        // Don't fail the main request if confirmation email fails
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      referenceNumber,
      confirmationEmailSent: !!customerEmail
    }), { status: 200 });

  } catch (error: any) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to send email' 
    }), { status: 500 });
  }
} 