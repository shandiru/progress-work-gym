// CtaSection.jsx
import React from "react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground bg-black text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Ready to Train Like a Champion?
        </h2>

        <p className="text-xl mb-8 opacity-90 text-pretty">
          Join the gym where legends are made. Experience world-class equipment,
          expert coaching, and a community that will push you to your limits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary Button */}
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 py-4"
          >
            Schedule a Tour
          </button>

          {/* Outline Button */}
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            View Membership Plans
          </button>
        </div>
      </div>
    </section>
  );
}
