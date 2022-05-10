import React from 'react';
import appointment from '../../assets/images/appointment.png';
const Contact = () => {
    return (
        <div className='text-center p-16' style={{
            background: `url(${appointment})`,
            margin: "40px -48px"
        }}>
            <h5 className='text-secondary text-xl font-bold'>Contact Us</h5>
            <h2 className='text-3xl lg:text-4xl text-white'>Stay connected with us</h2>
            <form action="" className='py-10'>
                <div className=' flex-col w-96 mx-auto'>
                    <input type="text" placeholder="Email Address" className="input w-full mb-5" />
                    <input type="text" placeholder="Subject" className="input w-full mb-5" />
                    <textarea className="textarea w-full mb-5 h-32" placeholder="Your message"></textarea>
                    <button type='submit' className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;