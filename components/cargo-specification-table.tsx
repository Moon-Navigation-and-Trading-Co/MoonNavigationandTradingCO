"use client"
import React, { useState } from 'react';
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Plus, Minus } from 'lucide-react';

interface CargoSpecificationTableProps {
    control: any;
}

const CargoSpecificationTable: React.FC<CargoSpecificationTableProps> = ({ control }) => {
    const { watch } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "cargo_specifications",
    });

    // Watch all cargo specifications for calculations
    const cargoSpecifications = watch("cargo_specifications");

    // Calculate total weight
    const totalWeight = cargoSpecifications?.reduce((sum: number, item: any) => sum + (item.gross_weight || 0), 0) || 0;

    const standardContainerTypes = [
        "20' Dry Container",
        "40' Dry Container",
        "40' High Cube Dry Container",
        "20' Tank Container",
        "40' Tank Container",
        "20' Standard Reefer Container",
        "40' Standard Reefer Container",
        "40' High Cube Reefer Container"
    ];

    const specialContainerTypes = [
        "20' Open Top Container",
        "40' Open Top Container",
        "40' High Cube Open Top Container",
        "20' Flat Rack Container",
        "40' Flat Rack Container"
    ];

    const allContainerTypes = [...standardContainerTypes, ...specialContainerTypes];

    const isStandardContainer = (containerType: string) => {
        return standardContainerTypes.includes(containerType);
    };

    const addNewRow = () => {
        append({
            commodity: '',
            container_type: '',
            package_type: '',
            quantity: 0,
            length: 0,
            length_unit: 'cm',
            width: 0,
            width_unit: 'cm',
            height: 0,
            height_unit: 'cm',
            weight: 0,
            weight_unit: 'kg',
            gross_weight: 0,
            dangerous: 'no',
            un_class_remarks: '',
            container_ownership: 'no',
            notes: '',
            only_cm: false
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 overflow-hidden">
            <h2 className="text-xl font-semibold mb-6">Cargo Specification Table</h2>
            
            {/* Surcharge Notice */}
            <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                    <div className="text-yellow-600 mt-0.5">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4 className="font-medium text-yellow-800">Important Notice</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                            <strong>An additional surcharge is applicable if the weight of the cargo exceeds 28,000 kg subject to terminal approval.</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="relative">
                <div className="overflow-x-auto border border-gray-200 rounded-lg" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <table className="w-full min-w-[1200px]">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Row #</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Commodity</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Container Type</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Package Type (Optional)</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Quantity</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Length</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Width</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Height</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Weight</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Gross Weight</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Dangerous</th>
                            {fields.some((_, index) => watch(`cargo_specifications.${index}.dangerous`) === 'yes') && (
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">UN/Class/Remarks</th>
                            )}
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Container Ownership</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Notes (Optional)</th>
                            <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((field, index) => {
                            const rowData = watch(`cargo_specifications.${index}`);
                            const isDangerous = rowData?.dangerous === 'yes';
                            const onlyCm = rowData?.only_cm;
                            const isStandard = isStandardContainer(rowData?.container_type || '');
                            
                            // Auto-calculate gross weight
                            const quantity = rowData?.quantity || 0;
                            const weight = rowData?.weight || 0;
                            const grossWeight = quantity * weight;

                            return (
                                <tr key={field.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    {/* Row Number */}
                                    <td className="px-3 sm:px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                                        {index + 1}
                                    </td>
                                    {/* Commodity */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.commodity`}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    className="w-full border border-gray-200 rounded-md text-sm"
                                                    placeholder="Enter commodity"
                                                />
                                            )}
                                        />
                                    </td>

                                    {/* Container Type */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.container_type`}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value || ""}>
                                                    <SelectTrigger className="w-full border border-gray-200 rounded-md text-sm">
                                                        <SelectValue placeholder="Select type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 bg-gray-50">STANDARD CONTAINERS</div>
                                                        {standardContainerTypes.map((type: string) => (
                                                            <SelectItem key={type} value={type}>
                                                                {type}
                                                            </SelectItem>
                                                        ))}
                                                        <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 bg-gray-50">SPECIAL CONTAINERS</div>
                                                        {specialContainerTypes.map((type: string) => (
                                                            <SelectItem key={type} value={type}>
                                                                {type}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                    </td>

                                    {/* Package Type */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.package_type`}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    className="w-full border border-gray-200 rounded-md text-sm"
                                                    placeholder="e.g., pallet, crate"
                                                />
                                            )}
                                        />
                                    </td>

                                    {/* Quantity */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.quantity`}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    type="number"
                                                    min="1"
                                                    className="w-full border border-gray-200 rounded-md text-sm"
                                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                />
                                            )}
                                        />
                                    </td>

                                    {/* Length */}
                                    <td className="px-4 py-3">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.length`}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        className={`w-20 border border-gray-200 rounded-md text-sm ${isStandard ? 'bg-gray-100 text-gray-400' : ''}`}
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        disabled={isStandard}
                                                        placeholder={isStandard ? "Auto" : ""}
                                                    />
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.length_unit`}
                                                render={({ field }) => (
                                                    <Select 
                                                        onValueChange={field.onChange} 
                                                        value={field.value || ""}
                                                        disabled={onlyCm || isStandard}
                                                    >
                                                        <SelectTrigger className={`w-20 border border-gray-200 rounded-md text-sm ${isStandard ? 'bg-gray-100' : ''}`}>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cm">CM</SelectItem>
                                                            <SelectItem value="m">M</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                    </td>

                                    {/* Width */}
                                    <td className="px-4 py-3">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.width`}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        className={`w-20 border border-gray-200 rounded-md text-sm ${isStandard ? 'bg-gray-100 text-gray-400' : ''}`}
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        disabled={isStandard}
                                                        placeholder={isStandard ? "Auto" : ""}
                                                    />
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.width_unit`}
                                                render={({ field }) => (
                                                    <Select 
                                                        onValueChange={field.onChange} 
                                                        value={field.value || ""}
                                                        disabled={onlyCm || isStandard}
                                                    >
                                                        <SelectTrigger className={`w-20 border border-gray-200 rounded-md text-sm ${isStandard ? 'bg-gray-100' : ''}`}>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cm">CM</SelectItem>
                                                            <SelectItem value="m">M</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                    </td>

                                    {/* Height */}
                                    <td className="px-4 py-3">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.height`}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        className={`w-20 border border-gray-200 rounded-md text-sm ${isStandard ? 'bg-gray-100 text-gray-400' : ''}`}
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        disabled={isStandard}
                                                        placeholder={isStandard ? "Auto" : ""}
                                                    />
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.height_unit`}
                                                render={({ field }) => (
                                                    <Select 
                                                        onValueChange={field.onChange} 
                                                        value={field.value || ""}
                                                        disabled={onlyCm || isStandard}
                                                    >
                                                        <SelectTrigger className={`w-20 border border-gray-200 rounded-md text-sm ${isStandard ? 'bg-gray-100' : ''}`}>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cm">CM</SelectItem>
                                                            <SelectItem value="m">M</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                    </td>

                                    {/* Weight */}
                                    <td className="px-4 py-3">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.weight`}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        className={`w-20 border border-gray-200 rounded-md text-sm ${!isStandard ? 'border-red-300' : ''}`}
                                                        onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        placeholder={!isStandard ? "Required" : ""}
                                                        required={!isStandard}
                                                    />
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.weight_unit`}
                                                render={({ field }) => (
                                                    <Select onValueChange={field.onChange} value={field.value || ""}>
                                                        <SelectTrigger className={`w-16 border border-gray-200 rounded-md text-sm ${!isStandard ? 'border-red-300' : ''}`}>
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
                                    </td>

                                    {/* Gross Weight (Read-only) */}
                                    <td className="px-4 py-3">
                                        <Input
                                            value={grossWeight.toFixed(2)}
                                            className="w-full border border-gray-200 rounded-md text-sm bg-gray-50"
                                            readOnly
                                        />
                                    </td>

                                    {/* Dangerous */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.dangerous`}
                                            render={({ field }) => (
                                                <Checkbox
                                                    checked={field.value === 'yes'}
                                                    onCheckedChange={(checked) => field.onChange(checked ? 'yes' : 'no')}
                                                    id={`dangerous_${index}`}
                                                />
                                            )}
                                        />
                                    </td>

                                    {/* UN/Class/Remarks */}
                                    {fields.some((_, idx) => watch(`cargo_specifications.${idx}.dangerous`) === 'yes') && (
                                        <td className="px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`cargo_specifications.${index}.un_class_remarks`}
                                                render={({ field }) => (
                                                    <Input
                                                        {...field}
                                                        className={`w-full border border-gray-200 rounded-md text-sm ${!isDangerous ? 'bg-gray-50 text-gray-400' : ''}`}
                                                        placeholder={isDangerous ? "UN/Class/Remarks" : "Not applicable"}
                                                        disabled={!isDangerous}
                                                    />
                                                )}
                                            />
                                        </td>
                                    )}

                                    {/* Container Ownership */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.container_ownership`}
                                            render={({ field }) => (
                                                <Checkbox
                                                    checked={field.value === 'yes'}
                                                    onCheckedChange={(checked) => field.onChange(checked ? 'yes' : 'no')}
                                                    id={`container_ownership_${index}`}
                                                />
                                            )}
                                        />
                                    </td>

                                    {/* Notes */}
                                    <td className="px-4 py-3">
                                        <Controller
                                            control={control}
                                            name={`cargo_specifications.${index}.notes`}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    className="w-full border border-gray-200 rounded-md text-sm"
                                                    placeholder="Additional notes"
                                                />
                                            )}
                                        />
                                    </td>

                                    {/* Actions */}
                                    <td className="px-4 py-3">
                                        {fields.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                onClick={() => remove(index)}
                                                className="h-8 w-8 p-0"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            </div>

            {/* Totals */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Totals</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <span className="font-medium">Total Weight:</span>
                        <span className="ml-2 text-lg font-bold">{totalWeight.toFixed(2)} kg</span>
                    </div>
                </div>
            </div>

            {/* Add Row Button */}
            <div className="mt-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={addNewRow}
                    className="flex items-center gap-2"
                >
                    <Plus className="h-4 w-4" />
                    Add Row
                </Button>
            </div>
        </div>
    );
};

export default CargoSpecificationTable; 