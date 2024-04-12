import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./data";

const ProductCarousel = ({ products }) => {
  return (
    <div>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 50ms ease"
        transitionDuration={500}
      >
        {products}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
