import React from 'react';
import Landing from "./Landing";
import About from "./About";
import Experince from "./Experince";
import Projects from "./Projects";
import Layout from "../format/Layout";
function Home() {
    return (
        <>
            <Layout>
            <Landing></Landing>
            <About></About>
            <Experince></Experince>
            <Projects></Projects>
            </Layout>
        </>
    );
}

export default Home;