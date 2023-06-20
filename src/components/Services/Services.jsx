import React from 'react';
import './Services.css';
import doctor from '../../assets/images/doctor1.png';

const Services = () => {
    return (
        <div className='services my-32'>
            <div className="services-section">
                <div className="left">
                    <img src={doctor} alt="" />
                </div>
                <div className="right">
                    <h2 className='text-5xl text-black font-semibold mb-6'>Our Services</h2>
                    <p className='text-black'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    {/* Services Tab */}
                    <div className="services-tab">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;