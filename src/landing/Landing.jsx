import React from 'react';

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.lifetime = 0;
//     }
// }

function Landing() {
    // const canvasRef = useRef(null);
    //
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     const points = [];
    //
    //     const addPoint = (x, y) => {
    //         const rect = canvas.getBoundingClientRect();  // Get canvas position and size
    //         points.push(new Point(x - rect.left, y - rect.top));  // Adjust mouse position relative to canvas
    //     };
    //
    //     const handleMouseMove = ({clientX, clientY}) => {
    //         addPoint(clientX, clientY);
    //     };
    //
    //     document.addEventListener('mousemove', handleMouseMove);
    //
    //     const animatePoints = () => {
    //         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //         const duration = (0.7 * (1 * 1000)) / 60; // Duration of point life
    //
    //         points.forEach((point, index) => {
    //             point.lifetime += 1;
    //             if (point.lifetime > duration) {
    //                 points.shift();
    //             } else {
    //                 const lifePercent = point.lifetime / duration;
    //                 const spreadRate = 7 * (1 - lifePercent);
    //
    //                 ctx.lineJoin = 'round';
    //                 ctx.lineWidth = spreadRate;
    //
    //                 ctx.strokeStyle = `#ea580c`;
    //
    //                 ctx.beginPath();
    //                 if (index > 0) {
    //                     ctx.moveTo(points[index - 1].x, points[index - 1].y);
    //                 }
    //                 ctx.lineTo(point.x, point.y);
    //                 ctx.stroke();
    //             }
    //         });
    //         requestAnimationFrame(animatePoints);
    //     };
    //
    //     animatePoints();
    //
    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);
    // <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}
    //        className="absolute top-0 left-0 left-0 pointer-events-none"/>
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
