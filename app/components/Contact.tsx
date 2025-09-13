"use client";

import { useState } from 'react';
import { FaGithub, FaTwitter,FaFacebookF, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-8 transition-transform hover:scale-[1.02]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold hover:bg-indigo-600 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col justify-between transition-transform hover:scale-[1.02]">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-indigo-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Location</p>
                    <p className="text-gray-200">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-indigo-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Phone</p>
                    <p className="text-gray-200">+251928290661 | +251995475373</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-indigo-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Email</p>
                    <p className="text-gray-200">lechisabedo123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

      <div className="mt-8">
  <h4 className="text-lg font-bold mb-4 text-white">Follow Me</h4>
  <div className="flex space-x-4">
    <a
      href="https://github.com/"
      target="_blank"
      className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-all flex items-center justify-center"
    >
      <FaGithub className="text-white w-5 h-5" />
      <span className="sr-only">GitHub</span>
    </a>

    <a
      href="https://facebook.com/"
      target="_blank"
      className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-all flex items-center justify-center"
    >
      <FaFacebookF className="text-white w-5 h-5" />
      <span className="sr-only">Facebook</span>
    </a>

    <a
      href="https://linkedin.com/"
      target="_blank"
      className="bg-indigo-600 p-3 rounded-full hover:bg-indigo-700 transition-all flex items-center justify-center"
    >
      <FaLinkedin className="text-white w-5 h-5" />
      <span className="sr-only">LinkedIn</span>
    </a>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
