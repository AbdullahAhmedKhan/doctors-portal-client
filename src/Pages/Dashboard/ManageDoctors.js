import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRows from './DoctorRows';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-8'>
            <h2 className="text-2xl">Manage DOctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorRows
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRows>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirmModal
                    deletingDoctor={deletingDoctor}
                    refetch={refetch}
                    setDeletingDoctor={setDeletingDoctor}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;