import Link from "next/link";
import { AssetImage } from "@/components/ui/AssetImage";
import { Typography } from "@/components/ui/Typography";
import type { Category } from "@/types/home";
import styles from "./CategoryCard.module.css";

export function CategoryCard({ label, href, iconSrc }: Omit<Category, "id">) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.icon}>
        <AssetImage src={iconSrc} alt="" width={36} height={36} />
      </span>
      <Typography as="span" variant="label-xl" tone="primary">{label}</Typography>
    </Link>
  );
}
