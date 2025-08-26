import React, { useState } from "react";

// All Trainers with full data
const trainers = [
  {
    name: "Luke",
    title: "Train Smart Coaching",
    experience: "10 years Experience",
    img: "/boy.avif",
    description:
      "No more nutrition fads or nonsense training, just an evidence-based approach that delivers you the results you're after.",
    detailed: {
      heading: "1-1 Personal Trainer & Online Coaching",
      intro:
        "With over a decade of experience, 100’s of transformed clients & over 5,000 sessions delivered – I’m here to help you confidently take charge of your health & fitness.",
      paragraph:
        "Whether you’ve never stepped foot in a gym before, to competition prep & everything else in between – Train Smart Coaching maps out the most efficient & effective route possible to your goals.",
      outro:
        "No more nutrition fads or nonsense training, just an evidence-based approach that delivers you the results you’re after. You will feel comfortable & confident in your journey from day 1, never left in the dark.",
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Clients Transformed", value: "100’s" },
        { label: "Sessions Delivered", value: "5,000+" },
      ],
      services: [
        "Beginner-Friendly Training",
        "Online Coaching",
        "Competition Preparation",
        "Evidence-Based Approach",
      ],
    },
  },
  {
    name: "Teigan",
    title: "TeiganFit – Personal & Online Coaching",
    experience: "7 years Experience",
    img: "/girl2.avif",
    description:
      "Helping clients develop their physique with structure in diet and training.",
    detailed: {
      heading: "Personal Training & Online Coaching",
      intro:
        "I am taking on clients who want to improve their physique by teaching how structure in both diet and training can enhance results.",
      paragraph:
        "Whether you’ve trained for years or never stepped foot in a gym, I’m here to help you take control of your health and fitness with the support you may be missing.",
      outro:
        "You’ll feel empowered, guided, and motivated to unlock your best self through smart, tailored fitness.",
      stats: [
        { label: "Years Experience", value: "7+" },
        { label: "Clients Helped", value: "200+" },
        { label: "Programs Delivered", value: "1,000+" },
      ],
      services: [
        "Structured Diet Plans",
        "Online Coaching",
        "Personal Training",
        "Motivational Support",
      ],
    },
  },
  {
    name: "Brad Holt",
    title: "Brad Holt Personal Training",
    experience: "5 years Experience",
    img: "/body.avif",
    description:
      "From beginners to seasoned athletes — I tailor plans to help every client succeed.",
    detailed: {
      heading: "1-1 Personal Training & Support",
      intro:
        "Whatever your goal is, I am confident I can help. I’ve worked with both total beginners and competitive lifters alike.",
      paragraph:
        "You'll get structure, consistency, and a plan tailored to your needs to help you progress confidently toward your goals.",
      outro:
        "My coaching is not just about reps — it's about building a sustainable lifestyle and consistent growth.",
      stats: [
        { label: "Years Experience", value: "5+" },
        { label: "Clients Trained", value: "300+" },
        { label: "Workouts Delivered", value: "3,000+" },
      ],
      services: [
        "Strength Coaching",
        "Fat Loss Programs",
        "Muscle Gain Plans",
        "Tailored Coaching Support",
      ],
    },
  },
];

export default function TrainersSection() {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  return (
    <section className="bg-[#0d1117] text-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          MEET THE <span className="text-red-600">TRAINERS</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Expert guidance from certified professionals
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="border border-red-600 p-6 rounded-md flex flex-col items-center bg-[#161b22]"
          >
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{trainer.name}</h3>
            <p className="text-red-500 text-sm text-center">{trainer.title}</p>
            <p className="bg-red-600 text-white text-xs px-3 py-1 rounded-full mt-2 mb-4">
              {trainer.experience}
            </p>
            <p className="text-center text-gray-300 text-sm mb-4">{trainer.description}</p>
            <button
              onClick={() => setSelectedTrainer(trainer)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-70 px-4 py-5 ">
          <div className="bg-[#161b22] border border-red-600 rounded-md max-w-2xl w-full sm:h-150 mx-auto p-5 relative text-white">
            <button
              onClick={() => setSelectedTrainer(null)}
              className="absolute top-3 right-4 text-white text-xl"
            >
              &times;
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedTrainer.img}
                alt={selectedTrainer.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{selectedTrainer.name}</h3>
                <p className="text-red-500 text-sm">{selectedTrainer.title}</p>
                <p className="bg-red-600 inline-block text-xs px-2 py-0.5 rounded-full mt-1">
                  {selectedTrainer.experience}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h4 className="text-red-500 font-semibold mb-2">
                {selectedTrainer.detailed.heading}
              </h4>
              <p className="text-sm text-gray-300 mb-2">{selectedTrainer.detailed.intro}</p>
              <p className="text-sm text-gray-300 mb-2">{selectedTrainer.detailed.paragraph}</p>
              <p className="text-sm text-gray-300 mb-4">{selectedTrainer.detailed.outro}</p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
                {selectedTrainer.detailed.stats.map((stat, i) => (
                  <div key={i} className="bg-[#0d1117] p-4 border rounded-md">
                    <p className="text-red-500 font-bold text-lg">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="mb-4">
                <h5 className="font-semibold text-white mb-2">Services Offered</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                  {selectedTrainer.detailed.services.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2 mt-5 sm:-mt-5 justify-end">
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
                  Book Consultation
                </button>
                <button
                  onClick={() => setSelectedTrainer(null)}
                  className="border border-red-600 text-red-500 px-4 py-2 rounded text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
