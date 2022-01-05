import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Normal from './Normal';
import Normal_Disc from './Normal_Disc';
import Footer from '../Footer';

const Normal_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Normal_Disc />
            <Normal />
            <Footer />
        </div>
        </>
    );
}

export default Normal_Calc;