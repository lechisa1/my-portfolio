"use client";

import { useEffect, useRef, useState } from "react";
import { 
  FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase, FaCode, FaLaravel, FaAngular 
} from "react-icons/fa";
import { SiNestjs, SiDjango, SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  gradient: string;
  index: number;
}

const SkillBar = ({ name, level, icon, gradient, index }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-gray-800/70 backdrop-blur-lg rounded-2xl border border-gray-700 p-6 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500/30 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-white shadow-lg mb-4`}>
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>

      <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? `${level}%` : "0%" }}
        ></div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>Beginner</span>
        <span className="font-medium text-white">{level}%</span>
        <span>Expert</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { name: "React / Next.js", level: 95, icon: <><FaReact size={22} /> <TbBrandNextjs size={22} /></>, gradient: "from-cyan-400 to-blue-500" },
    { name: "JavaScript / TypeScript", level: 90, icon: <><FaCode size={20} /> <SiTypescript size={20} /></>, gradient: "from-yellow-400 to-orange-500" },
    { name: "Node.js / Express", level: 85, icon: <FaNodeJs size={26} />, gradient: "from-green-400 to-emerald-500" },
    { name: "HTML / CSS / Tailwind", level: 98, icon: <><FaCode size={20} /> <SiTailwindcss size={20} /></>, gradient: "from-pink-400 to-purple-500" },
    { name: "MongoDB / PostgreSQL", level: 80, icon: <FaDatabase size={26} />, gradient: "from-teal-400 to-indigo-500" },
    { name: "MySQL", level: 82, icon: <SiMysql size={24} />, gradient: "from-blue-500 to-cyan-500" },
    { name: "Laravel", level: 88, icon: <FaLaravel size={26} />, gradient: "from-red-500 to-orange-500" },
    { name: "NestJS", level: 70, icon: <SiNestjs size={26} />, gradient: "from-rose-500 to-red-600" },
    { name: "Django", level: 72, icon: <SiDjango size={24} />, gradient: "from-green-600 to-emerald-400" },
    { name: "Angular", level: 60, icon: <FaAngular size={24} />, gradient: "from-red-600 to-pink-500" },
    { name: "AWS / Docker", level: 75, icon: <><FaAws size={22} /> <FaDocker size={22} /></>, gradient: "from-blue-400 to-indigo-600" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-bounce-slow"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <span className="text-sm md:text-base font-medium text-indigo-400 bg-indigo-900/30 px-3 py-1 rounded-full">
              Technologies
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Expertise</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build scalable, modern, and high-performing applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              index={index}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              gradient={skill.gradient}
            />
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mb-2"></div>
              <span className="text-sm text-gray-300">Basic Knowledge (50-69%)</span>
            </div>
            <div className="text-center">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-2"></div>
              <span className="text-sm text-gray-300">Proficient (70-84%)</span>
            </div>
            <div className="text-center">
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-2"></div>
              <span className="text-sm text-gray-300">Advanced (85-100%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;