import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home/Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
