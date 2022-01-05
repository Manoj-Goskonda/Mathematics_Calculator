import React from "react";
import P_Value_Disc from "../Critical_P_Value/P_Value_Disc";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import T_Score from "./Z_Score";
import Footer from "../Footer";
import Z_Score_Main from "./Z_Score_Main";

const T_Score_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <P_Value_Disc />
      <Z_Score_Main />
      <Footer />
    </>
  );
};

export default T_Score_Calc;
