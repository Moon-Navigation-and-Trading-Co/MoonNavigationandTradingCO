#!/usr/bin/env python3
import os
import re
import glob

def standardize_max_widths():
    """Standardize all max-width classes to max-w-7xl for consistent page container widths"""
    
    # Find all TypeScript/TSX files
    tsx_files = glob.glob("src/**/*.tsx", recursive=True)
    
    # Patterns to replace (smaller max-widths to max-w-7xl)
    replacements = [
        (r'max-w-2xl', 'max-w-7xl'),
        (r'max-w-3xl', 'max-w-7xl'),
        (r'max-w-4xl', 'max-w-7xl'),
        (r'max-w-5xl', 'max-w-7xl'),
        (r'max-w-6xl', 'max-w-7xl'),
        (r'max-w-md', 'max-w-7xl'),
        (r'max-w-lg', 'max-w-7xl'),
        (r'max-w-xl', 'max-w-7xl'),
        (r'max-w-xs', 'max-w-7xl'),
        (r'max-w-sm', 'max-w-7xl'),
    ]
    
    # Custom max-width values to replace
    custom_replacements = [
        (r'max-w-\[650px\]', 'max-w-7xl'),
        (r'max-w-\[800px\]', 'max-w-7xl'),
        (r'max-w-\[1300px\]', 'max-w-7xl'),
        (r'max-w-\[1400px\]', 'max-w-7xl'),
        (r'max-w-\[180px\]', 'max-w-7xl'),
        (r'max-w-\[280px\]', 'max-w-7xl'),
        (r'max-w-\[420px\]', 'max-w-7xl'),
    ]
    
    total_files_modified = 0
    
    for file_path in tsx_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            modified = False
            
            # Apply standard replacements
            for pattern, replacement in replacements:
                if pattern in content:
                    content = re.sub(pattern, replacement, content)
                    modified = True
            
            # Apply custom replacements
            for pattern, replacement in custom_replacements:
                if pattern in content:
                    content = re.sub(pattern, replacement, content)
                    modified = True
            
            # Write back if modified
            if modified:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                total_files_modified += 1
                print(f"Modified: {file_path}")
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nTotal files modified: {total_files_modified}")
    print("All page container widths have been standardized to max-w-7xl")

if __name__ == "__main__":
    standardize_max_widths() 