import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoCard from '../../components/InfoCard/InfoCard';
import Services from '../../components/Services/Services';
import ExpertDoctors from '../../components/ExpertDoctors/ExpertDoctors';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <InfoCard></InfoCard>
            <ExpertDoctors></ExpertDoctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;