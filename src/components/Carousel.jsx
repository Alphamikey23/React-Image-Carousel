import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (direction) => {
        let newIndex = currentIndex;
        if (direction === 'prev') {
            newIndex = (currentIndex - 1 + images.length) % images.length;
        } else if (direction === 'next') {
            newIndex = (currentIndex + 1) % images.length;
        }
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <div className="image-container">
                <img src={images[currentIndex].img} alt={`carousel-${currentIndex}`} />
                <div className="caption">
                    <h2>{images[currentIndex].title}</h2>
                    <p>{images[currentIndex].subtitle}</p>
                </div>
            </div>
            <div className="arrow-buttons">
                <button className="nav-button left" onClick={() => handleNavigation('prev')}>
                    <ArrowBackIosIcon />
                </button>
                <button className="nav-button right" onClick={() => handleNavigation('next')}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
