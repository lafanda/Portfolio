import React from 'react';

import Navbar from "./format/Navbar";
import Footer from "./format/Footer";
import Landing from "./landing/Landing";
import About from "./landing/About";
import Experince from "./landing/Experince";
import Projects from "./landing/Projects";



function App() {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Experince />
        <Projects/>
        <Footer />
    </div>
  );
}


export default App;
