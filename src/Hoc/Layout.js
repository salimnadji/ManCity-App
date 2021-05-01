import React from 'react';
import Header from '../Components/header&footer/header';
import Footer from '../Components/header&footer/footer';

const Layout = (props) => {
    return (
        <div>
        <Header />
        {props.children}
        <Footer />
        </div>
    );
};

export default Layout;