"use client";
import React, { useEffect, useRef, useState } from "react";

const trainers = [
  {
    name: "Teigan",
    title: "Personal Training & Online Coach",
    image: "/teigan.png",
    experience: "2 years Experience",
    shortDesc:
      "I help people create structure in both training and nutrition so they can achieve real, sustainable results.",
    fullDesc: {
      intro: `I help people create structure in both training and nutrition so they can achieve real, sustainable results. Whether you’ve been training for years or are completely new to the gym, my goal is to make fitness simple, effective and tailored to you.`,
      paragraph: `With the right guidance, accountability, and support, you’ll not only see progress—you’ll feel stronger, more confident and in control of your health. Together, we’ll build a clear plan that fits your lifestyle and empowers you to unlock your best self.`,
      stats: [
        { label: "Years Experience", value: "2" },
        { label: "Sessions Delivered", value: "800+" },
        { label: "Client Transformations", value: "50+" },
        { label: "Ongoing Support & Accountability", value: "100%" },
      ],
      services: [
        "1-1 Personal Training",
        "Online Coaching",
        "Hybrid training packages",
        "Balanced nutrition plans",
      ],
      contact: [
        { label: "Instagram/Facebook", value: "Teiganfitpt" },
        { label: "Mobile Number", value: "07919011133" },
      ],
    },
  },
  {
    name: "Luke - Train Smart Coaching",
    title: "1-1 Personal Trainer & Online Coaching",
    image: "/boy.avif",
    experience: "10 years Experience",
    shortDesc:
      "No more fads, just evidence-based training that delivers real results.",
    fullDesc: {
      intro: `With over a decade of experience, 100’s of transformed clients & over 5,000 sessions delivered – I’m here to help you confidently take charge of your health & fitness.`,
      paragraph: `Whether you’ve never stepped foot in a gym or you're aiming for competition prep, Train Smart Coaching provides the most efficient and effective route to your goals.`,
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Clients Transformed", value: "100’s" },
        { label: "Sessions Delivered", value: "5,000+" },
      ],
      services: [
        "Beginner-Friendly Training",
        "Online Coaching",
        "Competition Prep",
        "Evidence-Based Approach",
      ],
    },
  },
  {
    name: "Brad - Brad Holt Personal Training",
    title: "1-1 Personal Trainer & Online Coaching",
    image: "/body.avif",
    experience: "Over the years of Experience",
    shortDesc:
      "Hi, I’m Brad, the founder of Complete Physiques. Over the years, I’ve had the privilege of transforming and working with hundreds of clients, helping them achieve life-changing results both physically and mentally.",
    fullDesc: {
      intro: `As a Body Transformation Specialist, my mission is simple: to help you unlock your full potential. Whether through 1-to-1 personal training or online coaching, I provide tailored programs that deliver lasting results.`,
      paragraph: `With years of experience in the fitness industry, I understand that no two clients are the same. That’s why I focus on building sustainable routines, personalised nutrition strategies, and training plans designed to suit your lifestyle.`,
      stats: [],
      services: [],
      contact: [],
    },
  },
];

