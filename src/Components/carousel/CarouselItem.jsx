import React from "react";
import "./Carousel.scss";
import { shortenText } from "../../utils/index.jsx";
import { Link } from "react-router-dom";



const CarouselItem = ({ url, name, price, description }) => {
  return (
    <div>
      <div className="carouselItem">
        <Link to="/product-details">
          <img className="product--image" src={url} alt="product"></img>
          <p className="price">{`$${price}`}</p>
          <h4>{shortenText(name, 18)}</h4>
          <p className="--mb">{shortenText(description, 26)}</p>
        </Link>
        <button className="--btn --btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default CarouselItem;
