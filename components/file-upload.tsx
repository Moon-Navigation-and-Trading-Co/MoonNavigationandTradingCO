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
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { setValue } = useFormContext();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const files = Array.from(e.target.files);
            setSelectedFiles(files);
            // Convert files to a string representation for the form
            const fileNames = files.map(file => file.name).join(', ');
            setValue('supportingFiles', fileNames);
        }
    };

    const openFileDialog = () => {
        fileInputRef.current?.click();
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
                        name="supportingFiles"
                        render={({ fieldState: { error } }) => (
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
                                            ? `${selectedFiles.length} file(s) selected` 
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
                                                <li key={index} className="flex items-center justify-between">
                                                    <span>{file.name}</span>
                                                    <span className="text-xs text-gray-500">
                                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* File Constraints */}
                                <p className="text-sm text-gray-500">
                                    Max size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint
                                </p>

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

                                {/* Error Message */}
                                {error && (
                                    <p className="text-red-500 text-sm">{error.message}</p>
                                )}
                            </div>
                        )}
                    />
                </FormControl>
            </FormItem>
        </div>
    );
};

export default FileUpload;
