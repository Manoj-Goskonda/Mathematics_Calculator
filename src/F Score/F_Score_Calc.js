import React from "react";
import P_Value_Disc from "../Critical_P_Value/P_Value_Disc";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import T_Score from "./F_Score";
import Footer from "../Footer";
import F_Score_Main from "./F_Score_Main";

const F_Score_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <P_Value_Disc />
      <F_Score_Main />
      <Footer />
    </>
  );
};

export default F_Score_Calc;