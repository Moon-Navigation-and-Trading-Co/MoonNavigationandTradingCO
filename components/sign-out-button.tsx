// SignOutButton.tsx
import React from "react";
import { signOutAction } from "@/src/app/actions"; // Adjust the import path as needed

const SignOutButton: React.FC = () => {
    const handleSignOut = async () => {
        try {
            await signOutAction(); // Call the signOut action
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <button
            onClick={handleSignOut}
            className=" text-foreground px-4 py-2 rounded hover:underline"
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
