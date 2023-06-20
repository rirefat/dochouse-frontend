import React from 'react';
import './ExpertDoctors.css';
import doctor1 from '../../assets/images/expertDoc_1.png';
import doctor2 from '../../assets/images/expertDoc_2.png';
import doctor3 from '../../assets/images/expertDoc_3.png';

import { BsFillStarFill } from 'react-icons/bs';
import { GrLocation } from 'react-icons/gr';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ExpertDoctors = () => {
    const doctors = [
        {
            img: doctor1,
            name: "Karyen Anderson",
            title: "BTP -  Senior Physiotherapist",
            available: "Available On Mon, 22 December",
            fees: "$20"
        },
        {
            img: doctor2,
            name: "Jack Smith",
            title: "BTP -  Senior Physiotherapist",
            available: "Available On Mon, 22 December",
            fees: "$20"
        },
        {
            img: doctor3,
            name: "Samuel Rose",
            title: "BTP -  Senior Physiotherapist",
            available: "Available On Mon, 22 December",
            fees: "$20"
        }
    ];
    return (
        <div className='expert-doctors-section my-32'>
            <div className="expert-doctors">
                <h2 className='text-5xl text-black font-semibold mb-6 text-center'>Our Expert Doctors</h2>
                <p className='text-black mb-12 text-center'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                <div className="doctors-container">
                    {
                        doctors.map((doctor, index) => (
                            <div className="doctor-card rounded-xl" key={index}>
                                <img src={doctor.img} alt="" />
                                <h3 className='font-bold text-black text-xl mt-5'>{doctor.name}</h3>
                                <p className='my-2 text-[#6C6B6B]'>{doctor.title}</p>
                                <div className="ratings flex gap-2 my-6">
                                    <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                                    <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                                    <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                                    <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                                    <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                                </div>
                                <p className='flex items-center mb-3 text-normal text-[#6C6B6B]'>
                                    <span className="icon mr-3 "><GrLocation></GrLocation></span>
                                    <span className='text-lg'>Dhanmondi, Dhaka, Bangladesh</span>
                                </p>
                                <p className='flex items-center mb-3 text-normal text-[#6C6B6B]'>
                                    <span className="icon mr-3"><MdDateRange></MdDateRange></span>
                                    <span className='text-lg'>{doctor.available}</span>
                                </p>
                                <p className='flex items-center mb-3 text-normal text-[#6C6B6B]'>
                                    <span className="icon mr-3"><AiOutlineDollar></AiOutlineDollar></span>
                                    <span className='text-lg'>{doctor.fees}</span>
                                </p>
                                <Link><button className="btn btn-outline btn-secondary w-full mt-4">View Profile</button></Link>
                            </div>
                        ))
                    }
                    {/* <div className="doctor-card rounded-xl">
                        <img src={doctor1} alt="" />
                        <h3 className='font-bold text-black text-xl mt-5'>Karyen Anderson</h3>
                        <p className='my-2 text-[#6C6B6B]'>BTP -  Senior Physiotherapist</p>
                        <div className="ratings flex gap-2 my-6">
                            <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                            <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                            <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                            <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                            <span className="text-xl icon text-[#F2871D]"><BsFillStarFill></BsFillStarFill></span>
                        </div>
                        <p className='flex items-center mb-3 text-normal text-[#6C6B6B]'>
                            <span className="icon mr-3 "><GrLocation></GrLocation></span>
                            <span className='text-lg'>Dhanmondi, Dhaka, Bangladesh</span>
                        </p>
                        <p className='flex items-center mb-3 text-normal text-[#6C6B6B]'>
                            <span className="icon mr-3"><MdDateRange></MdDateRange></span>
                            <span className='text-lg'>Available On Mon, 22 December</span>
                        </p>
                        <p className='flex items-center mb-3 text-normal text-[#6C6B6B]'>
                            <span className="icon mr-3"><AiOutlineDollar></AiOutlineDollar></span>
                            <span className='text-lg'>$20</span>
                        </p>
                        <Link><button className="btn btn-outline btn-secondary w-full mt-4">View Profile</button></Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctors;