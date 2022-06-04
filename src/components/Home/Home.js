import React from 'react';
import Projects from './Projects';
import Services from './Services';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Projects />
            <Services />
        </div>
    );
};

export default Home;