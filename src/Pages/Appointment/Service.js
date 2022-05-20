import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-sm bg-base-100 shadow-xl py-5 text-center">
            <div className="card-body mx-auto">
                <h2 className="card-title text-secondary text-2xl">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span className='text-sm'>{slots[0]}</span>
                        :
                        <span className='text-sm text-red-500'>Try another date </span>
                }</p>
                <p className='uppercase text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setTreatment(service)} disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-sm btn-secondary  uppercase text-white font-bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;