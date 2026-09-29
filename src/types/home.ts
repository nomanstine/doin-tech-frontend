import type { NavItem } from "@/types/navigation";

export interface SectionIntro {
  title: string;
  description: string;
}

export interface Partner {
  src: string;
  name: string;
  width: number;
  height: number;
}

export interface Course {
  slug: string;
  title: string;
  author: string;
  coverSrc: string;
  level: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: number;
  price: string;
  priceUnit: string;
  learners: { avatars: readonly string[]; overflowLabel: string };
}

export interface TabItem extends NavItem {
  active?: boolean;
}

export interface FeaturedCoursesContent {
  intro: SectionIntro;
  /** Tabs are laid out in explicit rows, as in the design. */
  tabRows: readonly (readonly TabItem[])[];
  moreLink: NavItem;
  courses: readonly Course[];
}

export interface Category {
  id: string;
  label: string;
  href: string;
  iconSrc: string;
}

export interface CategoriesContent {
  intro: SectionIntro;
  categories: readonly Category[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface MetricContent {
  title: string;
  caption: string;
  value: string;
  delta: string;
  /** 0–100; when present the card shows a progress bar. */
  progress?: number;
}

export interface ProgramFeaturesContent {
  learners: {
    title: string;
    description: string;
    stats: readonly StatItem[];
    course: Course;
    progress: { label: string; value: number };
    studentImageAlt: string;
  };
  creators: {
    title: string;
    brand: string;
    description: string;
    benefits: readonly string[];
    revenue: MetricContent;
    yearToDate: MetricContent;
    students: {
      title: string;
      rating: number;
      reviewCount: number;
      avatars: readonly string[];
      overflowLabel: string;
    };
    instructorImageAlt: string;
  };
}

export interface CreatorCtaContent {
  title: string;
  description: string;
  action: NavItem;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarSrc: string;
}

export interface TestimonialsContent {
  title: string;
  description: string;
  testimonials: readonly Testimonial[];
}

export interface FooterContent {
  tagline: string;
  newsletter: {
    action: string;
    label: string;
    placeholder: string;
    buttonLabel: string;
    note: string;
  };
  linkGroups: readonly { label: string; links: readonly NavItem[] }[];
  copyright: string;
  legalLinks: readonly NavItem[];
}
