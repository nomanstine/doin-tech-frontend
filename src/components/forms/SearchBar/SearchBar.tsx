import { images } from "@/assets/images";
import { AssetImage } from "@/components/ui/AssetImage";
import { Button } from "@/components/ui/Button";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  /** Where the form submits (plain GET, so it works without JavaScript). */
  action: string;
  /** Accessible name for the input. */
  label: string;
  placeholder: string;
  buttonLabel: string;
  name?: string;
}

export function SearchBar({ action, label, placeholder, buttonLabel, name = "q" }: SearchBarProps) {
  return (
    <form className={styles.form} action={action} method="get" role="search">
      <label className={styles.field}>
        <AssetImage className={styles.icon} src={images.icons.search} alt="" width={24} height={24} />
        <input className={styles.input} type="search" name={name} placeholder={placeholder} aria-label={label} />
      </label>
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
}