export default function TrainersSection() {
  const [activeTrainer, setActiveTrainer] = useState(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    let ctx;
    let mounted = true;

    (async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger =
        ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      ctx = gsap.context(() => {
        gsap.set([titleRef.current, subtitleRef.current], {
          autoAlpha: 0,
          y: 24,
        });

        const cards = gridRef.current
          ? Array.from(gridRef.current.querySelectorAll(":scope > div"))
          : [];

        gsap.set(cards, {
          autoAlpha: 0,
          y: 40,
          rotateX: 6,
          transformOrigin: "50% 100%",
        });

        // Title Animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          })
          .to(titleRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          })
          .to(
            subtitleRef.current,
            { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" },
            "-=0.3"
          );

        const isMobile = window.innerWidth < 640;

        if (isMobile) {
          // Animate each card separately on scroll (mobile)
          ScrollTrigger.batch(cards, {
            interval: 0.2,
            batchMax: 1,
            onEnter: (batch) =>
              gsap.to(batch, {
                autoAlpha: 1,
                y: 0,
                rotateX: 0,
                duration: 0.6,
                ease: "power3.out",
              }),
            onLeaveBack: (batch) =>
              gsap.to(batch, {
                autoAlpha: 0,
                y: 40,
                rotateX: 6,
                duration: 0.4,
                ease: "power2.in",
              }),
            start: "top 95%",
            end: "bottom top",
            toggleActions: "play none none reverse",
          });
        } else {
          // Desktop grid stagger
          gsap.to(cards, {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }, sectionRef);
    })();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  const openTrainer = async (t) => {
    setActiveTrainer(t);
    setTimeout(async () => {
      const { default: gsap } = await import("gsap");
      gsap.set(overlayRef.current, { autoAlpha: 0 });
      gsap.set(modalRef.current, {
        autoAlpha: 0,
        y: 24,
        scale: 0.98,
        transformOrigin: "50% 50%",
      });

      gsap
        .timeline()
        .to(overlayRef.current, { autoAlpha: 1, duration: 0.15 })
        .to(modalRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.2 });
    }, 0);
  };

  const closeTrainer = async () => {
    const { default: gsap } = await import("gsap");
    gsap
      .timeline({
        onComplete: () => setActiveTrainer(null),
      })
      .to(modalRef.current, {
        autoAlpha: 0,
        y: 20,
        scale: 0.98,
        duration: 0.18,
      })
      .to(overlayRef.current, { autoAlpha: 0, duration: 0.15 }, "<");
  };

  return (
    <section
      ref={sectionRef}
      id="trainers"
      className="bg-[#0d1117] text-white py-16 px-4 scroll-m-15"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold" ref={titleRef}>
          MEET THE <span className="text-red-600">TRAINERS</span>
        </h2>
        <p className="text-gray-400 mt-2" ref={subtitleRef}>
          Expert guidance from certified professionals
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {trainers.map((t, i) => (
          <div
            key={i}
            className="border border-red-600 p-6 rounded-md bg-[#161b22] flex flex-col justify-between h-full will-change-transform"
          >
            <div className="flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{t.name}</h3>
              <p className="text-red-500 text-sm text-center">{t.title}</p>
              <p className="bg-red-600 text-white text-xs px-3 py-1 rounded-full mt-2 mb-4 text-center">
                {t.experience}
              </p>
              <p className="text-center text-gray-300 text-sm">{t.shortDesc}</p>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => openTrainer(t)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeTrainer && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeTrainer();
          }}
        >
          <div
            ref={modalRef}
            className="bg-[#161b22] border border-red-600 rounded-lg w-full max-w-2xl p-6 relative text-white overflow-y-auto max-h-[90vh]"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={closeTrainer}
              className="absolute top-4 right-4 text-white text-2xl leading-none"
            >
              &times;
            </button>

            <div className="flex gap-4 items-center mb-6">
              <img
                src={activeTrainer.image}
                alt={activeTrainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{activeTrainer.name}</h3>
                <p className="text-red-500 text-sm">{activeTrainer.title}</p>
                <p className="text-xs bg-red-600 inline-block mt-1 px-2 py-0.5 rounded-full">
                  {activeTrainer.experience}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-2">{activeTrainer.shortDesc}</p>
            <p className="text-sm text-gray-300 mb-2">{activeTrainer.fullDesc.intro}</p>
            <p className="text-sm text-gray-300 mb-4">
              {activeTrainer.fullDesc.paragraph}
            </p>

            {activeTrainer.fullDesc.stats?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                {activeTrainer.fullDesc.stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#0d1117] border rounded-md p-4">
                    <p className="text-red-500 font-bold text-lg">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-8">
              {activeTrainer.fullDesc.services?.length > 0 && (
                <div>
                  <h4 className="text-white font-semibold mb-2">Services Offered</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    {activeTrainer.fullDesc.services.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTrainer.fullDesc.contact?.length > 0 && (
                <div className="md:ml-8">
                  <h4 className="text-white font-semibold mb-2">Contact</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    {activeTrainer.fullDesc.contact.map((c, idx) => (
                      <li key={idx}>
                        <strong>{c.label}:</strong> {c.value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex gap-2 justify-end mt-6">
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm rounded">
                Book Consultation
              </button>
              <button
                onClick={closeTrainer}
                className="border border-red-600 px-4 py-2 text-sm text-red-500 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
