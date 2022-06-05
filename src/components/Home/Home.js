import React from 'react';
import Projects from './Projects';
import Services from './Services';
import Testimonials from './Testimonials';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Projects />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Home;