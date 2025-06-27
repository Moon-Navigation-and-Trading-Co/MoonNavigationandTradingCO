#!/usr/bin/env python3
import os
import re
import glob

def standardize_learn_banners():
    """Standardize all banner elements in learn pages to have consistent border radius and height"""
    
    # Find all TypeScript/TSX files in the learn directory
    learn_files = glob.glob("src/app/[locale]/learn/**/*.tsx", recursive=True)
    
    # Patterns to replace for banner elements
    banner_replacements = [
        # Hero/banner sections with different heights
        (r'relative h-\[[0-9]+px\] rounded-[0-9a-z-]+ overflow-hidden', 'relative h-[400px] rounded-3xl overflow-hidden'),
        (r'w-full h-\[[0-9]+px\] relative rounded-[0-9a-z-]+ overflow-hidden', 'w-full h-[400px] relative rounded-3xl overflow-hidden'),
        (r'w-full h-\[[0-9]+px\] object-cover object-center.*?rounded-[0-9a-z-]+ overflow-hidden', 'w-full h-[400px] object-cover object-center rounded-3xl overflow-hidden'),
        
        # Banner divs with different heights
        (r'w-full h-\[[0-9]+px\] flex items-center justify-center', 'w-full h-[400px] flex items-center justify-center rounded-3xl'),
        
        # Hero sections with different border radius
        (r'rounded-[0-9a-z-]+ overflow-hidden shadow-xl.*?relative', 'rounded-3xl overflow-hidden shadow-xl relative h-[400px]'),
        
        # Top banner images
        (r'w-full h-\[[0-9]+px\] object-cover object-center.*?rounded-[0-9a-z-]+', 'w-full h-[400px] object-cover object-center rounded-3xl'),
        
        # Banner containers
        (r'w-full h-\[[0-9]+px\] rounded-[0-9a-z-]+ overflow-hidden', 'w-full h-[400px] rounded-3xl overflow-hidden'),
    ]
    
    # Additional patterns for specific banner elements
    specific_replacements = [
        # Breakbulk banner
        (r'w-full h-\[400px\] object-cover object-center mt-10 rounded-3xl overflow-hidden', 'w-full h-[400px] object-cover object-center mt-10 rounded-3xl overflow-hidden'),
        
        # Hero sections in air-freight
        (r'relative h-\[400px\] rounded-3xl overflow-hidden mb-12', 'relative h-[400px] rounded-3xl overflow-hidden mb-12'),
        
        # Tankers banner
        (r'w-full h-\[400px\] rounded-3xl overflow-hidden mb-12', 'w-full h-[400px] rounded-3xl overflow-hidden mb-12'),
    ]
    
    total_files_modified = 0
    
    for file_path in learn_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            modified = False
            
            # Apply banner replacements
            for pattern, replacement in banner_replacements:
                if re.search(pattern, content):
                    content = re.sub(pattern, replacement, content)
                    modified = True
            
            # Apply specific replacements
            for pattern, replacement in specific_replacements:
                if re.search(pattern, content):
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
    
    print(f"\nTotal learn files modified: {total_files_modified}")
    print("All banner elements in learn pages have been standardized to h-[400px] and rounded-3xl")

if __name__ == "__main__":
    standardize_learn_banners() 