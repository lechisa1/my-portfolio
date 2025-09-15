"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle, FaLaptopCode, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
type Status = "Current" | "Active" | "Completed";

interface Experience {
  role: string;
  company: string;
  date: string;
  status: Status;
  details: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "Ethiopian Artificial Intelligence (EAI)",
    date: "Jan 2024 – Present",
    status: "Current",
    details: [
      "Working on multiple projects as fullstack and backend developer.",
      "Building scalable apps with Node.js, Next.js, and Nest.js.",
      "Developing REST & GraphQL APIs.",
    ],
    technologies: ["Node.js", "Next.js", "Nest.js", "GraphQL", "REST APIs"],
  },
  {
    role: "Freelance / Remote Developer",
    company: "Available for Hire",
    date: "Active Anytime",
    status: "Active",
    details: [
      "Open for freelance and remote opportunities with clients worldwide, delivering high-quality web applications.",
      "Proficient in building fullstack projects independently, focusing on backend development and functionality, while collaborating on UI/UX design with designers.",
      "Skilled in optimizing performance, ensuring scalability, and writing clean, maintainable code.",
      "Adaptable to various project requirements and committed to delivering solutions on time.",
    ],
    technologies: ["React", "Node.js", "Tailwind", "PostgreSQL", "GraphQL", "Next.js"],
  },
  {
    role: "Intern – Software Design & Development",
    company: "EAI",
    date: "Jun 2023 – Dec 2023",
    status: "Completed",
    details: [
      "Features Implemented: Incident reporting, crime tracking, case assignment, and system notifications.",
      "Worked on system design, backend logic, and testing functionalities.",
      "Developed backend services using Laravel with focus on API design and database optimization.",
      "Implemented authentication and role-based authorization systems.",
    ],
    technologies: ["Laravel", "Bootstrap", "MySQL", "Blade"],
  },
];

  const statusColors = {
    Current: "bg-green-900/30 text-green-400 border border-green-600",
    Active: "bg-blue-900/30 text-blue-400 border border-blue-600",
    Completed: "bg-gray-800/50 text-gray-400 border border-gray-600",
  };

  return (
    <section
      id="experience"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-ping-slow"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Animated Badge */}
        <div className="flex items-center justify-center mb-6 animate-bounce-slow">
          <FaBriefcase className="text-indigo-400 text-2xl mr-2" />
          <span className="text-indigo-400 font-semibold text-lg px-3 py-1 rounded-full border border-indigo-600 bg-indigo-900/20">
            Experience
          </span>
        </div>

        {/* Description */}
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Throughout my career, I've contributed to a variety of projects as a fullstack and backend developer.  
          I focus on creating scalable, maintainable, and user-friendly solutions using modern technologies.
        </p>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 ml-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <span className="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -left-3 ring-8 ring-black"></span>

              {/* Card */}
              <div className="p-6 bg-gray-900/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-800 hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
<span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[exp.status]}`}>
  {exp.status}
</span>

                </div>
                <p className="text-indigo-400 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">{exp.date}</p>

                {/* Details with icons */}
                <ul className="space-y-2 mb-4">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-300">
                      <FaCheckCircle className="text-indigo-500 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                {exp.technologies && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                      <FaLaptopCode className="text-indigo-400" />
                      <span>Technologies Used</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                         className="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
