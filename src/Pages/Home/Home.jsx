import React from "react";
import Slider from "../../Components/slides/Slider";
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";

const PageHeading = ({ heading, btnText }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button classname="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <Slider />

      <section>
        <div className="container">
          <HomeInfoBox />
          <PageHeading heading={"Latest Products"} btnText={"Shop Now >>>>"} />
        </div>
      </section>
    </>
  );
};

export default Home;
