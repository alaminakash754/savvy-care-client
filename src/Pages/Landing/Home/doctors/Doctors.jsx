import { FaCalendar, FaLocationArrow } from "react-icons/fa";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Doctors = () => {
  return (
    <div className="mt-5">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <SectionTitle
          subHeading="Our Experts"
          heading="Our Expert Doctors"
        ></SectionTitle>
        <p className="text-center font-semibold  text-xl">
          "Meet Our Medical Professionals: Trusted Experts Ready to Provide
          Care, Guidance, <br /> and Solutions for Your Health Needs."
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
          <div className="bg-white rounded-lg space-y-4">
            <img
              className="bg-slate-200 p-4 rounded-lg"
              src="https://i.ibb.co/Jjr6bk5/7663.jpg"
              alt=""
            />
            <h1 className="font-semibold text-lg text-blue-500">
              Dr. Md. Maksudur Rahman.
            </h1>
            <p className="text-gray-500">Root Canal Specialist</p>
            <div className="flex gap-3  items-center">
              <FaLocationArrow></FaLocationArrow>
              <p>Dhanmondi, Dhaka.</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaCalendar></FaCalendar>
              <p>Available on 22, January.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg space-y-4">
            <img
              className="bg-slate-200 p-4 rounded-lg"
              src="https://i.ibb.co/G72kF4d/28579.jpg"
              alt=""
            />
            <h1 className="font-semibold text-lg text-blue-500">
              Dr. Sinthiya Rahman.
            </h1>
            <p className="text-gray-500">Root Canal Specialist</p>
            <div className="flex gap-3 items-center">
              <FaLocationArrow></FaLocationArrow>
              <p>Dhanmondi, Dhaka.</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaCalendar></FaCalendar>
              <p>Available on 22, January.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg space-y-4">
            <img
              className="bg-slate-200 p-4 rounded-lg"
              src="https://i.ibb.co/Jk0w1JK/2148104953.jpg"
              alt=""
            />
            <h1 className="font-semibold text-lg text-blue-500">
              Dr. Md. Maksudur Rahman.
            </h1>
            <p className="text-gray-500">Root Canal Specialist</p>
            <div className="flex gap-3 items-center">
              <FaLocationArrow></FaLocationArrow>
              <p>Dhanmondi, Dhaka.</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaCalendar></FaCalendar>
              <p>Available on 22, January.</p>
            </div>
          </div>
        </div>
        <div className="mt-10 justify-center text-center">
          <Link to="/doctorsProfile">
            <button className="bg-purple-100 text-lg text-blue-700 font-medium btn btn-outline border-0 border-t-4 border-b-4 mb-5 w-1/2">
              For more Experts Go To Doctor House
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
