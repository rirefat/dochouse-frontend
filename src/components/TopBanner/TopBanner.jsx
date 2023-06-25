import React from 'react';
import './TopBanner.css';
import { Link } from 'react-router-dom';

const TopBanner = (props) => {
    const {page} = props;
    return (
        <div className='topBanner-section bg-primary py-16'>
            <div className="topBanner">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to={`/${page}`}>{page}</Link></li>
                    </ul>
                </div>
                <h1 className='text-4xl font-semibold text-white'>{page}</h1>
            </div>
        </div>
    );
};

export default TopBanner;