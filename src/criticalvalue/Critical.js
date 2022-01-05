import React from "react";
import Graph1 from "../assets/Images/graph1.png";
import Graph2 from "../assets/Images/graph2.png";
import Graph3 from "../assets/Images/graph3.png";
import Graph4 from "../assets/Images/graph4.png";
import Graph5 from "../assets/Images/graph5.png";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/Images/logo.png";
import profileImg from "../assets/Images/user.png";
// import { Navbar, Nav } from 'react-bootstrap';
import Search from "@material-ui/icons/Search";
import CriticalValue from "./CriticalValue";
import PValue from "../Critical_P_Value/PValue";
import Student from "../Critical_Calc/Student";
import Critical_Main from "./Critical_Main";
export const Critical = () => {
  return (
    <>
      <Critical_Main />
      <PValue />
    </>
  );
};
export default Critical;
