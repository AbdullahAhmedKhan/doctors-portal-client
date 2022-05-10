import React from 'react';
import treatment from '../../assets/images/treatment.png';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
const Description = () => {
    return (
        <div>
            {/* 1st block  */}
            <section className='lg:px-40'>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row">
                        <div>
                            <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                        <div className='lg:mx-20 lg:pr-10'>
                            <h1 class="text-5xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                            <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd block  */}
            <section className='flex justify-centeritems-center mt-20' style={{
                background:`url(${appointment})`,
                margin:"40px -48px"
            }}>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-150px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 p-10 lg:p-20'>
                    <h3 className='text-secondary text-xl my-5 font-bold'>Appointment</h3>
                    <h2 className='text-4xl my-5 text-white'>Make an appointment Today</h2>
                    <p className='my-5 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">Get Started</button>
                </div>
            </section>

        </div>
    );
};

export default Description;