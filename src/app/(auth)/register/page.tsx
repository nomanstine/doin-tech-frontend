import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { registerContent } from "@/content/auth";

export const metadata: Metadata = { title: "Create an Account" };

export default function RegisterPage() {
  return <AuthPage content={registerContent} />;
}
