import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const TreatmentCard = ({ treatment }) => {
    const { _id, treatment_name, image_url, treatmentCost } = treatment;
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const handleAppointment =async (e) => {
        e.preventDefault();
        if (user && user.email) {
            const form = e.target;
            const name = user?.name;
            const date = form.date?.value;
            const email = user?.email;
            const doctorName = form.select.value;
            const patientProblem = form.patientProblem?.value;
            const treatmentDetails = {
                treatmentId: _id,
                patientName: name,
                date,
                email,
                doctorName,
                treatmentCost,
                patientProblem,
                treatment_name,
            }
            const treatmentResponse = await axiosSecure.post('/appointments', treatmentDetails);
            console.log(treatmentResponse.data);
            if (treatmentResponse.data.insertedId) {
                //  show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${treatment_name} is added to your Appointment list!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/appointment')

            }
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Are you login Now?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login Now!"
            }).then((result) => {
                if (result.isConfirmed) {

                    navigate('/login', { state: { from: location } })

                }
            });
        }

    }
    return (

        <div className=" bg-blue-50 ">
            <div className="p-2 flex gap-5 text-center mx-auto justify-center" >
                <div>
                    <img className="rounded-t-md rounded-r-md border-4 border-gray-300 p-4 w-[200px] h-[150px]" src={image_url} alt="" />
                </div>
                <div className="flex items-center justify-center min-h-min text-center">
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn bg-blue-700 text-gray-100">{treatment_name}</label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleAppointment}>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Patient Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Patient Name" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Patient Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user?.email} placeholder="Patient Email" required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chose a Doctor*</span>

                                    </label>
                                    <select name="select" className="select select-bordered w-full max-w-xs">
                                        <option disabled selected>Choose a Doctor</option>
                                        <option >Dr. Abidur Rahman</option>
                                        <option>Dr. Zinat Ara</option>
                                        <option>Dr. Iqbal Mahmud</option>
                                        <option>Dr. Imamul Haque</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Patient Problem</span>
                                    </label>
                                    <input type="textarea" name='patientProblem'  placeholder="Patient Problem" required className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Appointment Date</span>
                                    </label>
                                    <input type="date" name='date' required className="input input-bordered" />

                                </div>
                                <input type="submit" className="btn btn-primary mt-2" value="Confirmed Appointment " />

                            </form>
                            {/* <form className="p-5" onSubmit={handleSubmit(onSubmit)} >
                                <h1 {...register("treatmentName", { required: true })} className="font-bold text-center text-xl text-blue-500">{treatment_name}</h1>
                                <div className="form-control w-full mb-5">
                                    <label className="label">
                                        <span className="label-text">Patient Name*</span>

                                    </label>
                                    <input defaultValue={user?.displayName} {...register("name", { required: true })} type="text" placeholder="Doctor Name" className="input input-bordered w-full" />

                                </div>
                                <div className="flex gap-5">
                                  
                                    <div className="form-control w-full mb-5">
                                        <label className="label">
                                            <span className="label-text">Chose a Doctor*</span>

                                        </label>
                                        <select defaultValue='default' {...register("doctorName", { required: true })}
                                            className="select select-bordered w-full ">
                                            <option disabled value='default'>Select One</option>
                                            <option value="Cavity Protection">Dr. Abidur Rahman</option>
                                            <option value="Cosmetic Dentista">Dr. Zinat Ara</option>
                                            <option value="Oral Surgery">Dr. Iqbal Mahmud</option>
                                            <option value="Root Canal Specialist">Dr. Imamul Haque</option>

                                        </select>

                                    </div>
                                
                                    <div className="form-control w-full mb-5">
                                        <label className="label">
                                            <span className="label-text">Patient Email*</span>

                                        </label>
                                        <input defaultValue={user?.email} {...register("email", { required: true })} type="email" placeholder="Patient Email " className="input input-bordered w-full" />

                                    </div>
                                </div>

                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text">Patient Problem</span>

                                    </label>
                                    <textarea {...register('patientProblem', { required: true })} className="textarea textarea-bordered h-18" placeholder="What's Your Problem?"></textarea>

                                </div>
                                <div className="form-control w-full mb-5">
                                    <label className="label">
                                        <span className="label-text">Appointment Date</span>
                                    </label>
                                    <input {...register('date', { required: true })} type="date" name='date' placeholder="Select A Date" className="input input-bordered" />
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-block">Confirmed Appointment </button>
                                </div>
                            </form> */}
                            <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>




    );
};

export default TreatmentCard;