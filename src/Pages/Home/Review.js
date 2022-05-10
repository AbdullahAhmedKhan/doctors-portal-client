import React from 'react';

const Review = (props) => {
    const { review, name, img, location } = props.review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{review}</p>
                <div className=" py-8 flex align-middle">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='patients' />
                        </div>
                    </div>
                    <div className='px-8'>
                        <h5 className='text-xl font-bold'>{name}</h5>
                        <p>{location}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;