// File: Review.jsx
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
        "Great gym. Staff very knowledgeable. Always there to help and a chat if needed.Gym users very friendly and approachable. Fantastic atmosphere which is needed in a gym. Definitely recommend. 😁.",
      name: "Sekao Oakes",
    },
    {
      quote:
        "Great Gym - I’m working locally and was looking for somewhere to train/workout for a couple of weeks. This gym has it all every workout is a joy with a wide variety of machines and free weights you can hit all muscle groups effectively. Gym members and staff are welcoming and friendly (no ego heads). Parking hasn’t been an issue even though there is limited spaces but so far haven’t had a problem. Will always be coming to this gym when I’m in Leicester.",
      name: "Adil Hussain",
    },
    {
      quote:
        "I come here during off-peak hours and have never had a bad experience. Great atmosphere and friendly staff",
      name: "Micah",
    },
    {
      quote:
        "One of the best gyms I've been to in the Leicestershire area. Its the only place I've seen Panatta machines, which are some of the most incredible machines in the world. All the members I've interacted with have been sound. Music is craking too which is a bonus. I'm giving it a 4.5, only because there is only one deadlift platform currently. It would be great to see another added where the other squat rack is situated. Staff are always nice and chatty, keep up the amazing work.",
      name: "Ryan “Tilly” Till",
    },
    {
      quote:
        "I am giving this gym 5 stars to stand up to the government and keep your gym open! Mental health issues are on the rise. Suicide rates are higher in the winter than they are in summer. It is important to keep our businesses open else they will crash. We all need to be stronger to support our local businesses..",
      name: "brad sanders",
    },
    {
      quote:
        "From my own experience this is the best gym in the whole Leicester, yes I seen all of them, this has best equipment some I never seen before 🤔, air conditioning, friendly staff! Needed to extend weekend working hours! ⚒️👌.",
      name: "R S",
    },
    {
      quote:
        "Large selection and good amount of dumbbells / plates with plenty of benches, a separate leg room and a separate cardio room. Plenty of decent machines all Cybex good quality. Air con throughout. Changing rooms, showers and lockers all good. I would like to see another power rack and deadlift area as it's a struggle to get on them, otherwise would be 5* Edit - loads more kit changed to 5* has everything you need",
      name: "Tom Holder",
    },
    {
      quote:
        "One of the best kitted-out gyms in the country. None of the cheap and chearful kit, but expensive Prime and other similar branded kit. Recommended for serious weight training..",
      name: "Prakash Parmar",
    },
    {
      quote:
        "Such a quality gym, all the equipment is super well maintained and the gym itself is honestly one of the best I've been to. Will definitely be back again!",
      name: "Philip Duffy",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-300">
            Real feedback from members who trust{" "}
            <strong className="text-[#ed1c24]">Progress Works Gym</strong>.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <div className="flex flex-col h-full min-h-[250px] bg-[#111111] text-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow border border-[#ed1c24]/20">
                <p className="mb-4 flex-grow text-gray-200">"{t.quote}"</p>
                <div className="text-sm font-semibold mt-auto text-[#ed1c24]">
                  – {t.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination color */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ed1c24; /* brand red */
          opacity: 0.4;
        }
        .swiper-pagination-bullet-active {
          background: #ed1c24; /* active red */
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
