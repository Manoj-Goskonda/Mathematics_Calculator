import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Lognormal from './Lognormal';
import Lognormal_Disc from './Lognormal_Disc';
import Footer from '../Footer';
const Lognormal_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Lognormal_Disc />
            <Lognormal />
            <Footer />
        </div>
        </>
    );
}

export default Lognormal_Calc;