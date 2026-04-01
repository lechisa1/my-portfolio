"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaServer,
  FaCode,
  FaDatabase,
  FaRocket,
  FaUsers,
  FaTrophy,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const target = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const achievements = [
    { icon: <FaRocket />, number: "15+", label: "Backend Projects" },
    { icon: <FaCode />, number: "50+", label: "API Endpoints Built" },
    { icon: <FaDatabase />, number: "5+", label: "Databases Designed" },
    { icon: <FaGraduationCap />, number: "2024", label: "BSc Graduate" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Backend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Developer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Card */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-700"></div>

              {/* Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
                {/* Image */}
                <div className="relative h-80 lg:h-96 w-full">
                  <Image
                    src="/images/image.png"
                    alt="Lechisa Bedasa - Backend Developer"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Lechisa Bedasa
                  </h3>
                  <p className="text-indigo-400 font-medium">
                    Backend Developer | API Development
                  </p>

                  {/* Quick info */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/80 px-3 py-1 rounded-full">
                      <FaMapMarkerAlt className="text-pink-400" />
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-300 bg-gray-800/80 px-3 py-1 rounded-full">
                      <FaUniversity className="text-blue-400" />
                      BSc Software Engineering
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
                <div className="absolute bottom-20 left-4 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"></div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Story introduction */}
            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate{" "}
                <span className="text-indigo-400 font-semibold">
                  Backend Developer
                </span>{" "}
                specializing in building scalable APIs, microservices, and
                robust server-side systems. I transform complex requirements
                into efficient, production-ready backend solutions.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working at the{" "}
                <span className="text-purple-400 font-semibold">
                  Ethiopian Artificial Intelligence Institute (EAI)
                </span>
                , I build enterprise-grade backend systems using{" "}
                <span className="text-indigo-400">NestJS</span>,{" "}
                <span className="text-indigo-400">Node.js</span>,
                <span className="text-indigo-400"> PostgreSQL</span>, and{" "}
                <span className="text-indigo-400">MongoDB</span>. I have
                extensive experience with{" "}
                <span className="text-emerald-400">REST APIs</span> and{" "}
                <span className="text-emerald-400">GraphQL</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in writing{" "}
                <span className="text-emerald-400 font-semibold">
                  clean, maintainable code
                </span>
                ,
                <span className="text-emerald-400">
                  {" "}
                  following best practices
                </span>
                , and building systems that are both powerful and easy to
                maintain. Every backend I build is optimized for performance and
                scalability.
              </p>
            </div>

            {/* Backend Specialties */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                Backend Specialties
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
                  <FaServer className="text-indigo-400 text-xl" />
                  <span className="text-gray-300 text-sm">API Development</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
                  <FaCode className="text-purple-400 text-xl" />
                  <span className="text-gray-300 text-sm">
                    NestJS / Node.js
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
                  <FaDatabase className="text-emerald-400 text-xl" />
                  <span className="text-gray-300 text-sm">
                    PostgreSQL / MongoDB
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-gray-700">
                  <FaRocket className="text-pink-400 text-xl" />
                  <span className="text-gray-300 text-sm">Microservices</span>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 text-center hover:border-indigo-500/50 transition-all hover:scale-105"
                >
                  <div className="text-indigo-400 text-2xl mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {item.number}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                Let's Work Together
              </a>
              <a
                href="/Lechisa_Bedasa_CV.pdf"
                download
                className="inline-flex items-center gap-2 border border-indigo-500 text-indigo-300 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500/10 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
