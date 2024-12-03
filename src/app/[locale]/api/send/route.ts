import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(req: Request) {
    try {
        // Parse the request body to extract props
        const body = await req.json();
        const { firstName, formId, contactNumber, formtype } = body;

        // Send the email with dynamic props
        const { data, error } = await resend.emails.send({
            from: 'Moon Navigation <ziad-khalil@ziad-khalil.online>',
            to: ['ziadk432@hotmail.com'], // Keep this static or pass dynamically if needed
            subject: 'Moon Navigation Form Submission',
            react: EmailTemplate({
                firstName,
                formId,
                contactNumber,
                formtype,
            }),
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
