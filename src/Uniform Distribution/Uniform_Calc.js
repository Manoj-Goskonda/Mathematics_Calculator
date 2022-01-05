import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Uniform from './Uniform';
import Uniform_Disc from './Uniform_Disc';
import Footer from '../Footer';

const Uniform_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Uniform_Disc />
            <Uniform />
            <Footer />
        </div>
        </>
    );
}

export default Uniform_Calc;