import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import doctorsHero from '../../assets/images/heroSection_doctors.png';
import shape1 from '../../assets/images/shape1.svg';
import shape2 from '../../assets/images/shape2.png';
import shape3 from '../../assets/images/shape3.png';

const HeroSection = () => {
    return (
        <div className="hero bg-primary hero-section py-8 z-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={doctorsHero} className="doctors-img max-w-xl" />
                <div className='max-w-full lg:max-w-[50%] text-center lg:text-left'>
                    <h1 className="text-7xl font-normal text-white">Your Best Medical Help Center</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-secondary">
                        <Link to='all-services'>All Services</Link>
                    </button>
                </div>
            </div>
            <span className="shape-1"><img src={shape1} /></span>
            <span className="shape-2"><img src={shape2} /></span>
            <span className="shape-3"><img src={shape3} /></span>
        </div>
    );
};

export default HeroSection;