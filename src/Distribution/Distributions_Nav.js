import React from 'react';
import NavBar from '../NavBar';
import MainNavBar from '../MainNavBar';
import Distribution_Dis from './Distribution_Dis';
import Distributions from './Distributions';
import Footer from '../Footer';
const Distribution_Nav = () =>{
    return(
        <>
        <NavBar />
        <MainNavBar />
        <Distribution_Dis />
        <Distributions />
        <Footer />
        </>
    )
}

export default Distribution_Nav;