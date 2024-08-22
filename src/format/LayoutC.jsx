import React from 'react';
import Footer from './Footer';
import NavbarC from "./NavbarC";


const LayoutC = ({ children }) => {
    return (
        <>
            <NavbarC />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default LayoutC;
