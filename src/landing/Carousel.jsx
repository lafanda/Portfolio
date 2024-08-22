import React from 'react';
import './Carousel.css';  // Make sure to create this CSS file

const images = [
    'photos/Carousel/bootstrap.png',
    'photos/Carousel/c.png',
    'photos/Carousel/css.png',
    'photos/Carousel/github.png',
    'photos/Carousel/html.png',
    'photos/Carousel/java.png',
    'photos/Carousel/js.png',
    'photos/Carousel/mySQL.png',
    'photos/Carousel/node.png',
    'photos/Carousel/python.png',
    'photos/Carousel/react.png',
    'photos/Carousel/tailwind.png',
    'photos/Carousel/ts.png',
];

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="scroll-container">
                {Array.from({ length: 13 }).flatMap(() =>
                    images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index}`} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Carousel;
