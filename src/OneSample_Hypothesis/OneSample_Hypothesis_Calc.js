import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Testing_of_Hypothesis_Dis from '../Testing_of_Hypothesis/Testing_of_Hypothesis_Dis';
import OneSample_Hypothesis from './OneSample_Hypothesis';
import Footer from '../Footer';
import { Dialog } from '@material-ui/core';

const Hypothesis_Calc = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <Testing_of_Hypothesis_Dis />
        <OneSample_Hypothesis />
        <Footer />
        </>
    )
}

export default Hypothesis_Calc;