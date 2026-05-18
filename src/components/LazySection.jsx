import { Suspense, createElement, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_PLACEHOLDER_CLASS =
  "min-h-[320px] w-full bg-black/40 animate-pulse rounded-2xl";

export default function LazySection({
  component: SectionComponent,
  sectionIds = [],
  fallback = null,
  minHeightClassName = DEFAULT_PLACEHOLDER_CLASS,
  rootMargin = "300px 0px",
}) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    const targetId = decodeURIComponent(hash.replace(/^#/, ""));

    if (targetId && sectionIds.includes(targetId)) {
      setShouldRender(true);
    }
  }, [hash, sectionIds]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldRender) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={containerRef}>
      {shouldRender ? (
        <Suspense fallback={fallback ?? <div className={minHeightClassName} />}>
          {createElement(SectionComponent)}
        </Suspense>
      ) : (
        <div className={minHeightClassName} aria-hidden="true" />
      )}
    </div>
  );
}
