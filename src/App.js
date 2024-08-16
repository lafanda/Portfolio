import React from 'react';

import Navbar from "./navbar/Navbar";
import Landing from "./landing/Landing";
import About from "./landing/About";
import Experince from "./landing/Experince";


function App() {
  return (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Experince />
    </div>
  );
}


export default App;
