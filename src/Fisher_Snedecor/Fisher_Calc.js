import React from "react";
import CriticalValue from "../criticalvalue/CriticalValue";
import Student from "../Critical_Calc/Student";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Fisher_Snedecor from "./Fisher_Snedecor";
import Fisher_Snedecor_Main from "./Fisher_Snedecor_Main";

const Fisher_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <CriticalValue />
      <Fisher_Snedecor_Main />
      <Footer />
    </>
  );
};

export default Fisher_Calc;
