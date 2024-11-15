import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    formId: string;
    contactNumber: string;
    formtype: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    formId,
    contactNumber,
    formtype,
}) => (
    <div
        style={{
            width: '100%',
            height: '100%',
            color: 'black',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            padding: '2rem',
        }}
    >
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                padding: '1rem',
                textAlign: 'center',
                borderRadius: '0.5rem',
                border: '1px solid #d1d5db', // Equivalent to `border-gray-200`
            }}
        >
            <h1
                style={{
                    color: '#0d9488', // Equivalent to `text-teal-700`
                    fontSize: '1.875rem', // Equivalent to `text-3xl`
                    fontWeight: 'bold',
                }}
            >
                Form Submitted Successfully!
            </h1>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.1rem',
                    textAlign: 'left',
                    fontWeight: '400',
                }}
            >
                <p>Form id: {formId}</p>
                <p>Form: {formtype}</p>
                <p>Name: {firstName}</p>
                <p>Contact Number: {contactNumber}</p>
            </div>

            <p
                style={{
                    color: '#6b7280', // Equivalent to `text-gray-500`
                    fontWeight: '600',
                }}
            >
                We will contact you as soon as possible!
            </p>
        </div>
    </div>
);
