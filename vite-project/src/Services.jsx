 import React from 'react'
 
  const Services = () => {
   return (
     <>
     
 <section id='services' className="bg-[#0f1119] text-white py-16">
  {/* Heading */}
<div class="text-center mb-16 relative">
  <h2 class="text-7xl md:text-9xl font-extrabold text-gray-700 opacity-10 select-none tracking-widest">
    SERVICES
  </h2>

  <div className="text-center mb-10 relative">
  <h2 className="text-yellow-400 text-lg font-semibold inline-block relative">
    SERVICES
    <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 
      w-40 h-[2px] bg-gradient-to-r from-gray-800 via-yellow-400 to-gray-800">
    </span>
  </h2>
</div>

</div>


  {/* Services Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-[#151823] border border-gray-800 p-8 rounded-md text-center hover:scale-105 transition duration-500">
      <div className="group flex flex-col items-center">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 border  border-gray-600 rounded-full text-gray-400 transition-all duration-300 group-hover:border-yellow-500 group-hover:text-yellow-500">
          <i className="fas fa-pencil-ruler text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-300  transition-colors duration-300 group-hover:text-yellow-500">
          Professional Quality
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
       I focus on professional quality by creating clean, modern, and well-structured designs and websites that are visually appealing, responsive, and built using best development practices.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#151823] border border-gray-800 p-8 rounded-md text-center hover:scale-105 transition duration-500">
      <div className="group flex flex-col items-center">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 border border-gray-600 rounded-full text-gray-400 transition-all duration-300 group-hover:border-yellow-500 group-hover:text-yellow-500">
          <i className="fas fa-drafting-compass text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-300 transition-colors duration-300 group-hover:text-yellow-500">
         Fast Delivery
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
        I deliver projects quickly without compromising quality, ensuring clients receive responsive websites, designs, and digital solutions on time while maintaining professionalism and attention to detail.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#151823] border border-gray-800 p-8 rounded-md text-center hover:scale-105 transition duration-500">
      <div className="group flex flex-col items-center">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 border border-gray-600 rounded-full text-gray-400 transition-all duration-300 group-hover:border-yellow-500 group-hover:text-yellow-500">
          <i className="fas fa-cubes text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-300 transition-colors duration-300 group-hover:text-yellow-500">
          Logo Design
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
        I design creative and memorable logos that represent brand identity, using modern design principles, balanced colors, and unique concepts to make businesses stand out visually.
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-[#151823] border border-gray-800 p-8 rounded-md text-center hover:scale-105 transition duration-500">
      <div className="group flex flex-col items-center">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 border border-gray-600 rounded-full text-gray-400 transition-all duration-300 group-hover:border-yellow-500 group-hover:text-yellow-500">
          <i className="fas fa-mobile-alt text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-300 transition-colors duration-300 group-hover:text-yellow-500">
          Web Design
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
        I develop modern, responsive, and user-friendly websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS, focusing on performance, clean code, and great user experience.
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-[#151823] border border-gray-800 p-8 rounded-md text-center hover:scale-105 transition duration-500">
      <div className="group flex flex-col items-center">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 border border-gray-600 rounded-full text-gray-400 transition-all duration-300 group-hover:border-yellow-500 group-hover:text-yellow-500">
          <i className="fas fa-film text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-300 transition-colors duration-300 group-hover:text-yellow-500">
          Motion Graphics
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
        I create engaging motion graphics with smooth animations, modern transitions, and creative visual effects that make websites, videos, and digital content more attractive and interactive.
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-[#151823] border border-gray-800 p-8 rounded-md text-center hover:scale-105 transition duration-500">
      <div className="group flex flex-col items-center">
        <div className="flex justify-center items-center w-20 h-20 mx-auto mb-6 border border-gray-600 rounded-full text-gray-400 transition-all duration-300 group-hover:border-yellow-500 group-hover:text-yellow-500">
          <i className="fas fa-laptop-code text-3xl"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-300 transition-colors duration-300 group-hover:text-yellow-500">
          Responsive Design
        </h3>
      </div>
      <p className="text-gray-400 text-sm">
I build fully responsive websites that work smoothly on mobile, tablet, and desktop devices using modern technologies like React.js, Tailwind CSS, and clean UI design.      </p>
    </div>
  </div>
</section>
     </>
   )
 }
 export default Services;