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
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-300",
    secondary: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
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
