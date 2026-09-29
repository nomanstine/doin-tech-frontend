import { AvatarStack } from "@/components/ui/AvatarStack";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { Rating } from "@/components/ui/Rating";
import { Typography } from "@/components/ui/Typography";
import { cx } from "@/lib/cx";
import styles from "./StudentsCard.module.css";

interface StudentsCardProps {
  title: string;
  rating: number;
  reviewCount: number;
  avatars: readonly string[];
  overflowLabel: string;
  /** "accent" is the lime variant used on the auth pages. */
  tone?: "surface" | "accent";
  className?: string;
}

export function StudentsCard({ title, rating, reviewCount, avatars, overflowLabel, tone = "surface", className }: StudentsCardProps) {
  return (
    <FloatingCard tone={tone} className={cx(styles.card, className)}>
      <div className={styles.heading}>
        <Typography as="p" variant="label-m" tone="primary">{title}</Typography>
        <Rating value={rating} count={reviewCount} />
      </div>
      <AvatarStack avatars={avatars} overflowLabel={overflowLabel} badgeTone={tone === "accent" ? "dark" : "lime"} />
    </FloatingCard>
  );
}
