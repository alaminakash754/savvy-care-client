import { useState } from 'react';
import Calendar from 'react-calendar';
import banner1 from '../../assets/banner/banner-1.jpg';
import { useLoaderData } from 'react-router-dom';
import TreatmentCard from './treatments/TreatmentCard';

const Appointment = () => {
    const treatments = useLoaderData();
console.log(treatments)
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    return (
        <div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className=' rounded-lg my-5' data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000"> <Calendar onChange={onChange} value={date} /></div>
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000">
                    <img className='w-full rounded-xl my-5' src={banner1} alt="" />
                </div>

            </div>
            <div>
                <h2 className='text-center text-blue-500 font-semibold text-2xl my-5'>Please Select a Treatment</h2>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    {
                        treatments?.map(treatment => <TreatmentCard key={treatment._id} treatment={treatment}></TreatmentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Appointment;