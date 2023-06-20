import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    var dateobj = new Date(); 
    var currentYear = dateobj.getFullYear();
    return (
        <div className="footer-section bg-[#f3f3f3] pt-20">
            <footer className="footer pb-10 mb-12 text-black border-b-2">
                <div>
                    <Link to='/'><img src={logo} alt="Logo" /></Link>
                    <p className='my-4'>DocHouse Medical Center<br />Providing reliable tech since 1992</p>
                    <Link to="appointment"><button className="btn btn-outline btn-secondary">Appointment</button></Link>
                </div>
                <div>
                    <span className="font-semibold text-2xl text-black">DocHouse Services</span>
                    <Link to="/Pediatric-Clinic" className='link link-hover'>Pediatric Clinic</Link>
                    <Link to="/Diagnosis-Clinic" className='link link-hover'>Diagnosis Clinic</Link>
                    <Link to="/Cardiac-Clinic" className='link link-hover'>Cardiac Clinic</Link>
                    <Link to="/Laboratory-Analysis" className='link link-hover'>Laboratory Analysis</Link>
                    <Link to="/Gynecological-Clinic" className='link link-hover'>Gynecological Clinic</Link>
                    <Link to="/Personal-Counseling" className='link link-hover'>Personal Counseling</Link>
                    <Link to="/Dental-Clinic" className='link link-hover'>Dental Clinic</Link>
                </div>
                <div>
                    <span className="font-semibold text-2xl text-black">Quick Links</span>
                    <Link to="about-us" className="link link-hover">About Us</Link>
                    <Link to="services" className="link link-hover">Services</Link>
                    <Link to="doctors" className="link link-hover">Doctors</Link>
                    <Link to="departments" className="link link-hover">Departments</Link>
                    <Link to="online-payment" className="link link-hover">Online Payment</Link>
                    <Link to="contact-us" className="link link-hover">Contact us</Link>
                    <Link to="my-account" className="link link-hover">My Account</Link>
                </div>
                <div>
                    <span className="font-semibold text-2xl text-black">Working Hours</span>
                    <Link className='link link-hover'>Monday - 10 am to 7 pm</Link>
                    <Link className='link link-hover'>Tuesday - 10 am to 7 pm</Link>
                    <Link className='link link-hover'>Wednesday - 10 am to 7 pm</Link>
                    <Link className='link link-hover'>Thursday - 10 am to 7 pm</Link>
                    <Link className='link link-hover'>Friday - 10 am to 7 pm</Link>
                    <Link className='link link-hover'>Saturday - 10 am to 7 pm</Link>
                    <Link className='link link-hover'>Sunday - 10 am to 7 pm</Link>
                </div>
            </footer>
            <div className="copyright py-10">
                <p className='text-center font-normal text-black'>Copyright © {currentYear} - All right reserved by DocHouse Medical Center.</p>
            </div>
        </div>
    );
};

export default Footer;






