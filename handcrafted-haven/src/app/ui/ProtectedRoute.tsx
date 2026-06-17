import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default async function ProtectedRoute({ children }: ProtectedRouteProps) {
  const cookieStore = await cookies();
  const username = cookieStore.get("user_session")?.value;

  if (!username) {
    redirect("/profile/login");
  }

  return <>{children}</>;
}