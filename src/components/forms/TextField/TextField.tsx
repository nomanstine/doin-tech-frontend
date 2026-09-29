import type { InputHTMLAttributes } from "react";
import { Typography } from "@/components/ui/Typography";
import styles from "./TextField.module.css";

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
}

/** Label + input in one <label>, so no ids are needed to associate them. */
export function TextField({ label, ...inputProps }: TextFieldProps) {
  return (
    <label className={styles.field}>
      <Typography as="span" variant="label-s" tone="primary">{label}</Typography>
      <input className={styles.input} {...inputProps} />
    </label>
  );
}
