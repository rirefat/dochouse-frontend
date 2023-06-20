import React from 'react';
import './ContactUs.css';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div className='contact-section'>
            <div className="contact bg-primary py-16 rounded-xl">
                <div className="contact-left text-white">
                    <h2 className='text-4xl font-bold'>Contact With Us</h2>
                    <p className='my-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className='text-lg flex items-center mb-6 text-normal'>
                        <span className="icon mr-3"><FiPhoneCall></FiPhoneCall></span>
                        <span>+88 01750 14 14 14</span>
                    </div>
                    <div className='text-lg flex items-center mb-6 text-normal'>
                        <span className="icon mr-3"><GoLocation></GoLocation></span>
                        <span>Dhanmondi, Dhaka, Bangladesh</span>
                    </div>
                </div>
                <div className="contact-right">
                    <form className='booking-form'>
                        <div className="input-fields">
                            <input type="text" placeholder='Name' className='w-full h-14 px-6 rounded'/>
                            <input type="email" placeholder='Email' className='w-full h-14 px-6 rounded'/>
                            <input type="number" placeholder='Mobile Number' className='w-full h-14 px-6 rounded'/>
                            <input type="text" placeholder='Doctor Name' className='w-full h-14 px-6 rounded'/>
                            <input type="date" placeholder='Date' className='w-full h-14 px-6 rounded'/>
                            <select className='w-full h-14 px-6 rounded bg-[#133D39]'>
                                <option>Time</option>
                                <option>10 : 00 AM</option>
                                <option>11 : 00 AM</option>
                                <option>12 : 00 AM</option>
                                <option>1 : 00 PM</option>
                                <option>2 : 00 PM</option>
                                <option>3 : 00 PM</option>
                                <option>4 : 00 PM</option>
                                <option>5 : 00 PM</option>
                                <option>6 : 00 PM</option>
                                <option>7 : 00 PM</option>
                            </select>
                        </div>
                        <button className="btn btn-secondary my-4" >Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;