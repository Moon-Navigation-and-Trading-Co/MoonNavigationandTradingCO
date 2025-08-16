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
import { CircleMinus, Plus } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// Nationalities list
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

// Define the crew member schema
const crewMemberSchema = z.object({
    crew_number: z.number().min(1, "Crew number is required"),
    rank: z.string().min(1, "Rank is required"),
    nationality: z.string().min(1, "Nationality is required"),
    airport_pickup: z.enum(['yes', 'no']).default('yes'),
    hotel_accommodation: z.enum(['yes', 'no']).optional(),
});

// Define the form schema
const formSchema = z.object({
    port: z.object({
        name: z.string().min(1, { message: "Required" }),
    }),
    vessel: z.object({
        name: z.string().min(1, { message: "Required" }),
        imo: z.number({ message: "Number" }).min(0, { message: "Number" }),
        location: z.enum(['at_anchor', 'at_berth', 'suez_canal_passage']).optional(),
        flag: z.string().optional(),
        port_of_crew_change: z.string().optional(),
        eta: z.string().optional(),
        etd: z.string().optional(),
    }),
    crew: z.object({
        on: z.boolean().optional().default(false),
        off: z.boolean().optional().default(false),
        sign_on_members: z.array(crewMemberSchema).min(1, "At least one crew member is required for Sign On"),
        sign_off_members: z.array(crewMemberSchema).optional(),
        special_requests_on: z.string().optional(),
        special_requests_off: z.string().optional(),
        special_instructions: z.string().optional(),
        supporting_files: z.any().optional(),
    }),
    company_details: z.object({
        company_name: z.string().min(1, { message: "Company name is required" }),
        contact_person_name: z.string().min(1, { message: "Contact person name is required" }),
        title: z.string().min(1, { message: "Title is required" }),
        country_of_origin: z.string().min(1, { message: "Country of origin is required" }),
        company_email: z.string().email({ message: "Valid email is required" }),
        additional_email: z.string().optional(),
        phone_number: z.string().min(1, { message: "Phone number is required" }),
        additional_phone_number: z.string().optional(),
    })
});

type FormData = z.infer<typeof formSchema>;

const SignCrewMembersForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
    const t = useTranslations('Inland-errors')
    const tt = useTranslations('Inland-forms')

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
                sign_on_members: [{ 
                    crew_number: 1, 
                    rank: '', 
                    nationality: '', 
                    airport_pickup: 'yes',
                    hotel_accommodation: undefined 
                }],
                sign_off_members: [],
                special_requests_on: '',
                special_requests_off: '',
                special_instructions: '',
                supporting_files: undefined,
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

    // Add first row to Sign Off when it's selected
    React.useEffect(() => {
        if (watchSignOff && signOffFields.length === 0) {
            appendSignOff({ 
                crew_number: 1, 
                rank: '', 
                nationality: '', 
                airport_pickup: 'yes',
                hotel_accommodation: undefined 
            });
        }
    }, [watchSignOff, signOffFields.length, appendSignOff]);

    const handleSubmit = (values: FormData) => {
        console.log("Form submitted successfully:", values);
        onSubmit(values);
    };

    const handleError = (errors: any) => {
        console.error("Validation errors:", errors);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit, handleError)} className="space-y-8">
                {/* Port and Vessel Details */}
                <PortCard control={form.control} />

                {/* Sign On/Off Selection */}
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Sign On/Off Crew Members</h2>
                    
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
                </div>

                {/* Sign On Section */}
                {watchSignOn && (
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-blue-600">Sign On Crew Members</h3>
                        
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
                                        <TableRow key={field.id}>
                                            <TableCell className="text-center font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_on_members.${index}.crew_number`}
                                                    render={({ field }) => (
                                                        <Input
                                                            type="number"
                                                            min="1"
                                                            className="w-24"
                                                            {...field}
                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_on_members.${index}.rank`}
                                                    render={({ field }) => (
                                                        <Input
                                                            placeholder="Enter rank"
                                                            {...field}
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_on_members.${index}.nationality`}
                                                    render={({ field }) => (
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="w-full">
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
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_on_members.${index}.airport_pickup`}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            value={field.value}
                                                            onValueChange={field.onChange}
                                                            className="flex space-x-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="yes" id={`airport-yes-${index}`} />
                                                                <label htmlFor={`airport-yes-${index}`} className="text-sm">Yes</label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="no" id={`airport-no-${index}`} />
                                                                <label htmlFor={`airport-no-${index}`} className="text-sm">No</label>
                                                            </div>
                                                        </RadioGroup>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_on_members.${index}.hotel_accommodation`}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            value={field.value || ''}
                                                            onValueChange={field.onChange}
                                                            className="flex space-x-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="yes" id={`hotel-yes-${index}`} />
                                                                <label htmlFor={`hotel-yes-${index}`} className="text-sm">Yes</label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="no" id={`hotel-no-${index}`} />
                                                                <label htmlFor={`hotel-no-${index}`} className="text-sm">No</label>
                                                            </div>
                                                        </RadioGroup>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => removeSignOn(index)}
                                                    className="text-red-500 hover:text-red-700 p-2"
                                                >
                                                    <CircleMinus className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        <div className="space-y-2">
                            <Button
                                type="button"
                                onClick={() => appendSignOn({ 
                                    crew_number: signOnFields.length + 1, 
                                    rank: '', 
                                    nationality: '', 
                                    airport_pickup: 'yes',
                                    hotel_accommodation: undefined 
                                })}
                                className="flex items-center gap-2"
                            >
                                <Plus className="h-4 w-4" />
                                Add Row
                            </Button>
                            
                            <p className="text-red-500 text-sm font-medium">
                                Please insert quantity for each nationality
                            </p>
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
                        <h3 className="text-lg font-semibold text-blue-600">Sign Off Crew Members</h3>
                        
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
                                        <TableRow key={field.id}>
                                            <TableCell className="text-center font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_off_members.${index}.crew_number`}
                                                    render={({ field }) => (
                                                        <Input
                                                            type="number"
                                                            min="1"
                                                            className="w-24"
                                                            {...field}
                                                            onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_off_members.${index}.rank`}
                                                    render={({ field }) => (
                                                        <Input
                                                            placeholder="Enter rank"
                                                            {...field}
                                                        />
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_off_members.${index}.nationality`}
                                                    render={({ field }) => (
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <SelectTrigger className="w-full">
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
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_off_members.${index}.airport_pickup`}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            value={field.value}
                                                            onValueChange={field.onChange}
                                                            className="flex space-x-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="yes" id={`dropoff-yes-${index}`} />
                                                                <label htmlFor={`dropoff-yes-${index}`} className="text-sm">Yes</label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="no" id={`dropoff-no-${index}`} />
                                                                <label htmlFor={`dropoff-no-${index}`} className="text-sm">No</label>
                                                            </div>
                                                        </RadioGroup>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Controller
                                                    control={form.control}
                                                    name={`crew.sign_off_members.${index}.hotel_accommodation`}
                                                    render={({ field }) => (
                                                        <RadioGroup
                                                            value={field.value || ''}
                                                            onValueChange={field.onChange}
                                                            className="flex space-x-4"
                                                        >
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="yes" id={`hotel-off-yes-${index}`} />
                                                                <label htmlFor={`hotel-off-yes-${index}`} className="text-sm">Yes</label>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="no" id={`hotel-off-no-${index}`} />
                                                                <label htmlFor={`hotel-off-no-${index}`} className="text-sm">No</label>
                                                            </div>
                                                        </RadioGroup>
                                                    )}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => removeSignOff(index)}
                                                    className="text-red-500 hover:text-red-700 p-2"
                                                >
                                                    <CircleMinus className="h-4 w-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                        <div className="space-y-2">
                            <Button
                                type="button"
                                onClick={() => appendSignOff({ 
                                    crew_number: signOffFields.length + 1, 
                                    rank: '', 
                                    nationality: '', 
                                    airport_pickup: 'yes',
                                    hotel_accommodation: undefined 
                                })}
                                className="flex items-center gap-2"
                            >
                                <Plus className="h-4 w-4" />
                                Add Row
                            </Button>
                            
                            <p className="text-red-500 text-sm font-medium">
                                Please insert quantity for each nationality
                            </p>
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

                {/* Additional Information Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    
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

                        <div className="space-y-2">
                            <FormLabel>Supporting files (optional)</FormLabel>
                            <p className="text-sm text-gray-600">
                                Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint
                            </p>
                            <Controller
                                control={form.control}
                                name="crew.supporting_files"
                                render={({ field }) => (
                                    <Input
                                        type="file"
                                        multiple
                                        accept=".pdf,.jpeg,.jpg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files || []);
                                            field.onChange(files);
                                        }}
                                        className="max-w-md"
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Company Details */}
                <CompanyDetailsCard control={form.control} />

                <Button type="submit" className="mt-4 w-[200px]">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default SignCrewMembersForm;
