import { AuthForm } from "@/components/auth/AuthForm";
import { AuthShowcase } from "@/components/auth/AuthShowcase";
import type { AuthPageContent } from "@/types/auth";
import styles from "./AuthPage.module.css";

/** Shared by Login and Register: a showcase on the left, the form card on the right. */
export function AuthPage({ content }: { content: AuthPageContent }) {
  return (
    <div className={styles.layout}>
      <AuthShowcase {...content.showcase} />
      <AuthForm content={content.form} />
    </div>
  );
}
