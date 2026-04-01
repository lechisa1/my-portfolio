"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaCloud,
  FaLock,
  FaRocket,
  FaDesktop,
  FaMobile,
  FaCog,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
} from "react-icons/si";

const Services = () => {
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

  const services = [
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Building robust server-side applications with NestJS, Node.js, Express, and Laravel. Creating scalable APIs and microservices architecture.",
      features: [
        "NestJS & Node.js",
        "RESTful APIs",
        "GraphQL APIs",
        "Laravel/PHP",
      ],
    },
    {
      icon: <FaDesktop />,
      title: "Frontend Development",
      description:
        "Creating beautiful, responsive user interfaces with React, Next.js, TypeScript, and Tailwind CSS. Modern and performant web applications.",
      features: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Database Design & Development",
      description:
        "Designing efficient database schemas for PostgreSQL, MySQL, and MongoDB. Optimizing queries and ensuring data integrity.",
      features: ["PostgreSQL", "MySQL", "MongoDB", "Database Optimization"],
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development combining powerful backends with stunning frontends. Complete solutions from concept to deployment.",
      features: [
        "MERN Stack",
        "Next.js + NestJS",
        "Laravel + Blade",
        "Full Solutions",
      ],
    },
    {
      icon: <FaLock />,
      title: "Authentication & Security",
      description:
        "Implementing secure authentication systems with JWT, OAuth2, and role-based access control. Protecting your applications from threats.",
      features: [
        "JWT Authentication",
        "OAuth2 Implementation",
        "Role-based Access",
        "Security Best Practices",
      ],
    },
    {
      icon: <FaRocket />,
      title: "API Integration",
      description:
        "Connecting frontend applications with backend services. Building custom integrations, third-party API implementations, and webhooks.",
      features: [
        "REST Integration",
        "GraphQL Integration",
        "Third-party APIs",
        "Webhook Development",
      ],
    },
  ];

  const techStack = [
    {
      name: "React / Next.js",
      icon: <SiNextdotjs size={24} />,
      color: "text-gray-300",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={24} />,
      color: "text-blue-400",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={24} />,
      color: "text-teal-400",
    },
    {
      name: "Laravel + Blade",
      icon: <SiLaravel size={24} />,
      color: "text-red-400",
    },
    { name: "NestJS", icon: <FaServer size={24} />, color: "text-red-500" },
    { name: "Node.js", icon: <FaCode size={24} />, color: "text-green-500" },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
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
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Provide
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Full-stack development services - from robust backends to stunning
            frontends
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div
          className={`bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technologies I Work With
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-indigo-500/30 transition-all"
              >
                <div className={`${tech.color}`}>{tech.icon}</div>
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Build Something Great?
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you need a robust backend, a stunning frontend, or a
              complete full-stack solution, I'm here to help bring your ideas to
              life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
