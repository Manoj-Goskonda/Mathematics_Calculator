import React from "react";
import CriticalValue from "../criticalvalue/CriticalValue";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import P_Corr from "./P_Corr";
import Corr_Main from './Corr_Main';
import Footer from "../Footer";
import Student from "../Critical_Calc/Student";
const Corr_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <CriticalValue />
      <Corr_Main />
      <Footer />
    </>
  );
};

export default Corr_Calc;
