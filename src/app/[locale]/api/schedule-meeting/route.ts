import nodemailer from 'nodemailer';
import { format } from 'date-fns';

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

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { 
            company, 
            contact, 
            title, 
            email, 
            additionalEmail, 
            phone, 
            additionalPhone, 
            time1, 
            time2, 
            service, 
            preferredDate1, 
            preferredDate2 
        } = body;

        // Format dates for email
        const formatDate = (date: Date) => {
            if (!date) return 'Not specified';
            return format(new Date(date), 'PPP');
        };

        // Create email content
        const emailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #3B4B8C;">New Meeting Request - Moon Navigation and Trading Co.</h2>
                
                <h3 style="color: #3B4B8C;">Personal Information</h3>
                <p><strong>Company Name:</strong> ${company}</p>
                <p><strong>Contact Person:</strong> ${contact}</p>
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${additionalEmail ? `<p><strong>Additional Email:</strong> ${additionalEmail}</p>` : ''}
                <p><strong>Phone:</strong> ${phone}</p>
                ${additionalPhone ? `<p><strong>Additional Phone:</strong> ${additionalPhone}</p>` : ''}
                
                <h3 style="color: #3B4B8C;">Appointment Details</h3>
                <p><strong>Preferred Date 1:</strong> ${formatDate(preferredDate1)}</p>
                <p><strong>Preferred Date 2:</strong> ${formatDate(preferredDate2)}</p>
                <p><strong>Preferred Time 1:</strong> ${time1 || 'Not specified'}</p>
                <p><strong>Preferred Time 2:</strong> ${time2 || 'Not specified'}</p>
                <p><strong>Service of Interest:</strong> ${service}</p>
                
                <hr style="margin: 20px 0; border: 1px solid #eee;">
                <p style="color: #666; font-size: 14px;">
                    This meeting request was submitted through the Moon Navigation and Trading Co. website.
                    Please respond to the client at: ${email}
                </p>
            </div>
        `;

        // Create transporter
        const transporter = createTransporter();

        // Send the email
        const mailOptions = {
            from: process.env.GMAIL_USER, // Your Gmail address
            to: ['Mariiamhamdyy1@gmail.com', 'Farida.ashraf@hotmail.co.uk'],
            subject: `New Meeting Request - ${company}`,
            html: emailContent,
        };

        const info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, messageId: info.messageId }), { status: 200 });
    } catch (error: any) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
} 