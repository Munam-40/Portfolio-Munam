import React from 'react'

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaDribbble, FaBehance, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <>
    
     <section id='contact' className="relative bg-[#0d1117] text-white py-16 px-6">
      {/* Faint Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl md:text-9xl font-extrabold text-gray-700 opacity-10 select-none tracking-widest">
        CONTACT ME
      </h1>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 relative">
  <h2 className="text-yellow-400 text-3xl font-semibold inline-block relative">
    CONTACT ME
    <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 
      w-40 h-[2px] bg-gradient-to-r from-gray-800 via-yellow-400 to-gray-800">
    </span>
  </h2>
</div>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Just say Hello</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-[#161b22] border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-[#161b22] border border-gray-700 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Subject"
                className="w-full p-3 rounded-md bg-[#161b22] border border-gray-700 focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-md bg-[#161b22] border border-gray-700 focus:outline-none"
              ></textarea>
              <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ligula nulla tincidunt id faucibus sed suscipit feugiat.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">munamikram786@gmail.com</p>
                  <p className="text-gray-400">info@support.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-400">+92 322 45 88278</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-colors">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-400">
                   House No 1 Larechs Scheme Mughalpura Lahore Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-gray-400 mb-4">
                Visit my social profile and get connected
              </p>
              <div className="flex gap-4 text-xl">
              

                {/* Behance */}
                <a
                  href="https://www.behance.net/munamikram"
                  className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-all duration-500 group"
                >
                  <FaBehance />
                  <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-sm">
                    Behance
                  </span>
                </a>

                {/* github */}
                <a
                  href="https://github.com/Munam-40"
                  className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-all duration-500 group"
                >
                  <FaGithub />
                  <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-sm">
                    Github
                  </span>
                </a>

                {/* LinkedIn */}
               <a
                  href="https://www.linkedin.com/in/munam-ikram-058107368/"
                  className="flex items-center gap-2 px-3 py-2 border border-gray-600 rounded-full hover:border-yellow-500 hover:text-yellow-500 transition-all duration-500 group"
                >
                  <FaLinkedin />
                  <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-sm">
                    Linkedin
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Contact;