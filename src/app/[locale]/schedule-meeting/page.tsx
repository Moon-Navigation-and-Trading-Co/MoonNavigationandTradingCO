"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import Calendar from "react-calendar";

export default function ScheduleMeeting() {
    const [date1, setDate1] = useState<Date>();
    const [date2, setDate2] = useState<Date>();
    const [formData, setFormData] = useState({
        company: "",
        contact: "",
        title: "",
        email: "",
        additionalEmail: "",
        phone: "",
        additionalPhone: "",
        time1: "",
        time2: "",
        service: "",
        serviceOther: "",
        meetingPreference: "",
        message: "",
        consent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Prepare the meeting data
            const meetingData = {
                ...formData,
                preferredDate1: date1,
                preferredDate2: date2
            };

            // Send the data to our API endpoint
            const response = await fetch('/api/schedule-meeting', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(meetingData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit meeting request');
            }

            // Show success message
            alert("Meeting request submitted successfully! We'll get back to you soon.");
            
            // Reset form
            setFormData({
                company: "",
                contact: "",
                title: "",
                email: "",
                additionalEmail: "",
                phone: "",
                additionalPhone: "",
                time1: "",
                time2: "",
                service: "",
                serviceOther: "",
                meetingPreference: "",
                message: "",
                consent: false
            });
            setDate1(undefined);
            setDate2(undefined);
            
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="space-y-6">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold">Meeting Scheduling</h1>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        At Moon Navigation and Trading Co., we believe strong partnerships start with meaningful conversations. Scheduling a meeting with our experts is simple and designed to suit your needs, whether virtual or in person.
                    </p>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                        We take the time to understand your challenges, offer tailored freight, logistics and trade solutions, and build long-term collaborations that drive efficiency and growth. Let's connect and explore how we can support your business with seamless coordination and dedicated expertise. Book your meeting today and experience the power of strategic partnerships.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-4">1. Personal Information</h3>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="company">Company Name:</Label>
                                <Input 
                                    id="company" 
                                    className="mt-1" 
                                    value={formData.company}
                                    onChange={(e) => handleInputChange("company", e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="contact">Contact Person Name:</Label>
                                <Input 
                                    id="contact" 
                                    className="mt-1" 
                                    value={formData.contact}
                                    onChange={(e) => handleInputChange("contact", e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="title">Title:</Label>
                                <Input 
                                    id="title" 
                                    className="mt-1" 
                                    value={formData.title}
                                    onChange={(e) => handleInputChange("title", e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="email">Company Email Address:</Label>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    className="mt-1" 
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="additionalEmail">Add Additional Email Address:</Label>
                                <Input 
                                    id="additionalEmail" 
                                    type="email" 
                                    className="mt-1" 
                                    value={formData.additionalEmail}
                                    onChange={(e) => handleInputChange("additionalEmail", e.target.value)}
                                />
                            </div>

                            <div>
                                <Label htmlFor="phone">Phone Number:</Label>
                                <Input 
                                    id="phone" 
                                    type="tel" 
                                    className="mt-1" 
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="additionalPhone">Add Additional Phone Number:</Label>
                                <Input 
                                    id="additionalPhone" 
                                    type="tel" 
                                    className="mt-1" 
                                    value={formData.additionalPhone}
                                    onChange={(e) => handleInputChange("additionalPhone", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-4">2. Appointment Details</h3>
                        <div className="space-y-4">
                            <div>
                                <Label>Preferred Dates:</Label>
                                <div className="space-y-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button 
                                                type="button"
                                                variant={"outline"} 
                                                className={cn("w-full justify-start text-left font-normal", !date1 && "text-muted-foreground")}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date1 ? format(date1, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar value={date1} onChange={(value) => setDate1(value as Date)} />
                                        </PopoverContent>
                                    </Popover>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button 
                                                type="button"
                                                variant={"outline"} 
                                                className={cn("w-full justify-start text-left font-normal", !date2 && "text-muted-foreground")}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date2 ? format(date2, "PPP") : <span>Pick a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar value={date2} onChange={(value) => setDate2(value as Date)} />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            <div>
                                <Label>Preferred Time:</Label>
                                <div className="space-y-2">
                                    <Select value={formData.time1} onValueChange={(value) => handleInputChange("time1", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 24 }, (_, i) => (
                                                <SelectItem key={i} value={`${i}:00`}>
                                                    {`${i.toString().padStart(2, "0")}:00`}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>

                                    <Select value={formData.time2} onValueChange={(value) => handleInputChange("time2", value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 24 }, (_, i) => (
                                                <SelectItem key={i} value={`${i}:00`}>
                                                    {`${i.toString().padStart(2, "0")}:00`}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <Label>Service of Interest:</Label>
                                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="freight">Freight Solutions (Ocean, Inland, Air)</SelectItem>
                                        <SelectItem value="containers">Containers services</SelectItem>
                                        <SelectItem value="trade">International Trade</SelectItem>
                                        <SelectItem value="agency">Ship Agency</SelectItem>
                                        <SelectItem value="suez">Suez Canal Transit</SelectItem>
                                        <SelectItem value="docking">Docking and Maintenance</SelectItem>
                                        <SelectItem value="storage">Storage and Warehousing</SelectItem>
                                        <SelectItem value="handling">Cargo Handling and Stevedoring</SelectItem>
                                        <SelectItem value="customs">Customs Clearance and Compliance</SelectItem>
                                        <SelectItem value="investing">Investing with us</SelectItem>
                                        <SelectItem value="partnership">Partnership</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {formData.service === "other" && (
                                    <div className="mt-2">
                                        <Label>Please specify:</Label>
                                        <Input 
                                            className="mt-1" 
                                            value={formData.serviceOther}
                                            onChange={(e) => handleInputChange("serviceOther", e.target.value)}
                                            placeholder="Please specify"
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <Label>Meeting Preference:</Label>
                                <RadioGroup 
                                    value={formData.meetingPreference} 
                                    onValueChange={(value) => handleInputChange("meetingPreference", value)}
                                    className="mt-2"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="in-person" id="in-person" />
                                        <Label htmlFor="in-person">In-Person Meeting</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="virtual" id="virtual" />
                                        <Label htmlFor="virtual">Virtual Meeting (Video Call)</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-4">3. Additional Information</h3>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="message">Message or Specific Requests:</Label>
                                <Textarea 
                                    id="message" 
                                    className="mt-1 min-h-[100px]" 
                                    value={formData.message}
                                    onChange={(e) => handleInputChange("message", e.target.value)}
                                    placeholder="Please share any specific details or requests..."
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox 
                                    id="consent" 
                                    checked={formData.consent}
                                    onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                                    required
                                />
                                <Label htmlFor="consent" className="text-sm">
                                    I consent to the collection and processing of my information as per the privacy policy.
                                </Label>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                        For any assistance, feel free to contact us!
                    </div>

                    <Button className="w-full mt-8" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
