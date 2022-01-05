import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Poisson_Disc from './Poisson_Disc';
import Footer from '../Footer';
import Poisson from './Poisson';
export default function PDCRoute() {
    return (
        <>
            <div >

                <NavBar />
                <MainNavBar />
                <Poisson_Disc />
                <Poisson />
                <Footer />
            </div>
        </>
    );
}