"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/Lechisa", label: "GitHub" },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/lechisa-bedasa",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/LechisaBedasa",
      label: "Twitter",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Lechisa
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                .dev
              </span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-Stack Developer passionate about building scalable web
              applications and creating meaningful digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="text-gray-300 font-medium">Email:</span>
                <br />
                lechisabedo123@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-gray-300 font-medium">Phone:</span>
                <br />
                +251 928 290 661
              </p>
              <p className="text-gray-400">
                <span className="text-gray-300 font-medium">Location:</span>
                <br />
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Lechisa Bedasa. All rights reserved. Built with{" "}
            <span className="inline-flex items-center gap-1 text-red-500">
              <FaHeart size={12} /> and Next.js
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm group"
          >
            Back to top
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
