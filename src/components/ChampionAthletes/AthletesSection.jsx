// AthletesSection.jsx
import React from "react";

/** Accent palette tuned to match your image colors (cool blue/teal) */
const ACCENT = {
  primary: "text-sky-700",
  primaryBg: "bg-sky-600",
  dot: "bg-teal-600",
  badgeBg: "bg-teal-100",
  badgeText: "text-teal-800",
  border: "border-slate-200",
  muted: "text-slate-600",
  surface: "bg-white",
  surfaceAlt: "bg-slate-50",
};

const ATHLETES = [
  {
    name: "Kerry sexton",
    role: "Pro Athlete",
    img: "/7.png",
    blurb:
      "Wellness division champion known for her incredible lower body development",
    achievements: [
      "Wellness Olympia Champion 2023",
      "Arnold Classic Wellness Winner",
      "IFBB Pro Card 2021",
    ],
    tags: ["Wellness Training", "Glute Development", "Lower Body Specialization"],
    stats: [
      { label: "Weight", value: "150 lbs" },
      { label: "Height", value: `5'5"` },
      { label: "Body Fat", value: "16%" },
    ],
  },
  {
    name: "Marc hector",
    role: "Pro Athlete",
    img: "/8.jpeg",
    blurb:
      "Wellness division champion known for her incredible lower body development",
    achievements: [
      "Wellness Olympia Champion 2023",
      "Arnold Classic Wellness Winner",
      "IFBB Pro Card 2021",
    ],
    tags: ["Wellness Training", "Glute Development", "Lower Body Specialization"],
    stats: [
      { label: "Weight", value: "150 lbs" },
      { label: "Height", value: `5'5"` },
      { label: "Body Fat", value: "16%" },
    ],
  },
];

function Badge({ children, solid = false }) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium",
        solid
          ? `${ACCENT.primaryBg} text-white`
          : `${ACCENT.badgeBg} ${ACCENT.badgeText} border ${ACCENT.border}`,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function Metric({ value, label }) {
  return (
    <div className="text-center">
      <div className={`text-lg font-bold ${ACCENT.primary}`}>{value}</div>
      <div className={`text-xs ${ACCENT.muted}`}>{label}</div>
    </div>
  );
}

function AthleteCard({ a }) {
  return (
    <div
      className={[
        ACCENT.surface,
        "flex flex-col gap-6 rounded-xl border",
        ACCENT.border,
        "py-6 shadow-sm group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden",
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={a.img}
          alt={a.name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-slate-900">{a.name}</h3>
          <Badge solid>{a.role}</Badge>
        </div>

        <p className={`${ACCENT.muted} mb-4`}>{a.blurb}</p>

        <div className="space-y-4">
          {/* Achievements */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Key Achievements</h4>
            <ul className={`text-sm ${ACCENT.muted} space-y-1`}>
              {a.achievements.map((t, i) => (
                <li className="flex items-center" key={i}>
                  <span className={`w-2 h-2 ${ACCENT.dot} rounded-full mr-2 flex-shrink-0`} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className={`grid grid-cols-3 gap-4 pt-4 border-t ${ACCENT.border}`}>
            {a.stats.map((s) => (
              <Metric key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AthletesSection() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Champion Athletes
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            These incredible athletes have chosen our facility to push their limits and
            achieve greatness. Their dedication and results speak for themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATHLETES.map((a) => (
            <AthleteCard key={a.name} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
