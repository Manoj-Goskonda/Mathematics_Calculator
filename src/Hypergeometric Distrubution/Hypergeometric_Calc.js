import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Hypergeometric from './Hypergeometric';
import Hypergeometric_Disc from './Hypergeometric_Disc';
import Footer from '../Footer';
const Hypergeometric_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Hypergeometric_Disc />
            <Hypergeometric />
            <Footer />
        </div>
        </>
    );
}

export default Hypergeometric_Calc;