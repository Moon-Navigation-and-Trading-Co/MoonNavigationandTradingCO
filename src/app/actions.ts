"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import nodemailer from 'nodemailer';

// Create transporter for Gmail
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });
};

// Send email function
const sendEmail = async (to: string, subject: string, htmlContent: string) => {
    try {
        const transporter = createTransporter();
        
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: to,
            subject: subject,
            html: htmlContent,
        };

        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email error:', error);
        return { success: false, error };
    }
};

// Email templates
const createSignUpEmail = (name: string, verificationLink: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3B4B8C;">Welcome to Moon Navigation and Trading Co.</h2>
        <p>Hello ${name},</p>
        <p>Thank you for signing up with Moon Navigation and Trading Co. To complete your registration, please verify your email address by clicking the link below:</p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationLink}" style="background-color: #3B4B8C; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email Address</a>
        </div>
        <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #666;">${verificationLink}</p>
        <p>This link will expire in 24 hours.</p>
        <p>Best regards,<br>Moon Navigation and Trading Co. Team</p>
    </div>
`;

const createPasswordResetEmail = (resetLink: string) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3B4B8C;">Password Reset Request</h2>
        <p>You have requested to reset your password for your Moon Navigation and Trading Co. account.</p>
        <p>Click the link below to reset your password:</p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" style="background-color: #3B4B8C; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
        </div>
        <p>If the button doesn't work, you can copy and paste this link into your browser:</p>
        <p style="word-break: break-all; color: #666;">${resetLink}</p>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this password reset, please ignore this email.</p>
        <p>Best regards,<br>Moon Navigation and Trading Co. Team</p>
    </div>
`;

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const passwordReconfirm = formData.get("passwordReconfirm")?.toString();
  const firstname = formData.get("firstname")?.toString(); // Add the name from formData
  const lastname = formData.get("lastname")?.toString(); // Add the name from formData
  const phone = formData.get("phone")?.toString(); // Add the phone from formData
  const supabase = createClient();
  const origin = headers().get("origin");
  const name = firstname + " " + lastname;

  if (!email || !password || !passwordReconfirm) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  if (password !== passwordReconfirm) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Passwords Do Not Match",
    );
  }


  const { data: signUpData, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  }

  const userId = signUpData?.user?.id; // Get the user ID from the sign-up response

  if (!userId) {
    return { error: "Could not retrieve user ID after sign-up" };
  }

  // Insert name, email, and phone into the user table after successful sign-up
  const { error: insertError } = await supabase
    .from("users")
    .insert({ id: userId, name, email, phone });

  if (insertError) {
    console.error(insertError.code + " " + insertError.message);
    return encodedRedirect("error", "/sign-up", "User already exists with that email");
  }

  // Send custom welcome email
  const verificationLink = `${origin}/auth/callback?token_hash=${signUpData.session?.access_token}&type=signup`;
  const emailResult = await sendEmail(
    email,
    "Welcome to Moon Navigation and Trading Co. - Verify Your Email",
    createSignUpEmail(name, verificationLink)
  );

  if (!emailResult.success) {
    console.error('Failed to send welcome email:', emailResult.error);
    // Don't fail the signup process if email fails, just log it
  }

  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link."
  );
};


export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  // Check if the email exists in the users table
  const { data: existingUser, error: userCheckError } = await supabase
    .from("users")
    .select("id, email")
    .eq("email", email)
    .single();

  // Generate a custom reset link
  const resetLink = `${origin}/protected/reset-password?email=${encodeURIComponent(email)}`;

  // Only send email if user exists in database
  if (existingUser && !userCheckError) {
    // Send custom password reset email
    const emailResult = await sendEmail(
      email,
      "Password Reset Request - Moon Navigation and Trading Co.",
      createPasswordResetEmail(resetLink)
    );

    if (!emailResult.success) {
      console.error('Failed to send password reset email:', emailResult.error);
      return encodedRedirect(
        "error",
        "/forgot-password",
        "Could not send password reset email",
      );
    }
  } else {
    // Log that email doesn't exist but don't reveal this to user
    console.log(`Password reset requested for non-existent email: ${email}`);
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  // Always show success message for security reasons (don't reveal if email exists or not)
  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required",
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match",
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
