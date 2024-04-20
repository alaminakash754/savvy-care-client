import { useState } from 'react';
import doctor from '../../../../assets/banner/doctor.jpg'
import tab1 from '../../../../assets/banner/tab1.jpg'
import tab2 from '../../../../assets/banner/tab2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../../components/sectionTitle/SectionTitle';
const Services = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='max-w-5xl mx-auto'>
            <SectionTitle subHeading='Services' heading='Ours first priority is our patient' data-aos="zoom-in"  data-aos-duration="4000"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 " >
            <div data-aos="flip-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                data-aos-duration="1000"><img className='rounded-lg w-full h-[900px]' src={doctor} alt="" /></div>
            <div>
                <div data-aos="flip-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                data-aos-duration="1000">
                    <h1 className='text-xl font-bold mb-3 text-blue-700'>Our Services</h1>
                    <p className='text-lg font-medium text-justify'>From preventative care to restorative dentistry, our team is dedicated to providing the best possible dental care for you. A healthy smile is a happy smile – we help you achieve both!</p>
                </div>
                <div className='mt-7' data-aos="flip-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                data-aos-duration="1000">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList>
                            <Tab><span className='text-lg font-semibold text-blue-700'>Cavity Protection</span></Tab>
                            <Tab  > <span className='text-lg font-semibold text-blue-700'>Oral Surgery</span></Tab>
                            <Tab  > <span className='text-lg font-semibold text-blue-700'>Cosmetic Dentist</span></Tab>
                        </TabList>
                        <TabPanel className='mt-5'>
                            <div className='my-4'>
                                <img className='h-[400px] w-[550px] rounded-lg border border-gray-100' src={tab1} alt="" />
                                <p className='mt-4 font-medium text-justify'>From preventative care to restorative dentistry, our team is dedicated to providing the best possible dental care for you. A healthy smile is a happy smile – we help you achieve both!</p>
                                <button  className="bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2 mt-6">More Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div>
                                <img className='h-[400px] w-[550px] rounded-lg border border-gray-100 ' src={tab2} alt="" />
                                <p className='mt-4 font-medium text-justify'>From preventative care to restorative dentistry, our team is dedicated to providing the best possible dental care for you. A healthy smile is a happy smile – we help you achieve both!</p>
                                <button  className="bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2 mt-6">More Details</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div>
                                <img className='h-[400px] w-[550px] rounded-lg border border-gray-100 ' src={tab2} alt="" />
                                <p className='mt-4 font-medium text-justify'>From preventative care to restorative dentistry, our team is dedicated to providing the best possible dental care for you. A healthy smile is a happy smile – we help you achieve both!</p>
                                <button  className="bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2 mt-6">More Details</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;