// Helper function to send emails via Supabase SMTP
export const sendFormEmail = async (formData: any, formType: string, recipientEmails?: string[]) => {
  try {
    const response = await fetch('/api/supabase-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData,
        formType,
        recipientEmails,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send email');
    }

    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 