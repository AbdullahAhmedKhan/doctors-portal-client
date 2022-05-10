import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
const Services = () => {
    return (
        <div className='my-28'>

            <div className='text-center'>
                <h2 className='text-secondary uppercase font-bold text-2xl my-3'>Our Services</h2>
                <span className='text-4xl font-medium border-b-4 border-secondary py-2'>Services We Provide</span>
            </div>


            {/* Card Start */}


            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 my-28 place-items-center'>
                {/* Card-1  */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>

                {/* Card-2  */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={cavity} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* Card-3  */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={whitening} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Services;