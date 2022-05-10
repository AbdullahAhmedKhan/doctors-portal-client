import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Description from './Description';
import Footer from './Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Description></Description>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;