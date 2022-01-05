import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import OneSample_ZTest_Praportion_Dis from './OneSample_ZTest_Praportion_Dis';
import OneSample_ZTest_Praportion from './OneSample_ZTest_Praportion';
import Footer from '../Footer';
import { Dialog } from '@material-ui/core';

const OneSample_ZTest_Praportion_Calc = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <OneSample_ZTest_Praportion_Dis />
        <OneSample_ZTest_Praportion />
        <Footer />
        </>
    )
}

export default OneSample_ZTest_Praportion_Calc;