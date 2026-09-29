import { images } from "@/assets/images";
import { CourseCard } from "@/components/cards/CourseCard";
import { StudentsCard } from "@/components/cards/StudentsCard";
import { Ornament } from "@/components/ui/Ornament";
import { Typography } from "@/components/ui/Typography";
import type { AuthShowcaseContent } from "@/types/auth";
import styles from "./AuthShowcase.module.css";

export function AuthShowcase({ title, description, courses, students }: AuthShowcaseContent) {
  const [back, front] = courses;

  return (
    <div className={styles.showcase}>
      <div className={styles.text}>
        <Typography as="p" variant="heading-xs" tone="inverse">{title}</Typography>
        <Typography as="p" variant="body-l" tone="inverse">{description}</Typography>
      </div>

      {/* Purely decorative: inert keeps its links out of the tab order and the a11y tree. */}
      <div className={styles.composition} inert aria-hidden="true">
        <CourseCard className={styles.buildCard} course={back} badgeTone="dark" />
        <CourseCard className={styles.dataCard} course={front} badgeTone="dark" />
        <StudentsCard className={styles.students} tone="accent" {...students} />
        <Ornament className={styles.spring} tint="white" flipped {...images.auth.spring} />
        <Ornament className={styles.ring} tint="lime" bleed="cone" {...images.auth.ring} />
        <Ornament className={styles.pyramid} tint="lime" bleed="cone" {...images.auth.pyramid} />
      </div>
    </div>
  );
}
