import React from 'react';

function Landing() {
    return (
        <div className="flex flex-1 items-center justify-center flex-col pt-32">
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-center">Hey There, I'm Yazan Hailat</h1>
            <p className="font-mono text-gray-400 text-lg md:text-xl mt-2 text-center pt-2">A <span className={"text-orange-400"}>Full Stack Developer</span> Who Loves What He Does.</p>
            <img src='photos/YazanIcon.png' alt="Yazan Hailat" className="pt-11 w-1/4 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl rounded-full"/>
        </div>
    );
}

export default Landing;
