import React from "react";
import P_Value_Disc from "../Critical_P_Value/P_Value_Disc";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import X2_Score from "./X2_Score";
import Footer from "../Footer";
import T_Score from "../T_Score/T_Score";
import X2_Score_Main from "./X2_Score_Main";

const X2_Score_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <P_Value_Disc />
      <X2_Score_Main />
      <Footer />
    </>
  );
};

export default X2_Score_Calc;
