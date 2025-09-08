"use client"
import React, { useState, useRef } from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from './ui/checkbox';
import { Button } from "@/components/ui/button";

interface FileUploadProps {
    control: any;
    isRequired?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ control, isRequired = false }) => {
    const [cargoPictureChecked, setCargoPictureChecked] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [totalSize, setTotalSize] = useState(0);
    const [error, setError] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { setValue } = useFormContext();

    const MAX_SIZE_MB = 20;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const files = Array.from(e.target.files);
            const newTotalSize = files.reduce((total, file) => total + file.size, 0);
            
            // Check if total size exceeds limit
            if (newTotalSize > MAX_SIZE_BYTES) {
                setError(`Total file size exceeds ${MAX_SIZE_MB}MB limit. Current total: ${(newTotalSize / 1024 / 1024).toFixed(2)}MB`);
                return;
            }

            // Check individual file size (optional - you can remove this if you want)
            const oversizedFiles = files.filter(file => file.size > MAX_SIZE_BYTES);
            if (oversizedFiles.length > 0) {
                setError(`Some files exceed ${MAX_SIZE_MB}MB limit. Please select smaller files.`);
                return;
            }

            // Clear any previous errors
            setError('');
            
            setSelectedFiles(files);
            setTotalSize(newTotalSize);
            
            // Convert files to a string representation for the form
            const fileNames = files.map(file => file.name).join(', ');
            setValue('supporting_files', fileNames);
        }
    };

    const removeFile = (index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        const newTotalSize = newFiles.reduce((total, file) => total + file.size, 0);
        
        setSelectedFiles(newFiles);
        setTotalSize(newTotalSize);
        setError('');
        
        // Update form value
        const fileNames = newFiles.map(file => file.name).join(', ');
        setValue('supporting_files', fileNames);
    };

    const openFileDialog = () => {
        setError(''); // Clear errors when opening dialog
        fileInputRef.current?.click();
    };

    const formatFileSize = (bytes: number) => {
        return (bytes / 1024 / 1024).toFixed(2);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <FormItem>
                <FormLabel className="text-xl font-semibold mb-4">
                    Supporting Files {!isRequired && "(Optional)"}
                </FormLabel>
                
                <FormControl>
                    <Controller
                        control={control}
                        name="supporting_files"
                        render={({ fieldState: { error: fieldError } }) => (
                            <div className="space-y-4">
                                {/* File Upload Input */}
                                <div className="flex items-center gap-2">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={openFileDialog}
                                        className="px-4 py-2"
                                    >
                                        Choose files
                                    </Button>
                                    <span className="text-gray-500">
                                        {selectedFiles.length > 0 
                                            ? `${selectedFiles.length} file(s) selected (${formatFileSize(totalSize)}MB)` 
                                            : "No file chosen"
                                        }
                                    </span>
                                </div>

                                {/* Hidden file input */}
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    multiple
                                    accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                {/* Selected files list */}
                                {selectedFiles.length > 0 && (
                                    <div className="mt-2">
                                        <p className="text-sm font-medium text-gray-700 mb-2">Selected files:</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {selectedFiles.map((file, index) => (
                                                <li key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                                                    <span className="flex-1">{file.name}</span>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-gray-500">
                                                            {formatFileSize(file.size)} MB
                                                        </span>
                                                        <Button
                                                            type="button"
                                                            variant="ghost"
                                                            
                                                            onClick={() => removeFile(index)}
                                                            className="text-red-500 hover:text-red-700 p-1 h-auto"
                                                        >
                                                            ✕
                                                        </Button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-2 text-sm text-gray-600">
                                            <strong>Total size: {formatFileSize(totalSize)}MB / {MAX_SIZE_MB}MB</strong>
                                        </div>
                                    </div>
                                )}

                                {/* File Constraints */}
                                <p className="text-sm text-gray-500">
                                    Max total size: {MAX_SIZE_MB}MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint
                                </p>

                                {/* Error Messages */}
                                {(error || fieldError) && (
                                    <p className="text-red-500 text-sm">
                                        {error || fieldError?.message}
                                    </p>
                                )}

                                {/* Cargo Picture Checkbox */}
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        checked={cargoPictureChecked}
                                        onCheckedChange={(checked) => setCargoPictureChecked(checked === true)}
                                        id="cargo-picture"
                                    />
                                    <label
                                        htmlFor="cargo-picture"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I wish to upload cargo picture with lifting points
                                    </label>
                                </div>
                            </div>
                        )}
                    />
                </FormControl>
            </FormItem>
        </div>
    );
};

export default FileUpload;
