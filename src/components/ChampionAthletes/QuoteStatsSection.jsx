// QuoteStatsSection.jsx
import React from "react";

export default function QuoteStatsSection() {
  return (
    <section className="py-20 bg-card bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-8 text-balance">
          "Success isn't given. It's earned in the gym."
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
          Every champion started with a single rep, a single set, a single decision to
          never give up. Our facility provides the environment, equipment, and community
          to turn your potential into reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Pro Athletes</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Competition Wins</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
