"use client"
import React from 'react';
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Trash2, Plus } from 'lucide-react';

interface ItemizedTableProps {
    control: any;
}

const ItemizedTable: React.FC<ItemizedTableProps> = ({ control }) => {
    const { watch, setValue } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "itemized_data",
    });

    // Watch all itemized data for calculations
    const itemizedData = watch("itemized_data");

    // Calculate totals
    const totalGrossCBM = itemizedData?.reduce((sum: number, item: any) => sum + (item.gross_cbm || 0), 0) || 0;
    const totalGrossWeight = itemizedData?.reduce((sum: number, item: any) => sum + (item.gross_weight || 0), 0) || 0;

    // Calculate CBM and gross values for a row
    const calculateRowValues = (index: number) => {
        const item = itemizedData?.[index];
        if (!item) return;

        const length = item.length || 0;
        const lengthUnit = item.length_unit || 'cm';
        const width = item.width || 0;
        const widthUnit = item.width_unit || 'cm';
        const height = item.height || 0;
        const heightUnit = item.height_unit || 'cm';
        const quantity = item.quantity || 0;
        const weight = item.weight || 0;

        // Convert all dimensions to meters for CBM calculation
        const lengthInM = lengthUnit === 'cm' ? length / 100 : length;
        const widthInM = widthUnit === 'cm' ? width / 100 : width;
        const heightInM = heightUnit === 'cm' ? height / 100 : height;

        const cbm = lengthInM * widthInM * heightInM;
        const grossCbm = cbm * quantity;
        const grossWeight = weight * quantity;

        setValue(`itemized_data.${index}.cbm`, Math.round(cbm * 1000) / 1000); // Round to 3 decimal places
        setValue(`itemized_data.${index}.gross_cbm`, Math.round(grossCbm * 1000) / 1000);
        setValue(`itemized_data.${index}.gross_weight`, Math.round(grossWeight * 1000) / 1000);
    };

    const addNewRow = () => {
        append({
            commodity: '',
            packaging_type: 'pallets',
            stackable: false,
            quantity: 1,
            length: 0,
            length_unit: 'cm',
            width: 0,
            width_unit: 'cm',
            height: 0,
            height_unit: 'cm',
            weight: 0,
            cbm: 0,
            gross_cbm: 0,
            gross_weight: 0,
            dangerous_goods: false,
            un_number: '',
            class: '',
            remarks: '',
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Itemized Entry by Commodity</h2>
            
            {/* Table Header */}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[1200px] sm:min-w-0">
                    {/* Mobile scroll indicator */}
                    <div className="sm:hidden text-center text-xs text-gray-500 mb-2">
                        ← Swipe to see more columns →
                    </div>
                    <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-10 sm:w-12">#</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium min-w-[120px]">Commodity *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium min-w-[100px]">Packaging Type *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-16 sm:w-auto">Stackable *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-16 sm:w-auto">Quantity *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-24 sm:w-auto">Length *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-24 sm:w-auto">Width *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-24 sm:w-auto">Height *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-20 sm:w-auto">Weight (kg) *</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-16 sm:w-auto">CBM (m³)</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-20 sm:w-auto">Gross CBM (m³)</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-24 sm:w-auto">Gross Weight (kg)</th>
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-20 sm:w-auto">Dangerous Goods *</th>
                            {itemizedData?.some((item: any) => item.dangerous_goods) && (
                                <>
                                    <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium min-w-[120px]">UN Number *</th>
                                    <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium min-w-[100px]">Class *</th>
                                </>
                            )}
                            <th className="border border-gray-300 p-1 sm:p-2 text-left text-xs sm:text-sm font-medium w-16 sm:w-auto">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((field, index) => {
                            const dangerousGoods = watch(`itemized_data.${index}.dangerous_goods`);
                            
                            return (
                                <tr key={field.id} className="hover:bg-gray-50">
                                    {/* Row Number */}
                                    <td className="border border-gray-300 p-1 sm:p-2 text-center text-xs sm:text-sm font-medium bg-gray-50">
                                        {index + 1}
                                    </td>
                                    {/* Commodity */}
                                    <td className="border border-gray-300 p-2">
                                        <Controller
                                            control={control}
                                            name={`itemized_data.${index}.commodity`}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Input
                                                        className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                        placeholder="Enter commodity"
                                                        {...field}
                                                    />
                                                    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                </div>
                                            )}
                                        />
                                    </td>

                                    {/* Packaging Type */}
                                    <td className="border border-gray-300 p-2">
                                        <Controller
                                            control={control}
                                            name={`itemized_data.${index}.packaging_type`}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Select onValueChange={field.onChange} value={field.value || ""}>
                                                        <SelectTrigger className={`w-full border-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}>
                                                            <SelectValue placeholder="Select type" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="pallets">Pallets</SelectItem>
                                                            <SelectItem value="crates">Crates</SelectItem>
                                                            <SelectItem value="boxes">Boxes</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    
                                                    {/* Conditional Other Input */}
                                                    {field.value === 'other' && (
                                                        <div className="mt-2">
                                                            <Controller
                                                                control={control}
                                                                name={`itemized_data.${index}.packaging_type_other`}
                                                                render={({ field: otherField, fieldState: { error: otherError } }) => (
                                                                    <div>
                                                                        <Input
                                                                            className={`w-full border-2 rounded text-xs sm:text-sm ${otherError ? 'border-red-500' : 'border-gray-300'}`}
                                                                            placeholder="(if other open specify)"
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
                                    </td>

                                    {/* Stackable */}
                                    <td className="border border-gray-300 p-2">
                                        <Controller
                                            control={control}
                                            name={`itemized_data.${index}.stackable`}
                                            render={({ field }) => (
                                                <div className="flex items-center justify-center">
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </td>

                                    {/* Quantity */}
                                    <td className="border border-gray-300 p-2">
                                        <Controller
                                            control={control}
                                            name={`itemized_data.${index}.quantity`}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Input
                                                        type="number"
                                                        min="1"
                                                        className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                        placeholder="1"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(parseInt(e.target.value) || 0);
                                                            calculateRowValues(index);
                                                        }}
                                                    />
                                                    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                </div>
                                            )}
                                        />
                                    </td>

                                    {/* Length */}
                                    <td className="border border-gray-300 p-2">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`itemized_data.${index}.length`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div className="flex-1">
                                                        <Input
                                                            type="number"
                                                            min="0"
                                                            className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="0"
                                                            {...field}
                                                            onChange={(e) => {
                                                                field.onChange(parseFloat(e.target.value) || 0);
                                                                calculateRowValues(index);
                                                            }}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`itemized_data.${index}.length_unit`}
                                                render={({ field }) => (
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value);
                                                        calculateRowValues(index);
                                                    }} value={field.value || ""}>
                                                        <SelectTrigger className="w-20 border-2 rounded text-xs sm:text-sm">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cm">cm</SelectItem>
                                                            <SelectItem value="m">m</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                    </td>

                                    {/* Width */}
                                    <td className="border border-gray-300 p-2">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`itemized_data.${index}.width`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div className="flex-1">
                                                        <Input
                                                            type="number"
                                                            min="0"
                                                            className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="0"
                                                            {...field}
                                                            onChange={(e) => {
                                                                field.onChange(parseFloat(e.target.value) || 0);
                                                                calculateRowValues(index);
                                                            }}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`itemized_data.${index}.width_unit`}
                                                render={({ field }) => (
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value);
                                                        calculateRowValues(index);
                                                    }} value={field.value || ""}>
                                                        <SelectTrigger className="w-20 border-2 rounded text-xs sm:text-sm">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cm">cm</SelectItem>
                                                            <SelectItem value="m">m</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                    </td>

                                    {/* Height */}
                                    <td className="border border-gray-300 p-2">
                                        <div className="flex gap-1">
                                            <Controller
                                                control={control}
                                                name={`itemized_data.${index}.height`}
                                                render={({ field, fieldState: { error } }) => (
                                                    <div className="flex-1">
                                                        <Input
                                                            type="number"
                                                            min="0"
                                                            className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="0"
                                                            {...field}
                                                            onChange={(e) => {
                                                                field.onChange(parseFloat(e.target.value) || 0);
                                                                calculateRowValues(index);
                                                            }}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                            <Controller
                                                control={control}
                                                name={`itemized_data.${index}.height_unit`}
                                                render={({ field }) => (
                                                    <Select onValueChange={(value) => {
                                                        field.onChange(value);
                                                        calculateRowValues(index);
                                                    }} value={field.value || ""}>
                                                        <SelectTrigger className="w-20 border-2 rounded text-xs sm:text-sm">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="cm">cm</SelectItem>
                                                            <SelectItem value="m">m</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                )}
                                            />
                                        </div>
                                    </td>

                                    {/* Weight */}
                                    <td className="border border-gray-300 p-2">
                                        <Controller
                                            control={control}
                                            name={`itemized_data.${index}.weight`}
                                            render={({ field, fieldState: { error } }) => (
                                                <div>
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        className={`w-full border-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                        placeholder="0"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(parseFloat(e.target.value) || 0);
                                                            calculateRowValues(index);
                                                        }}
                                                    />
                                                    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                </div>
                                            )}
                                        />
                                    </td>

                                    {/* CBM (Auto-calculated) */}
                                    <td className="border border-gray-300 p-2">
                                        <Input
                                            className="w-full border-2 rounded bg-gray-100 text-xs sm:text-sm"
                                            value={itemizedData?.[index]?.cbm || 0}
                                            readOnly
                                        />
                                    </td>

                                    {/* Gross CBM (Auto-calculated) */}
                                    <td className="border border-gray-300 p-2">
                                        <Input
                                            className="w-full border-2 rounded bg-gray-100 text-xs sm:text-sm"
                                            value={itemizedData?.[index]?.gross_cbm || 0}
                                            readOnly
                                        />
                                    </td>

                                    {/* Gross Weight (Auto-calculated) */}
                                    <td className="border border-gray-300 p-2">
                                        <Input
                                            className="w-full border-2 rounded bg-gray-100 text-xs sm:text-sm"
                                            value={itemizedData?.[index]?.gross_weight || 0}
                                            readOnly
                                        />
                                    </td>

                                    {/* Dangerous Goods */}
                                    <td className="border border-gray-300 p-2">
                                        <Controller
                                            control={control}
                                            name={`itemized_data.${index}.dangerous_goods`}
                                            render={({ field }) => (
                                                <div className="flex items-center justify-center">
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </td>

                                    {/* Conditional UN Number and Class columns */}
                                    {itemizedData?.some((item: any) => item.dangerous_goods) && (
                                        <>
                                            {/* UN Number */}
                                            <td className="border border-gray-300 p-2">
                                                {dangerousGoods ? (
                                                    <Controller
                                                        control={control}
                                                        name={`itemized_data.${index}.un_number`}
                                                        render={({ field, fieldState: { error } }) => (
                                                            <div>
                                                                <Input
                                                                    className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                                    placeholder="e.g., UN1234"
                                                                    {...field}
                                                                />
                                                                {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="text-gray-400 text-xs text-center">-</div>
                                                )}
                                            </td>

                                            {/* Class */}
                                            <td className="border border-gray-300 p-2">
                                                {dangerousGoods ? (
                                                    <Controller
                                                        control={control}
                                                        name={`itemized_data.${index}.class`}
                                                        render={({ field, fieldState: { error } }) => (
                                                            <div>
                                                                <Input
                                                                    className={`w-full border-2 rounded text-xs sm:text-sm ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                                    placeholder="e.g., Class 3"
                                                                    {...field}
                                                                />
                                                                {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                            </div>
                                                        )}
                                                    />
                                                ) : (
                                                    <div className="text-gray-400 text-xs text-center">-</div>
                                                )}
                                            </td>
                                        </>
                                    )}

                                    {/* Actions */}
                                    <td className="border border-gray-300 p-2">
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            onClick={() => remove(index)}
                                            disabled={fields.length === 1}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                </div>
            </div>



            {/* Add Row Button */}
            <div className="mt-4">
                <Button
                    type="button"
                    onClick={addNewRow}
                    className="flex items-center gap-2"
                >
                    <Plus className="h-4 w-4" />
                    Add Row
                </Button>
            </div>

            {/* Totals */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Totals</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="font-medium">Total Gross CBM:</span>
                        <span className="ml-2 text-lg font-bold">{totalGrossCBM.toFixed(3)} m³</span>
                    </div>
                    <div>
                        <span className="font-medium">Total Gross Weight:</span>
                        <span className="ml-2 text-lg font-bold">{totalGrossWeight.toFixed(2)} kg</span>
                    </div>
                </div>
            </div>

            {/* Special Requirements */}
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Special Requirements (if applicable)</h3>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Controller
                            control={control}
                            name="temperature_control"
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(checked === true)}
                                    id="temperature-control"
                                />
                            )}
                        />
                        <label
                            htmlFor="temperature-control"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Requires Temperature Control
                        </label>
                    </div>
                    
                    <Controller
                        control={control}
                        name="temperature_control"
                        render={({ field: { value } }) => (
                            value && (
                                <div className="ml-2 sm:ml-6">
                                    <label className="text-sm font-medium">Required Temperature Range:</label>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                                        <div className="flex items-center gap-2">
                                            <Controller
                                                control={control}
                                                name="temperature_min"
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Input
                                                            type="number"
                                                            className={`w-full max-w-[80px] border-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="Min"
                                                            {...field}
                                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                            <span className="text-sm">°C</span>
                                        </div>
                                        <span className="text-sm">to</span>
                                        <div className="flex items-center gap-2">
                                            <Controller
                                                control={control}
                                                name="temperature_max"
                                                render={({ field, fieldState: { error } }) => (
                                                    <div>
                                                        <Input
                                                            type="number"
                                                            className={`w-full max-w-[80px] border-2 rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
                                                            placeholder="Max"
                                                            {...field}
                                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                                        />
                                                        {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
                                                    </div>
                                                )}
                                            />
                                            <span className="text-sm">°C</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default ItemizedTable; 