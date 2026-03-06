import React from 'react'
import e from "./assets/e.jpg";

const About = () => {
  return (
    <>
      <section id='about' className="bg-[#0d1117] text-white py-16 px-16">
        {/* Title */}
        <div className="text-center mb-10 relative">
  <h2 class="text-7xl md:text-9xl mt-6 font-extrabold text-gray-700 opacity-10 select-none tracking-widest">
    ABOUT ME
  </h2>
          <h2 className="text-yellow-400 text-lg font-semibold inline-block relative">
            ABOUT ME
            <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 
              w-40 h-[2px] bg-gradient-to-r from-gray-800 via-yellow-400 to-gray-800">
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Image */}
         {/* Left Side Image */}
<div className="flex justify-center md:justify-start">
  <div className="w-[260px] md:w-[300px] aspect-[4/5] overflow-hidden rounded-2xl shadow-xl border border-gray-800">

    <img
      src={e}
      alt="Munam Ikram"
      className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
    />

  </div>
</div>

          {/* Right Side Content */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Hi There! I'm Munam Ikram</h1>
            <h3 className="text-yellow-400 text-xl font-semibold mb-4">
              Visual Designer
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a Visual Designer with a strong focus on digital branding. Visual
              design seeks to attract, inspire, create desires and motivate people
              to respond to messages, with a view to making a favorable impact.
            </p>

            <ul className="space-y-2 text-gray-300">
              <li><span className="font-semibold text-white">Birthday :</span> October 16, 2006</li>
              <li><span className="font-semibold text-white">Phone :</span> +92 322 45 88278</li>
              <li><span className="font-semibold text-white">Email :</span> munamikram786@gmail.com</li>
              <li><span className="font-semibold text-white">From :</span> Larechs Scheme Pakistan</li>
              <li><span className="font-semibold text-white">Language :</span> English, Urdu, Arabic</li>
              <li><span className="font-semibold text-white">Freelance :</span> Available For Every Designing</li>
            </ul>

            {/* Button */}
            <div className="mt-8">
             <a
  href="/Munam web developer .pdf"
  download="Munam_CV.pdf"
  className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400">
  Download CV
</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About ;
