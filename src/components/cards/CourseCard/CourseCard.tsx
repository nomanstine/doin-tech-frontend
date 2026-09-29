import Link from "next/link";
import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Chip } from "@/components/ui/Chip";
import { Typography } from "@/components/ui/Typography";
import { cx } from "@/lib/cx";
import type { Course } from "@/types/home";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  course: Course;
  /** The auth showcase uses a dark "26+" badge; the catalogue uses lime. */
  badgeTone?: "lime" | "dark";
  className?: string;
}

export function CourseCard({ course, badgeTone = "lime", className }: CourseCardProps) {
  const { slug, title, author, coverSrc, level, lessons, duration, comments, rating, price, priceUnit, learners } =
    course;

  return (
    <article className={cx(styles.card, className)}>
      <div className={styles.cover}>
        <AssetImage className={styles.coverImage} src={coverSrc} alt="" fill sizes="341px" />
        <ul className={styles.badges}>
          {[lessons, duration, comments].map((label) => (
            <li key={label}>
              <Chip variant="glass" size="sm">{label}</Chip>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.body}>
        <div className={styles.headline}>
          <div className={styles.titleBlock}>
            <Typography as="h3" variant="heading-xs" tone="black" className={styles.title}>
              <Link href={`/courses/${slug}`}>{title}</Link>
            </Typography>
            <Typography as="p" variant="body-xs" className={styles.author}>
              by <span className={styles.authorName}>{author}</span>
            </Typography>
          </div>
          <p className={styles.rating} aria-label={`Rated ${rating} out of 5`}>
            <Typography as="span" variant="body-l" tone="charcoal">{rating.toFixed(1)}</Typography>
            <AssetImage src={images.icons.starOutlined} alt="" width={24} height={24} />
          </p>
        </div>

        <div className={styles.meta}>
          <Chip size="sm">
            <AssetImage src={images.icons.level} alt="" width={20} height={20} />
            {level}
          </Chip>
          <AvatarStack
            size="sm"
            badgeTone={badgeTone}
            avatars={learners.avatars}
            overflowLabel={learners.overflowLabel}
          />
        </div>

        <p className={styles.price}>
          <Typography as="span" variant="heading-xs" tone="brand">{price}</Typography>
          <Typography as="span" variant="body-xs" tone="charcoal">{priceUnit}</Typography>
        </p>
      </div>
    </article>
  );
}
