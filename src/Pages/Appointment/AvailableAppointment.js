import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(` https://boiling-peak-84771.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-16 lg:my-24'>
            <h4 className='text-center text-secondary text-lg lg:text-xl'>Available Appointments on <span className='font-bold'>{format(date, 'PP')}</span></h4>
            {/* Card  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}></Service>)
                }
            </div>
            {treatment && <BookingModal
                setTreatment={setTreatment}
                refetch={refetch}
                date={date} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;