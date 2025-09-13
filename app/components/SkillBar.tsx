"use client";

import { useEffect, useRef, useState } from "react";

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ReactNode;
  gradient: string;
}

const SkillBar = ({ name, level, icon, gradient }: SkillCardProps) => {
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
      className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${gradient} text-white shadow-md mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: isVisible ? `${level}%` : "0%" }}
        ></div>
      </div>

      <p className="mt-2 text-sm text-gray-500">{level}% proficiency</p>
    </div>
  );
};

export default SkillBar;
