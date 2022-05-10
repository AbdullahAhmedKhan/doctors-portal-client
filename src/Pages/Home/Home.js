import React from 'react';
import Banner from './Banner';
import Description from './Description';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Description></Description>
        </div>
    );
};

export default Home;