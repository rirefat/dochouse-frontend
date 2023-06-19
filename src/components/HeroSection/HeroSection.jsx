import React from 'react';
import './HeroSection.css';
import doctorsHero from '../../assets/images/heroSection_doctors.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero bg-primary hero-section">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={doctorsHero} className="max-w-xl shadow-2xl" />
                <div className='max-w-full lg:max-w-[50%] text-center lg:text-left'>
                    <h1 className="text-7xl font-normal text-white">Your Best Medical Help Center</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary">
                        <Link to='all-services'>All Services</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;