"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const passwordReconfirm = formData.get("passwordReconfirm")?.toString();
  const firstname = formData.get("firstname")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const phone = formData.get("phone")?.toString();
  const name = `${firstname} ${lastname}`;

  const supabase = createClient();
  const origin = (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL;

  if (!email || !password || !passwordReconfirm) {
    return encodedRedirect("error", "/sign-up", "Email and password are required");
  }

  if (password !== passwordReconfirm) {
    return encodedRedirect("error", "/sign-up", "Passwords do not match");
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

  const userId = signUpData?.user?.id;
  if (!userId) {
    return { error: "Could not retrieve user ID after sign-up" };
  }

  const { error: insertError } = await supabase
    .from("users")
    .insert({ id: userId, name, email, phone });

  if (insertError) {
    console.error(insertError.code + " " + insertError.message);
    return encodedRedirect("error", "/sign-up", "User already exists with that email");
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

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const callbackUrl = formData.get("callbackUrl")?.toString();
  const supabase = createClient();
  const origin = (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL;

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  // Check if user exists in users table (for logging purposes only)
  const { data: existingUser, error: userCheckError } = await supabase
    .from("auth.users")
    .select("id")
    .eq("email", email)
    .single();

  console.log(`User check for ${email}:`, { existingUser, userCheckError });

  if (!existingUser) {
    console.log(`Password reset requested for non-existent email: ${email}`);
  }

  const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/protected/reset-password`,
  });

  if (resetError) {
    console.error("Supabase reset email failed:", resetError.message);
    return encodedRedirect("error", "/forgot-password", "Could not send reset email");
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return encodedRedirect("error", "/protected/reset-password", "Password update failed");
  }

  return encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
