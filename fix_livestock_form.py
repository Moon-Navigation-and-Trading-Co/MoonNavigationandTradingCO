# Read the file
with open('components/livestock-transportation-form.tsx', 'r') as f:
    content = f.read()

# Add the missing formSchema definition
form_schema = '''// Define the form schema
const formSchema = z.object({
  routing: z.array(z.object({
    fromCountry: z.string().min(1, { message: "From country is required" }),
    fromPort: z.string().min(1, { message: "From port/area is required" }),
    toCountry: z.string().min(1, { message: "To country is required" }),
    toPort: z.string().min(1, { message: "To port/area is required" }),
  })),'''

# Replace the corrupted schema section
content = re.sub(
    r'  dates: z\.object\(\{.*?\}\);',
    form_schema + '\n  dates: z.object({',
    content,
    flags=re.DOTALL
)

# Replace the routing section with RoutingCard0
routing_pattern = r'        {/* Routing Section */}\s*<div className="">\s*<h1 className=\'text-xl font-raleway font-medium\'>\{t\(\'routing\'\)\}</h1>\s*<div className=\'pt-8 pb-10 grid gap-5 p-4 rounded-3xl\'>.*?</div>\s*</div>'
routing_replacement = '        {/* Routing Section */}\n        <RoutingCard0 control={form.control} />'

content = re.sub(routing_pattern, routing_replacement, content, flags=re.DOTALL)

# Write the updated content
with open('components/livestock-transportation-form.tsx', 'w') as f:
    f.write(content)

print("Livestock form fixed!")
