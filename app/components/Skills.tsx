"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaDatabase,
  FaCode,
  FaLaravel,
  FaAngular,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNestjs,
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    icon: React.ReactNode;
    color: string;
  }[];
}

const SkillCard = ({
  name,
  level,
  icon,
  color,
  index,
  isVisible,
}: {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  index: number;
  isVisible: boolean;
}) => {
  return (
    <div
      className={`group bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4 mb-3">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <span className="text-xs text-gray-400">{level}%</span>
        </div>
      </div>

      <div className="relative w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? `${level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-white" />,
      skills: [
        {
          name: "React.js",
          level: 95,
          icon: <FaReact size={24} />,
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Next.js",
          level: 92,
          icon: <TbBrandNextjs size={24} />,
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "TypeScript",
          level: 88,
          icon: <SiTypescript size={24} />,
          color: "from-blue-500 to-indigo-500",
        },
        {
          name: "Tailwind CSS",
          level: 96,
          icon: <SiTailwindcss size={24} />,
          color: "from-teal-400 to-cyan-500",
        },
        {
          name: "HTML/CSS",
          level: 98,
          icon: <FaHtml5 size={24} />,
          color: "from-orange-500 to-red-500",
        },
        {
          name: "Angular",
          level: 75,
          icon: <FaAngular size={24} />,
          color: "from-red-500 to-pink-500",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaCode className="text-white" />,
      skills: [
        {
          name: "Node.js",
          level: 94,
          icon: <FaNodeJs size={24} />,
          color: "from-green-500 to-emerald-500",
        },
        {
          name: "NestJS",
          level: 85,
          icon: <SiNestjs size={24} />,
          color: "from-red-500 to-rose-500",
        },
        {
          name: "Laravel",
          level: 92,
          icon: <FaLaravel size={24} />,
          color: "from-red-600 to-orange-500",
        },
        {
          name: "Django",
          level: 78,
          icon: <SiDjango size={24} />,
          color: "from-green-600 to-emerald-400",
        },
        {
          name: "Flask",
          level: 80,
          icon: <SiFlask size={24} />,
          color: "from-gray-400 to-gray-600",
        },
        {
          name: "GraphQL",
          level: 82,
          icon: <SiGraphql size={24} />,
          color: "from-pink-500 to-rose-500",
        },
      ],
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase size={20} className="text-white" />,
      skills: [
        {
          name: "PostgreSQL",
          level: 90,
          icon: <SiPostgresql size={24} />,
          color: "from-blue-600 to-indigo-600",
        },
        {
          name: "MySQL",
          level: 94,
          icon: <SiMysql size={24} />,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "MongoDB",
          level: 88,
          icon: <SiMongodb size={24} />,
          color: "from-green-500 to-emerald-500",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <FaDocker size={20} className="text-white" />,
      skills: [
        {
          name: "Git/GitHub",
          level: 95,
          icon: <FaGitAlt size={24} />,
          color: "from-orange-500 to-yellow-500",
        },
        {
          name: "Docker",
          level: 75,
          icon: <FaDocker size={24} />,
          color: "from-blue-500 to-cyan-500",
        },
        {
          name: "AWS",
          level: 70,
          icon: <FaAws size={24} />,
          color: "from-orange-500 to-yellow-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    color={skill.color}
                    index={catIndex * 6 + skillIndex}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to work together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always open to new opportunities and collaborations. Let's
              build something amazing!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
