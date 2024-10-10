import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const CompanyDetailsCard: React.FC = () => {
    return (
        <div className="company-details-card">
            <h1 className='text-2xl font-semibold my-6'>Company/Personal Details</h1>

            <div className='grid grid-cols-2 gap-5'>
                <div>
                    <Label htmlFor="From">Company Name</Label>
                    <Input className=' max-w-[300px] border-2 rounded-xl' type="text"
                        id="From" placeholder="Company Name" />
                </div>
                <div>
                    <Label htmlFor="From">Contact Person Name</Label>
                    <Input className=' max-w-[300px] border-2 rounded-xl' type="text"
                        id="From" placeholder="Contact Person Name" />
                </div>
                <div>
                    <Label htmlFor="From">Title</Label>
                    <Input className=' max-w-[300px] border-2 rounded-xl' type="text"
                        id="From" placeholder="Mr, Ms.. etc." />
                </div>
                <div>
                    <Label htmlFor="From">Country of Origin</Label>
                    <Input className=' max-w-[300px] border-2 rounded-xl' type="text"
                        id="From" placeholder="(City, Country/Region)" />
                </div>
                <div>
                    <Label htmlFor="From">Company Email</Label>
                    <Input className=' max-w-[300px] border-2 rounded-xl' type="text"
                        id="From" placeholder="example@Yahoo.eg" />
                </div>
                <div>
                    <Label htmlFor="From">Phone Number</Label>
                    <Input className=' max-w-[300px] border-2 rounded-xl' type="text"
                        id="From" placeholder="+123456780" />
                </div>
            </div>

            <div className='mt-24'>
                <h1 className='font-semibold text-xl mb-6'>Important Information</h1>
                <div className='flex flex-col gap-3 font-medium'>
                    <p>• For quote requests with long-term validity, please contact us.</p>
                    <p>• Please do not enter personal or financial information, such as credit card details, or debit card details anywhere in your request.</p>
                    <p>• Please note that when you submit your quote request, an automated confirmation e-mail will be sent to you containing the details you entered in this form.</p>
                </div>
            </div>

        </div>
    );
};

export default CompanyDetailsCard;