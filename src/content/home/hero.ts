import { images } from "@/assets/images";
import type { HeroContent } from "@/types/hero";

export const heroContent: HeroContent = {
  title: "Get Access to Hundreds Courses Available",
  subtitle:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  search: {
    action: "/search",
    label: "Search courses",
    placeholder: "Course, topic, creator",
    buttonLabel: "Search",
  },
  studentImageAlt: "Smiling student with headphones holding a laptop",
  progress: { label: "Learning Progress", value: 55 },
  students: {
    title: "Happy Students",
    rating: 4.5,
    reviewCount: 240,
    avatars: images.avatars.students,
    overflowLabel: "2K+",
  },
  category: { title: "UI/UX Design", stats: ["200 Courses", "1000+ Students"] },
};
