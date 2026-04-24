declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (
      command: "event" | "config" | "js" | "set",
      action: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export type TrackableEvent =
  | {
      name: "line_click";
      params: { location: "header" | "footer" | "cta_block" | "related_product" | "mobile_header"; category?: string };
    }
  | {
      name: "article_read";
      params: { article_slug: string; article_category: string };
    }
  | {
      name: "faq_open";
      params: { article_slug: string; question: string };
    };

export function trackEvent<E extends TrackableEvent>(
  name: E["name"],
  params: E["params"],
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

export {};
