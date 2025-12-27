import React from 'react';

function Landing() {
    return (
        <div className="flex flex-1 items-center justify-center flex-col pt-32 relative">

            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold text-center z-10">Hey There, I'm
                Yazan
                Hailat</h1>
            <p className="font-mono text-gray-400 text-lg md:text-xl mt-2 text-center pt-2 z-10">
                A <span className={"text-orange-400"}>Full Stack Developer </span>
                Who Loves What He Does.
            </p>
            <img src='photos/YazanIcon.png' alt="Yazan Hailat"
                 className="pt-11 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:max-w-lg 2xl:max-w-xl rounded-full z-10"/>
        </div>
    );
}

export default Landing;
