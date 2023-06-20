import React, { useState } from 'react';
import './Services.css';
import doctor from '../../assets/images/doctor1.png';
import cavityProtection from '../../assets/images/cavityTreatment.png';
import cosmeticDentisty from '../../assets/images/cosmetic-dentistry.png';
import oralSurgery from '../../assets/images/oral-surgery.png';
import { Link } from 'react-router-dom';

const Services = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='services my-32'>
            <div className="services-section">
                <div className="left">
                    <img src={doctor} alt="" />
                </div>
                <div className="right">
                    <h2 className='text-5xl text-black font-semibold mb-6'>Our Services</h2>
                    <p className='text-black mb-12'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    {/* Services Tab */}
                    <div className="services-tab ">
                        <div className="tab-block border rounded-xl shadow-lg mb-8">
                            <button
                                className={toggleState === 1 ? "btn btn-secondary" : "btn btn-ghost"}
                                onClick={() => toggleTab(1)}
                            >Cavity Protection
                            </button>
                            <button
                                className={toggleState === 2 ? "btn btn-secondary" : "btn btn-ghost"}
                                onClick={() => toggleTab(2)}
                            >Cosmetic Dentisty
                            </button>
                            <button
                                className={toggleState === 3 ? "btn btn-secondary" : "btn btn-ghost"}
                                onClick={() => toggleTab(3)}
                            >Oral Surgery
                            </button>
                        </div>

                        <div className="tab-content">
                            <div className={toggleState === 1 ? "active-content content" : "content"}>
                                <img className='rounded-xl' src={cavityProtection} alt="" />
                                <h3 className='my-5 font-semibold text-3xl text-black'>Cavity Protection</h3>
                                <p className='text-black mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve  dicta sunt explicabo. Sed ut perspiciatis unde dicta sunt explicabo. Sed ut perspiciatis undentore veritatis et quasi architecto beatae vitae </p>
                                <p className='text-black mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                                <Link to="appointment"><button className="btn btn-outline btn-secondary">Get Appointment</button></Link>
                            </div>
                            <div className={toggleState === 2 ? "active-content content" : "content"}>
                                <img className='rounded-xl' src={cosmeticDentisty} alt="" />
                                <h3 className='my-5 font-semibold text-3xl text-black'>Cosmetic Dentisty</h3>
                                <p className='text-black mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve  dicta sunt explicabo. Sed ut perspiciatis unde dicta sunt explicabo. Sed ut perspiciatis undentore veritatis et quasi architecto beatae vitae </p>
                                <p className='text-black mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                                <Link to="appointment"><button className="btn btn-outline btn-secondary">Get Appointment</button></Link>
                            </div>
                            <div className={toggleState === 3 ? "active-content content" : "content"}>
                                <img className='rounded-xl' src={oralSurgery} alt="" />
                                <h3 className='my-5 font-semibold text-3xl text-black'>Oral Surgery</h3>
                                <p className='text-black mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error. doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve  dicta sunt explicabo. Sed ut perspiciatis unde dicta sunt explicabo. Sed ut perspiciatis undentore veritatis et quasi architecto beatae vitae </p>
                                <p className='text-black mb-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>

                                <Link to="appointment"><button className="btn btn-outline btn-secondary">Get Appointment</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;