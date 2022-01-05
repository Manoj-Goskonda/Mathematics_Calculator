import React from "react";
import Student from "../Critical_Calc/Student";
import Critical, { PValue } from "../Critical_P_Value/PValue";
import Footer from "../Footer";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import CriticalValue from "./CriticalValue";
import Critical_Main from "./Critical_Main";

const Critical_Nav = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <CriticalValue />
      <Critical_Main />
      <PValue />
      <Footer />
    </>
  );
};

export default Critical_Nav;
