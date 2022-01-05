import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Gamma from './Gamma';
import Gamma_Disc from './Gamma_Disc';
import Footer from '../Footer';
const Gamma_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Gamma_Disc />
            <Gamma />
            <Footer />
        </div>
        </>
    );
}

export default Gamma_Calc;