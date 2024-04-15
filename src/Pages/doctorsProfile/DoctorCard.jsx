import { FaStar } from "react-icons/fa";


const DoctorCard = ({doctor}) => {
    const {name, category, email, about, image} = doctor;
    return (
        <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-20">
                <div>
                    <img className="rounded-t-md rounded-r-md border-4 border-gray-300 p-4 w-[500px] h-[350px]" src={image} alt="" />
                </div>
                <div className="space-y-4 mt-5">
                    <div className="flex gap-5 items-center">
                        <FaStar></FaStar> <p className="font-medium">5.0 Average Rating</p>
                    </div>
                    <h1 className="text-2xl font-bold">{name}</h1>
                    
                    <p className="font-medium text-lg">Specialist On: <span className=" text-blue-700">{category}</span></p>
                    <h2 className=" text-lg mt-5 font-medium">{about}</h2>
                    <h2 className=" text-lg mt-5 font-medium">Doctor Email: {email}</h2>
                    
                </div>
            </div>
            </div>
    );
};

export default DoctorCard;