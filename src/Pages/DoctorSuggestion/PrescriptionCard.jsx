import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useDoctor from "../../Hooks/useDoctor";
import { BsSendPlusFill } from "react-icons/bs";

const PrescriptionCard = ({ prescription }) => {
  const { name, email, age, about } = prescription;
  const [isDoctor] = useDoctor();
  //   console.log(isDoctor);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const addPrescription = {
      patientSuggestion: data.patientSuggestion,
    };
    // console.log(addDoctor);
    const doctorResponse = await axiosSecure.post(
      "/prescriptions",
      addPrescription
    );
    console.log(doctorResponse.data);
    if (doctorResponse.data.insertedId) {
      //  show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.patientSuggestion} this is your Advice`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate("/patientAndDoctor");

    // console.log(res.data)
  };
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
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
              <span className="label-text text-lg font-medium">
                Doctors Advice for You:{" "}
              </span>
            </label>
            {isDoctor ? (
              <textarea
                {...register("patientSuggestion", { required: true })}
                type="textarea"
                required
                className="input input-bordered w-full"
                placeholder="Please Write the suggestion for your patient"
              ></textarea>
            ) : (
              <textarea
                {...register("patientSuggestion", { required: true })}
                type="textarea"
                disabled
                className="input input-bordered w-full"
                placeholder="Please Write the suggestion for your patient"
              ></textarea>
            )}
            <div className="text-start">
              <button className="btn text-2xl text-blue-500">
                <BsSendPlusFill></BsSendPlusFill> Mail{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionCard;
