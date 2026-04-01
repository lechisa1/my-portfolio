"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: { name: string; icon: React.ReactNode; color: string }[];
  githubUrl: string;
  liveUrl?: string;
  role: string;
  type: "Enterprise" | "Academic" | "Personal";
  highlights: string[];
  metrics?: { label: string; value: string };
}

const ProjectCard = ({
  project,
  index,
  isVisible,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
}) => {
  const typeColors = {
    Enterprise: "from-blue-600 to-cyan-600",
    Academic: "from-purple-600 to-pink-600",
    Personal: "from-emerald-600 to-teal-600",
  };

  return (
    <div
      className={`group relative bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Project Image Placeholder */}
      <div className="relative h-56 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 flex items-center justify-center">
          <div className="text-center">
            <FaRocket className="w-16 h-16 text-indigo-400/50 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-gray-400/50 text-sm">Project Preview</span>
          </div>
        </div>

        {/* Type Badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${typeColors[project.type]} text-white text-xs font-semibold`}
        >
          {project.type}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-indigo-400 font-medium flex items-center gap-2">
            <FaCode size={14} />
            {project.role}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.longDescription}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-gray-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${tech.color} bg-opacity-10 border border-opacity-20`}
              style={{
                backgroundColor: `color-mix(in srgb, var(--tw-gradient-stops, ${tech.color.split(" ")[1]}), transparent 90%)`,
                borderColor: tech.color.includes("indigo")
                  ? "rgb(99, 102, 241, 0.3)"
                  : tech.color.includes("green")
                    ? "rgb(34, 197, 94, 0.3)"
                    : tech.color.includes("purple")
                      ? "rgb(168, 85, 247, 0.3)"
                      : "rgb(59, 130, 246, 0.3)",
              }}
            >
              {tech.icon}
              <span className="text-gray-300">{tech.name}</span>
            </span>
          ))}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex gap-4 mb-4 p-3 bg-gray-900/50 rounded-xl">
            <div>
              <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {project.metrics.value}
              </div>
              <div className="text-xs text-gray-500">
                {project.metrics.label}
              </div>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-700">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-white rounded-xl text-sm font-medium transition-all flex-1 justify-center"
          >
            <FaGithub size={16} />
            View Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl text-sm font-medium transition-all flex-1 justify-center"
            >
              <FaExternalLinkAlt size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

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

  const projects: Project[] = [
    {
      title: "Crime & Incident Reporting System",
      description:
        "Enterprise-grade crime management system for Ethiopian authorities",
      longDescription:
        "A comprehensive web application enabling citizens to report crimes and incidents while providing authorities with efficient case management tools. Features include real-time notifications, case tracking, and data analytics.",
      image: "/images/crime-reporting.jpg",
      technologies: [
        {
          name: "Laravel",
          icon: <SiNestjs size={14} />,
          color: "from-red-500 to-orange-500",
        },
        {
          name: "MySQL",
          icon: <SiPostgresql size={14} />,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "Bootstrap",
          icon: <FaCode size={14} />,
          color: "from-purple-500 to-pink-500",
        },
      ],
      githubUrl: "https://github.com/Lechisa",
      role: "Full Stack Developer",
      type: "Enterprise",
      highlights: [
        "Role-based authentication for citizens and authorities",
        "Real-time case status tracking and updates",
        "Admin dashboard with analytics and reporting",
      ],
      metrics: { label: "Active Users", value: "500+" },
    },
    {
      title: "Afan Oromo Spell Checker",
      description: "Natural Language Processing tool for Afan Oromo language",
      longDescription:
        "My graduation project - a spell checker application for Afan Oromo language featuring morphological analysis, error detection, and intelligent suggestion generation using NLP techniques.",
      image: "/images/spell-checker.jpg",
      technologies: [
        {
          name: "Python",
          icon: <FaCode size={14} />,
          color: "from-yellow-500 to-orange-500",
        },
        {
          name: "Flask",
          icon: <SiNestjs size={14} />,
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "Hunspell",
          icon: <FaCode size={14} />,
          color: "from-green-500 to-emerald-500",
        },
      ],
      githubUrl: "https://github.com/Lechisa",
      role: "Backend Developer",
      type: "Academic",
      highlights: [
        "Morphological analysis for Afan Oromo language",
        "Intelligent error detection and correction",
        "Multiple dictionary support",
      ],
      metrics: { label: "Dictionary Words", value: "50K+" },
    },
    {
      title: "EAI Platform Projects",
      description: "Multiple production applications at Ethiopian AI Institute",
      longDescription:
        "Contributed to various enterprise projects including data visualization platforms, AI model deployment interfaces, and internal management systems using modern full-stack technologies.",
      image: "/images/eai-projects.jpg",
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs size={14} />,
          color: "from-gray-300 to-gray-500",
        },
        {
          name: "NestJS",
          icon: <SiNestjs size={14} />,
          color: "from-red-500 to-rose-500",
        },
        {
          name: "GraphQL",
          icon: <SiGraphql size={14} />,
          color: "from-pink-500 to-rose-500",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={14} />,
          color: "from-green-500 to-emerald-500",
        },
      ],
      githubUrl: "https://github.com/Lechisa",
      role: "Full Stack Developer",
      type: "Enterprise",
      highlights: [
        "GraphQL API development and optimization",
        "Real-time data visualization dashboards",
        "Microservices architecture implementation",
      ],
      metrics: { label: "Projects", value: "5+" },
    },
    {
      title: "Personal Portfolio Website",
      description: "This portfolio website showcasing my work and skills",
      longDescription:
        "A modern, responsive portfolio website built with Next.js, featuring smooth animations, professional design, and comprehensive information about my skills, experience, and projects.",
      image: "/images/portfolio.jpg",
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs size={14} />,
          color: "from-gray-300 to-gray-500",
        },
        {
          name: "TypeScript",
          icon: <FaCode size={14} />,
          color: "from-blue-500 to-indigo-500",
        },
        {
          name: "Tailwind",
          icon: <FaCode size={14} />,
          color: "from-teal-400 to-cyan-500",
        },
      ],
      githubUrl: "https://github.com/Lechisa/portfolio",
      liveUrl: "#",
      role: "Developer",
      type: "Personal",
      highlights: [
        "Responsive design for all devices",
        "Smooth animations and transitions",
        "SEO optimized and performant",
      ],
    },
    {
      title: "Learning Management System (LMS)",
      description: "Full-stack LMS built with Nest.js and React",
      longDescription:
        "A comprehensive Learning Management System featuring course management, student tracking, progress monitoring, quizzes, assignments, and real-time notifications. Built with a focus on scalability and user experience.",
      image: "/images/lms.jpg",
      technologies: [
        {
          name: "NestJS",
          icon: <SiNestjs size={14} />,
          color: "from-red-500 to-rose-500",
        },
        {
          name: "React",
          icon: <SiNextdotjs size={14} />,
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={14} />,
          color: "from-blue-600 to-indigo-600",
        },
        {
          name: "TypeScript",
          icon: <FaCode size={14} />,
          color: "from-blue-500 to-indigo-500",
        },
      ],
      githubUrl: "https://github.com/Lechisa",
      role: "Full Stack Developer",
      type: "Personal",
      highlights: [
        "Course creation and enrollment system",
        "Student progress tracking dashboard",
        "Quiz and assignment modules",
        "Real-time notifications",
      ],
      metrics: { label: "Features", value: "15+" },
    },
  ];

  const filters = ["All", "Enterprise", "Academic", "Personal"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="projects"
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
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block text-sm font-medium text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20 mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects I've worked on, showcasing my skills and
            experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/Lechisa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold transition-all border border-gray-700 hover:border-indigo-500"
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
