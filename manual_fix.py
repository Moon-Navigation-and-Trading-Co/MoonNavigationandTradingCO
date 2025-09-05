# Read the file
with open('components/livestock-transportation-form.tsx', 'r') as f:
    lines = f.readlines()

# Find the routing section start and end
start_idx = None
end_idx = None

for i, line in enumerate(lines):
    if 'Routing Section' in line and '/*' in line:
        start_idx = i
    elif start_idx is not None and 'Dates Section' in line and '/*' in line:
        end_idx = i
        break

if start_idx is not None and end_idx is not None:
    # Replace the routing section
    new_lines = lines[:start_idx] + [
        '        {/* Routing Section */}\n',
        '        <RoutingCard0 control={form.control} />\n',
        '\n'
    ] + lines[end_idx:]
    
    with open('components/livestock-transportation-form.tsx', 'w') as f:
        f.writelines(new_lines)
    print("Fixed successfully!")
else:
    print("Could not find routing section boundaries")
