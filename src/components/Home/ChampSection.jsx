// HomeAthletesDuo.jsx
import React from "react";

/** Red + Black theme palette */
const ACCENT = {
  primary: "text-red-500",
  primaryBg: "bg-red-600",
  dot: "bg-red-500",
  badgeBg: "bg-red-500/10",
  badgeText: "text-red-400",
  border: "border-red-600",
  muted: "text-gray-300",
  surface: "bg-black",
  surfaceAlt: "bg-zinc-900",
};

const ATHLETES = [
  {
    name: "Kerry Sexton",
    role: "IFBB Pro Bikini Athlete",
    img: "/7.png",
    blurb:
      "UK IFBB Pro Bikini competitor, Olympia-qualified for 2025. Known for her stage presence and consistent top finishes on the international pro circuit.",
    achievements: [
      "Winner — 2024 IFBB Romania Muscle Fest Pro (Olympia Qualification)",
      "Top 3 — 2024 IFBB Nutriyummy Pro Cup",
      "British Amateur Champion — 2017",
      "Earned IFBB Pro Card — 2019",
    ],
    tags: ["Bikini Division", "Olympia 2025", "Posing & Coaching"],
    stats: [
      { label: "Height", value: "TBD" },
      { label: "Stage Weight", value: "TBD" },
      { label: "Instagram", value: "@kerrysexton_ifbbpro" },
    ],
  },
  {
    name: "Marc Hector",
    role: "IFBB Pro Bodybuilder",
    img: "/8.jpeg",
    blurb:
      "IFBB Pro bodybuilder and online coach from the UK. Co-CEO at HECXTN and affiliated with TBJP Nutrition & Clothing.",
    achievements: [
      "5th — 2022 IFBB Arnold Classic UK (Open Bodybuilding)",
      "3rd — 2022 IFBB Tsunami Cup Pro",
      "Earned IFBB Pro status",
    ],
    tags: ["Bodybuilding", "Contest Prep", "Online Coaching"],
    stats: [
      { label: "Height", value: "TBD" },
      { label: "Stage Weight", value: "TBD" },
      { label: "Instagram", value: "@marc__hector" },
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
  const isInstagram = label.toLowerCase() === "instagram";
  const handle = typeof value === "string" && value.startsWith("@") ? value.slice(1) : value;

  return (
    <div className="text-center min-w-0"> {/* allow children to truncate */}
      <div
        className={[
          "font-semibold",
          ACCENT.primary,
          isInstagram ? "text-sm sm:text-base" : "text-base sm:text-lg",
          isInstagram ? "truncate overflow-hidden text-ellipsis whitespace-nowrap max-w-[9rem] sm:max-w-[10rem] md:max-w-[12rem] mx-auto" : "",
        ].join(" ")}
        title={typeof value === "string" ? value : undefined}
      >
        {isInstagram ? (
          <a
            href={`https://instagram.com/${handle}`}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {typeof value === "string" ? value : String(value)}
          </a>
        ) : (
          <>{typeof value === "string" ? value : String(value)}</>
        )}
      </div>
      <div className={`text-xs ${ACCENT.muted}`}>{label}</div>
    </div>
  );
}

function AthleteCard({ a }) {
  return (
    <figure className="group rounded-2xl p-0.5 bg-gradient-to-b from-red-600/20 to-transparent h-full">
      <div
        className={[
          ACCENT.surface,
          "rounded-2xl border",
          ACCENT.border,
          "shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden",
          "flex flex-col h-full",
        ].join(" ")}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl h-[360px] sm:h-[420px]">
          <img
            src={a.img}
            alt={a.name}
            className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Content */}
        <figcaption className="px-5 sm:px-6 pb-6 pt-4 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
              {a.name}
            </h3>
            <Badge solid>{a.role}</Badge>
          </div>

          <p className={`${ACCENT.muted} text-sm leading-relaxed mb-4`}>
            {a.blurb}
          </p>

          {/* Achievements */}
          <div className="space-y-2 mb-4">
            <h4 className="font-semibold text-white text-sm">Key Achievements</h4>
            <ul className={`text-sm ${ACCENT.muted} space-y-1`}>
              {a.achievements.map((t, i) => (
                <li className="flex items-start" key={i}>
                  <span className={`mt-1 w-2 h-2 ${ACCENT.dot} rounded-full mr-2 flex-shrink-0`} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <h4 className="font-semibold text-white text-sm mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-auto pt-4 border-t border-red-600">
            <div className="grid grid-cols-3 gap-4 min-w-0"> {/* min-w-0 enables truncate in children */}
              {a.stats.map((s) => (
                <Metric key={s.label} {...s} />
              ))}
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default function HomeAthletesDuo() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="py-12 sm:py-14 text-center">
          <h2 className="text-[28px] sm:text-4xl md:text-[44px] font-extrabold tracking-tight">
            Our Champion Athletes
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Meet the icons who represent dedication, power, and performance at the highest level.
          </p>
        </div>

        {/* 2-up grid with equal heights */}
        <div className="pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {ATHLETES.map((a) => (
              <AthleteCard key={a.name} a={a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
