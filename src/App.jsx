import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home/Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
