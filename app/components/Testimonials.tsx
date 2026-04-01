"use client";

import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaStar, FaUser, FaBuilding } from "react-icons/fa";

const Testimonials = () => {
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
      { threshold: 0.1 },
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

  const testimonials = [
    {
      name: "Abebe Kebede",
      role: "Project Manager",
      company: "Ethiopian AI Institute",
      content:
        "Lechisa is an exceptional backend developer. He delivered our crime reporting system ahead of schedule with excellent code quality. His NestJS expertise and problem-solving skills are outstanding.",
      rating: 5,
      avatar: "AK",
    },
    {
      name: "Sara Haile",
      role: "Software Engineering Professor",
      company: "Haramaya University",
      content:
        "As Lechisa's thesis advisor, I can attest to his strong technical foundation. His Afan Oromo Spell Checker project demonstrated excellent backend development and NLP skills. Highly recommended!",
      rating: 5,
      avatar: "SH",
    },
    {
      name: "Daniel Mekonnen",
      role: "Senior Developer",
      company: "Tech Startup",
      content:
        "Great collaboration with Lechisa on multiple projects. He has solid expertise in REST APIs, GraphQL, and database design. His code is clean, well-documented, and production-ready.",
      rating: 5,
      avatar: "DM",
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What People{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Say
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feedback from colleagues and collaborators
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white mb-4">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <FaUser size={12} />
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-xs flex items-center gap-2">
                    <FaBuilding size={12} />
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-gray-400 mb-6">Trusted by professionals at</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-xl font-bold text-gray-400">
              Ethiopian AI Institute
            </div>
            <div className="text-xl font-bold text-gray-400">
              Haramaya University
            </div>
            <div className="text-xl font-bold text-gray-400">
              Tech Companies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
