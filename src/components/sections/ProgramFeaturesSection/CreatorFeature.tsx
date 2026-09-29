import { images } from "@/assets/images";
import { MetricCard } from "@/components/cards/MetricCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { AssetImage } from "@/components/ui/AssetImage";
import { CheckList } from "@/components/ui/CheckList";
import { Ornament } from "@/components/ui/Ornament";
import { Typography } from "@/components/ui/Typography";
import type { ProgramFeaturesContent } from "@/types/home";
import styles from "./CreatorFeature.module.css";

type CreatorFeatureProps = ProgramFeaturesContent["creators"];

export function CreatorFeature({
  title,
  brand,
  description,
  benefits,
  revenue,
  yearToDate,
  students,
  instructorImageAlt,
}: CreatorFeatureProps) {
  return (
    <div className={styles.row}>
      <div className={styles.visual}>
        <MetricCard className={styles.revenue} {...revenue} />
        <MetricCard className={styles.yearToDate} {...yearToDate} />
        <div className={styles.instructor}>
          <AssetImage
            className={styles.instructorImage}
            src={images.feature.instructor}
            alt={instructorImageAlt}
            width={683}
            height={683}
            sizes="683px"
          />
        </div>
        <StudentsCard className={styles.students} {...students} />
        <Ornament className={styles.ornament} tint="lime" {...images.feature.springB} />
      </div>

      <div className={styles.text}>
        <Typography as="h2" variant="heading-m" tone="primary" className={styles.title}>{title}</Typography>
        <Typography as="p" variant="body-l" tone="secondary">
          <span className={styles.brand}>{brand}</span> {description}
        </Typography>
        <CheckList items={benefits} />
      </div>
    </div>
  );
}
