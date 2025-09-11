const fs = require('fs');

// Read the file
let content = fs.readFileSync('components/air-freight-services.tsx', 'utf8');

// Fix 1: Service contract number - add missing closing fragment
content = content.replace(
    '                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                                )}',
    '                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                                    </>\n                                )}'
);

// Fix 2: Other details - add missing closing fragment  
content = content.replace(
    '                                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                                                )}',
    '                                                        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                                                    </>\n                                                )}'
);

// Fix 3: Effective date - add missing closing fragment
content = content.replace(
    '                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                            )}',
    '                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                                </>\n                            )}'
);

// Fix 4: Expiry date - add missing closing fragment
content = content.replace(
    '                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                            )}',
    '                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}\n                                </>\n                            )}'
);

// Write the fixed content back
fs.writeFileSync('components/air-freight-services.tsx', content);

console.log('Fixed Controller structure');
