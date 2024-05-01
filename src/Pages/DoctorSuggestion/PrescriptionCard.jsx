import { Link } from "react-router-dom";
import useDoctor from "../../Hooks/useDoctor";
import { BsSendPlusFill } from "react-icons/bs";

const PrescriptionCard = ({ prescription }) => {
  const { name, email, age, about } = prescription;
  const [isDoctor] = useDoctor();
  //   console.log(isDoctor);

  return (
    <div
      className="w-1/2 flex justify-center items-center mx-auto mt-10 "
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div
        className="w-full h-full rounded-xl p-5"
        style={{
          backgroundImage: `url('https://i.ibb.co/dGXKPHG/banner-2.jpg')`,
          backgroundSize: "cover", // Adjust this according to your needs
          backgroundPosition: "center center", // Adjust this according to your needs
        }}
      >
        <h1 className=" text-lg font-medium">
          Patient Name: <span className=" font-bold text-blue-500">{name}</span>
        </h1>
        <h1 className=" text-lg font-medium">
          Patient Email:{" "}
          <span className=" font-bold text-blue-500">{email}</span>
        </h1>
        <h1 className=" text-lg font-medium">
          Patient Age: <span className=" font-bold text-blue-500">{age}</span>
        </h1>
        <h1 className=" text-lg font-medium">
          Patient Problem:{" "}
          <span className=" font-bold text-blue-500">{about}</span>
        </h1>
        <div>
          <label className="label">
            <span className="label-text text-lg font-medium">
              Doctors Advice for You:{" "}
            </span>
          </label>
          {isDoctor ? (
            <div className="text-start">
              <Link to="/sendEmail">
                <button className="btn text-2xl text-blue-500">
                  <BsSendPlusFill></BsSendPlusFill> Mail{" "}
                </button>
              </Link>
            </div>
          ) : (
            <div className="text-start">
              <Link to="/sendEmail">
                <button disabled className="btn text-2xl text-blue-500">
                  <BsSendPlusFill></BsSendPlusFill> Mail{" "}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrescriptionCard;
