// HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage:
            "url('/modern-gym-interior-with-heavy-weights-and-bodybui.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance">
          Elite Athletes
          <span className="block text-primary">Train Here</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
          Where champions are forged and legends are born. Meet the
          extraordinary athletes who call our gym home.
        </p>

        {/* CTA Button */}
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md has-[>svg]:px-4 text-lg px-8 py-4"
        >
          Join Our Elite Community
        </button>
      </div>
    </section>
  );
}
