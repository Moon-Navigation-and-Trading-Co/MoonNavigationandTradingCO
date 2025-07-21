import React, { ButtonHTMLAttributes } from "react";

interface RequestQuoteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const RequestQuoteButton: React.FC<RequestQuoteButtonProps> = ({ 
  children = "Request a Quote", 
  variant = "primary",
  size = "md",
  className = "",
  ...props 
}) => {
  const baseClasses = "font-raleway font-regular rounded-md flex items-center justify-center transition-colors duration-200";
  
  const sizeClasses = {
    sm: "h-8 px-3 py-1 text-sm",
    md: "h-10 px-4 py-2 text-base",
    lg: "h-12 px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-[#011f4b] text-white hover:bg-[#022c6a]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-[#011f4b] text-[#011f4b] hover:bg-[#011f4b] hover:text-white"
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RequestQuoteButton;
