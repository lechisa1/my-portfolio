"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEye } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 
      bg-gradient-to-br from-gray-900 via-black to-gray-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-900 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-ping-slow"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <span className="text-sm md:text-base font-medium text-indigo-400 bg-indigo-900/30 px-3 py-1 rounded-full">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Lechisa
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
            Crafting digital experiences with code and creativity
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
            I design and build user-friendly, scalable web applications with clean code and modern technologies. 
            Passionate about turning ideas into reality and creating solutions that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium 
              hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20">
              <FaEye /> View Projects
            </button>

            <a
              href="/Lechisa_Bedasa_CV.pdf"
              download="Lechisa_Bedasa_CV.pdf"
              className="flex items-center gap-2 border border-indigo-600 text-indigo-400 px-6 py-3 rounded-xl font-medium 
                hover:bg-indigo-900/30 transition-all transform hover:scale-105"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl text-gray-400">
            <a href="https://github.com/" target="_blank" className="hover:text-indigo-400 transition-all transform hover:scale-125 p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-indigo-400 transition-all transform hover:scale-125 p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" className="hover:text-indigo-400 transition-all transform hover:scale-125 p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side - Floating Skill Badges */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="w-80 h-80 mx-auto relative flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[ "React", "Node.js","Laravel","Next js","Nest js","Django"].map((skill, idx) => (
                <div key={idx} className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center text-white font-bold text-lg animate-bounce-slow" style={{animationDelay: `${idx*200}ms`}}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
