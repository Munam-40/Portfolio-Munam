import React from 'react'

 const Resume = () => {
  return (
    <>
    <section id='resume' className="bg-[#0b0f1a] text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
       <div class="text-center mb-16 relative">
      <h2 class="text-7xl md:text-9xl font-extrabold text-gray-700 opacity-10 select-none tracking-widest">
        RESUME
      </h2>
    
      <div className="text-center mb-10 relative">
      <h2 className="text-yellow-400 text-lg font-semibold inline-block relative">
        RESUME
        <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 
          w-40 h-[2px] bg-gradient-to-r from-gray-800 via-yellow-400 to-gray-800">
        </span>
      </h2>
    </div>
    
    </div>
    
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* Experience */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <i className="fas fa-briefcase text-yellow-400"></i> Experience
            </h3>
    
            <div className="border-l border-gray-600 pl-6 space-y-10 relative">
              {/* Dot Line Effect */}
              <span className="absolute top-0 left-0 w-3 h-3 bg-gray-600 rounded-full -ml-1.5"></span>
    
              {/* Item 1 */}
              <div>
                <h4 className="text-yellow-400 font-semibold">Senior UX/UI Designer</h4>
                <p className="text-sm text-gray-400 mb-1">Jan 2020 - Present</p>
                <p className="font-semibold">Bergnaum, Hills and Howe</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id
                  faucibus sed, suscipit feugiat turpis.
                </p>
              </div>
    
              {/* Item 2 */}
              <div>
                <h4 className="text-yellow-400 font-semibold">Product Designer</h4>
                <p className="text-sm text-gray-400 mb-1">Jan 2016 - December 2019</p>
                <p className="font-semibold">Langosh, Sipes and Raynor</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id
                  faucibus sed, suscipit feugiat turpis.
                </p>
              </div>
    
              {/* Item 3 */}
              <div>
                <h4 className="text-yellow-400 font-semibold">UI/UX Designer</h4>
                <p className="text-sm text-gray-400 mb-1">Jan 2014 - December 2015</p>
                <p className="font-semibold">Strosin, Maggio and Homenick</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id
                  faucibus sed, suscipit feugiat turpis.
                </p>
              </div>
            </div>
          </div>
    
          {/* Education */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <i className="fas fa-graduation-cap text-yellow-400"></i> Education
            </h3>
    
            <div className="border-l border-gray-600 pl-6 space-y-10 relative">
              {/* Dot Line Effect */}
              <span className="absolute top-0 left-0 w-3 h-3 bg-gray-600 rounded-full -ml-1.5"></span>
    
              {/* Item 1 */}
              <div>
                <h4 className="text-yellow-400 font-semibold">Master of Computer Science</h4>
                <p className="text-sm text-gray-400 mb-1">2015 - 2016</p>
                <p className="font-semibold">University of XYZ</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id
                  faucibus sed, suscipit feugiat turpis.
                </p>
              </div>
    
              {/* Item 2 */}
              <div>
                <h4 className="text-yellow-400 font-semibold">Bachelor of Computer Science</h4>
                <p className="text-sm text-gray-400 mb-1">2010 - 2014</p>
                <p className="font-semibold">University of ABC</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id
                  faucibus sed, suscipit feugiat turpis.
                </p>
              </div>
    
              {/* Item 3 */}
              <div>
                <h4 className="text-yellow-400 font-semibold">Diploma in Computer Science</h4>
                <p className="text-sm text-gray-400 mb-1">2006 - 2010</p>
                <p className="font-semibold">XYZ Institution</p>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id
                  faucibus sed, suscipit feugiat turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Resume;