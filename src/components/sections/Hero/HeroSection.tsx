import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { StageLayer } from "@/components/ui/StageLayer";
import type { HeroContent } from "@/types/hero";
import { HeroIntro } from "./HeroIntro";
import { HeroOrnaments } from "./HeroOrnaments";
import { HeroVisual } from "./HeroVisual";
import styles from "./HeroSection.module.css";

/** Composition only: layout order and layering. Content arrives via props. */
export function HeroSection({ content }: { content: HeroContent }) {
  const { title, subtitle, search, studentImageAlt, progress, students, category } = content;

  return (
    <section className={styles.hero}>
      <StageLayer className={styles.grid}>
        <AssetImage src={images.hero.grid} alt="" fill sizes="1440px" />
      </StageLayer>
      <HeroIntro title={title} subtitle={subtitle} search={search} />
      <HeroVisual studentImageAlt={studentImageAlt} progress={progress} students={students} category={category} />
      <HeroOrnaments />
    </section>
  );
}
