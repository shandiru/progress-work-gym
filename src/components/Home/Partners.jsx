import React from "react";

const partners = [
    {
        name: "Hussle",
        image:
            "https://static.wixstatic.com/media/3626f3_fdbc2b05fab54d4e9e1b2279d27055a1~mv2.png",
        link: "https://www.hussle.com/gyms-in-leicester/progress-works-gym-gym-details",
    },
    {
        name: "Gympass",
        image:
            "https://static.wixstatic.com/media/3626f3_c32c6e10a89d4a6798a8e0cdc93cb86e~mv2.webp",
        link: "https://wellhub.com/en-us/",
    },
    {
        name: "Cybex",
        image: "/cybex.avif",
        link: null,
    },
    {
        name: "Panatta",
        image: "/panatta.avif",
        link: null,
    },
];

const Partners = () => {
    const baseLogoClass =
        "w-36 h-36 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300";

    return (
        <section className="bg-[#050616] py-12 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {/* Title with divider */}
                <div className="flex items-center gap-4">
                    <h2 className="text-white text-5xl font-semibold">Partners</h2>
                    <div className="h-20 mt-2 ml-10 border-l border-white"></div>
                </div>

                {/* Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-center mt-6">
                    {partners.map((partner, index) =>
                        partner.link ? (
                            <a
                                key={index}
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${baseLogoClass}`}
                            >
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="object-contain max-w-[90%] max-h-[90%]"
                                />
                            </a>
                        ) : (
                            <div key={index} className={`${baseLogoClass}`}>
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="object-contain max-w-[90%] max-h-[90%]"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Partners;
