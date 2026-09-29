import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { CreatorCtaSection } from "@/components/sections/CreatorCtaSection";
import { FeaturedCoursesSection } from "@/components/sections/FeaturedCoursesSection";
import { HeroSection } from "@/components/sections/Hero";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProgramFeaturesSection } from "@/components/sections/ProgramFeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { categoriesContent } from "@/content/home/categories";
import { featuredCoursesContent } from "@/content/home/courses";
import { creatorCtaContent } from "@/content/home/cta";
import { programFeaturesContent } from "@/content/home/features";
import { heroContent } from "@/content/home/hero";
import { partners } from "@/content/home/partners";
import { testimonialsContent } from "@/content/home/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
      <PartnersSection partners={partners} />
      <FeaturedCoursesSection content={featuredCoursesContent} />
      <CategoriesSection content={categoriesContent} />
      <ProgramFeaturesSection content={programFeaturesContent} />
      <CreatorCtaSection content={creatorCtaContent} />
      <TestimonialsSection content={testimonialsContent} />
    </>
  );
}
