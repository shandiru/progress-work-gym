import { Suspense, createElement, useEffect, useRef, useState } from "react";

const DEFAULT_PLACEHOLDER_CLASS =
  "min-h-[320px] w-full bg-black/40 animate-pulse rounded-2xl";

export default function LazySection({
  component: SectionComponent,
  fallback = null,
  minHeightClassName = DEFAULT_PLACEHOLDER_CLASS,
  rootMargin = "300px 0px",
}) {
  const containerRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

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
