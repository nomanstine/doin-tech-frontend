import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { loginContent } from "@/content/auth";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return <AuthPage content={loginContent} />;
}
