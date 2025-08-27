// File: AboutFaqSection.jsx
import React, { useId, useState } from "react";

export default function AboutFaqSection({
  imageSrc = "/faq.png",
  imageAlt = "Gym athlete working out",
  titleKicker = "FAQ",
  title = "FAQ: Your Fitness, Answered",
  intro = "Got questions? We’ve got the answers — so you can focus on smashing your goals.",
  faqs = defaultFaqs,
}) {
  return (
    <section className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:py-20 lg:px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* LEFT: IMAGE */}
          <div className="relative order-2 overflow-hidden rounded-2xl border border-red-600/20 bg-black lg:order-1">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-center opacity-95 transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute left-4 top-4 hidden select-none items-center justify-center rounded-full border border-red-600/30 bg-black/70 px-4 py-2 text-xs uppercase tracking-widest text-red-600 backdrop-blur sm:flex">
              Train Hard • Stay Humble • Be Proud
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black/70 to-transparent" />
          </div>

          {/* RIGHT: CONTENT + FAQ */}
          <div className="order-1 lg:order-2">
            <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-600">
              {titleKicker}
            </div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-prose text-gray-300">{intro}</p>

            <div className="mt-8 space-y-3">
              {faqs.map((item, idx) => (
                <FaqRow key={idx} index={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqRow({ index, item }) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const btnId = `${uid}-btn`;
  const panelId = `${uid}-panel`;

  return (
    <div className="overflow-hidden rounded-xl border border-red-600/20 bg-black/60">
      <button
        id={btnId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((s) => !s)}
        className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-black/80"
      >
        <div className="flex items-center gap-4">
          <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-red-600/20 font-semibold text-red-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base font-semibold sm:text-lg">{item.q}</span>
        </div>
        <span
          className={`ml-auto inline-flex h-7 w-7 flex-none items-center justify-center rounded-md border border-red-600/20 transition-transform ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-red-600">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-5 pb-5 text-gray-300">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---- Your gym FAQ content ---- */
const defaultFaqs = [
  {
    q: "Do I need to be fit before joining?",
    a: "Not at all. Progress Works Gym is built for everyone — from complete beginners to seasoned athletes.",
  },
  {
    q: "What makes Progress Works different from other gyms?",
    a: "We offer dedicated training rooms, top-tier equipment that’s always up to date, and a supportive community that treats fitness as a lifestyle, not a chore.",
  },
  {
    q: "Can I get help with my workouts?",
    a: "Yes. Our team and community are here to guide you, whether you need advice on form, programs, or just a push to stay consistent.",
  },
  {
    q: "How often do you update your equipment?",
    a: "Regularly. We stay on top of the latest trends and replace equipment to keep your training experience fresh and effective.",
  },
];
