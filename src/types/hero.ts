export interface HeroSearchContent {
  action: string;
  label: string;
  placeholder: string;
  buttonLabel: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  search: HeroSearchContent;
  studentImageAlt: string;
  progress: { label: string; value: number };
  students: {
    title: string;
    rating: number;
    reviewCount: number;
    avatars: readonly string[];
    overflowLabel: string;
  };
  category: { title: string; stats: readonly string[] };
}
