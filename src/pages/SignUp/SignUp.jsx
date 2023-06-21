import React from 'react';
import './SignUp.css';
import regImg from '../../assets/images/reg_sideImg.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='signup-section'>
            <div className="left bg-primary">
                {/* <img src={regImg} /> */}
            </div>
            <div className="right">
                <form className='form border px-4 py-6 rounded-lg'>
                    <h1 className='text-center text-black font-bold text-2xl mb-6'>Sign Up To DocHouse</h1>
                    <label for="name">Name</label>
                    <input required placeholder='Enter Your Name' className='border px-4 rounded-lg' type="text" name="" id="name" />

                    <label for="username">Username</label>
                    <input required placeholder='Enter Your Username' className='border px-4 rounded-lg' type="text" name="" id="username" />

                    <label for="email">Email</label>
                    <input required placeholder='Enter Your Email' className='border px-4 rounded-lg' type="email" name="" id="email" />

                    <label for="password">Password</label>
                    <input required placeholder='Enter Password' className='border px-4 rounded-lg' type="password" name="" id="password" />

                    <label for="confirmPassword">Confirm Password</label>
                    <input required placeholder='Confirm Password' className='border px-4 rounded-lg' type="password" name="" id="confirmPassword" />

                    <button className="btn btn-secondary my-6 w-full">Create Account</button>
                    <p className='text-center'>Already registered? Go to <Link to="login" className='text-secondary font-semibold'>SIGN IN</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;