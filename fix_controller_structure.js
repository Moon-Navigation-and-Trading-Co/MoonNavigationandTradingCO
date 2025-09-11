const fs = require('fs');

// Read the file
let content = fs.readFileSync('components/air-freight-services.tsx', 'utf8');

// Fix 1: Service contract number Controller - add missing closing fragment
content = content.replace(
    /render=\{\(\{ field, fieldState: \{ error \} \}\) => \(\s*<>\s*<Input\s+className="max-w-\[300px\] border-2 rounded-xl"\s+placeholder="Enter service contract number"\s+\{\.\.\.field\}\s*\/>\s*\{error && <p className="text-red-500 text-sm mt-1">\{error\.message\}<\/p>\}\s*\)\s*\)/g,
    `render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input
                                            className="max-w-[300px] border-2 rounded-xl"
                                            placeholder="Enter service contract number"
                                            {...field}
                                        />
                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </>
                                )}`
);

// Fix 2: Other details Controller - add missing closing fragment
content = content.replace(
    /render=\{\(\{ field, fieldState: \{ error \} \}\) => \(\s*<>\s*<Textarea\s+className="min-h-\[100px\] border-2 rounded-xl"\s+placeholder="Describe special handling requirements\.\.\."\s+\{\.\.\.field\}\s*\/>\s*\{error && <p className="text-red-500 text-sm mt-1">\{error\.message\}<\/p>\}\s*\)\s*\)/g,
    `render={({ field, fieldState: { error } }) => (
                                                    <>
                                                        <Textarea
                                                            className="min-h-[100px] border-2 rounded-xl"
                                                            placeholder="Describe special handling requirements..."
                                                            {...field}
                                                        />
                                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                                    </>
                                                )}`
);

// Fix 3: Effective date Controller - add missing closing fragment
content = content.replace(
    /render=\{\(\{ field, fieldState: \{ error \} \}\) => \(\s*<>\s*<FormLabel>Effective Date <span className="text-muted-foreground text-xs">\(Required\)<\/span><\/FormLabel>\s*<Input\s+className="max-w-\[300px\] border-2 rounded-xl"\s+type="date"\s+\{\.\.\.field\}\s*\/>\s*\{error && <p className="text-red-500 text-sm mt-1">\{error\.message\}<\/p>\}\s*\)\s*\)/g,
    `render={({ field, fieldState: { error } }) => (
                                <>
                                    <FormLabel>Effective Date <span className="text-muted-foreground text-xs">(Required)</span></FormLabel>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="date"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}`
);

// Fix 4: Expiry date Controller - add missing closing fragment
content = content.replace(
    /render=\{\(\{ field, fieldState: \{ error \} \}\) => \(\s*<>\s*<FormLabel>Expiry Date <span className="text-muted-foreground text-xs">\(Required\)<\/span><\/FormLabel>\s*<Input\s+className="max-w-\[300px\] border-2 rounded-xl"\s+type="date"\s+\{\.\.\.field\}\s*\/>\s*\{error && <p className="text-red-500 text-sm mt-1">\{error\.message\}<\/p>\}\s*\)\s*\)/g,
    `render={({ field, fieldState: { error } }) => (
                                <>
                                    <FormLabel>Expiry Date <span className="text-muted-foreground text-xs">(Required)</span></FormLabel>
                                    <Input
                                        className="max-w-[300px] border-2 rounded-xl"
                                        type="date"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}`
);

// Write the fixed content back
fs.writeFileSync('components/air-freight-services.tsx', content);

console.log('Fixed Controller structure');
