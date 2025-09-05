import nodemailer from 'nodemailer';
import { generateQuotationNumber } from '@/utils/quotation/generator';
import { generateFormEmailTemplate, convertFormDataToFields } from '@/utils/email/template-generator';

// Create transporter for CloudSmartly email server
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'webmail.cloudsmartly.com',
        port: parseInt(process.env.SMTP_PORT || '465'),
        secure: true, // SSL for port 465
        auth: {
            // Use the main SMTP user for authentication (quotation@moon-navigation.com)
            // This is the account that has SMTP access
            user: process.env.SMTP_USER || 'quotation@moon-navigation.com',
            pass: process.env.SMTP_PASSWORD,
        },
    });
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { 
            company_name, 
            contact_person_name, 
            title, 
            company_email, 
            additional_email, 
            phone_number, 
            additional_phone_number, 
            preferred_time_1, 
            preferred_time_2, 
            preferred_time_3, 
            meeting_type, 
            additional_notes 
        } = body;

        // Generate quotation number for schedule meeting
        const quotationNumber = await generateQuotationNumber('schedule_meeting');

        // Convert form data to fields for email template
        const fields = convertFormDataToFields({
            company_name,
            contact_person_name,
            title,
            company_email,
            additional_email,
            phone_number,
            additional_phone_number,
            preferred_time_1,
            preferred_time_2,
            preferred_time_3,
            meeting_type,
            additional_notes
        });

        // Generate email content
        const emailContent = generateFormEmailTemplate({
            title: 'New Meeting Request - Moon Navigation and Trading Co.',
            quotationNumber,
            formType: 'Schedule Meeting',
            fields,
            additionalInfo: 'Please respond to the client at the provided email address.'
        });

        // Create transporter
        const transporter = createTransporter();

        // Send the email
        const mailOptions = {
            // Send FROM contact@moon-navigation.com but authenticate with quotation@moon-navigation.com
            from: process.env.CONTACT_SMTP_USER || 'contact@moon-navigation.com',
            to: ['contact@moon-navigation.com'],
            subject: `New Meeting Request - ${company_name}`,
            html: emailContent,
        };

        const info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
