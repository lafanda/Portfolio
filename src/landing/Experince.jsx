import React from 'react';

function Experiences() {
    return (
        <div className={"mt-20 text-center "}>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-amber-600">
                Experience
            </h2>
            <div className="flex justify-center items-center flex-wrap gap-24 mt-8">
                <a href="https://www.altura.com/"
                   className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-lg w-80 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-center items-center mx-3 mt-3 overflow-hidden text-gray-700 bg-black shadow-lg bg-clip-border rounded-lg h-60 ">
                        <img src="photos/Altura.png" alt="Altura-picture"
                             className="w-2/3 h-2/3 object-cover"/>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Altura
                        </h4>
                        <p className="text-gray-600">Backend Developer Intern</p>
                    </div>
                </a>

                <a href="https://css.uwindsor.ca/"
                   className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-lg w-80 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div
                        className="flex justify-center items-center mx-3 mt-3 overflow-hidden text-gray-700 bg-black shadow-lg bg-clip-border rounded-lg h-60 ">
                        <img src="photos/CSS.png" alt="Altura-picture"
                             className="w-3/5 h-4/5 object-cover"/>
                    </div>
                    <div className="p-4 text-center">
                        <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            University of Windsor CSS
                        </h4>
                        <p className="text-gray-600">Full Stack Developer</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Experiences;
