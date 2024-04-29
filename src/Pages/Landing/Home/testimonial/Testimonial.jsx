import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { BsFillChatQuoteFill } from "react-icons/bs";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div
      className="mt-16 mb-5 "
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <section className="my-10">
        <SectionTitle
          subHeading={"---What Our Patients Say---"}
          heading={"TESTIMONIALS"}
        ></SectionTitle>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 flex flex-col items-center my-6">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-5">
                  <BsFillChatQuoteFill className="text-4xl"></BsFillChatQuoteFill>
                </p>
                <p className="py-5">{review.review}</p>
                <h2 className="text-2xl text-orange-500">{review.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
