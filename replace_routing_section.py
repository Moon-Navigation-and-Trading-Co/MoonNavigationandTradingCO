import re

# Read the file
with open('components/livestock-transportation-form.tsx', 'r') as f:
    content = f.read()

# Find the routing section and replace it
# Look for the pattern from "Routing Section" comment to the end of the routing div
routing_start = content.find('{/* Routing Section */}')
if routing_start != -1:
    # Find the end of the routing section (look for the closing </div> after the routing content)
    # We need to find the pattern that ends with </div> followed by {/* Dates Section */}
    dates_start = content.find('{/* Dates Section */}', routing_start)
    if dates_start != -1:
        # Find the last </div> before the dates section
        before_dates = content[:dates_start]
        last_div_end = before_dates.rfind('</div>')
        if last_div_end != -1:
            # Replace the entire routing section
            new_content = (
                content[:routing_start] + 
                '        {/* Routing Section */}\n        <RoutingCard0 control={form.control} />\n        \n        ' +
                content[dates_start:]
            )
            
            with open('components/livestock-transportation-form.tsx', 'w') as f:
                f.write(new_content)
            print("Routing section replaced successfully!")
        else:
            print("Could not find end of routing section")
    else:
        print("Could not find dates section")
else:
    print("Could not find routing section")
