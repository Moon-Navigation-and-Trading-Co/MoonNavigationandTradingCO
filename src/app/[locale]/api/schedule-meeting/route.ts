import * as nodemailer from 'nodemailer';
import { format } from 'date-fns';
import { generateFormEmailTemplate, convertFormDataToFields } from "@/utils/email/template-generator";
import { generateQuotationNumber } from "@/utils/quotation/generator";

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
            service_of_interest: services, 
            service_other,
            preferred_date_1, 
            preferred_date_2,
            meeting_preference,
            message
        } = body;

        
        // Generate quotation number
        const quotationNumber = await generateQuotationNumber("schedule_meeting");
// Format dates for email
        const formatDate = (date: string) => {
            if (!date) return 'Not specified';
            return format(new Date(date), 'PPP');
        };

        // Create email content using the new template generator
        const formData = {
            company_name,
            contact_person_name,
            title,
            company_email,
            additional_email,
            phone_number,
            additional_phone_number,
            preferred_date_1,
            preferred_date_2,
            preferred_time_1,
            preferred_time_2,
            service_of_interest: services,
            service_other,
            meeting_preference,
            message
        };

        const fields = convertFormDataToFields(formData);
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
            from: process.env.SMTP_USER || 'quotation@moon-navigation.com',
            to: ['quotation@moon-navigation.com', 'quotes@moon-navigation.com'],
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
