import React from 'react';
import './InfoCard.css';

import { IoIosTime } from 'react-icons/io';
import { MdAddLocation } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const InfoCard = () => {
    const informations = [
        { icon: IoIosTime, title: "Opening Hours", details: "Open 9.00 am to 5.00pm Everyday", bg: "primary"},
        { icon: MdAddLocation, title: "Our Location", details: "Dhanmondi 17, Dhaka -1200, Bangladesh", bg: "secondary"},
        { icon: BsFillTelephoneFill, title: "Contact Us", details: "+88 01750 00 00 00 ", bg: "primary"},
    ];
    return (
        <div className='info-cards my-12'>
            {
                informations.map((info, index) => (
                    <div className="single-card rounded-lg shadow-xl text-white pt-10" key={index}>
                        <div className="icon text-5xl mx-5"><info.icon></info.icon></div>
                        <div className="card-details">
                            <h3 className='text-2xl mb-2'>{info.title}</h3>
                            <p>{info.details}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default InfoCard;