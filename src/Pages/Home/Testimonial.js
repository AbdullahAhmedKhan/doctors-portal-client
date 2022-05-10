import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is very good platform and I am highly satisfied with its services. Highly qualified team of doctors whose treatement is very much satisfied.',
            img: people1,
            location:'California'
        },
        {
            _id: 2,
            name: 'Maria Naznin',
            review: 'E doctors portal is providing very good service. All staffs are so polite and helpful, I am very happy with their service.',
            img: people2,
            location: 'Toronto'
        },
        {
            _id: 3,
            name: 'Hilary clack',
            review: 'Our experience has always been good with E doctors portal. Keep up the good medical care and keep serving the needful.',
            img: people3,
            location: 'Helsinki'
        }

    ]
    return (
        <section className='my-32'>
            <div className='flex justify-around align-middle'>
                <div className=''>
                    <h4 className='text-secondary font-bold text-xl'>Testimonial</h4>
                    <h5 className='text-2xl lg:text-4xl'>What Our Patients Says</h5>
                </div>
                <div className=''>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 lg:my-28 lg:px-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section >
    );
};

export default Testimonial;