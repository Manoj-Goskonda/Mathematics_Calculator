import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Distributions_Dis from '../Distribution/Distribution_Dis';
import Binomial from './Binomial';
import Binomial_Disc from './Binomial_Disc';
import Footer from '../Footer';
const Binomial_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Binomial_Disc />
            <Binomial />
            <Footer />
        </div>
        </>
    );
}

export default Binomial_Calc;