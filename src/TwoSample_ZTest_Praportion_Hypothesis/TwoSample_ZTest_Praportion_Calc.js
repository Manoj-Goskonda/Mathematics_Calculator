import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import TwoSample_ZTest_Praportion_Dis from './TwoSample_ZTest_Praportion_Dis';
import TwoSample_ZTest_Praportion from './TwoSample_ZTest_Praportion';
import Footer from '../Footer';
import { Dialog } from '@material-ui/core';

const TwoSample_ZTest_Praportion_Calc = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <TwoSample_ZTest_Praportion_Dis />
        <TwoSample_ZTest_Praportion />
        <Footer />
        </>
    )
}

export default TwoSample_ZTest_Praportion_Calc;