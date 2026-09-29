import type { NotFoundContent } from "@/types/system";

export const notFoundContent: NotFoundContent = {
  code: "404",
  title: "The page you are looking for doesn’t exist",
  description: "Try to use a correct url or go back to homepage to start again",
  action: { label: "Back to Home", href: "/" },
};
