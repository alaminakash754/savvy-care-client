import { FaMobile, FaStopwatch } from "react-icons/fa";


const About = () => {
    return (
        <div className="mt-20  rounded-lg grid md:grid-cols-3 sm:grid-cols-1 gap-10">
            <div className=" bg-gradient-to-r from-cyan-700 to-blue-900 flex gap-3 justify-center text-center items-center rounded-xl p-5" data-aos="zoom-in-up" data-aos-duration="2000">
                <FaStopwatch className="text-2xl"></FaStopwatch>
                <div>
                    <h2 className="text-xl font-semibold">Opening Hours</h2>
                    <p>10 A.M. to 12 P.M.</p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-blue-900 flex gap-3 justify-center text-center items-center rounded-xl p-5" data-aos="zoom-in-up" data-aos-duration="2000">
                <FaStopwatch className="text-2xl"></FaStopwatch>
                <div>
                    <h2 className="text-xl font-semibold">Opening Hours</h2>
                    <p>10 A.M. to 12 P.M.</p>
                </div>
            </div>
            <div className=" bg-gradient-to-r from-cyan-700 to-blue-900 flex gap-3 justify-center text-center items-center rounded-xl p-5" data-aos="zoom-in-up" data-aos-duration="2000">
                <FaMobile className="text-2xl"></FaMobile>
                <div>

                    <h2 className="text-xl font-semibold">Opening Hours</h2>
                    <p>10 A.M. to 12 P.M.</p>
                </div>
            </div>
        </div>
    );
};

export default About;