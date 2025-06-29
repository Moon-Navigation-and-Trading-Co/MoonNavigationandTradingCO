import React, { ButtonHTMLAttributes } from "react";

interface RequestQuoteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const RequestQuoteButton: React.FC<RequestQuoteButtonProps> = ({ children = "Request a Quote", ...props }) => {
  return (
    <button
      className="bg-[#283593] text-white font-bold font-montserrat rounded-full px-6 py-2 text-base flex items-center justify-center"
      {...props}
    >
      {children}
    </button>
  );
};

export default RequestQuoteButton;
