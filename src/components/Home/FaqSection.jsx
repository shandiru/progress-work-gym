import React, { useId, useState } from "react";

export default function AboutFaqSection({
  imageSrc = "/faq.png",
  imageAlt = "Gym athlete working out",
  titleKicker = "FAQ",
  title = (
    <>
      HERE GYM FITNESS MEETS <span className="block mt-1 text-red-600">EXCELLENCE!</span>
    </>
  ),
  intro =
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since.",
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
            <div className="mb-6 text-sm font-semibold uppercase tracking-widest text-red-600">{titleKicker}</div>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
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
          <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-red-600/20 font-semibold text-red-600">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-base font-semibold sm:text-lg">{item.q}</span>
        </div>
        <span
          className={`ml-auto inline-flex h-7 w-7 flex-none items-center justify-center rounded-md border border-red-600/20 transition-transform ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-red-600"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-5 pb-5 text-gray-300">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

const defaultFaqs = [
  {
    q: "How do I know if my brakes need to be replaced?",
    a: "If you're hearing grinding or squeaking, the pedal feels soft, or stopping distance increases, it's time for an inspection. Our trainers can also check equipment safety protocols with you on day one.",
  },
  {
    q: "How do I know which gym class is right for me?",
    a: "Start with your goal: fat loss, strength, or mobility. Speak to our front desk for a quick screening—we'll match you to a beginner, intermediate, or advanced track.",
  },
  {
    q: "Do I need to bring any equipment to a gym class?",
    a: "Bring a water bottle and towel. We provide all class gear; weightlifting kits and mats are sanitized and ready.",
  },
  {
    q: "Can I join any type of class if I'm a beginner?",
    a: "Absolutely. Every class has scaled options. Coaches demonstrate regressions and progressions so you can train safely at your level.",
  },
];
