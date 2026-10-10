"use client";

import { useEffect, useRef } from "react";

const PLATFORM_SRC = "https://elfsightcdn.com/platform.js";

// The widget's DOM is created imperatively, outside React's reconciliation, so
// hydration, re-renders and Strict Mode's double mount can't touch (or remove)
// the <style> tags the widget's styled-components injects (error #17).
export default function ElfsightWidget({ widgetId }: { widgetId: string }) {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Strict Mode mounts effects twice. Tearing the widget down between the two
    // runs leaves its styled-components pointing at removed <style> tags (error #17),
    // so create it only once per host and never remove it in cleanup.
    if (!host.firstElementChild) {
      const app = document.createElement("div");
      app.className = `elfsight-app-${widgetId}`;
      app.setAttribute("data-elfsight-app-lazy", "");
      host.appendChild(app);
    }

    if (!document.querySelector(`script[src="${PLATFORM_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = PLATFORM_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

  }, [widgetId]);

  // key forces a fresh host (and widget) if the ID ever changes.
  return <div key={widgetId} ref={hostRef} />;
}
