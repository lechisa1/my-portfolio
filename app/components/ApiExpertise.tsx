"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaCloud,
  FaLock,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import { SiGraphql, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";

const ApiExpertise = () => {
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

  const apiFeatures = [
    {
      icon: <FaServer size={24} />,
      title: "RESTful API Design",
      description:
        "Building clean, well-documented REST APIs following best practices with proper HTTP methods, status codes, and versioning strategies.",
    },
    {
      icon: <SiGraphql size={24} />,
      title: "GraphQL Development",
      description:
        "Creating efficient GraphQL schemas, resolvers, and subscriptions for flexible, type-safe data fetching.",
    },
    {
      icon: <FaLock size={24} />,
      title: "Authentication & Security",
      description:
        "Implementing JWT, OAuth2, and role-based access control with proper security measures.",
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Database Architecture",
      description:
        "Designing optimal database schemas, indexes, and relationships for PostgreSQL and MongoDB.",
    },
    {
      icon: <FaCog size={24} />,
      title: "Microservices",
      description:
        "Building scalable microservices architecture with NestJS, including service communication and orchestration.",
    },
    {
      icon: <FaRocket size={24} />,
      title: "Performance Optimization",
      description:
        "Implementing caching, pagination, and query optimization for high-performance APIs.",
    },
  ];

  const techStack = [
    { name: "Node.js", level: 95, color: "from-green-500 to-emerald-500" },
    { name: "NestJS", level: 90, color: "from-red-500 to-rose-500" },
    { name: "Express", level: 95, color: "from-gray-400 to-gray-600" },
    { name: "GraphQL", level: 88, color: "from-pink-500 to-rose-500" },
    { name: "PostgreSQL", level: 92, color: "from-blue-600 to-indigo-600" },
    { name: "MongoDB", level: 88, color: "from-green-500 to-emerald-500" },
  ];

  return (
    <section
      id="api-expertise"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-4">
            Backend Specialization
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            API &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Backend
            </span>{" "}
            Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building robust, scalable backend systems with modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* API Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {apiFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Backend Tech Stack */}
        <div
          className={`bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Backend Technology Stack
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{tech.name}</span>
                  <span className="text-indigo-400 text-sm font-medium">
                    {tech.level}%
                  </span>
                </div>
                <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000`}
                    style={{
                      width: isVisible ? `${tech.level}%` : "0%",
                      transitionDelay: `${index * 100 + 500}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Database Logos */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">
              Database Expertise
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700">
                <SiPostgresql size={24} className="text-blue-400" />
                <span className="text-gray-300">PostgreSQL</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700">
                <SiMongodb size={24} className="text-green-500" />
                <span className="text-gray-300">MongoDB</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700">
                <SiRedis size={24} className="text-red-500" />
                <span className="text-gray-300">Redis</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Need a Backend Specialist?
            </h3>
            <p className="text-gray-300 mb-6">
              I specialize in building scalable APIs, microservices, and robust
              backend systems. Let's discuss your project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiExpertise;
