import Banner from "./Banner/Banner";
import About from "./about/About";
import Doctors from "./doctors/Doctors";
import Services from "./service/Services";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <Doctors></Doctors>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
