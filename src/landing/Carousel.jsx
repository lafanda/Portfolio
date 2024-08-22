import React from 'react';
import './Carousel.css';  // Make sure to create this CSS file

const images = [
    'photos/carousel/bootstrap.png',
    'photos/carousel/c.png',
    'photos/carousel/css.png',
    'photos/carousel/github.png',
    'photos/carousel/html.png',
    'photos/carousel/java.png',
    'photos/carousel/js.png',
    'photos/carousel/mySQL.png',
    'photos/carousel/node.png',
    'photos/carousel/python.png',
    'photos/carousel/react.png',
    'photos/carousel/tailwind.png',
    'photos/carousel/ts.png',
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
