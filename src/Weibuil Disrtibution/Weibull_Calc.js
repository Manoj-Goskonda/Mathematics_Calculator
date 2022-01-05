import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Weibull from './Weibull';
import Weibull_Disc from './Weibull_Disc';
import Footer from '../Footer';
const Weibull_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Weibull_Disc />
            <Weibull />
            <Footer />
        </div>
        </>
    );
}

export default Weibull_Calc;