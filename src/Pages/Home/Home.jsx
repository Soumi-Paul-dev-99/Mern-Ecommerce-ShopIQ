import React from "react";
import Slider from "../../Components/slides/Slider";
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";

import { productData } from "../../Components/carousel/data";
import CarouselItem from "../../Components/carousel/CarouselItem";
import ProductCarousel from "../../Components/carousel/Carousel";
const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  const productss = productData.map((item, index) => (
    <div key={item.id}>
      <CarouselItem
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));
  return (
    <>
      <Slider />

      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Products"} btnText={"Shop Now >>>>"} />
          <ProductCarousel products={productss} />
        </div>
      </section>
    </>
  );
};

export default Home;
