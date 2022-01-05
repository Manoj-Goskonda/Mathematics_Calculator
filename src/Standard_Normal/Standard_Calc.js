import React from "react";
import CriticalValue from "../criticalvalue/CriticalValue";
import Student from "../Critical_Calc/Student";
import Critical from "../Critical_P_Value/PValue";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Std_Normal from "./Std_Normal";
import Standard_Main from "./Standard_Main";

const Standard_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <CriticalValue />
      <Standard_Main />
      <Footer />
    </>
  );
};

export default Standard_Calc;
