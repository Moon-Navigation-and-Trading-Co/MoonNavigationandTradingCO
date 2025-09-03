/**
 * Email Template Generator for Moon Navigation and Trading Co.
 * Creates email templates that match the website form designs
 */

export interface FormField {
  label: string;
  value: any;
  type?: 'text' | 'email' | 'phone' | 'date' | 'array' | 'object' | 'boolean';
}

export interface EmailTemplateOptions {
  title: string;
  quotationNumber?: string;
  formType: string;
  fields: FormField[];
  additionalInfo?: string;
}

/**
 * Renders a field value based on its type
 */
function renderFieldValue(field: FormField): string {
  const { value, type } = field;
  
  if (value === null || value === undefined || value === '') return '';
  
  switch (type) {
    case 'boolean':
      return value ? 'Yes' : 'No';
    case 'array':
      return Array.isArray(value) ? value.join(', ') : String(value);
    case 'object':
      if (typeof value === 'object' && !Array.isArray(value)) {
        return Object.entries(value)
          .filter(([_, v]) => v !== null && v !== undefined && v !== '')
          .map(([k, v]) => `${k}: ${v}`)
          .join(', ');
      }
      return String(value);
    default:
      return String(value);
  }
}

/**
 * Generates a professional HTML email template that matches the website design
 */
export function generateFormEmailTemplate(options: EmailTemplateOptions): string {
  const { title, quotationNumber, formType, fields, additionalInfo } = options;
  
  // Filter out empty fields
  const nonEmptyFields = fields.filter(field => {
    const value = renderFieldValue(field);
    return value && value.trim() !== '';
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Raleway', sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        .email-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 28px;
            margin: 0 0 8px 0;
            letter-spacing: 0.5px;
        }
        .header h2 {
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 18px;
            margin: 0;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .form-type {
            background-color: #f1f5f9;
            border-left: 4px solid #3b82f6;
            padding: 20px;
            margin-bottom: 30px;
            border-radius: 0 8px 8px 0;
        }
        .form-type h3 {
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 20px;
            margin: 0 0 8px 0;
            color: #1e40af;
        }
        .quotation-number {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #64748b;
            margin: 0;
        }
        .fields-section {
            margin-top: 30px;
        }
        .fields-section h4 {
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 18px;
            color: #1e40af;
            margin: 0 0 20px 0;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8px;
        }
        .field {
            margin-bottom: 20px;
            padding: 16px;
            background-color: #f8fafc;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
        }
        .field-label {
            font-family: 'Raleway', sans-serif;
            font-weight: 500;
            font-size: 14px;
            color: #374151;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #1f2937;
            line-height: 1.5;
        }
        .additional-info {
            margin-top: 30px;
            padding: 20px;
            background-color: #f0f9ff;
            border-radius: 8px;
            border-left: 4px solid #0ea5e9;
        }
        .additional-info h4 {
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 16px;
            color: #0369a1;
            margin: 0 0 10px 0;
        }
        .additional-info p {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 14px;
            color: #0c4a6e;
            margin: 0;
            line-height: 1.5;
        }
        .footer {
            background-color: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer p {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            font-size: 12px;
            color: #64748b;
            margin: 0;
        }
        @media (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            .header, .content, .footer {
                padding: 20px;
            }
            .header h1 {
                font-size: 24px;
            }
            .header h2 {
                font-size: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Moon Navigation & Trading Co.</h1>
            <h2>New Form Submission</h2>
        </div>
        
        <div class="content">
            <div class="form-type">
                <h3>${formType}</h3>
                ${quotationNumber ? `<p class="quotation-number">Quotation Number: ${quotationNumber}</p>` : ''}
            </div>
            
            <div class="fields-section">
                <h4>Form Details</h4>
                ${nonEmptyFields.map(field => `
                    <div class="field">
                        <div class="field-label">${field.label}</div>
                        <div class="field-value">${renderFieldValue(field)}</div>
                    </div>
                `).join('')}
            </div>
            
            ${additionalInfo ? `
                <div class="additional-info">
                    <h4>Additional Information</h4>
                    <p>${additionalInfo}</p>
                </div>
            ` : ''}
        </div>
        
        <div class="footer">
            <p>This email was automatically generated from your website form submission.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
}

/**
 * Converts form data to a standardized field format
 */
export function convertFormDataToFields(formData: Record<string, any>): FormField[] {
  const fields: FormField[] = [];
  
  for (const [key, value] of Object.entries(formData)) {
    // Skip empty values and system fields
    if (value === null || value === undefined || value === '' || 
        key === 'quotation_number' || key === 'form_type') {
      continue;
    }
    
    // Determine field type
    let type: FormField['type'] = 'text';
    if (key.toLowerCase().includes('email')) type = 'email';
    else if (key.toLowerCase().includes('phone') || key.toLowerCase().includes('mobile')) type = 'phone';
    else if (key.toLowerCase().includes('date')) type = 'date';
    else if (Array.isArray(value)) type = 'array';
    else if (typeof value === 'object') type = 'object';
    else if (typeof value === 'boolean') type = 'boolean';
    
    // Format field label
    const label = key
      .replace(/_/g, ' ')
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
    
    fields.push({
      label,
      value,
      type
    });
  }
  
  return fields;
}

/**
 * Gets a display name for form types
 */
export function getFormTypeDisplayName(formType: string): string {
  return formType
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/\b\w/g, (l: string) => l.toUpperCase());
}
