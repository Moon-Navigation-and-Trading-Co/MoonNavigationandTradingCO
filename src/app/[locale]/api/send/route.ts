import nodemailer from 'nodemailer';

import { generateFormEmailTemplate, convertFormDataToFields } from "@/utils/email/template-generator";
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

        // Create email content using the new template generator
        const formData = {
            firstName,
            formId,
            contactNumber,
            formtype
        };

        const fields = convertFormDataToFields(formData, {
            firstName: "Name",
            formId: "Form ID",
            contactNumber: "Contact Number",
            formtype: "Form Type"
        });

        const emailContent = generateFormEmailTemplate({
            title: "Form Submitted Successfully!",
            formType: formtype,
            fields,
            additionalInfo: "We will contact you as soon as possible!"
        });};

export async function POST(req: Request) {
    try {
        // Parse the request body to extract props
        const body = await req.json();
        const { firstName, formId, contactNumber, formtype } = body;

        // Create transporter
        const transporter = createTransporter();

        // Send the email with dynamic props
        const mailOptions = {
            from: process.env.SMTP_USER || 'quotation@moon-navigation.com',
            to: ['quotation@moon-navigation.com', 'quotes@moon-navigation.com'], // Keep this static or pass dynamically if needed
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
