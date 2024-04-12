import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
const Slider = () => {
  const [currentSlide, setCurrentSllide] = useState(0);
  const prevSlide = () => {};
  const nextSlide = () => {};

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;

        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
