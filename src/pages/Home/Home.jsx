import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoCard from '../../components/InfoCard/InfoCard';
import Services from '../../components/Services/Services';
import ExpertDoctors from '../../components/ExpertDoctors/ExpertDoctors';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <InfoCard></InfoCard>
            <ExpertDoctors></ExpertDoctors>
        </div>
    );
};

export default Home;