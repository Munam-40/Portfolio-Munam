import React from 'react'
 const Skills = () => {
  return (
    <>
    <section id='skills' className="bg-[#0b0f1a] text-white py-20 px-4 md:px-20">
  
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
    {/* Left Side */}
    <div>
      
        <div className="text-center mb-10 relative">
  <h2 className="text-yellow-400 text-3xl font-bold inline-block relative">
    My Skills
    <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 
      w-40 h-[2px] bg-gradient-to-r from-gray-800 via-yellow-400 to-gray-800">
    </span>
  </h2>
</div>


      <h1 className="text-4xl font-bold mb-6 leading-snug">
        All the skills that I have in that <br /> field of work are mentioned.
      </h1>

      <p className="text-gray-400 mb-4">
        I offer creative digital services including logo design, motion graphics, and responsive web development. I build modern websites using React.js and Tailwind CSS that work smoothly on all devices. My focus is quality work, creative design, fast delivery, and complete client satisfaction through clear communication and professional project execution.
      </p>

     
    </div>

    {/* Right Side */}
    <div className="space-y-6 mt-10">
      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Photoshop</span>
          <span className="text-yellow-400">95%</span>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full">
          <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '95%' }} />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Responsive</span>
          <span className="text-yellow-400">95%</span>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full">
          <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '95%' }} />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Adobe XD</span>
          <span className="text-yellow-400">90%</span>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full">
          <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '90%' }} />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Web Design</span>
          <span className="text-yellow-400">85%</span>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full">
          <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '85%' }} />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">React</span>
          <span className="text-yellow-400">80%</span>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full">
          <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '80%' }} />
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <span className="font-semibold">Tailwind CSS</span>
          <span className="text-yellow-400">90%</span>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full">
          <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '90%' }} />
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
export default Skills;