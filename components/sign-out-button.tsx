// SignOutButton.tsx
import React from "react";
import { sign_out_action } from "@/src/app/actions"; // Adjust the import path as needed

const SignOutButton: React.FC = () => {
    const handleSignOut = async () => {
        try {
            await sign_out_action(); // Call the signOut action
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <button
            onClick={handleSignOut}
            className="bg-[#F3F5F9] text-[#23294d] border border-[#E0E3EB] hover:bg-[#e0e3eb] hover:border-[#c5c9d6] rounded-full px-4 py-1.5 font-bold text-sm shadow-none transition-colors"
            style={{ boxShadow: "none", minWidth: 0, height: "34px" }}
        >
            SIGN OUT
        </button>
    );
};

export default SignOutButton;
