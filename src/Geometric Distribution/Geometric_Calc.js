import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Geometric from './Geometric';
import Geometric_Disc from './Geometric_Disc';
import Footer from '../Footer';
const Geometric_Calc = ()=> {
    return (
        <>
        <div >
            <NavBar />
            <MainNavBar />
            <Geometric_Disc />
            <Geometric />
            <Footer />
        </div>
        </>
    );
}

export default Geometric_Calc;