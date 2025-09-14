import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20 md:py-32 w-full"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start animate-fadeInLeft delay-300">
          <img
            src="/images/office.jpg"
            alt="XYZ Builders Office"
            className="rounded-3xl shadow-xl w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left animate-fadeInRight delay-500 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-800">
            About <span className="text-blue-600">XYZ Builders</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
            At <strong>XYZ Builders</strong>, we believe in building more than
            just structures — we build dreams, trust, and long-lasting
            relationships. With years of expertise in residential, commercial,
            and industrial projects, our team ensures top-quality craftsmanship
            and timely delivery.
          </p>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg md:text-xl">
            Our mission is to redefine the construction experience with
            innovation, transparency, and excellence. We are committed to
            sustainability, safety, and customer satisfaction.
          </p>

          <ul className="list-none space-y-3">
            <li className="flex items-center space-x-3 text-gray-700 text-base sm:text-lg md:text-lg">
              <span className="text-blue-600 text-xl">🏗️</span>
              <span>Residential & Commercial Expertise</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 text-base sm:text-lg md:text-lg">
              <span className="text-blue-600 text-xl">🌱</span>
              <span>Sustainable & Eco-friendly Solutions</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 text-base sm:text-lg md:text-lg">
              <span className="text-blue-600 text-xl">✅</span>
              <span>Trusted by 500+ Happy Clients</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(30px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fadeInLeft {
            animation: fadeInLeft 1s ease forwards;
          }
          .animate-fadeInRight {
            animation: fadeInRight 1s ease forwards;
          }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </section>
  );
};

export default About;
