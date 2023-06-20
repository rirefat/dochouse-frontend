import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoCard from '../../components/InfoCard/InfoCard';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Home;