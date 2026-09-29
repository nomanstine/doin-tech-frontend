import { images } from "@/assets/images";
import { CategoryStatsCard } from "@/components/cards/CategoryStatsCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { AssetImage } from "@/components/ui/AssetImage";
import type { HeroContent } from "@/types/hero";
import styles from "./HeroVisual.module.css";

type HeroVisualProps = Pick<HeroContent, "studentImageAlt" | "progress" | "students" | "category">;

export function HeroVisual({ studentImageAlt, progress, students, category }: HeroVisualProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.visual}>
        <AssetImage className={styles.circle} src={images.hero.circle} alt="" width={1149} height={1149} />
        <AssetImage
          className={styles.student}
          src={images.hero.student}
          alt={studentImageAlt}
          width={578}
          height={541}
          sizes="(min-width: 578px) 578px, 100vw"
          loading="eager"
          fetchPriority="high"
        />
        <ProgressCard className={styles.progressCard} {...progress} />
        <StudentsCard className={styles.studentsCard} {...students} />
        <CategoryStatsCard className={styles.categoryCard} {...category} />
      </div>
    </div>
  );
}
