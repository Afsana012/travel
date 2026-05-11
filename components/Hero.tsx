import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#f4faf7] min-h-[80vh]">
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                    Build Your Dream Travel <br /> Bucket List
                </h1>
                <p className="text-gray-600 text-lg max-w-lg">
                    Plan, track, and organize your travel adventures with our intuitive platform.
                    Discover new destinations, manage your itineraries, and never miss a dream trip.
                </p>
                <div className="flex gap-4 pt-4">
                    <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
                        Start Planning Free
                    </button>
                    <button className="bg-white border border-gray-300 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition">
                        Sign In
                    </button>
                </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">

                <img
                    src="./images/banner.png"
                    alt="Travel Concept"
                    className="w-full h-auto object-cover"
                />

            </div>
        </section>
    );
};

export default Hero;