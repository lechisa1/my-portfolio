"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaUniversity, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-bounce-slow"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Profile / Illustration */}
        <div className="flex justify-center md:justify-end">
          <div
            className={`relative group transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gray-800 rounded-3xl shadow-xl p-6 w-80 border border-gray-700">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/image.png" // replace with your picture
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mt-4 text-center">
                Lechisa Bedasa
              </h3>
              <p className="text-indigo-400 text-center">
                Full-Stack Developer
              </p>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </div>
          </div>
        </div>

        {/* Right: About Content */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="mb-6">
            <span className="text-sm md:text-base font-medium text-indigo-400 bg-indigo-900/30 px-3 py-1 rounded-full">
              About Me
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Crafting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Experiences
            </span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate{" "}
            <span className="font-semibold text-indigo-400">
              Full-Stack Developer
            </span>{" "}
            who enjoys building scalable web applications and delivering clean,
            efficient code. With experience across modern frontend and backend
            frameworks, I transform ideas into user-friendly digital solutions.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Beyond coding, I'm always exploring new technologies, mentoring
            peers, and contributing to open-source projects. My goal is to
            create products that are not only functional but also provide an
            excellent user experience.
          </p>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 text-center hover:shadow-lg transition-all hover:scale-105">
              <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                2+
              </h4>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 text-center hover:shadow-lg transition-all hover:scale-105">
              <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                15+
              </h4>
              <p className="text-gray-400">Projects Completed</p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 text-center hover:shadow-lg transition-all hover:scale-105">
              <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                5+
              </h4>
              <p className="text-gray-400">Technologies Mastered</p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 text-center hover:shadow-lg transition-all hover:scale-105">
              <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                ∞
              </h4>
              <p className="text-gray-400">Learning Mindset</p>
            </div>
          </div>

          {/* Education & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 hover:shadow-lg transition-all hover:scale-105">
              <FaUniversity className="text-indigo-400 text-2xl" />
              <div>
                <h4 className="text-white font-semibold">Education</h4>
                <p className="text-gray-400">BSc Software Engineering</p>
                <p className="text-gray-400">Haramaya University</p>
                <p className="text-gray-400">Graduated: 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-5 hover:shadow-lg transition-all hover:scale-105">
              <FaMapMarkerAlt className="text-indigo-400 text-2xl" />
              <div>
                <h4 className="text-white font-semibold">Location</h4>
                <p className="text-gray-400">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
