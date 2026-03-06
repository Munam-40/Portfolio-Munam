import React from 'react'
import blog1 from "./assets/blog1.webp";
import blog2 from "./assets/blog2.avif";
import blog3 from "./assets/blog3.avif";

 const Blog = () => {
  return (
    <>
    
    <section id='blog' className="bg-[#0b0f1a] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-7xl mx-auto">
       <div class="text-center mb-16 relative">
      <h2 class="text-7xl md:text-6xl font-extrabold text-gray-700 opacity-10 select-none tracking-widest">
        LATEST UPDATES
      </h2>
    
      <div className="text-center mb-10 relative">
      <h2 className="text-yellow-400 text-lg font-semibold inline-block relative">
        BLOGS
        <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 
          w-40 h-[2px] bg-gradient-to-r from-gray-800 via-yellow-400 to-gray-800">
        </span>
      </h2>
    </div>
    
    </div> </div> 
    
    
        {/* Blog Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-transparent rounded-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
            <img
               src={blog1}
              alt={blog1}
              className="w-full h-52 object-cover"
            />
            <div className="text-left mt-4">
              <p className="text-sm text-gray-400">
                By: <span className="text-yellow-400">Admin</span> |{" "}
                <span className="text-yellow-400">27-09-2025</span>
              </p>
              <h4 className="mt-2 font-semibold text-md">
                What are the latest trends in Graphic design according to you?
              </h4>
            </div>
          </div>
    
          {/* Card 2 */}
          <div className="bg-transparent rounded-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
            <img
               src={blog2}
              alt={blog2 }
              className="w-full h-52 object-cover"
            />
            <div className="text-left mt-4">
              <p className="text-sm text-gray-400">
                By: <span className="text-yellow-400">Admin</span> |{" "}
                <span className="text-yellow-400">27-02-2026</span>
              </p>
              <h4 className="mt-2 font-semibold text-md">
                What do you think makes someone a good designer?
              </h4>
            </div>
          </div>
    
          {/* Card 3 */}
          <div className="bg-transparent rounded-md overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer">
            <img
              src={blog3}
              alt={blog3}
              className="w-full h-52 object-cover"
            />
            <div className="text-left mt-4">
              <p className="text-sm text-gray-400">
                By: <span className="text-yellow-400">Admin</span> |{" "}
                <span className="text-yellow-400">20-09-2025</span>
              </p>
              <h4 className="mt-2 font-semibold text-md">
                Were there any mistakes you’ve made as a designer
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Blog;