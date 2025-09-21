"use client"
import React from 'react';
import { Controller, useFieldArray, Control, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";

interface ContainerDetailsTableProps {
    control: Control<any>;
    setValue: UseFormSetValue<any>;
    watch: UseFormWatch<any>;
}

const ContainerDetailsTable: React.FC<ContainerDetailsTableProps> = ({ 
    control, 
    setValue, 
    watch 
}) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "container_details",
    });

    // Watch all container details for calculations
    const containerDetails = watch("container_details");

    // Calculate total weight
    const totalWeight = containerDetails?.reduce((sum: number, item: any) => sum + (item.gross_weight || 0), 0) || 0;

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
            container_type: '',
            quantity: 0,
            commodity: '',
            weight_per_container: 0,
            weight_unit: 'kg',
            gross_weight: 0,
            dangerous: 'no',
            container_ownership: 'no',
            notes: '',
            un_class_remarks: ''
        });
    };

    const calculateGrossWeight = (quantity: number, weightPerContainer: number) => {
        return quantity * weightPerContainer;
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Container Details</h2>
            </div>

            {/* Table */}
            <div className="relative">
                <div className="overflow-x-auto border border-gray-200 rounded-lg" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <table className="w-full min-w-[1200px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Row #</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Container Type</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Quantity</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Commodity</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Weight Per Container</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Gross Weight</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Dangerous</th>
                                {fields.some((_, index) => watch(`container_details.${index}.dangerous`) === 'yes') && (
                                    <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">UN/Class/Remarks</th>
                                )}
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Container Ownership</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Notes (Optional)</th>
                                <th className="px-3 sm:px-4 py-3 text-left text-sm font-semibold text-gray-700 whitespace-nowrap">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fields.map((field, index) => {
                                const containerType = watch(`container_details.${index}.container_type`);
                                const quantity = watch(`container_details.${index}.quantity`) || 0;
                                const weightPerContainer = watch(`container_details.${index}.weight_per_container`) || 0;
                                const isDangerous = watch(`container_details.${index}.dangerous`) === 'yes';
                                const isStandard = isStandardContainer(containerType);

                                return (
                                    <tr key={field.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        {/* Row Number */}
                                        <td className="px-3 sm:px-4 py-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                                            {index + 1}
                                        </td>

                                        {/* Container Type */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`container_details.${index}.container_type`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                                            <SelectTrigger className="w-full border border-gray-200 rounded-md text-sm">
                                                                <SelectValue placeholder="Select container type" />
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
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                        </td>

                                        {/* Quantity */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`container_details.${index}.quantity`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Input
                                                            type="number"
                                                            min="1"
                                                            className="w-full border-2 rounded-xl text-center"
                                                            placeholder="0"
                                                            value={field.value || ''} // Ensure controlled input
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                // Convert to number, or set to 0 if empty/invalid
                                                                const numValue = value === '' ? 0 : parseInt(value) || 0;
                                                                field.onChange(numValue);
                                                                
                                                                // Calculate gross weight when quantity changes
                                                                const weightPerContainer = watch(`container_details.${index}.weight_per_container`) || 0;
                                                                const grossWeight = calculateGrossWeight(numValue, weightPerContainer);
                                                                setValue(`container_details.${index}.gross_weight`, grossWeight);
                                                            }}
                                                            required={!isStandard}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                        </td>

                                        {/* Commodity */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`container_details.${index}.commodity`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Input
                                                            className="w-full border border-gray-200 rounded-md text-sm"
                                                            placeholder="Commodity"
                                                            {...field}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                        </td>

                                        {/* Weight Per Container */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <div className="flex items-center space-x-2">
                                                <Controller
                                                    control={control}
                                                    name={`container_details.${index}.weight_per_container`}
                                                    render={({ field, fieldState: { error } }) => (
                                                        <div>
                                                            <Input
                                                                type="number"
                                                                step="0.01"
                                                                min="0"
                                                                className={`w-24 border-2 rounded-xl text-center ${!isStandard ? 'border-red-300' : ''}`}
                                                                placeholder="0.00"
                                                                value={field.value || ''} // Ensure controlled input
                                                                onChange={(e) => {
                                                                    const value = e.target.value;
                                                                    // Convert to number, or set to 0 if empty/invalid
                                                                    const numValue = value === '' ? 0 : parseFloat(value) || 0;
                                                                    field.onChange(numValue);
                                                                    
                                                                    // Calculate gross weight when weight changes
                                                                    const quantity = watch(`container_details.${index}.quantity`) || 0;
                                                                    const grossWeight = calculateGrossWeight(quantity, numValue);
                                                                    setValue(`container_details.${index}.gross_weight`, grossWeight);
                                                                }}
                                                                required={!isStandard}
                                                            />
                                                            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                        </div>
                                                    )}
                                                />
                                                <Select 
                                                    onValueChange={(value) => setValue(`container_details.${index}.weight_unit`, value)} 
                                                    value={watch(`container_details.${index}.weight_unit`) || 'kg'}
                                                >
                                                    <SelectTrigger className={`w-20 border border-gray-200 rounded-md text-sm ${!isStandard ? 'border-red-300' : ''}`}>
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="kg">kg</SelectItem>
                                                        <SelectItem value="ton">ton</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </td>

                                        {/* Gross Weight */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <Input
                                                type="number"
                                                className="w-full border border-gray-200 rounded-md text-sm bg-gray-50"
                                                value={calculateGrossWeight(quantity, weightPerContainer)}
                                                readOnly
                                            />
                                        </td>

                                        {/* Dangerous */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`container_details.${index}.dangerous`}
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
                                        {fields.some((_, idx) => watch(`container_details.${idx}.dangerous`) === 'yes') && (
                                            <td className="px-3 sm:px-4 py-3">
                                                <Controller
                                                    control={control}
                                                    name={`container_details.${index}.un_class_remarks`}
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
                                        <td className="px-3 sm:px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`container_details.${index}.container_ownership`}
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
                                        <td className="px-3 sm:px-4 py-3">
                                            <Controller
                                                control={control}
                                                name={`container_details.${index}.notes`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Input
                                                            className="w-full border border-gray-200 rounded-md text-sm"
                                                            placeholder="Notes (optional)"
                                                            {...field}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                        </td>

                                        {/* Actions */}
                                        <td className="px-3 sm:px-4 py-3">
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                onClick={() => remove(index)}
                                                className="h-8 w-8 p-0"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
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

            {/* Add Row Button - Under the table on the left */}
            <div className="flex justify-start mt-4">
                <Button
                    type="button"
                    onClick={addNewRow}
                    className="flex items-center space-x-2 px-4 py-2"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Row</span>
                </Button>
            </div>
        </div>
    );
};

export default ContainerDetailsTable; 