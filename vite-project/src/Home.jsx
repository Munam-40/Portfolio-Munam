import { Phone, Menu, X } from "lucide-react";
import c from "./assets/c.jpeg";
import bgmain from "./assets/bgmain.png";
import React, { useState } from "react";

const Tailwind = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F19] text-white py-3 px-6 md:px-12 flex items-center justify-between shadow-lg">
        {/* Left Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="w-10 h-10 md:w-12 md:h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center">
            <span className="text-yellow-500 text-2xl md:text-3xl font-bold">
              🌿
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-3xl md:text-4xl text-yellow-500">M</span>
            <span className="font-bold text-3xl md:text-4xl">unam</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-12 font-medium">
  <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#home">HOME</a>
          </li>
                    <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#about">ABOUT</a>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#resume">RESUME</a>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#services">SERVICES</a>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#blog">BLOG</a>
          </li>
          <li className="hover:text-yellow-500 cursor-pointer">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>

        {/* Right Phone (desktop only) */}
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-gray-400">|</span>
          <Phone size={19} className="text-yellow-500" />
          <span className="text-yellow-500 font-medium">
            +92 322 45 88278
          </span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#0B0F19] text-white flex flex-col items-center space-y-6 py-6 z-40 md:hidden">
          <a href="#" className="hover:text-yellow-500">
            HOME
          </a>
          <a href="#about" className="hover:text-yellow-500">
            ABOUT
          </a>
          <a href="#resume" className="hover:text-yellow-500">
            RESUME
          </a>
          <a href="#services" className="hover:text-yellow-500">
            SERVICES
          </a>
          <a href="#blog" className="hover:text-yellow-500">
            BLOG
          </a>
          <a href="#contact" className="hover:text-yellow-500">
            CONTACT
          </a>
          <div className="flex items-center space-x-2 pt-4">
            <Phone size={19} className="text-yellow-500" />
            <span className="text-yellow-500 font-medium">
              +92 322 45 88278
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        className="relative inset-0 flex flex-col justify-center items-center text-center bg-cover bg-center overflow-hidden min-h-screen px-4"
        style={{
          backgroundImage: `url(${bgmain})`,
          backgroundSize: "150%",
          transition: "0.2s ease-out",
        }}
        onMouseMove={(e) => {
          const { clientX, clientY, currentTarget } = e;
          const { offsetWidth, offsetHeight } = currentTarget;

          const x = (clientX / offsetWidth) * 100;
          const y = (clientY / offsetHeight) * 100;

          currentTarget.style.backgroundPosition = `${x}% ${y}%`;
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <img
            src={c}
            alt="Profile"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 mx-auto mb-6 object-cover"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
            Hi, I am{" "}
            <span className="text-yellow-400">Munam Ikram</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8 px-2">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make websites more & more interactive with web
            animations.
          </p>

          <div className="flex justify-center space-x-4 md:space-x-6">
            <a
              href="https://www.behance.net/munamikram"
              className="text-gray-300 hover:text-yellow-400 border border-gray-500 rounded-full p-3 transition"
            >
<i class="fab fa-behance"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/munam-ikram-058107368/"
              className="text-gray-300 hover:text-yellow-400 border border-gray-500 rounded-full p-3 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Munam-40"
              className="text-gray-300 hover:text-yellow-400 border border-gray-500 rounded-full p-3 transition"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tailwind;
