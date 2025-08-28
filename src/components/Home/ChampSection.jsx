// HomeAthletesDuo.jsx
import React from "react";

const ATHLETES = [
  { name: "Kerry Sexton", role: "Pro Athlete", img: "/7.png" },
  { name: "Marc Hector",  role: "Pro Athlete", img: "/8.jpeg" },
];

export default function HomeAthletesDuo() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="py-12 sm:py-14 text-center">
          <h2 className="text-[28px] sm:text-4xl md:text-[44px] font-extrabold tracking-tight">
            Our Champion Athletes
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet the icons who represent dedication, power, and performance at the highest level.
          </p>
        </div>

        {/* Duo cards */}
        <div className="pb-16 sm:pb-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2">
            {ATHLETES.map((a) => (
              <figure
                key={a.name}
                className="group rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-0.5"
              >
                <div className="rounded-2xl bg-zinc-900/40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/30">
                  {/* image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={a.img}
                      alt={a.name}
                      className="block w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* subtle edge glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20"></div>
                  </div>

                  {/* caption */}
                  <figcaption className="px-5 sm:px-6 pb-5 pt-4 text-center">
                    <div className="text-lg sm:text-xl font-semibold tracking-tight">
                      {a.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">{a.role}</div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>

          {/* optional CTA — remove if not needed */}
          {/* <div className="mt-8 text-center">
            <a
              href="/athletes"
              className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold bg-white text-black hover:bg-white/90 transition"
            >
              View More Athletes
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
