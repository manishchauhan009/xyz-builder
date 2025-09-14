import React from "react";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        src="/images/banner.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-[1.05] transition-transform duration-[20000ms] ease-in-out"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight md:leading-snug animate-fadeInUp">
          Building Dreams,{" "}
          <span className="text-blue-400">Shaping Futures</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 animate-fadeInUp delay-300">
          XYZ Builders delivers top-class construction and design solutions for
          residential, commercial, and industrial projects.
        </p>

        <a
          href="#projects"
          aria-label="View our projects"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all animate-fadeInUp delay-500"
        >
          View Our Projects
        </a>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </section>
  );
};

export default Banner;
