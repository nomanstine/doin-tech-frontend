import type { ProgramFeaturesContent } from "@/types/home";
import { featuredCourses } from "./courses";
import { heroContent } from "./hero";

export const programFeaturesContent: ProgramFeaturesContent = {
  learners: {
    title: "Your Path to Professional Growth Starts Here!",
    description:
      "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
    stats: [
      { value: "12K", label: "Students" },
      { value: "70+", label: "Courses" },
      { value: "16", label: "Creators" },
    ],
    course: featuredCourses[0],
    progress: { label: "Learning Progress", value: 55 },
    studentImageAlt: "Smiling student holding a laptop",
  },
  creators: {
    title: "Create & Manage Courses Easily.",
    brand: "ByteSpace",
    description:
      "supports individuals or entities in the creation, publication, and administration of educational courses.",
    benefits: ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"],
    revenue: { title: "Total Revenue", caption: "July 1-28", value: "$120.29", delta: "+12$", progress: 56 },
    yearToDate: { title: "Year to Date", caption: "2023", value: "$1,200.38", delta: "+12$" },
    students: heroContent.students,
    instructorImageAlt: "Smiling instructor wearing headphones holding a tablet",
  },
};
