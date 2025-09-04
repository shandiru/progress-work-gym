import React from "react";

const CustomerReviews = () => {
    return (
        <section className="bg-[#050616] text-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                    HEAR WHAT OUR CUSTOMERS <br className="hidden sm:block " /> SAY
                </h2>

                {/* Review Widget */}
                <div className="bg-white text-black rounded-xl shadow-md p-6 sm:p-8 max-w-4xl mx-auto">
                    <p className="text-center text-sm font-semibold text-gray-700 mb-4">
                        LOOKING FOR REVIEWS?
                    </p>
                    <div className="flex justify-center mb-2">
                        <button className="bg-[#233B6A] text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-[#1d2e55] transition">
                            View all reviews
                        </button>
                    </div>
                    <p className="text-center text-xs text-gray-500">
                        Site owner: Upgrade for more views or wait till monthly reset.
                    </p>
                </div>

                {/* Powered by Trustmary */}
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://trustmary.com/add-reviews-to-website/?utm_source=widget&utm_medium=badge&utm_campaign=powered-by"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-md px-4 py-2 flex items-center gap-2 shadow-sm"
                    >
                        <span className="text-sm text-black">Powered by</span>
                        <img
                            src="/logo2.svg"
                            alt="Trustmary logo"
                            className="h-5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
