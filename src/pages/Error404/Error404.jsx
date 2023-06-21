import React from 'react';
import './Error404.css';
import error404 from '../../assets/images/page404.png';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className='not-found-page text-center'>
            <h1 className='text-4xl mb-4 text-black font-semibold'>Sorry</h1>
            <p className='text-black text-xl '>This page is not found</p>
            <img src={error404} className='my-8' />
            <Link to="/"><button className="btn btn-secondary">Back To Home</button></Link>
        </div>
    );
};

export default Error404;