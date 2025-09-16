#!/bin/bash

# List of files that still have the malformed JSX issue
files=(
    "components/container-services-form.tsx"
    "components/hss-form.tsx"
    "components/international-inland-services-form.tsx"
    "components/international-trading-form.tsx"
    "components/investor-form.tsx"
    "components/less-than-container-form.tsx"
    "components/local-inland-services-form.tsx"
    "components/out-gauge-forms.tsx"
    "components/oversized-container-form.tsx"
    "components/project-cargo-services-form.tsx"
    "components/roll-on-off-form.tsx"
    "components/sell-container-form.tsx"
    "components/sell-vessel-form.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing $file..."
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Fix the malformed JSX structure by replacing the problematic section
        sed -i '' 's/const \[is_submitting, set_is_submitting\] = useState(false);.*animate-spin.*/const [is_submitting, set_is_submitting] = useState(false);/' "$file"
        
        # Fix the malformed Button and form closing tags
        sed -i '' 's/<\/Button>.*<\/form>/<\/Button>\n            <\/form>/' "$file"
        
        # Add proper JSX structure before the closing form tag
        sed -i '' 's/<\/form>/                <Button type="submit" disabled={is_submitting} className="w-full">\n                    {is_submitting ? (\n                        <div className="flex items-center gap-2">\n                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"><\/div>\n                            <span>Submitting...<\/span>\n                        <\/div>\n                    ) : "Submit"}\n                <\/Button>\n            <\/form>/' "$file"
        
        echo "Fixed $file"
    else
        echo "File $file not found"
    fi
done

echo "All remaining form fixes completed!"
