const fs = require('fs');

// Read the file
let content = fs.readFileSync('components/air-freight-services.tsx', 'utf8');

// Fix 1: Remove stray </> fragment on line 320
content = content.replace(
    /                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}<\/p>}\n                                    <\/>/g,
    '                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}'
);

// Fix 2: Remove stray </> fragment on line 464
content = content.replace(
    /                                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}<\/p>}\n                                                    <\/>/g,
    '                                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}'
);

// Fix 3: Remove stray </> fragment on line 494
content = content.replace(
    /                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}<\/p>}\n                                <\/>/g,
    '                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}'
);

// Fix 4: Remove stray </> fragment on line 513
content = content.replace(
    /                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}<\/p>}\n                                <\/>/g,
    '                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}'
);

// Write the fixed content back
fs.writeFileSync('components/air-freight-services.tsx', content);

console.log('Fixed stray fragments');
