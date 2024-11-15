'use client';

import { useState } from 'react';
import { EmailTemplate } from '@/components/email-template';

export default function NotesPage() {
    const [emailStatus, setEmailStatus] = useState<string | null>(null);

    //send this data
    const data = {
        firstName: 'John',
        formId: 'c2asd432wq3x4',
        contactNumber: '01115243445',
        formtype: 'Inland Services',
    };

    const sendEmail2 = () => {
        fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: data.firstName,
                formId: data.formId,
                contactNumber: data.contactNumber,
                formtype: data.formtype,
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log('Email sent:', data))
            .catch((error) => console.error('Error sending email:', error));


    };

    const sendEmail = () => {
        fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async (response) => {
                const result = await response.json();
                if (response.ok) {
                    setEmailStatus(`Email sent successfully: ${JSON.stringify(result)}`);
                } else {
                    console.log('Error sending email:', result.error);

                    setEmailStatus(`Error sending email: ${result.error}`);
                }
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setEmailStatus(`Unexpected error: ${error.message}`);
            });
    };

    return (
        <div>
            <h1>Notes Page</h1>
            <button onClick={sendEmail2}>Send Email</button>
            {emailStatus && <p>{emailStatus}</p>}
            <EmailTemplate firstName="John" formId='c2asd432wq3x4' contactNumber='01115243445' formtype='Inland Services' />
        </div>
    );
}
