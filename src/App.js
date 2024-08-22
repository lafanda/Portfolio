import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from "./landing/Home";
import Contact from "./contact/Contact";



function App() {
    return (
        <Router>

                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path={'/contact'} element ={<Contact/>}/>
                </Routes>

        </Router>
    );
}


export default App;
