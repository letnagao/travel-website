import React from 'react';
import '../../App.css';
import Cards from '../card-item/Cards';
import Footer from '../footer/Footer';
import HeroSection from '../hero-section/HeroSection';

function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;