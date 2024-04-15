
import { useLoaderData } from 'react-router-dom';
import DoctorCard from './DoctorCard';

const DoctorsProfile = () => {
    const doctors = useLoaderData();
    return (
        <div>
            {
                doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
            }
        </div>
    );
};

export default DoctorsProfile;