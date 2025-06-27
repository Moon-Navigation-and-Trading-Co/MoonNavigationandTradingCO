import nodemailer from 'nodemailer';

// Create transporter for Gmail
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER, // Your Gmail address
            pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
        },
    });
};

// Create HTML email template
const createEmailTemplate = (firstName: string, formId: string, contactNumber: string, formtype: string) => {
    return `
        <div style="width: 100%; height: 100%; color: black; background-color: white; display: flex; justify-content: center; align-items: start; padding: 2rem;">
            <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem; text-align: center; border-radius: 0.5rem; border: 1px solid #d1d5db;">
                <h1 style="color: #0d9488; font-size: 1.875rem; font-weight: bold;">
                    Form Submitted Successfully!
                </h1>

                <div style="width: 100%; display: flex; flex-direction: column; gap: 0.1rem; text-align: left; font-weight: 400;">
                    <p>Form id: ${formId}</p>
                    <p>Form: ${formtype}</p>
                    <p>Name: ${firstName}</p>
                    <p>Contact Number: ${contactNumber}</p>
                </div>

                <p style="color: #6b7280; font-weight: 600;">
                    We will contact you as soon as possible!
                </p>
            </div>
        </div>
    `;
};

export async function POST(req: Request) {
    try {
        // Parse the request body to extract props
        const body = await req.json();
        const { firstName, formId, contactNumber, formtype } = body;

        // Create transporter
        const transporter = createTransporter();

        // Send the email with dynamic props
        const mailOptions = {
            from: process.env.GMAIL_USER, // Your Gmail address
            to: ['Mariiamhamdyy1@gmail.com', 'Farida.ashraf@hotmail.co.uk'], // Keep this static or pass dynamically if needed
            subject: 'Moon Navigation Form Submission',
            html: createEmailTemplate(firstName, formId, contactNumber, formtype),
        };

        const info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
