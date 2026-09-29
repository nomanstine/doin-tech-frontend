import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import styles from "./NewsletterForm.module.css";

interface NewsletterFormProps {
  /** Endpoint the form posts to. */
  action: string;
  /** Accessible name for the email input. */
  label: string;
  placeholder: string;
  buttonLabel: string;
  note: string;
}

export function NewsletterForm({ action, label, placeholder, buttonLabel, note }: NewsletterFormProps) {
  return (
    <form className={styles.form} action={action} method="post">
      <div className={styles.row}>
        <input className={styles.input} type="email" name="email" placeholder={placeholder} aria-label={label} required />
        <Button type="submit">{buttonLabel}</Button>
      </div>
      <Typography as="p" variant="body-xs" tone="primary" className={styles.note}>
        {note}
      </Typography>
    </form>
  );
}
