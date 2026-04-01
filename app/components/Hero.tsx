"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Backend Developer & API Expert";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 
      bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-0 -right-4 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20">
              Available for Backend Opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Lechisa Bedasa
            </span>
          </h1>

          {/* Typing effect subtitle */}
          <div className="h-8 mb-4">
            <h2 className="text-xl sm:text-2xl text-gray-300 font-medium">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg mb-6 max-w-xl leading-relaxed">
            Expert backend developer specializing in building scalable APIs,
            microservices, and robust server-side solutions. I transform complex
            requirements into efficient, production-ready systems.
          </p>

          {/* Backend Specialties */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700">
            <h3 className="text-white font-semibold mb-3">Core Expertise:</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <FaCloud className="text-indigo-400 text-lg" />
                <span className="text-gray-300 text-sm">REST API Design</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCode className="text-purple-400 text-lg" />
                <span className="text-gray-300 text-sm">GraphQL APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <FaServer className="text-blue-400 text-lg" />
                <span className="text-gray-300 text-sm">
                  NestJS Development
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaDatabase className="text-emerald-400 text-lg" />
                <span className="text-gray-300 text-sm">
                  Database Architecture
                </span>
              </div>
            </div>
          </div>

          {/* Key highlights */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
              <FaServer className="text-indigo-400" />
              <span className="text-gray-300 text-sm">Scalable Backends</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
              <FaCloud className="text-purple-400" />
              <span className="text-gray-300 text-sm">REST & GraphQL</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
              <FaDatabase className="text-emerald-400" />
              <span className="text-gray-300 text-sm">
                PostgreSQL & MongoDB
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold 
                hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/25"
            >
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Lechisa_Bedasa_CV.pdf"
              download="Lechisa_Bedasa_CV.pdf"
              className="group flex items-center gap-2 border-2 border-indigo-500 text-indigo-300 px-8 py-4 rounded-xl font-semibold 
                hover:bg-indigo-500/10 transition-all transform hover:scale-105"
            >
              Download CV
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-800">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                2+
              </h4>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                100+
              </h4>
              <p className="text-gray-500 text-sm">API Endpoints</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                5+
              </h4>
              <p className="text-gray-500 text-sm">Backend Projects</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/Lechisa"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
            >
              <FaGithub className="text-xl text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/lechisa-bedasa"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
            >
              <FaLinkedin className="text-xl text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://twitter.com/LechisaBedasa"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
            >
              <FaTwitter className="text-xl text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side - Visual Element */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Code editor visual */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
            {/* Editor header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400 ml-2">
                api.controller.ts
              </span>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-2">
                <p>
                  <span className="text-purple-400">@Controller</span>(
                  <span className="text-orange-300">'api/v1/users'</span>)
                </p>
                <p>
                  <span className="text-purple-400">export class</span>{" "}
                  <span className="text-blue-400">UsersController</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">@Get</span>()
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">findAll</span>():{" "}
                  <span className="text-green-400">User[]</span> {"{"}
                </p>
                <p className="pl-12">
                  <span className="text-purple-400">return this</span>
                  .usersService.findAll();
                </p>
                <p className="pl-8">{"}"}</p>
                <p className="pl-4">
                  <span className="text-blue-400">@Post</span>()
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">create</span>(
                  <span className="text-blue-400">@Body</span>() body:
                  CreateUserDto)
                </p>
                <p className="pl-12">
                  <span className="text-purple-400">return this</span>
                  .usersService.create(body);
                </p>
                <p>{"}"}</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>

          {/* Floating tech badges */}
          <div
            className="absolute -top-4 -right-4 bg-gradient-to-br from-green-600 to-emerald-600 px-4 py-2 rounded-xl shadow-lg animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <span className="text-white font-semibold text-sm">NestJS</span>
          </div>
          <div
            className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-2 rounded-xl shadow-lg animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          >
            <span className="text-white font-semibold text-sm">Node.js</span>
          </div>
          <div
            className="absolute top-1/2 -right-8 bg-gradient-to-br from-pink-600 to-rose-600 px-4 py-2 rounded-xl shadow-lg animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "1s" }}
          >
            <span className="text-white font-semibold text-sm">GraphQL</span>
          </div>
          <div
            className="absolute top-1/4 -left-8 bg-gradient-to-br from-indigo-600 to-violet-600 px-4 py-2 rounded-xl shadow-lg animate-bounce"
            style={{ animationDuration: "3s", animationDelay: "1.5s" }}
          >
            <span className="text-white font-semibold text-sm">REST API</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-indigo-400 transition-colors"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
