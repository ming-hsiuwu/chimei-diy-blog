"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function ArticleReadTracker({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const firedRef = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            trackEvent("article_read", {
              article_slug: slug,
              article_category: category,
            });
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [slug, category]);

  return <div ref={sentinelRef} aria-hidden className="h-1 w-full" />;
}
