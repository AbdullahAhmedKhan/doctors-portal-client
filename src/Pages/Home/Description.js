import React from 'react';
import treatment from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const Description = () => {
    return (
        <div>
            {/* 1st block  */}
            <section className='lg:px-20 mb-24'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <img src={treatment} className="max-w-xs lg:max-w-md rounded-lg shadow-2xl" />
                        </div>
                        <div className='mx-8 lg:mx-20 lg:pr-10'>
                            <h1 className="text-3xl lg:text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd block  */}
            <section className='mx-[-32px] lg:mx-[-78px] flex justify-center items-center' style={{
                background: `url(${appointment})`
            }}>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-120px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 p-16 lg:p-20'>
                    <h3 className='text-secondary text-xl my-5 font-bold'>Appointment</h3>
                    <h2 className='text-3xl lg:text-4xl my-5 text-white'>Make an appointment Today</h2>
                    <p className='my-5 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </section>

        </div>
    );
};

export default Description;