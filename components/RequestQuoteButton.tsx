import React, { ButtonHTMLAttributes } from "react";

interface RequestQuoteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const RequestQuoteButton: React.FC<RequestQuoteButtonProps> = ({ 
  children = "Request a Quote", 
  variant = "primary",
  className = "",
  ...props 
}) => {
  const baseClasses = "font-bold font-raleway rounded-[5px] px-6 py-2 text-base flex items-center justify-center transition-colors duration-200";
  
  const variantClasses = {
    primary: "bg-[#283593] text-white hover:bg-[#1a237e]",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-[#283593] text-[#283593] hover:bg-[#283593] hover:text-white"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RequestQuoteButton;
