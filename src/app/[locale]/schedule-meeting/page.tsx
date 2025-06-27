"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import Calendar from "react-calendar";

export default function ScheduleMeeting() {
    const [date1, setDate1] = useState<Date>();
    const [date2, setDate2] = useState<Date>();

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-2xl font-semibold text-primary mb-4">Meeting Scheduling</h1>

            <div className="space-y-6">
                <p className="text-muted-foreground">At Moon Navigation and Trading Co., we believe strong partnerships start with meaningful conversations. Scheduling a meeting with our experts is simple and designed to suit your needs, whether virtual or in person.</p>

                <p className="text-muted-foreground">We take the time to understand your challenges, offer tailored logistics and freight solutions, and build long-term collaborations that drive efficiency and growth. Let's connect and explore how we can support your business with seamless coordination and dedicated expertise. Book your meeting today and experience the power of strategic partnerships.</p>

                <h2 className="text-xl font-medium">Please fill out the form below to schedule a meeting with our team.</h2>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2">1. Personal Information</h3>
                        <div className="space-y-4 mt-4">
                            <div>
                                <Label htmlFor="company">Company Name:</Label>
                                <Input id="company" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="contact">Contact Person Name:</Label>
                                <Input id="contact" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="title">Title:</Label>
                                <Input id="title" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="email">Company Email Address:</Label>
                                <Input id="email" type="email" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="additionalEmail">Additional Email Address:</Label>
                                <Input id="additionalEmail" type="email" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="phone">Phone Number:</Label>
                                <Input id="phone" type="tel" className="mt-1" />
                            </div>

                            <div>
                                <Label htmlFor="additionalPhone">Additional Phone Number:</Label>
                                <Input id="additionalPhone" type="tel" className="mt-1" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold border-b pb-2">2. Appointment Details</h3>
                        <div className="space-y-4 mt-4">
                            <div>
                                <Label>Preferred Dates:</Label>
                                <div className="space-y-2">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !date1 && "text-muted-foreground")}>
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
                                            <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !date2 && "text-muted-foreground")}>
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
                                    <Select>
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

                                    <Select>
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
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="freight">Freight Solutions (Ocean, Inland, Air)</SelectItem>
                                        <SelectItem value="containers">Containers services</SelectItem>
                                        <SelectItem value="trade">International Trade</SelectItem>
                                        <SelectItem value="agency">Ship Agency and Management</SelectItem>
                                        <SelectItem value="docking">Docking and Maintenance</SelectItem>
                                        <SelectItem value="storage">Storage and Warehousing</SelectItem>
                                        <SelectItem value="handling">Cargo Handling and Stevedoring</SelectItem>
                                        <SelectItem value="customs">Customs Clearance Services</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="w-full mt-8">Schedule Meeting</Button>
            </div>
        </div>
    );
}
