import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Negative from './Negative';
import Negative_Disc from './Negative_Disc';
import Footer from '../Footer';
const Negative_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Negative_Disc />
            <Negative />
            <Footer />
        </div>
        </>
    );
}

export default Negative_Calc;