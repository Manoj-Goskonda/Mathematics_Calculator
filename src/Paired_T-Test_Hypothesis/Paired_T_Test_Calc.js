import React from "react";
import NavBar from "../NavBar";
import MainNavBar from "../MainNavBar";
import Testing_of_Hypothesis_Dis from "../Testing_of_Hypothesis/Testing_of_Hypothesis_Dis";
import Paired_T_Test from './Paired_T_Test';
import Footer from "../Footer";
import { Dialog } from "@material-ui/core";

const Paired_T_Test_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <Testing_of_Hypothesis_Dis />
      <Paired_T_Test />
      <Footer />
    </>
  );
};

export default Paired_T_Test_Calc;
