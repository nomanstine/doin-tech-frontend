import { cssVars } from "@/lib/cssVars";
import { Typography } from "@/components/ui/Typography";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  description: string;
  /** Matches the design's two heading sizes: 44px ("m") and 36px ("s"). */
  size?: "m" | "s";
  /** Lets a title wrap earlier than its container, e.g. "588px". */
  titleMaxWidth?: string;
}

export function SectionHeading({ title, description, size = "m", titleMaxWidth }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <Typography
        as="h2"
        variant={size === "m" ? "heading-m" : "heading-s"}
        tone="heading"
        className={styles.title}
        style={titleMaxWidth ? cssVars({ "--title-max-width": titleMaxWidth }) : undefined}
      >
        {title}
      </Typography>
      <Typography as="p" variant="body-l" tone="muted" className={styles.description}>
        {description}
      </Typography>
    </div>
  );
}
