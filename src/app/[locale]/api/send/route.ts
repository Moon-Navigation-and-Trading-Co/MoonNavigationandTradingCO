import nodemailer from 'nodemailer';

import { generate_form_email_template, convert_form_data_to_fields } from "@/utils/email/template-generator";

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
        // Parse the request body to extract props
        const body = await req.json();
        const { firstName, formId, contactNumber, formtype } = body;

        // Create transporter
        const transporter = createTransporter();

        // Create email content using the new template generator
        const formData = {
            firstName,
            formId,
            contactNumber,
            formtype
        };

        const fields = convert_form_data_to_fields(formData);

        const emailContent = generate_form_email_template({
            title: "Form Submitted Successfully!",
            formType: formtype,
            fields,
            additionalInfo: "We will contact you as soon as possible!"
        });

        // Send the email with dynamic props
        const mailOptions = {
            from: process.env.SMTP_USER || 'quotation@moon-navigation.com',
            to: ['quotation@moon-navigation.com', 'quotes@moon-navigation.com'],
            subject: 'Moon Navigation Form Submission',
            html: emailContent,
        };

        const info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
