import React from 'react';

function About() {
    return (
        <div className="bg-amber-600 p-8 md:p-12 lg:p-16 text-white text-center mt-32">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
                Nice to Meet You!
            </h2>
            <p className="md:px-32 pt-3 text-base md:text-lg lg:text-xl font-mono leading-loose text-slate-50">
                Since writing my first line of code in 2019, I have committed myself to a life of learning and growth in
                the world of tech.
                In that time, I have worked on a large variety of projects, ranging from simple games to working with
                teams of developers on large scale applications.
                I am always looking for new opportunities to learn and grow, and I am excited to see what the future
                holds.
            </p>

        </div>
    );
}

export default About;
