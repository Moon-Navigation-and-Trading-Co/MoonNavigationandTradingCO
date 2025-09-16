#!/bin/bash

# Fix all form components with malformed JSX
for file in components/*-form.tsx; do
    if grep -q "is_submitting.*useState.*animate-spin" "$file"; then
        echo "Fixing $file..."
        
        # Create a backup
        cp "$file" "$file.backup"
        
        # Fix the malformed JSX structure
        sed -i '' 's/const \[is_submitting, set_is_submitting\] = useState(false);.*animate-spin.*/const [is_submitting, set_is_submitting] = useState(false);/' "$file"
        
        # Fix the malformed Button and form closing tags
        sed -i '' 's/<\/Button>.*<\/form>/<\/Button>\n            <\/form>/' "$file"
        
        # Fix missing proper JSX structure
        sed -i '' 's/<\/form>/                <Button type="submit" disabled={is_submitting} className="w-full">\n                    {is_submitting ? (\n                        <div className="flex items-center gap-2">\n                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"><\/div>\n                            <span>Submitting...<\/span>\n                        <\/div>\n                    ) : "Submit"}\n                <\/Button>\n            <\/form>/' "$file"
    fi
done

echo "Form fixes completed!"
