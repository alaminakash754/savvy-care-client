import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { FaNotesMedical } from "react-icons/fa";
import useAuth from "../../../../Hooks/useAuth";

const AddPrescription = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const addDoctor = {
      name: data.name,
      age: data.age,
      category: data.category,
      about: data.about,
      email: data.email,
    };
    console.log(addDoctor);
    const doctorResponse = await axiosSecure.post("/prescriptions", addDoctor);
    console.log(doctorResponse.data);
    if (doctorResponse.data.insertedId) {
      //  show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name}s Problem send to Doctor portal`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard/userHome");
    }

    // console.log(res.data)
  };
  return (
    <div className="bg-blue-100">
      <SectionTitle
        subHeading="Needed Online Prescription"
        heading="Get Your Best Service"
      ></SectionTitle>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Your Name*</span>
          </label>
          <input
            defaultValue={user?.displayName}
            {...register("name", { required: true })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Email*</span>
          </label>
          <input
            defaultValue={user?.email}
            {...register("email", { required: true })}
            type="email"
            placeholder="Doctor Email "
            className="input input-bordered w-full"
          />
        </div>

        <div className="flex gap-5 w-full">
          <div className="form-control mb-5 w-full">
            <label className="label">
              <span className="label-text">Your Age</span>
            </label>
            <input
              {...register("age", { required: true })}
              type="number"
              className="input input-bordered w-full"
              placeholder="Your Age"
            />
          </div>
          <div className="form-control mb-5 w-full">
            <label className="label">
              <span className="label-text">Male or Female*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Select One
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Whats Your Problem?</span>
          </label>
          <textarea
            {...register("about", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Whats Your Problem?"
          ></textarea>
        </div>

        <div className="text-center">
          <button className="btn btn-block">
            Submit for Doctors Suggestion <FaNotesMedical></FaNotesMedical>{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPrescription;
