"use client";

import { trackEvent } from "@/lib/analytics";
import { SITE } from "@/lib/site";
import type { ReactNode } from "react";

type Location = "header" | "footer" | "cta_block" | "related_product" | "mobile_header";

export function LineCTAButton({
  location,
  category,
  className,
  children,
  href,
  ariaLabel,
}: {
  location: Location;
  category?: string;
  className?: string;
  children: ReactNode;
  href?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href || SITE.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackEvent("line_click", { location, category })}
    >
      {children}
    </a>
  );
}
