"use client";

import { useRef } from "react";
import { trackEvent } from "@/lib/analytics";
import type { ArticleFAQ } from "@/lib/articles";

export function FAQAccordion({
  items,
  articleSlug,
}: {
  items: ArticleFAQ[];
  articleSlug: string;
}) {
  const firedRef = useRef(new Set<number>());

  const handleToggle = (
    index: number,
    e: React.SyntheticEvent<HTMLDetailsElement>,
  ) => {
    const isOpen = e.currentTarget.open;
    if (!isOpen) return;
    if (firedRef.current.has(index)) return;
    firedRef.current.add(index);
    trackEvent("faq_open", {
      article_slug: articleSlug,
      question: items[index].question,
    });
  };

  return (
    <div className="mt-5 space-y-5">
      {items.map((f, i) => (
        <details
          key={i}
          onToggle={(e) => handleToggle(i, e)}
          className="group rounded-xl border border-border bg-background p-4 open:border-brand-100"
        >
          <summary className="cursor-pointer list-none font-serif text-base font-semibold text-brand-700 group-open:text-brand">
            {f.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-foreground/80">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
