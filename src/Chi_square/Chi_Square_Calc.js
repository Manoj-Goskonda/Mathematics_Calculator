import React from "react";
import CriticalValue from "../criticalvalue/CriticalValue";
import Student from "../Critical_Calc/Student";
import Footer from "../Footer";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import Chi_Square from "./Chi_Square";
import Chi_Square_Main from './Chi_Square_Main';
const Chi_Square_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <CriticalValue />
      <Chi_Square_Main />
      <Footer />
    </>
  );
};

export default Chi_Square_Calc;
