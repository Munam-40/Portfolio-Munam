import React from 'react'

import portfolio1 from "./assets/portfolio1.jpg";
import portfolio2 from "./assets/portfolio2.jpg";
import portfolio3 from "./assets/portfolio3.jpg";
import portfolio4 from "./assets/portfolio4.jpg";
import portfolio5 from "./assets/portfolio5.jpg";
import portfolio6 from "./assets/portfolio6.jpg";
 const Portfolio = () => {
  return (
    <>
    
    <section id='port' className="bg-[#0A0F1C] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-yellow-400 text-xl font-semibold tracking-wider">
            PORTFOLIOS
          </h2>
          <h1 className="text-5xl text-white font-bold opacity-10 -mt-3">
            PORTFOLIOS
          </h1>
        </div>
    
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-md cursor-pointer">
            <img
              src={portfolio1}
              alt="portfolio 1"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-yellow-400 text-black rounded-full p-3 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Product Design</h3>
              <p className="text-gray-300 text-sm">Design / Marketing</p>
            </div>
          </div>
    
          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-md cursor-pointer">
            <img
             
              src={portfolio2}
              alt="portfolio 2"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-yellow-400 text-black rounded-full p-3 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">UI Concepts</h3>
              <p className="text-gray-300 text-sm">Creative / UX</p>
            </div>
          </div>
    
          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-md cursor-pointer">
            <img
             
              src={portfolio3}
              alt="portfolio 3"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-yellow-400 text-black rounded-full p-3 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Brand Identity</h3>
              <p className="text-gray-300 text-sm">Logo / Identity</p>
            </div>
          </div>
    
          {/* Card 4 */}
          <div className="relative group overflow-hidden rounded-md cursor-pointer">
            <img
    
              src={portfolio4}
              alt="portfolio 4"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-yellow-400 text-black rounded-full p-3 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Web Animation</h3>
              <p className="text-gray-300 text-sm">Motion / Frontend</p>
            </div>
          </div>
    
          {/* Card 5 */}
          <div className="relative group overflow-hidden rounded-md cursor-pointer">
            <img
            
              src={portfolio5}
              alt="portfolio 5"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-yellow-400 text-black rounded-full p-3 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Poster Design</h3>
              <p className="text-gray-300 text-sm">Print / Art</p>
            </div>
          </div>
    
          {/* Card 6 */}
          <div className="relative group overflow-hidden rounded-md cursor-pointer">
            <img
              src={portfolio6}
              alt="portfolio 6"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="bg-yellow-400 text-black rounded-full p-3 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">App Design</h3>
              <p className="text-gray-300 text-sm">Mobile / UI</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}
export default Portfolio;