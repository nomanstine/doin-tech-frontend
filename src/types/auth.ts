import type { Course } from "@/types/home";

export interface AuthField {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
}

export interface SocialProvider {
  id: string;
  label: string;
  href: string;
  iconSrc: string;
}

export interface AuthFormContent {
  /** Small blue line above the title. */
  eyebrow: string;
  title: string;
  action: string;
  fields: readonly AuthField[];
  submitLabel: string;
  socials?: readonly SocialProvider[];
  switchPrompt: { text: string; linkLabel: string; href: string };
}

export interface AuthShowcaseContent {
  title: string;
  description: string;
  /** Two course cards shown as decoration. */
  courses: readonly [Course, Course];
  students: {
    title: string;
    rating: number;
    reviewCount: number;
    avatars: readonly string[];
    overflowLabel: string;
  };
}

export interface AuthPageContent {
  showcase: AuthShowcaseContent;
  form: AuthFormContent;
}
