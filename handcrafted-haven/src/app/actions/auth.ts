
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GetArtisanByTitle } from "@/app/model/model";
import { comparePassword } from "@/app/auth";

export interface FormState {
  error: string | null;
}

export async function loginUser(prevState: FormState | null, formData: FormData): Promise<FormState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const response = await GetArtisanByTitle(username);
  const myUser = await response.json();

  if (!myUser) {
    return { error: "No such User!" };
  }

  const isValid = comparePassword(password, myUser.password); 

  if (!isValid) {
    return { error: "Invalid credentials" };
  }

  // 3. Write the secure session cookie
  const cookieStore = await cookies();
  cookieStore.set("user_session", username, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  redirect("/profile");
}
