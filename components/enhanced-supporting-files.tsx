"use client"
import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from 'lucide-react';

interface EnhancedSupportingFilesProps {
    control: Control<any>;
    name: string;
    cargoPictureName?: string;
    showCargoPicture?: boolean;
    title?: string;
    description?: string;
}

const EnhancedSupportingFiles: React.FC<EnhancedSupportingFilesProps> = ({
    control,
    name,
    cargoPictureName = "supporting_files.cargo_picture",
    showCargoPicture = true,
    title = "Supporting files (Optional)",
    description = "Max total size 20 MB. File types supported: PDF, JPEG, GIF, PNG, Word, Excel and PowerPoint"
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-raleway font-medium mb-4">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            
            <div className="space-y-4">
                {/* Cargo Picture Checkbox */}
                {showCargoPicture && (
                    <FormItem>
                        <FormControl>
                            <Controller
                                control={control}
                                name={cargoPictureName}
                                render={({ field }) => (
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                            id="cargo_picture"
                                        />
                                        <label htmlFor="cargo_picture" className="text-sm font-medium">
                                            I wish to upload cargo picture with lifting points
                                        </label>
                                    </div>
                                )}
                            />
                        </FormControl>
                    </FormItem>
                )}

                {/* File Upload with Management */}
                <FormItem>
                    <FormControl>
                        <Controller
                            control={control}
                            name={name}
                            render={({ field }) => {
                                const files = field.value || [];
                                const totalSize = files.reduce((sum: number, file: File) => sum + file.size, 0);
                                const maxSize = 20 * 1024 * 1024; // 20MB in bytes
                                const remainingSize = maxSize - totalSize;

                                const handleFileAdd = (newFiles: FileList | null) => {
                                    if (!newFiles) return;
                                    
                                    const fileArray = Array.from(newFiles);
                                    const validFiles = fileArray.filter(file => {
                                        const validTypes = [
                                            'application/pdf',
                                            'image/jpeg',
                                            'image/jpg', 
                                            'image/gif',
                                            'image/png',
                                            'application/msword',
                                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                                            'application/vnd.ms-excel',
                                            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                            'application/vnd.ms-powerpoint',
                                            'application/vnd.openxmlformats-officedocument.presentationml.presentation'
                                        ];
                                        return validTypes.includes(file.type);
                                    });

                                    const newFilesSize = validFiles.reduce((sum, file) => sum + file.size, 0);
                                    
                                    if (totalSize + newFilesSize > maxSize) {
                                        alert(`Total file size would exceed 20MB limit. Remaining space: ${Math.round(remainingSize / (1024 * 1024))}MB`);
                                        return;
                                    }

                                    field.onChange([...files, ...validFiles]);
                                };

                                const removeFile = (index: number) => {
                                    const newFiles = files.filter((_: File, i: number) => i !== index);
                                    field.onChange(newFiles);
                                };

                                const formatFileSize = (bytes: number) => {
                                    if (bytes === 0) return '0 Bytes';
                                    const k = 1024;
                                    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                                    const i = Math.floor(Math.log(bytes) / Math.log(k));
                                    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
                                };

                                return (
                                    <div className="space-y-4">
                                        {/* File Upload Input */}
                                        <div className="space-y-2">
                                            <Input
                                                type="file"
                                                multiple
                                                accept=".pdf,.jpg,.jpeg,.gif,.png,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                                                className="max-w-md"
                                                onChange={(e) => handleFileAdd(e.target.files)}
                                            />
                                            <p className="text-xs text-gray-500">
                                                Remaining space: {formatFileSize(remainingSize)} / {formatFileSize(maxSize)}
                                            </p>
                                        </div>

                                        {/* Uploaded Files List */}
                                        {files.length > 0 && (
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-medium text-gray-700">Uploaded Files ({files.length})</h4>
                                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                                    {files.map((file: File, index: number) => (
                                                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border">
                                                            <div className="flex items-center space-x-2 flex-1 min-w-0">
                                                                <div className="flex-shrink-0">
                                                                    {file.type.startsWith('image/') ? (
                                                                        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                                                                            <span className="text-xs text-blue-600">IMG</span>
                                                                        </div>
                                                                    ) : file.type === 'application/pdf' ? (
                                                                        <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                                                                            <span className="text-xs text-red-600">PDF</span>
                                                                        </div>
                                                                    ) : (
                                                                        <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                                                                            <span className="text-xs text-green-600">DOC</span>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <p className="text-sm font-medium text-gray-900 truncate">
                                                                        {file.name}
                                                                    </p>
                                                                    <p className="text-xs text-gray-500">
                                                                        {formatFileSize(file.size)}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFile(index)}
                                                                className="flex-shrink-0 ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                                                                title="Remove file"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Total size: {formatFileSize(totalSize)} / {formatFileSize(maxSize)}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            }}
                        />
                    </FormControl>
                </FormItem>
            </div>
        </div>
    );
};

export default EnhancedSupportingFiles;
