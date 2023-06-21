import React from 'react';
import './SignIn.css';
import regImgDoc from '../../assets/images/reg_sideImgDoctor.png';
import regImgShape from '../../assets/images/reg_sideImgShapes.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='signin-section'>
            <div className="left bg-primary">
                <img className='doc-img' src={regImgDoc} />
                <img className='shape-img' src={regImgShape} />
            </div>
            <div className="right">
                <form className='form border px-4 py-6 rounded-lg'>
                    <h1 className='text-center text-black font-bold text-2xl mb-6'>Sign In To DocHouse</h1>

                    <label for="email">Email</label>
                    <input required placeholder='Enter Your Email' className='border px-4 rounded-lg' type="email" name="" id="email" />

                    <div className='flex justify-between'>
                        <label for="password">Password</label>
                        <Link className='text-secondary font-semibold hover:text-primary'>Forget Password?</Link>
                    </div>
                    <input required placeholder='Enter Password' className='border px-4 rounded-lg' type="password" name="" id="password" />

                    <button className="btn btn-secondary my-6 w-full">Login</button>
                    <p className='text-center'>Don't have account? Go to <Link to="/registration" className='text-secondary font-semibold hover:text-primary'>SIGN UP</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;