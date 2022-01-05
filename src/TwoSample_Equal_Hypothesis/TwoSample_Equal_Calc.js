import React from "react";
import NavBar from "../NavBar";
import MainNavBar from "../MainNavBar";
import Testing_of_Hypothesis_Dis from "../Testing_of_Hypothesis/Testing_of_Hypothesis_Dis";
import TwoSample_Equal from "../TwoSample_Equal_Hypothesis/TwoSample_Equal";
import Footer from "../Footer";
import { Dialog } from "@material-ui/core";

const TwoSample_Equal_Calc = () => {
  return (
    <>
      <NavBar />
      <MainNavBar />
      <Testing_of_Hypothesis_Dis />
      <TwoSample_Equal />
      <Footer />
    </>
  );
};

export default TwoSample_Equal_Calc;
