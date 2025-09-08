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
            className=" text-foreground text-start font-semibold rounded hover:text-gray-400"
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
