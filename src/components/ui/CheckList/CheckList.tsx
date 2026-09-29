import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { Typography } from "@/components/ui/Typography";
import styles from "./CheckList.module.css";

export function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <AssetImage src={images.icons.checkCircle} alt="" width={24} height={24} />
          <Typography as="span" variant="label-l" tone="primary">{item}</Typography>
        </li>
      ))}
    </ul>
  );
}
