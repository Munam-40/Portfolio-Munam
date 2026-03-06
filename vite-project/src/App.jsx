import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";   
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact"; 
function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Home />
      <About />
      <Services />
      <Skills />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
