import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const FeedBack = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const addReview = {
      name: data.name,
      rating: data.rating,
      review: data.review,
    };
    console.log(addReview);
    const reviewResponse = await axiosPublic.post("/reviews", addReview);
    console.log(reviewResponse.data);
    if (reviewResponse.data.insertedId) {
      //  show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} added your review to the database`,
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard/userHome");
    }

    // console.log(res.data)
  };
  return (
    <div className="w-full">
      <SectionTitle
        subHeading="Feedback & Ratings"
        heading="Give Your Valuable Feedback for improve our service"
      ></SectionTitle>
      <div className="bg-blue-100 w-4/6 mx-auto justify-center rounded-lg">
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
          <div className="form-control mb-5 w-full">
            <label className="label">
              <span className="label-text">Rating us Out of 5.</span>
            </label>
            <input
              {...register("rating", { required: true })}
              type="number"
              className="input input-bordered w-full"
              placeholder="Give Rating"
            />
          </div>
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text">Give Your Valuable Feedback.</span>
            </label>
            <textarea
              {...register("review", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Give Your Feed Back"
            ></textarea>
          </div>

          <div className="text-center">
            <button className="btn btn-block">Feedback</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
