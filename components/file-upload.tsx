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
            const newFiles = Array.from(e.target.files);
            const currentTotalSize = selectedFiles.reduce((total, file) => total + file.size, 0);
            const newFilesSize = newFiles.reduce((total, file) => total + file.size, 0);
            const combinedTotalSize = currentTotalSize + newFilesSize;

            if (combinedTotalSize > MAX_SIZE_BYTES) {
                setError(`Total file size cannot exceed ${MAX_SIZE_MB}MB`);
                return;
            }

            const updatedFiles = [...selectedFiles, ...newFiles];
            setSelectedFiles(updatedFiles);
            setTotalSize(combinedTotalSize);
            setError('');

            // Update form value
            setValue('supporting_files', updatedFiles);
        }
    };

    const removeFile = (index: number) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        const newTotalSize = updatedFiles.reduce((total, file) => total + file.size, 0);
        
        setSelectedFiles(updatedFiles);
        setTotalSize(newTotalSize);
        setError('');

        // Update form value
        setValue('supporting_files', updatedFiles);
    };

    const clearAllFiles = () => {
        setSelectedFiles([]);
        setTotalSize(0);
        setError('');

        // Update form value
        setValue('supporting_files', []);
    };

    const formatFileSize = (bytes: number): string => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Supporting Files</h2>
            <FormItem>
                <FormLabel>Upload Files {isRequired && <span className="text-red-500">*</span>}</FormLabel>
                <FormControl>
                    <Controller
                        control={control}
                        name="supporting_files"
                        render={({ field, fieldState: { error: fieldError } }) => (
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={triggerFileInput}
                                        className="px-4 py-2"
                                    >
                                        Choose Files
                                    </Button>
                                    {selectedFiles.length > 0 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={clearAllFiles}
                                            className="px-4 py-2 text-red-600 hover:text-red-700"
                                        >
                                            Clear all
                                        </Button>
                                    )}
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
