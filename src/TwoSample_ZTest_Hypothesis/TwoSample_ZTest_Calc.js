import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import TwoSample_ZTest_Dis from './TwoSample_ZTest_Dis';
import Twosample_ZTest from './TwoSample_ZTest';
import Footer from '../Footer';
import { Dialog } from '@material-ui/core';


const TwoSample_ZTest_Calc = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <TwoSample_ZTest_Dis />
        <Twosample_ZTest />
        <Footer />
        </>
    )
}

export default TwoSample_ZTest_Calc;