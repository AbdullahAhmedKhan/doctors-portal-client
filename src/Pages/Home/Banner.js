import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
    return (
        <div className="hero" style={{
            background: `url(${bg})`,
            backgroundSize:'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl object-fill" />
                </div>
                <div className='lg:p-24'>
                    <h1 className="text-4xl lg:text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;