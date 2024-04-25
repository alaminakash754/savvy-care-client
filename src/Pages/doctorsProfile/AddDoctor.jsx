import { useForm } from "react-hook-form";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddDoctor = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const addDoctor = {
        name: data.name,
        category: data.category,
        email: data.email,
        about: data.about,
        image: res.data.data.display_url,
      };
      console.log(addDoctor);
      const doctorResponse = await axiosSecure.post("/doctors", addDoctor);
      console.log(doctorResponse.data);
      if (doctorResponse.data.insertedId) {
        //  show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the Doctor List!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/doctorsProfile");
    }

    // console.log(res.data)
  };

  return (
    <div className="bg-blue-100">
      <SectionTitle
        subHeading="Doctor creation form"
        heading="Added Best Doctor For Our Patient"
      ></SectionTitle>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Doctor Name*</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Doctor Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-5">
          {/* category  */}
          <div className="form-control w-full mb-5">
            <label className="label">
              <span className="label-text">Specialist On*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled value="default">
                Select One
              </option>
              <option value="Cavity Protection">Cavity Protection</option>
              <option value="Cosmetic Dentista">Cosmetic Dentist</option>
              <option value="Oral Surgery">Oral Surgery</option>
              <option value="Root Canal Specialist">
                Root Canal Specialist
              </option>
            </select>
          </div>
          {/* price  */}
          <div className="form-control w-full mb-5">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Doctor Email "
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Doctor About</span>
          </label>
          <textarea
            {...register("about", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Doctor Details"
          ></textarea>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text">Doctor Image</span>
          </label>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <div className="text-center">
          <button className="btn btn-block">
            Add a Doctor <FaUserDoctor></FaUserDoctor>{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
