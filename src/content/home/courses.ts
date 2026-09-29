import { images } from "@/assets/images";
import type { Course, FeaturedCoursesContent } from "@/types/home";

const shared = {
  author: "purepearl studio",
  level: "Beginner",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  rating: 4.5,
  price: "$25",
  priceUnit: "/lifetime",
  learners: { avatars: images.courses.learners, overflowLabel: "26+" },
} as const;

const { covers } = images.courses;

export const featuredCourses: readonly Course[] = [
  { ...shared, slug: "learn-figma-from-basic", title: "Learn Figma from Basic", coverSrc: covers.learnFigma },
  { ...shared, slug: "build-digital-asset", title: "Build Digital Asset", coverSrc: covers.digitalAsset },
  { ...shared, slug: "the-power-of-big-data", title: "The Power of Big Data", coverSrc: covers.bigData },
  {
    ...shared,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    coverSrc: covers.productivity,
  },
  {
    ...shared,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    coverSrc: covers.moneyManagement,
  },
  { ...shared, slug: "from-idea-to-startup-success", title: "From Idea to Startup Success", coverSrc: covers.startup },
];

const tab = (label: string, active = false) => ({
  label,
  href: `/courses?category=${encodeURIComponent(label.toLowerCase().replace(/ & /g, "-").replace(/[ /]/g, "-"))}`,
  active,
});

export const featuredCoursesContent: FeaturedCoursesContent = {
  intro: {
    title: "Discover Your Passion, Build Your Skills",
    description:
      "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  },
  tabRows: [
    [
      tab("Featured", true),
      tab("Music"),
      tab("Drawing & Painting"),
      tab("Marketing"),
      tab("Animation"),
      tab("Social Media"),
      tab("UI/UX Design"),
      tab("Creative Marketing"),
    ],
    [
      tab("Digital Illustration"),
      tab("Film & Video"),
      tab("Crafts"),
      tab("Freelance & Entrepreneurship"),
      tab("Graphic Design"),
      tab("Photography"),
    ],
    [tab("Productivity"), tab("Web Development"), tab("Data Science"), tab("Cooking")],
  ],
  moreLink: { label: "+ More", href: "/courses" },
  courses: featuredCourses,
};
