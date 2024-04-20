
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import banner1 from '../../../../assets/banner/banner-1.jpg';
import banner2 from '../../../../assets/banner/banner-2.jpg';
import banner3 from '../../../../assets/banner/banner-3.jpg';
import banner4 from '../../../../assets/banner/banner-4.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="w-full rounded-lg h-full items-center justify-center bg-slate-200 flex text-center" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                data-aos-duration="2000">

                <div>
                    <h1 className='text-6xl font-semibold top-20 text-blue-700 mb-5'>Smile Bright: Your <br /> Premier Dental Destination</h1>
                    <Link to='/doctorsProfile' ><button className="bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2" >Explore More <FaArrowRight></FaArrowRight></button></Link>
                </div>

            </div>
            <div className=" rounded-2xl" data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                data-aos-duration="2000" >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination]}

                    className="mySwiper "
                >
                    <SwiperSlide><img className='w-full h-[500px] rounded-2xl' src={banner1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[500px] rounded-2xl' src={banner2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[500px] rounded-2xl' src={banner3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-full h-[500px] rounded-2xl' src={banner4} alt="" /></SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default Banner;