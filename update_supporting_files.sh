#!/bin/bash

# List of forms to update
FORMS=(
    "components/container-inland-services-form.tsx"
    "components/customs-clearance-form.tsx"
    "components/international-inland-services-form.tsx"
    "components/container-services-form.tsx"
    "components/less-than-container-form.tsx"
    "components/ocean-freight-quotation-form.tsx"
    "components/hss-form.tsx"
    "components/ship-maintenance-form.tsx"
    "components/special-services-form.tsx"
    "components/handling-stevedoring-storage-form.tsx"
    "components/air-freight-services.tsx"
    "components/ship-management-form.tsx"
    "components/livestock-transportation-form.tsx"
    "components/bunkering-oil-supply-form.tsx"
    "components/local-inland-services-form.tsx"
    "components/transit-spare-parts-form.tsx"
    "components/tankers-quotation-form.tsx"
)

# Create backup directory
mkdir -p backups

# Function to update a form
update_form() {
    local form_file="$1"
    local backup_file="backups/$(basename "$form_file").backup"
    
    echo "Updating $form_file..."
    
    # Create backup
    cp "$form_file" "$backup_file"
    
    # Add import if not exists
    if ! grep -q "import EnhancedSupportingFiles" "$form_file"; then
        # Find the last import line and add our import after it
        sed -i '' '/^import.*from.*$/a\
import EnhancedSupportingFiles from '\''./enhanced-supporting-files'\'';
' "$form_file"
    fi
    
    echo "Updated $form_file"
}

# Update all forms
for form in "${FORMS[@]}"; do
    if [ -f "$form" ]; then
        update_form "$form"
    else
        echo "File not found: $form"
    fi
done

echo "All forms updated!"
