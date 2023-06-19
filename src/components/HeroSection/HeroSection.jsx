import React from 'react';
import './HeroSection.css';
import doctorsHero from '../../assets/images/heroSection_doctors.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero bg-primary hero-section py-8">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={doctorsHero} className="max-w-2xl" />
                <div>
                    <h1 className="text-7xl font-medium text-white leading-normal">Your Best Medical Help Center</h1>
                    <p className='my-8'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>

                    <button className="btn btn-secondary text-white font-semibold">
                        <Link to="all-services">All Service</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;