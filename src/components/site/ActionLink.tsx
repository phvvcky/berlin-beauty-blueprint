import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "light";

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-ghost-light",
};

export function ActionLink({
  href,
  to,
  variant = "primary",
  children,
  external,
  className = "",
  ariaLabel,
}: {
  href?: string;
  to?: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = `btn-base ${variantClass[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
