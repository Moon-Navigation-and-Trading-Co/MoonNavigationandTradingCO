import nodemailer from 'nodemailer';


// Create HTML email template for form submissions
const createFormEmailTemplate = (formData: any, formType: string) => {
  const formatData = (data: any, prefix = ''): string => {
    if (!data) return '';
    if (typeof data === 'object') {
      return Object.entries(data)
        .map(([key, value]) => {
          if (value && typeof value === 'object') {
            return formatData(value, `${prefix}${key}_`);
          }
          return value ? `<p><strong>${prefix}${key.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}:</strong> ${value}</p>` : '';
        })
        .join('');
    }
    return data ? `<p><strong>${prefix}:</strong> ${data}</p>` : '';
  };

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; border-left: 4px solid #0d9488;">
        <h2 style="color: #0d9488; margin-bottom: 20px; font-size: 24px;">
          New Form Submission - ${formType.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
        </h2>
        
        <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 15px; font-size: 18px;">Form Details:</h3>
          ${formatData(formData)}
        </div>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; font-size: 14px; color: #6b7280;">
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Form Type:</strong> ${formType}</p>
        </div>
      </div>
    </div>
  `;
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
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return new Response(JSON.stringify({ 
        error: 'Email service not configured. Please contact administrator.' 
      }), { status: 503 });
    }

    // Create transporter for Gmail
    const createTransporter = () => {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
    };

    const transporter = createTransporter();

    // Send the email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: recipientEmails || ['ahmedassem04@gmail.com'],
      subject: `New Form Submission - ${formType.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}`,
      html: createFormEmailTemplate(formData, formType),
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: info.messageId 
    }), { status: 200 });

  } catch (error: any) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to send email' 
    }), { status: 500 });
  }
} 