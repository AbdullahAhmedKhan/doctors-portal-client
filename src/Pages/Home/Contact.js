import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <div className='my-40 mx-[-32px] lg:mx-[-78px] text-center p-8' style={{
            background: `url(${appointment})`
        }}>
            <h5 className='text-secondary text-xl font-bold'>Contact Us</h5>
            <h2 className='text-3xl lg:text-4xl text-white'>Stay connected with us</h2>
            <form action="" className='py-10'>
                <div className=' flex-col w-96 mx-auto'>
                    <input type="text" placeholder="Email Address" className="input w-full mb-5" />
                    <input type="text" placeholder="Subject" className="input w-full mb-5" />
                    <textarea className="textarea w-full mb-5 h-32" placeholder="Your message"></textarea>
                    <PrimaryButton type='submit'>Submit</PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default Contact;