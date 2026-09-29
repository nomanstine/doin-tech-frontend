import { SearchBar } from "@/components/forms/SearchBar";
import { Typography } from "@/components/ui/Typography";
import type { HeroContent } from "@/types/hero";
import styles from "./HeroIntro.module.css";

type HeroIntroProps = Pick<HeroContent, "title" | "subtitle" | "search">;

export function HeroIntro({ title, subtitle, search }: HeroIntroProps) {
  return (
    <div className={styles.intro}>
      <div className={styles.copy}>
        <Typography as="h1" variant="heading-l" tone="white" className={styles.title}>
          {title}
        </Typography>
        <Typography as="p" variant="body-l" tone="inverse-muted">
          {subtitle}
        </Typography>
      </div>
      <SearchBar {...search} />
    </div>
  );
}
