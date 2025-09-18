"use client"
import React from 'react';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import PortCard from './port-card';
import CompanyDetailsCard from './company-details-card';
import { useTranslations } from 'next-intl';
import { CircleMinus, Plus, AlertCircle, Upload } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';

// Nationalities list (same as original)
const nationalities = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian",
    "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Barbudans", "Batswana", "Belarusian", "Belgian",
    "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe",
    "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese",
    "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti",
    "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian",
    "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek",
    "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", "Hungarian", "I-Kiribati",
    "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican",
    "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese",
    "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivan",
    "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian",
    "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Ni-Vanuatu", "Nicaraguan",
    "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean",
    "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran",
    "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean",
    "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer",
    "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan",
    "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese",
    "Welsh", "Yemenite", "Zambian", "Zimbabwean"
];

// Enhanced file validation
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB
const ACCEPTED_FILE_TYPES = [
    'application/pdf',
    'image/jpeg',
    'image/jpg', 
    'image/gif',
    'image/png',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
];

// Enhanced crew member schema with better validation
const crewMemberSchema = z.object({
    crew_number: z.number().min(1, "Crew number must be at least 1"),
    rank: z.string().min(1, "Rank is required").max(50, "Rank must be less than 50 characters"),
    nationality: z.string().min(1, "Nationality is required"),
    airport_pickup: z.enum(['yes', 'no']).default('yes'),
    hotel_accommodation: z.enum(['yes', 'no']).default('no'),
});

// Enhanced form schema
const formSchema = z.object({
    port: z.object({
        name: z.string().min(1, { message: "Port name is required" }),
    }),
    vessel: z.object({
        name: z.string().min(1, { message: "Vessel name is required" }),
        imo: z.number({ message: "IMO must be a number" }).min(1000000, { message: "IMO must be 7 digits" }).max(9999999, { message: "IMO must be 7 digits" }),
        location: z.enum(['at_anchor', 'at_berth', 'suez_canal_passage']).optional(),
        flag: z.string().optional(),
        port_of_crew_change: z.string().optional(),
        eta: z.string().optional(),
        etd: z.string().optional(),
    }),
    crew: z.object({
        on: z.boolean().optional().default(false),
        off: z.boolean().optional().default(false),
        sign_on_members: z.array(crewMemberSchema).optional().default([]),
        sign_off_members: z.array(crewMemberSchema).optional().default([]),
        special_requests_on: z.string().optional(),
        special_requests_off: z.string().optional(),
        special_instructions: z.string().optional(),
        supporting_files: z.any().optional(),
    }).refine((data) => {
        if (data.on && (!data.sign_on_members || data.sign_on_members.length === 0)) {
            return false;
        }
        if (data.off && (!data.sign_off_members || data.sign_off_members.length === 0)) {
            return false;
        }
        return data.on || data.off;
    }, {
        message: "Please select Sign On or Sign Off and add at least one crew member for the selected option",
        path: ["crew"]
    }),
    company_details: z.object({
        company_name: z.string().min(1, { message: "Company name is required" }),
        contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
        title: z.string().min(1, { message: "Title is required" }),
        country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
        company_email: z.string().email({ message: "Valid email is required" }),
        additional_email: z.string().email().optional().or(z.literal("")),
        phone_number: z.string().min(1, { message: "Phone number is required" }),
        additional_phone_number: z.string().optional(),
    })
});

type FormData = z.infer<typeof formSchema>;

