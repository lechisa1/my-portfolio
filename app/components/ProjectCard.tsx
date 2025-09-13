"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  role?: string;
  contributions?: string[];
  features?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  role,
  contributions,
  features,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div
        className="bg-gray-800/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-500/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {(githubUrl || liveUrl) && (
            <div
              className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent flex items-center justify-center gap-4 transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-transform hover:scale-105"
                >
                  <FaGithub className="text-lg" />
                  Code
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-gray-600 transition-transform hover:scale-105"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>

          {/* Role */}
          {role && (
            <p className="text-sm font-semibold text-indigo-400">
              Role: <span className="text-gray-300 font-normal">{role}</span>
            </p>
          )}

          {/* Contributions */}
          {contributions && contributions.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-1">
                My Contributions:
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {contributions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {features && features.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-200 mb-1">
                Key Features:
              </h4>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded-full border border-indigo-700/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
