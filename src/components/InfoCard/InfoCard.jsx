import React from 'react';
import './InfoCard.css';

import { IoIosTime } from 'react-icons/io';
import { MdAddLocation } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const InfoCard = () => {
    const informations = [
        { icon: IoIosTime, title: "Opening Hours", details: "Open 9.00 am to 5.00pm Everyday", bg: "primary"},
        { icon: MdAddLocation, title: "Our Location", details: "Dhanmondi 17, Dhaka -1200, Bangladesh", bg: "secondary"},
        { icon: BsFillTelephoneFill, title: "Contact Us", details: "+88 01750 00 00 00  +88 01750 00 00 00", bg: "primary"},
    ];
    return (
        <div className='info-cards flex justify-center gap-12'>
            {
                informations.map((info, index) => (
                    <div className="card w-96 bg-base-100 shadow-xl my-24 flex flex-row align-center" key={index}>
                        <div className="icon text-5xl text-white"><info.icon></info.icon></div>
                        <div className={`card-body rounded-2xl text-white`}>
                            <h2 className="text-2xl font-semibold">{info.title}</h2>
                            <p>{info.details}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default InfoCard;