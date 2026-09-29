import { images } from "@/assets/images";
import type { AuthPageContent, AuthShowcaseContent } from "@/types/auth";
import { featuredCourses } from "./home/courses";
import { heroContent } from "./home/hero";

const decoration = {
  courses: [featuredCourses[1], featuredCourses[2]],
  students: heroContent.students,
} as const;

const showcase = (title: string, description: string): AuthShowcaseContent => ({ title, description, ...decoration });

// Form endpoints are placeholders: point them at your auth routes/actions.
export const loginContent: AuthPageContent = {
  showcase: showcase(
    "Sign in with ease",
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
  ),
  form: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    action: "/api/auth/login",
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
      { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "current-password" },
    ],
    submitLabel: "Sign In",
    socials: [
      { id: "facebook", label: "Facebook", href: "/auth/facebook", iconSrc: images.icons.facebook },
      { id: "google", label: "Google", href: "/auth/google", iconSrc: images.icons.google },
    ],
    switchPrompt: { text: "New user?", linkLabel: "Create an account", href: "/register" },
  },
};

export const registerContent: AuthPageContent = {
  showcase: showcase(
    "Sign up and come in",
    "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
  ),
  form: {
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    action: "/api/auth/register",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name" },
      { name: "email", label: "Email", type: "email", placeholder: "designer@example.com", autoComplete: "email" },
      { name: "password", label: "Password", type: "password", placeholder: "********", autoComplete: "new-password" },
    ],
    submitLabel: "Continue",
    switchPrompt: { text: "Already have an account?", linkLabel: "Login", href: "/login" },
  },
};
