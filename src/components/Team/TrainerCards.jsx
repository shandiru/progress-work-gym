import React, { useState } from "react";

const trainers = [
  {
    name: "Teigan - TeiganFit",
    title: "Personal Training & Online Coaching",
    image: "/girl2.avif",
    experience: "7 years Experience",
    shortDesc:
      "Helping clients develop their physique with structured training and nutrition.",
    fullDesc: {
      intro: `I am taking on clients who want to develop and improve their physique by showing them how structure in both diet and training can greatly enhance results.`,
      paragraph: `Whether you've trained for years or never stepped foot in a gym, I'm here to help you take control of your health and fitness with the structure and support you may be missing.`,
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
    experience: "5 years Experience",
    shortDesc:
      "Helping everyone from first-time gym goers to seasoned athletes reach their goals.",
    fullDesc: {
      intro: `Whatever your goal is, I am confident I can help. With years of experience, I've worked with total beginners and competitive lifters alike.`,
      paragraph: `You'll get structure, consistency, and a plan tailored to your needs to help you progress confidently toward your goals.`,
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
  const [activeTrainer, setActiveTrainer] = useState(null);

  return (
    <section className="bg-[#0d1117] text-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          MEET THE <span className="text-red-600">TRAINERS</span>
        </h2>
        <p className="text-gray-400 mt-2">Expert guidance from certified professionals</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {trainers.map((t, i) => (
          <div
            key={i}
            className="border border-red-600 p-6 rounded-md flex flex-col items-center bg-[#161b22]"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-center">{t.name}</h3>
            <p className="text-red-500 text-sm text-center">{t.title}</p>
            <p className="bg-red-600 text-white text-xs px-3 py-1 rounded-full mt-2 mb-4">
              {t.experience}
            </p>
            <p className="text-center text-gray-300 text-sm mb-4">{t.shortDesc}</p>
            <button
              onClick={() => setActiveTrainer(t)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeTrainer && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-[#161b22] border border-red-600 rounded-lg w-full max-w-2xl p-6 relative text-white overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveTrainer(null)}
              className="absolute top-4 right-4 text-white text-2xl"
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

            <p className="text-sm text-gray-300 mb-2">{activeTrainer.fullDesc.intro}</p>
            <p className="text-sm text-gray-300 mb-4">{activeTrainer.fullDesc.paragraph}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-6">
              {activeTrainer.fullDesc.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#0d1117] border rounded-md p-4">
                  <p className="text-red-500 font-bold text-lg">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Services Offered</h4>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                {activeTrainer.fullDesc.services.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 justify-end mt-6">
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 text-sm rounded">
                Book Consultation
              </button>
              <button
                onClick={() => setActiveTrainer(null)}
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
