import type { FooterContent } from "@/types/home";

// Link targets are placeholders inferred from the labels: adjust when routes exist.
export const footerContent: FooterContent = {
  tagline: "Stay Up to date with our latest features and releases by joining our newsletter.",
  newsletter: {
    action: "/newsletter",
    label: "Email address",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
    note: "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.",
  },
  linkGroups: [
    {
      label: "Browse",
      links: [
        { label: "Featured Courses", href: "/courses?featured=true" },
        { label: "Featured Categories", href: "/categories" },
        { label: "Business", href: "/categories/business" },
        { label: "IT", href: "/categories/it-software" },
        { label: "Design", href: "/categories/design" },
      ],
    },
    {
      label: "Topics",
      links: [
        { label: "Development", href: "/categories/development" },
        { label: "Marketing", href: "/categories/marketing" },
        { label: "Photography", href: "/categories/photography" },
        { label: "Finance", href: "/categories/finance" },
        { label: "Sport", href: "/categories/sport" },
      ],
    },
    {
      label: "Platform",
      links: [
        { label: "Become a Creator", href: "/register?role=creator" },
        { label: "Affiliate Program", href: "/affiliate" },
        { label: "Contact", href: "/contact" },
        { label: "Help", href: "/help" },
        { label: "About", href: "/about" },
      ],
    },
  ],
  copyright: "© 2023 ByteSpace. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookies Settings", href: "/cookies" },
  ],
};
