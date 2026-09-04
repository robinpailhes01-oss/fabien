"use client";

import { OPEN_NEWSLETTER_EVENT } from "./NewsletterPopup";

// Small, discreet trigger so visitors can join the newsletter on demand
// (the popup otherwise only opens on its own via delay/exit-intent).
export default function NewsletterButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_NEWSLETTER_EVENT))}
      className={className}
    >
      Newsletter
    </button>
  );
}
