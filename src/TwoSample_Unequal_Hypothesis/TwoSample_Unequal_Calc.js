import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Testing_of_Hypothesis_Dis from '../Testing_of_Hypothesis/Testing_of_Hypothesis_Dis';
import TwoSample_Unequal from './TwoSample_Unequal';
import Footer from '../Footer';
import { Dialog } from '@material-ui/core';

const TwoSample_Unequal_Calc = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <Testing_of_Hypothesis_Dis />
        <TwoSample_Unequal />
        <Footer />
        </>
    )
}

export default TwoSample_Unequal_Calc;