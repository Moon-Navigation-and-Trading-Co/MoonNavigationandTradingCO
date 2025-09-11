import { createClient } from '@/utils/supabase/client';

interface ErrorNotificationData {
  message: string;
  error?: unknown;
  pageUrl?: string;
  userId?: string;
  userAgent?: string;
  ipAddress?: string;
}

export async function sendErrorNotification(data: ErrorNotificationData) {
  try {
    // Get admin emails from environment variables
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@moonnavigation.com';
    const additionalEmail = 'mariiamhamdyy1@gmail.com';
    
    // Format error details
    const errorDetails = data.error ? 
      (data.error instanceof Error ? data.error.toString() : JSON.stringify(data.error)) : 
      'No error details available';
    
    const errorStack = data.error instanceof Error ? data.error.stack : '';
    
    // Create email content
    const emailContent = {
      subject: `🚨 Website Error Alert - ${data.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🚨 Website Error Alert</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #dc2626; margin-top: 0;">Error Details</h2>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Page URL:</strong> ${data.pageUrl || 'Unknown'}</p>
            <p><strong>User ID:</strong> ${data.userId || 'Anonymous'}</p>
            <p><strong>IP Address:</strong> ${data.ipAddress || 'Unknown'}</p>
            
            <h3 style="color: #dc2626;">Error Details:</h3>
            <pre style="background-color: #f3f4f6; padding: 10px; border-radius: 4px; overflow-x: auto;">
${errorDetails}
            </pre>
            
            ${errorStack ? `
            <h3 style="color: #dc2626;">Stack Trace:</h3>
            <pre style="background-color: #f3f4f6; padding: 10px; border-radius: 4px; overflow-x: auto;">
${errorStack}
            </pre>
            ` : ''}
            
            <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #1e40af;">
                <strong>💡 Tip:</strong> Check your Supabase error_logs table for more details and error history.
              </p>
            </div>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; color: #6b7280;">
            <p style="margin: 0; font-size: 12px;">
              This is an automated error notification from your website.
            </p>
          </div>
        </div>
      `
    };

    // Send email to both recipients
    const recipients = [adminEmail, additionalEmail];
    
    for (const recipient of recipients) {
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: recipient,
            subject: emailContent.subject,
            html: emailContent.html,
            formType: 'error_notification'
          })
        });

        if (!response.ok) {
          console.error(`Failed to send error notification email to ${recipient}:`, await response.text());
        } else {
          console.log(`Error notification sent successfully to ${recipient}`);
        }
      } catch (emailError) {
        console.error(`Error sending notification to ${recipient}:`, emailError);
      }
    }

  } catch (error) {
    console.error('Error in sendErrorNotification:', error);
  }
}

export async function logErrorToSupabase(data: ErrorNotificationData) {
  try {
    const supabase = createClient();
    
    // Format error details
    const errorDetails = data.error ? 
      (data.error instanceof Error ? data.error.toString() : JSON.stringify(data.error)) : 
      null;
    
    const errorStack = data.error instanceof Error ? data.error.stack : null;
    
    // Insert error into Supabase
    const { error } = await supabase
      .from('error_logs')
      .insert({
        message: data.message,
        error_details: errorDetails,
        error_stack: errorStack,
        user_id: data.userId || null,
        page_url: data.pageUrl || null,
        user_agent: data.userAgent || null,
        ip_address: data.ipAddress || null,
        severity: 'error'
      });

    if (error) {
      console.error('Failed to log error to Supabase:', error);
    }

  } catch (error) {
    console.error('Error logging to Supabase:', error);
  }
}
