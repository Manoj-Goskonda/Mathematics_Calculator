import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import ZTest_Testing_of_Hypothesis_Dis from '../Testing_of_Hypothesis/ZTest_Testing_of_Hypothesis_Dis';
import OneSample_ZTest from './OneSample_ZTest';
import Footer from '../Footer';
import { Dialog } from '@material-ui/core';

const Onesample_ZTest_Calc = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <ZTest_Testing_of_Hypothesis_Dis />
        <OneSample_ZTest />
        <Footer />
        </>
    )
}

export default Onesample_ZTest_Calc;