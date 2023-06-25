import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import InfoCard from '../../components/InfoCard/InfoCard';
import Services from '../../components/Services/Services';
import ExpertDoctors from '../../components/ExpertDoctors/ExpertDoctors';
import ContactUs from '../../components/ContactUs/ContactUs';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Services></Services>
            <InfoCard></InfoCard>
            <Testimonials></Testimonials>
            <ExpertDoctors></ExpertDoctors>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;