// Enhanced crew member table row component
const CrewMemberRow = ({ 
    control, 
    index, 
    fieldName, 
    onRemove, 
    isSignOff = false 
}: {
    control: any;
    index: number;
    fieldName: string;
    onRemove: () => void;
    isSignOff?: boolean;
}) => {
    return (
        <TableRow>
            <TableCell className="text-center font-medium">
                {index + 1}
            </TableCell>
            <TableCell>
                <Controller
                    control={control}
                    name={`${fieldName}.${index}.crew_number`}
                    render={({ field, fieldState }) => (
                        <div>
                            <Input
                                type="number"
                                min="1"
                                className={`w-24 ${fieldState.error ? 'border-red-500' : ''}`}
                                {...field}
                                onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                            />
                            {fieldState.error && (
                                <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                            )}
                        </div>
                    )}
                />
            </TableCell>
            <TableCell>
                <Controller
                    control={control}
                    name={`${fieldName}.${index}.rank`}
                    render={({ field, fieldState }) => (
                        <div>
                            <Input
                                placeholder="Enter rank"
                                className={fieldState.error ? 'border-red-500' : ''}
                                {...field}
                            />
                            {fieldState.error && (
                                <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                            )}
                        </div>
                    )}
                />
            </TableCell>
            <TableCell>
                <Controller
                    control={control}
                    name={`${fieldName}.${index}.nationality`}
                    render={({ field, fieldState }) => (
                        <div>
                            <Select onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger className={`w-full ${fieldState.error ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder="Select nationality" />
                                </SelectTrigger>
                                <SelectContent className="max-h-[200px]">
                                    {nationalities.map((nationality) => (
                                        <SelectItem key={nationality} value={nationality}>
                                            {nationality}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {fieldState.error && (
                                <p className="text-red-500 text-xs mt-1">{fieldState.error.message}</p>
                            )}
                        </div>
                    )}
                />
            </TableCell>
            <TableCell>
                <Controller
                    control={control}
                    name={`${fieldName}.${index}.airport_pickup`}
                    render={({ field }) => (
                        <RadioGroup
                            value={field.value || ""}
                            onValueChange={field.onChange}
                            className="flex space-x-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id={`${isSignOff ? 'dropoff' : 'pickup'}-yes-${index}`} />
                                <label htmlFor={`${isSignOff ? 'dropoff' : 'pickup'}-yes-${index}`} className="text-sm">Yes</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id={`${isSignOff ? 'dropoff' : 'pickup'}-no-${index}`} />
                                <label htmlFor={`${isSignOff ? 'dropoff' : 'pickup'}-no-${index}`} className="text-sm">No</label>
                            </div>
                        </RadioGroup>
                    )}
                />
            </TableCell>
            <TableCell>
                <Controller
                    control={control}
                    name={`${fieldName}.${index}.hotel_accommodation`}
                    render={({ field }) => (
                        <RadioGroup
                            value={field.value || ''}
                            onValueChange={field.onChange}
                            className="flex space-x-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id={`hotel-${isSignOff ? 'off' : 'on'}-yes-${index}`} />
                                <label htmlFor={`hotel-${isSignOff ? 'off' : 'on'}-yes-${index}`} className="text-sm">Yes</label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id={`hotel-${isSignOff ? 'off' : 'on'}-no-${index}`} />
                                <label htmlFor={`hotel-${isSignOff ? 'off' : 'on'}-no-${index}`} className="text-sm">No</label>
                            </div>
                        </RadioGroup>
                    )}
                />
            </TableCell>
            <TableCell>
                <Button
                    type="button"
                    variant="outline"
                    onClick={onRemove}
                    className="text-red-500 hover:text-red-700 p-2"
                    disabled={index === 0} // Prevent removing the first row
                >
                    <CircleMinus className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};

const SignCrewMembersForm: React.FC<{ onSubmit: (data: any) => void; isSubmitting?: boolean }> = ({ onSubmit, isSubmitting = false }) => {
    const t = useTranslations('Inland-errors');
    const tt = useTranslations('Inland-forms');
    const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
    const [fileErrors, setFileErrors] = React.useState<string[]>([]);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            vessel: {
                name: '',
                imo: 0,
                location: undefined,
                flag: '',
                port_of_crew_change: '',
                eta: '',
                etd: '',
            },
            crew: {
                on: false,
                off: false,
                sign_on_members: [],
                sign_off_members: [],
                special_requests_on: '',
                special_requests_off: '',
                special_instructions: '',
                supporting_files: [],
            },
        }
    });

    const { fields: signOnFields, append: appendSignOn, remove: removeSignOn } = useFieldArray({
        control: form.control,
        name: "crew.sign_on_members",
    });

    const { fields: signOffFields, append: appendSignOff, remove: removeSignOff } = useFieldArray({
        control: form.control,
        name: "crew.sign_off_members",
    });

    const watchSignOn = form.watch("crew.on");
    const watchSignOff = form.watch("crew.off");

    // Enhanced file validation
    const validateFiles = (files: FileList) => {
        const errors: string[] = [];
        const validFiles: File[] = [];

        Array.from(files).forEach((file, index) => {
            if (file.size > MAX_FILE_SIZE) {
                errors.push(`File "${file.name}" exceeds 20MB limit`);
            } else if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                errors.push(`File "${file.name}" is not a supported file type`);
            } else {
                validFiles.push(file);
            }
        });

        return { errors, validFiles };
    };

    // Add first row to Sign On when it's selected
    React.useEffect(() => {
        if (watchSignOn && signOnFields.length === 0) {
            appendSignOn({ 
                crew_number: 1, 
                rank: '', 
                nationality: '', 
                airport_pickup: 'yes',
                hotel_accommodation: 'no'
            });
        }
    }, [watchSignOn, signOnFields.length, appendSignOn]);

    // Add first row to Sign Off when it's selected
    React.useEffect(() => {
        if (watchSignOff && signOffFields.length === 0) {
            appendSignOff({ 
                crew_number: 1, 
                rank: '', 
                nationality: '', 
                airport_pickup: 'yes',
                hotel_accommodation: 'no'
            });
        }
    }, [watchSignOff, signOffFields.length, appendSignOff]);

    const handleSubmit = (values: FormData) => {
        console.log("Form submitted successfully:", values);
        onSubmit(values);
    };

    const handleError = (errors: unknown) => {
        if (process.env.NODE_ENV === 'development') {
            console.log("Validation errors:", errors);
            console.log("Current form values:", form.getValues());
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const { errors, validFiles } = validateFiles(files);
        
        setFileErrors(errors);
        setUploadedFiles(validFiles);
        
        // Update form with valid files
        form.setValue('crew.supporting_files', validFiles);
    };

    const removeFile = (indexToRemove: number) => {
        const newFiles = uploadedFiles.filter((_, index) => index !== indexToRemove);
        setUploadedFiles(newFiles);
        form.setValue('crew.supporting_files', newFiles);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">
                {/* Port and Vessel Details */}
                <PortCard control={form.control} />

                {/* Sign On/Off Selection */}
                <div className="space-y-4">
                    <h2 className="text-lg font-raleway font-medium">Sign On/Off Crew Members</h2>
                    
                    <div className="flex gap-6">
                        <div className="flex items-center space-x-2">
                            <Controller
                                control={form.control}
                                name="crew.on"
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="sign-on"
                                    />
                                )}
                            />
                            <label htmlFor="sign-on" className="text-sm font-medium">
                                Sign On
                            </label>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Controller
                                control={form.control}
                                name="crew.off"
                                render={({ field }) => (
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        id="sign-off"
                                    />
                                )}
                            />
                            <label htmlFor="sign-off" className="text-sm font-medium">
                                Sign Off
                            </label>
                        </div>
                    </div>

                    {/* Display crew validation errors */}
                    {form.formState.errors.crew && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                {form.formState.errors.crew.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                {/* Sign On Section */}
                {watchSignOn && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-raleway font-medium text-blue-600">Sign On Crew Members</h3>
                        
                        <div className="overflow-x-auto">
                        <Table className="border rounded-lg">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[60px]">Row</TableHead>
                                        <TableHead className="w-[100px]">Crew Number</TableHead>
                                        <TableHead className="w-[150px]">Rank</TableHead>
                                        <TableHead className="w-[150px]">Nationality</TableHead>
                                        <TableHead className="w-[200px]">Airport Pickup Required</TableHead>
                                        <TableHead className="w-[200px]">Hotel Accommodation Needed</TableHead>
                                        <TableHead className="w-[80px]">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {signOnFields.map((field, index) => (
                                        <CrewMemberRow
                                            key={field.id}
                                                    control={form.control}
                                            index={index}
                                            fieldName="crew.sign_on_members"
                                            onRemove={() => removeSignOn(index)}
                                            isSignOff={false}
                                                />
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="space-y-2">
                            <Button
                                type="button"
                                onClick={() => appendSignOn({ 
                                    crew_number: signOnFields.length + 1, 
                                    rank: '', 
                                    nationality: '', 
                                    airport_pickup: 'yes',
                                    hotel_accommodation: 'no'
                                })}
                                className="flex items-center gap-2"
                                variant="outline"
                            >
                                <Plus className="h-4 w-4" />
                                Add Row
                            </Button>
                            
                            <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>
                                Please insert quantity for each nationality
                                </AlertDescription>
                            </Alert>
                        </div>

                        <div className="space-y-2">
                            <FormLabel>Special Requests</FormLabel>
                            <Controller
                                control={form.control}
                                name="crew.special_requests_on"
                                render={({ field }) => (
                                    <Textarea
                                        placeholder="Enter any special requests for Sign On crew members..."
                                        className="min-h-[100px]"
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                    </div>
                )}

                {/* Sign Off Section */}
                {watchSignOff && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-raleway font-medium text-blue-600">Sign Off Crew Members</h3>
                        
                        <div className="overflow-x-auto">
                        <Table className="border rounded-lg">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[60px]">Row</TableHead>
                                        <TableHead className="w-[100px]">Crew Number</TableHead>
                                        <TableHead className="w-[150px]">Rank</TableHead>
                                        <TableHead className="w-[150px]">Nationality</TableHead>
                                        <TableHead className="w-[200px]">Airport Dropoff Required</TableHead>
                                        <TableHead className="w-[200px]">Hotel Accommodation Needed</TableHead>
                                        <TableHead className="w-[80px]">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {signOffFields.map((field, index) => (
                                        <CrewMemberRow
                                            key={field.id}
                                                    control={form.control}
                                            index={index}
                                            fieldName="crew.sign_off_members"
                                            onRemove={() => removeSignOff(index)}
                                            isSignOff={true}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="space-y-2">
                            <Button
                                type="button"
                                onClick={() => appendSignOff({ 
                                    crew_number: signOffFields.length + 1, 
                                    rank: '', 
                                    nationality: '', 
                                    airport_pickup: 'yes',
                                    hotel_accommodation: 'no'
                                })}
                                className="flex items-center gap-2"
                                variant="outline"
                            >
                                <Plus className="h-4 w-4" />
                                Add Row
                            </Button>
                            
                            <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>
                                Please insert quantity for each nationality
                                </AlertDescription>
                            </Alert>
                        </div>

                        <div className="space-y-2">
                            <FormLabel>Special Requests</FormLabel>
                            <Controller
                                control={form.control}
                                name="crew.special_requests_off"
                                render={({ field }) => (
                                    <Textarea
                                        placeholder="Enter any special requests for Sign Off crew members..."
                                        className="min-h-[100px]"
                                        {...field}
                                    />
                                )}
                            />
                        </div>
                    </div>
                )}

                {/* Enhanced Additional Information Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-raleway font-medium">Additional Information</h3>
                    
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <FormLabel>Any Special Instructions or Notes:</FormLabel>
                            <Controller
                                control={form.control}
                                name="crew.special_instructions"
                                render={({ field }) => (
                                    <Textarea
                                        placeholder="Enter any special instructions or notes..."
                                        className="min-h-[120px]"
                                        {...field}
                                    />
                                )}
                            />
                        </div>

                        <div className="space-y-4">
                        <div className="space-y-2">
                            <FormLabel>Supporting files (optional)</FormLabel>
                            <p className="text-sm text-gray-600">
                                    Max size 20 MB per file. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint
                            </p>
                                <div className="flex items-center gap-4">
                                    <Input
                                        type="file"
                                        multiple
                                        accept=".pdf,.jpeg,.jpg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                        onChange={handleFileChange}
                                        className="max-w-md"
                                        id="file-upload"
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => document.getElementById('file-upload')?.click()}
                                        className="flex items-center gap-2"
                                    >
                                        <Upload className="h-4 w-4" />
                                        Browse Files
                                    </Button>
                                </div>
                            </div>

                            {/* Display file errors */}
                            {fileErrors.length > 0 && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>
                                        <ul className="list-disc list-inside space-y-1">
                                            {fileErrors.map((error, index) => (
                                                <li key={index}>{error}</li>
                                            ))}
                                        </ul>
                                    </AlertDescription>
                                </Alert>
                            )}

                            {/* Display uploaded files */}
                            {uploadedFiles.length > 0 && (
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">Uploaded Files:</p>
                                    <div className="space-y-2">
                                        {uploadedFiles.map((file, index) => (
                                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-2">
                                                    <Upload className="h-4 w-4 text-gray-500" />
                                                    <span className="text-sm">{file.name}</span>
                                                    <span className="text-xs text-gray-500">
                                                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                                    </span>
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    onClick={() => removeFile(index)}
                                                    className="text-red-500 hover:text-red-700"
                                                >
                                                    <CircleMinus className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className={`mt-4 w-[200px] ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : "Submit"}
                </Button>
            </form>
        </Form>
    );
};

export default SignCrewMembersForm;
