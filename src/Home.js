import React from "react";
import NavBar from "./NavBar";
import MainNavBar from "./MainNavBar";
import Footer from "./Footer";
import Header from "./Header";
import Critical from "./criticalvalue/Critical";
import CriticalValue from "./criticalvalue/CriticalValue";

const Home = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <CriticalValue />
      <Critical />
      <Footer />
    </>
  );
};

export default Home;
