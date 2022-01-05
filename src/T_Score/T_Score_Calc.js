import React from "react";
import P_Value_Disc from "../Critical_P_Value/P_Value_Disc";
import MainNavBar from "../MainNavBar";
import NavBar from "../NavBar";
import T_Score from "./T_Score";
// import T_Score_Main from "./T_Score_Main";
import T_Score_Main from "./T_Score_Main";
import Footer from "../Footer";

const T_Score_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <P_Value_Disc />
      <T_Score_Main />
      <Footer />
    </>
  );
};

export default T_Score_Calc;
