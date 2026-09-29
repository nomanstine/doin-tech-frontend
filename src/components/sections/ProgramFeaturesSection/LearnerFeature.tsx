import { images } from "@/assets/images";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { AssetImage } from "@/components/ui/AssetImage";
import { Ornament } from "@/components/ui/Ornament";
import { Stat } from "@/components/ui/Stat";
import { Typography } from "@/components/ui/Typography";
import type { ProgramFeaturesContent } from "@/types/home";
import styles from "./LearnerFeature.module.css";

type LearnerFeatureProps = ProgramFeaturesContent["learners"];

export function LearnerFeature({ title, description, stats, course, progress, studentImageAlt }: LearnerFeatureProps) {
  return (
    <div className={styles.row}>
      <div className={styles.text}>
        <Typography as="h2" variant="heading-m" tone="primary">{title}</Typography>
        <Typography as="p" variant="body-l" tone="secondary" className={styles.description}>{description}</Typography>
        <div className={styles.stats}>
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <div className={styles.visual}>
        <CourseCard className={styles.course} course={course} />
        <AssetImage
          className={styles.student}
          src={images.feature.studentLaptop}
          alt={studentImageAlt}
          width={577}
          height={540}
          sizes="577px"
        />
        <ProgressCard className={styles.progress} {...progress} />
        <Ornament className={styles.ornament} tint="lime" {...images.feature.springA} />
      </div>
    </div>
  );
}
