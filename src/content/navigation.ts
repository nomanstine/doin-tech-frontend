import type { NavItem } from "@/types/navigation";

// Routes are guesses from the Figma page names; change them here in one place.
export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const authNav: readonly NavItem[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

export const cartHref = "/cart";
