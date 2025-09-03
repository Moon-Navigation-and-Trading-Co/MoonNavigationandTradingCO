"use client"
import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';

interface ConsolidatedFormProps {
    control: any;
}

const ConsolidatedForm: React.FC<ConsolidatedFormProps> = ({ control }) => {
    const { watch } = useFormContext();
    const dangerousGoods = watch("consolidated_data.dangerous_goods");
    const temperatureControl = watch("consolidated_data.temperature_control");

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-raleway font-medium mb-6">Consolidated Entry for Multiple Commodities</h2>
            
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-xs font-medium text-blue-800 mb-3">If you are shipping a variety of commodities and prefer to summarize:</h3>
                <ul className="text-xs text-blue-700 space-y-1">
                    <li>• List all commodity types in a single field</li>
                    <li>• Provide the total combined quantity</li>
                    <li>• Indicate the total weight and total volume (CBM) for the entire shipment</li>
                    <li>• Indicate whether any part of the shipment is classified as dangerous goods</li>
                    <li>• If Yes, please list UN Number, Class, and special instructions</li>
                    <li>• Attach a detailed packing list covering the full cargo breakdown</li>
                </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Commodity Types */}
                <FormItem className="md:col-span-2">
                    <FormLabel>Commodity Types *</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="consolidated_data.commodity_types"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Textarea
                                        className={`min-h-[100px] border-2 rounded-xl ${error ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Describe the types of commodities included in this shipment"
                                        {...field}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Total Quantity */}
                <FormItem>
                    <FormLabel>Total Quantity *</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="consolidated_data.total_quantity"
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input
                                        type="number"
                                        min="1"
                                        className={`w-full border-2 rounded-xl ${error ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Total number of items"
                                        {...field}
                                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                </>
                            )}
                        />
                    </FormControl>
                </FormItem>

                {/* Total Weight */}
                <FormItem>
                    <FormLabel>Total Weight *</FormLabel>
                    <FormControl>
                        <div className="flex gap-2">
                        <Controller
                            control={control}
                            name="consolidated_data.total_weight"
                            render={({ field, fieldState: { error } }) => (
                                    <div className="flex-1">
                                    <Input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        className={`w-full border-2 rounded-xl ${error ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Total weight"
                                        {...field}
                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                control={control}
                                name="consolidated_data.weight_unit"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value || 'kg'}>
                                        <SelectTrigger className="w-28 border-2 rounded-xl">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="kg">kg</SelectItem>
                                            <SelectItem value="ton">ton</SelectItem>
                                        </SelectContent>
                                    </Select>
                            )}
                        />
                        </div>
                    </FormControl>
                </FormItem>

                {/* Total Volume */}
                <FormItem>
                    <FormLabel>Total Volume *</FormLabel>
                    <FormControl>
                        <div className="flex gap-2">
                        <Controller
                            control={control}
                            name="consolidated_data.total_volume"
                            render={({ field, fieldState: { error } }) => (
                                    <div className="flex-1">
                                    <Input
                                        type="number"
                                        min="0"
                                        step="0.001"
                                        className={`w-full border-2 rounded-xl ${error ? 'border-red-500' : 'border-gray-300'}`}
                                            placeholder="Total volume"
                                        {...field}
                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                    />
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                control={control}
                                name="consolidated_data.volume_unit"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value || 'cbm'}>
                                        <SelectTrigger className="w-28 border-2 rounded-xl">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="cbm">CBM</SelectItem>
                                            <SelectItem value="m3">m³</SelectItem>
                                        </SelectContent>
                                    </Select>
                            )}
                        />
                        </div>
                    </FormControl>
                </FormItem>

                {/* Packaging Type */}
                <FormItem>
                    <FormLabel>Packaging Type *</FormLabel>
                    <FormControl>
                        <Controller
                            control={control}
                            name="consolidated_data.packaging_type"
                            render={({ field, fieldState: { error } }) => (
                                <div>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className={`w-full border-2 rounded-xl ${error ? 'border-red-500' : 'border-gray-300'}`}>
                                            <SelectValue placeholder="Select packaging type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pallets">Pallets</SelectItem>
                                            <SelectItem value="crates">Crates</SelectItem>
                                            <SelectItem value="boxes">Boxes</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                    
                                    {/* Conditional Other Input */}
                                    {field.value === 'other' && (
                                        <div className="mt-2">
                                            <Controller
                                                control={control}
                                                name="consolidated_data.packaging_type_other"
                                                render={({ field: otherField, fieldState: { error: otherError } }) => (
                                                    <div>
                                                        <Input
                                                            className={`w-full border-2 rounded ${otherError ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="Please specify"
                                                            {...otherField}
                                                        />
                                                        {otherError && <p className="text-red-500 text-xs mt-1">{otherError.message}</p>}
                                                    </div>
                                                )}
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                    </FormControl>
                </FormItem>
            </div>

            {/* Stackable Section */}
            <div className="mt-6">
                <h3 className="text-lg font-raleway font-medium mb-4">Stackable:</h3>
                    <FormControl>
                        <Controller
                            control={control}
                            name="consolidated_data.stackable"
                            render={({ field }) => (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={field.value === true}
                                        onCheckedChange={(checked) => field.onChange(checked ? true : false)}
                                        id="stackable_yes"
                                    />
                                    <label htmlFor="stackable_yes" className="text-sm font-medium">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={field.value === false}
                                        onCheckedChange={(checked) => field.onChange(checked ? false : true)}
                                        id="stackable_no"
                                    />
                                    <label htmlFor="stackable_no" className="text-sm font-medium">
                                        No
                                    </label>
                                </div>
                                </div>
                            )}
                        />
                    </FormControl>
            </div>

            {/* Special Requirements Section */}
            <div className="mt-6">
                <h3 className="text-lg font-raleway font-medium mb-4">Special Requirements (if applicable)</h3>

                {/* Temperature Control */}
                <div className="mb-4">
                    <FormControl>
                        <Controller
                            control={control}
                            name="consolidated_data.temperature_control"
                            render={({ field }) => (
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                    <span className="text-sm">Requires Temperature Control</span>
                                </div>
                            )}
                        />
                    </FormControl>

                {/* Temperature Range */}
                {temperatureControl && (
                        <div className="mt-2 ml-2 sm:ml-6">
                        <FormItem>
                                <FormLabel className="text-sm">Required Temperature Range:</FormLabel>
                            <FormControl>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <Controller
                                            control={control}
                                            name="consolidated_data.temperature_min"
                                            render={({ field: minField }) => (
                                                <Input
                                                    type="number"
                                                    className="w-full max-w-[80px] border-2 border-blue-300 rounded-xl"
                                                    placeholder="Min"
                                                    {...minField}
                                                    onChange={(e) => minField.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            )}
                                        />
                                        <span className="text-sm">°C</span>
                                    </div>
                                    <span className="text-sm">to</span>
                                    <div className="flex items-center gap-2">
                                        <Controller
                                            control={control}
                                            name="consolidated_data.temperature_max"
                                            render={({ field: maxField }) => (
                                                <Input
                                                    type="number"
                                                    className="w-full max-w-[80px] border-2 border-blue-300 rounded-xl"
                                                    placeholder="Max"
                                                    {...maxField}
                                                    onChange={(e) => maxField.onChange(parseFloat(e.target.value) || 0)}
                                                />
                                            )}
                                        />
                                        <span className="text-sm">°C</span>
                                    </div>
                                </div>
                            </FormControl>
                        </FormItem>
                    </div>
                )}
                </div>


            </div>



            {/* Dangerous Goods Section */}
            <div className="mt-6">
                <h3 className="text-lg font-raleway font-medium mb-4">Is any part of the shipment dangerous?</h3>
                    <FormControl>
                        <Controller
                            control={control}
                            name="consolidated_data.dangerous_goods"
                            render={({ field }) => (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={field.value === false}
                                        onCheckedChange={(checked) => field.onChange(checked ? false : true)}
                                        id="dangerous_no"
                                    />
                                    <label htmlFor="dangerous_no" className="text-sm font-medium">
                                        No
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={field.value === true}
                                        onCheckedChange={(checked) => field.onChange(checked ? true : false)}
                                        id="dangerous_yes"
                                    />
                                    <label htmlFor="dangerous_yes" className="text-sm font-medium">
                                        Yes
                                    </label>
                                </div>
                                </div>
                            )}
                        />
                    </FormControl>

                {dangerousGoods && (
                    <div className="mt-4 p-4 border border-red-200 bg-red-50 rounded-lg">
                        <div className="space-y-4">
                            <FormItem>
                                <FormLabel className="text-red-800">UN Number(s) & Class:</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name="consolidated_data.un_number"
                                        render={({ field, fieldState: { error } }) => (
                                            <>
                                                <Input
                                                    className={`w-full border-2 rounded-xl ${error ? 'border-red-500' : 'border-red-300'}`}
                                                    placeholder="e.g., UN1234, Class 3"
                                                    {...field}
                                                />
                                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                                            </>
                                        )}
                                    />
                                </FormControl>
                            </FormItem>

                            <FormItem>
                                <FormLabel className="text-red-800">Special Instructions:</FormLabel>
                                <FormControl>
                                    <Controller
                                        control={control}
                                        name="consolidated_data.special_instructions"
                                        render={({ field }) => (
                                            <Textarea
                                                className="w-full border-2 border-red-300 rounded-xl"
                                                placeholder="Special instructions for dangerous goods handling"
                                                {...field}
                                            />
                                        )}
                                    />
                                </FormControl>
                            </FormItem>
                        </div>
                    </div>
                )}
            </div>

            {/* Note about supporting files */}
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start space-x-2">
                    <div className="text-yellow-600 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-medium text-yellow-800">Important Note</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                            For consolidated entries, you must attach a detailed packing list covering the full cargo breakdown in the Supporting Files section below.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsolidatedForm; 