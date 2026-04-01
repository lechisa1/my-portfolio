"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiNodedotjs, SiNextdotjs, SiNestjs, SiGraphql } from "react-icons/si";

export default function Experience() {
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

  type Status = "Current" | "Active" | "Completed";

  interface Experience {
    role: string;
    company: string;
    location: string;
    date: string;
    type: string;
    status: Status;
    summary: string;
    details: string[];
    technologies: { name: string; icon: React.ReactNode }[];
    metrics?: { label: string; value: string }[];
  }

  const experiences: Experience[] = [
    {
      role: "Full Stack Developer",
      company: "Ethiopian Artificial Intelligence (EAI)",
      location: "Addis Ababa, Ethiopia",
      date: "Jan 2024 – Present",
      type: "Full-time",
      status: "Current",
      summary:
        "Leading development of enterprise-grade applications using modern full-stack technologies.",
      details: [
        "Architecting and building scalable web applications with Next.js, Node.js, and NestJS",
        "Developing robust RESTful APIs and GraphQL endpoints for complex data requirements",
        "Implementing real-time features and microservices architecture",
        "Collaborating with cross-functional teams to deliver production-ready solutions",
        "Mentoring junior developers and conducting code reviews",
      ],
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs size={20} /> },
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "NestJS", icon: <SiNestjs size={20} /> },
        { name: "GraphQL", icon: <SiGraphql size={20} /> },
      ],
      metrics: [
        { label: "Projects Led", value: "5+" },
        { label: "API Endpoints", value: "50+" },
        { label: "Team Size", value: "8+" },
      ],
    },
    {
      role: "Software Developer",
      company: "Freelance",
      location: "Remote",
      date: "2023 – Present",
      type: "Freelance",
      status: "Active",
      summary:
        "Delivering custom web solutions for clients worldwide with a focus on quality and deadlines.",
      details: [
        "Building complete full-stack applications from concept to deployment",
        "Implementing responsive UI designs with modern CSS frameworks",
        "Creating secure backend systems with proper authentication",
        "Optimizing application performance and user experience",
        "Maintaining clear communication with clients throughout projects",
      ],
      technologies: [
        { name: "React", icon: <SiNextdotjs size={20} /> },
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "NestJS", icon: <SiNestjs size={20} /> },
      ],
      metrics: [
        { label: "Clients Served", value: "10+" },
        { label: "Projects", value: "15+" },
        { label: "Satisfaction", value: "100%" },
      ],
    },
    {
      role: "Intern – Software Development",
      company: "Ethiopian AI Institute",
      location: "Addis Ababa, Ethiopia",
      date: "Jun 2023 – Dec 2023",
      type: "Internship",
      status: "Completed",
      summary:
        "Contributed to real-world projects including a comprehensive crime reporting system.",
      details: [
        "Developed core features for a Crime & Incident Reporting System using Laravel",
        "Implemented user authentication and role-based access control",
        "Designed and optimized database schemas for efficient data handling",
        "Built responsive admin dashboards with data visualization",
        "Collaborated in an agile team environment",
      ],
      technologies: [
        { name: "Laravel", icon: <SiNestjs size={20} /> },
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
      ],
      metrics: [
        { label: "Features Built", value: "10+" },
        { label: "Users", value: "100+" },
        { label: "Duration", value: "6 mo" },
      ],
    },
  ];

  const statusColors = {
    Current: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    Active: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    Completed: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-4">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional growth and contributions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-900 bg-gradient-to-br from-indigo-500 to-purple-500 z-10 ${
                    index % 2 === 0
                      ? "md:-translate-x-1/2"
                      : "md:-translate-x-1/2"
                  }`}
                ></div>

                {/* Content - alternating layout */}
                <div
                  className={`ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-[52%] md:text-right" : "md:pl-[52%] md:text-left"}`}
                >
                  <div
                    className={`bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/10 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* Status & Type badges */}
                    <div
                      className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                    >
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[exp.status]}`}
                      >
                        {exp.status}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300">
                        {exp.type}
                      </span>
                    </div>

                    {/* Header */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-400 font-semibold mb-2">
                      {exp.company}
                    </p>

                    {/* Meta info */}
                    <div
                      className={`flex flex-wrap gap-4 text-sm text-gray-400 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                    >
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-gray-500" />
                        {exp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-gray-500" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-gray-300 mb-4">{exp.summary}</p>

                    {/* Metrics */}
                    {exp.metrics && (
                      <div
                        className={`flex gap-4 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                      >
                        {exp.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="text-center bg-gray-900/50 rounded-lg px-3 py-2"
                          >
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Details */}
                    <ul
                      className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      {exp.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          {index % 2 === 0 ? (
                            <>
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                              <span>{detail}</span>
                            </>
                          ) : (
                            <>
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                              <span>{detail}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                    >
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 text-xs px-3 py-1.5 rounded-full border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                        >
                          {tech.icon}
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? I'm always open to discussing new
            opportunities.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Let's Discuss
          </a>
        </div>
      </div>
    </section>
  );
}
