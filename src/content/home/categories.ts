import { images } from "@/assets/images";
import type { CategoriesContent } from "@/types/home";

const { categories: icons } = images;

export const categoriesContent: CategoriesContent = {
  intro: {
    title: "Explore Diverse Learning Paths at Bytespace",
    description:
      "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
  },
  categories: [
    { id: "design", label: "Design", href: "/categories/design", iconSrc: icons.design },
    { id: "development", label: "Development", href: "/categories/development", iconSrc: icons.development },
    { id: "it-software", label: "IT & Software", href: "/categories/it-software", iconSrc: icons.itSoftware },
    { id: "business", label: "Business", href: "/categories/business", iconSrc: icons.business },
    { id: "marketing", label: "Marketing", href: "/categories/marketing", iconSrc: icons.marketing },
    { id: "photography", label: "Photography", href: "/categories/photography", iconSrc: icons.photography },
  ],
};
