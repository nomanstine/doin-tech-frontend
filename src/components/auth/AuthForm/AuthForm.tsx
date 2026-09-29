import Link from "next/link";
import { TextField } from "@/components/forms/TextField";
import { SocialLogin } from "@/components/auth/SocialLogin";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import type { AuthFormContent } from "@/types/auth";
import styles from "./AuthForm.module.css";

export function AuthForm({ content }: { content: AuthFormContent }) {
  const { eyebrow, title, action, fields, submitLabel, socials, switchPrompt } = content;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <form className={styles.form} action={action} method="post">
          <div className={styles.header}>
            <Typography as="p" variant="body-l" tone="brand">{eyebrow}</Typography>
            <Typography as="h1" variant="heading-m" tone="primary">{title}</Typography>
          </div>
          <div className={styles.fields}>
            {fields.map((field) => (
              <TextField key={field.name} required {...field} />
            ))}
            <Button type="submit">{submitLabel}</Button>
          </div>
        </form>

        {socials && <SocialLogin providers={socials} />}

        <Typography as="p" variant="body-m" className={styles.switch}>
          <span className={styles.switchText}>{switchPrompt.text}</span>
          <Link href={switchPrompt.href} className={styles.switchLink}>{switchPrompt.linkLabel}</Link>
        </Typography>
      </div>
    </div>
  );
}
