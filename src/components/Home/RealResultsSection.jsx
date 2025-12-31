'use client';
import React, { useRef, useState, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function RealResultsSection() {
    const resultsData = [
        {
            id: 'slide-1',
            before: '/1.jpg',
            after: '/2.jpg',
            quote:
                'After a pec major tear led to weight gain, my client focused on slow, steady lifestyle changes—aiming for 1lb a week. Over 8 months, he lost 15kg, proving that sustainable fat loss and consistency matter more than quick fixes.',
            avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-2-140x140.png',
            name: 'Annie Parson',
            tag: 'Weeks Workouts',
        },
        {
            id: 'slide-2',
            before: '/3.2.jpeg',
            after: '/3.1.jpeg',
            quote:
                `Client's goal was to build muscle, feel bigger, and get stronger in the gym. We focused on a lean gain approach—prioritizing strength training, progressive overload, and controlled nutrition—so he could add quality muscle without unnecessary fat.`,
            avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-3-140x140.png',
            name: 'Annie Parson',
            tag: 'Weeks Workouts',
        },
        {
            id: 'slide-3',
            before: '/4.2.jpeg',
            after: '/4.1.jpeg',
            quote:
                'Client wanted to add muscle while also feeling mentally sharp and physically younger. We focused on balanced training, smart nutrition, and lifestyle habits to boost fitness, energy, and motivation—helping him look stronger, feel healthier, and regain confidence inside and outside the gym.',
            avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-1-140x140.png',
            name: 'Annie Parson',
            tag: 'Weeks Workouts',
        },
    ];

    const [posMap, setPosMap] = useState(() =>
        Object.fromEntries(resultsData.map((i) => [i.id, 50]))
    );
    const containersRef = useRef({});
    const setContainerRef = (id) => (el) => {
        containersRef.current[id] = el;
    };

    const updateFromClientX = useCallback((id, clientX) => {
        const el = containersRef.current[id];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
        const pct = Math.round((x / rect.width) * 100);
        setPosMap((m) => ({ ...m, [id]: pct }));
    }, []);

    const onMouseDown = (id, e) => {
        e.preventDefault();
        updateFromClientX(id, e.clientX);
        const onMove = (ev) => updateFromClientX(id, ev.clientX);
        const onUp = () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
    };

    const onTouchStart = (id, e) => {
        if (e.touches?.[0]) updateFromClientX(id, e.touches[0].clientX);
    };
    const onTouchMove = (id, e) => {
        if (e.touches?.[0]) updateFromClientX(id, e.touches[0].clientX);
    };

    const scrollerRef = useRef(null);

    const scrollByCard = (dir = 1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const first = el.firstElementChild;
        let gap = 0;
        try {
            const cs = getComputedStyle(el);
            gap = parseFloat(cs.columnGap || cs.gap || '0') || 0;
        } catch { }
        const cardWidth = first
            ? first.getBoundingClientRect().width + gap
            : Math.round(el.clientWidth * 0.8);
        el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    };

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10 lg:mb-12">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    Real People. Real Results
                </h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-300 px-2">
                    No gimmicks. No quick fixes. Just everyday people putting in the work, seeing real progress, and feeling stronger inside and out.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative mx-auto max-w-7xl">
                {/* Previous Button */}
                <button
                    type="button"
                    onClick={() => scrollByCard(-1)}
                    className="hidden md:inline-flex absolute left-0 lg:-left-12 top-1/2 z-10 -translate-y-1/2 items-center justify-center rounded-full border border-red-600 w-10 h-10 lg:w-12 lg:h-12 bg-[#161b22] text-white hover:bg-red-600 transition-colors duration-200 text-xl lg:text-2xl"
                    aria-label="Previous"
                >
                    <FaChevronLeft />
                </button>

                {/* Carousel Scroller */}
                <div
                    ref={scrollerRef}
                    className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                     [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {resultsData.map((item) => (
                        <div
                            key={item.id}
                            className="snap-center shrink-0 w-[85vw] xs:w-[80vw] sm:w-[70vw] md:w-[48%] lg:w-[450px] xl:w-[500px]"
                        >
                            <div className="rounded-xl border border-red-600 bg-[#161b22] p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow duration-200 h-auto">
                                {/* Before/After slider */}
                                <div
                                    ref={setContainerRef(item.id)}
                                    className="relative w-full overflow-hidden rounded-lg mb-3 sm:mb-4 touch-none"
                                    style={{ aspectRatio: '1.3' }}
                                    onMouseDown={(e) => onMouseDown(item.id, e)}
                                    onTouchStart={(e) => onTouchStart(item.id, e)}
                                    onTouchMove={(e) => onTouchMove(item.id, e)}
                                    role="region"
                                    aria-label="Before and after comparison slider"
                                >
                                    <img
                                        src={item.before}
                                        alt="before"
                                        className="absolute inset-0 h-full w-full object-cover select-none"
                                        draggable="false"
                                    />
                                    <div
                                        className="absolute inset-0 overflow-hidden"
                                        style={{ width: `${posMap[item.id]}%` }}
                                    >
                                        <img
                                            src={item.after}
                                            alt="after"
                                            className="h-full w-full object-cover select-none"
                                            draggable="false"
                                            style={{ width: `${10000 / posMap[item.id]}%` }}
                                        />
                                    </div>
                                    <div
                                        className="absolute top-0 h-full w-0.5 -translate-x-1/2 bg-red-500 cursor-ew-resize"
                                        style={{ left: `${posMap[item.id]}%` }}
                                    >
                                        <div className="absolute left-1/2 top-1/2 grid h-8 w-8 sm:h-10 sm:w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-red-500 shadow-lg">
                                            <div className="relative flex items-center gap-0.5">
                                                <i
                                                    className="inline-block"
                                                    style={{
                                                        borderStyle: 'solid',
                                                        borderColor: '#fff',
                                                        borderWidth: '0 2px 2px 0',
                                                        padding: '3px',
                                                        transform: 'rotate(135deg)',
                                                    }}
                                                />
                                                <i
                                                    className="inline-block"
                                                    style={{
                                                        borderStyle: 'solid',
                                                        borderColor: '#fff',
                                                        borderWidth: '2px 0 0 2px',
                                                        padding: '3px',
                                                        transform: 'rotate(135deg)',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs sm:text-sm font-semibold">
                                        Before
                                    </div>
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs sm:text-sm font-semibold">
                                        After
                                    </div>
                                </div>
                                <blockquote className="rounded-lg bg-[#0d1117] p-3 sm:p-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
                                    <p className="line-clamp-6 sm:line-clamp-none">{item.quote}</p>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    type="button"
                    onClick={() => scrollByCard(1)}
                    className="hidden md:inline-flex absolute right-0 lg:-right-12 top-1/2 z-10 -translate-y-1/2 items-center justify-center rounded-full border border-red-600 w-10 h-10 lg:w-12 lg:h-12 bg-[#161b22] text-white hover:bg-red-600 transition-colors duration-200 text-xl lg:text-2xl"
                    aria-label="Next"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex md:hidden justify-center gap-2 mt-6">
                {resultsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            const el = scrollerRef.current;
                            if (!el) return;
                            const cards = el.children;
                            if (cards[index]) {
                                cards[index].scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'nearest',
                                    inline: 'center'
                                });
                            }
                        }}
                        className="w-2 h-2 rounded-full bg-gray-600 hover:bg-red-600 transition-colors"
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
