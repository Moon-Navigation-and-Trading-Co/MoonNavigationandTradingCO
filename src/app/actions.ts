"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const sign_up_action = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const passwordReconfirm = formData.get("passwordReconfirm")?.toString();
  const firstname = formData.get("firstname")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const phone = formData.get("phone")?.toString();
  const name = `${firstname} ${lastname}`;

  const supabase = await createClient();
  const origin = (await headers()).get("origin") || process.env.NEXT_PUBLIC_SITE_URL;

  if (!email || !password || !passwordReconfirm) {
    return encodedRedirect("error", "/sign-up", "Email and password are required");
  }

  if (password !== passwordReconfirm) {
    return encodedRedirect("error", "/sign-up", "Passwords do not match");
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: {
        first_name: firstname,
        last_name: lastname,
        full_name: name,
        phone: phone,
      },
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    // Insert into profiles table
    const { error: profileError } = await supabase
      .from('profiles')
      .insert([
        {
          first_name: firstname,
          last_name: lastname,
          full_name: name,
          phone: phone,
        }
      ]);

    if (profileError) {
      console.error("Profile creation error:", profileError);
    }

    return encodedRedirect(
      "success",
      "/sign-up",
      "Thanks for signing up! Please check your email for a verification link.",
    );
  }
};

export const sign_in_action = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const forgot_password_action = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const reset_password_action = async (formData: FormData) => {
  const password = formData.get("password") as string;
  const passwordReconfirm = formData.get("passwordReconfirm") as string;

  if (password !== passwordReconfirm) {
    return redirect("/forgot-password?error=Passwords do not match");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  return encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const sign_out_action = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
};
