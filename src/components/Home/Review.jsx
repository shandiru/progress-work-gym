// File: Review.jsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Review() {
  const testimonials = [
    {
      quote:
        "I was in the area and just used the gym on a one day pass. No complaints whatsoever, this gym has a very good range of equipment, and will use again next time I'm in Leicester.",
      name: "Mark C",
    },
    {
      quote:
        "Great gym. Staff very knowledgeable. Always there to help and a chat if needed. Fantastic atmosphere which is needed in a gym. Definitely recommend. 😁",
      name: "Sekao Oakes",
    },
    {
      quote:
        "Great Gym – I’m working locally and was looking for somewhere to train for a couple of weeks. This gym has it all, every workout is a joy. Members and staff are welcoming and friendly.",
      name: "Adil Hussain",
    },
    {
      quote:
        "I come here during off-peak hours and have never had a bad experience. Great atmosphere and friendly staff.",
      name: "Micah",
    },
    {
      quote:
        "One of the best gyms I've been to in Leicestershire. Panatta machines, amazing vibe, and supportive staff. Highly recommend!",
      name: "Ryan “Tilly” Till",
    },
    {
      quote:
        "Best gym in Leicester – equipment, atmosphere, and staff support make it unbeatable. Extended weekend hours would be amazing!",
      name: "R S",
    },
    {
      quote:
        "Large selection of weights and machines. Air con, lockers, and top quality kit. Easily one of the best gyms in the UK.",
      name: "Tom Holder",
    },
    {
      quote:
        "Such a quality gym – equipment is super well maintained, and the gym itself is one of the best I've been to.",
      name: "Philip Duffy",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-black via-[#111] to-black text-white"
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real feedback from members who trust{" "}
            <strong className="text-[#ed1c24]">Progress Works Gym</strong>.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="flex flex-col h-full min-h-[260px] bg-[#1a1a1a] border border-[#ed1c24]/30 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-[#ed1c24]/70 transition-all duration-300">
                <p className="mb-4 flex-grow text-gray-200 italic">
                  “{t.quote}”
                </p>
                <div className="text-sm font-semibold mt-auto text-[#ed1c24] tracking-wide">
                  – {t.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ed1c24;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
          border: 2px solid #ed1c24;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
