import React from "react";
import MainNavbar from "../MainNavBar";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Student from "./Student";
import Student_Main from "./Student_Main";
import CriticalValue from "../criticalvalue/CriticalValue";
// import { Navbar } from "react-bootstrap";
import Critical from "../criticalvalue/Critical";
const Student_Calc = () => {
  return (
    <>
      <div>
        <NavBar />
        <MainNavbar />
        <CriticalValue />
        <Student_Main />
        <Footer />
      </div>
    </>
  );
};
export default Student_Calc;
