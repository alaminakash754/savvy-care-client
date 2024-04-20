import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";



const TreatmentCard = ({ treatment }) => {
    const { _id, treatment_name,
        image_url } = treatment;
    const {user} = useAuth();
   
    const { register, handleSubmit, reset } = useForm()
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
                            <form className="p-5" >
                                <h1 className="font-bold text-center text-xl text-blue-500">{treatment_name}</h1>
                                <div className="form-control w-full mb-5">
                                    <label className="label">
                                        <span className="label-text">Patient Name*</span>

                                    </label>
                                    <input defaultValue={user?.displayName} {...register("name", { required: true })} type="text"  placeholder="Doctor Name" className="input input-bordered w-full" />

                                </div>
                                <div className="flex gap-5">
                                    {/* category  */}
                                    <div className="form-control w-full mb-5">
                                        <label className="label">
                                            <span className="label-text">Chose a Doctor*</span>

                                        </label>
                                        <select defaultValue='default' {...register("category", { required: true })}
                                            className="select select-bordered w-full ">
                                            <option disabled value='default'>Select One</option>
                                            <option value="Cavity Protection">Dr. Abidur Rahman</option>
                                            <option value="Cosmetic Dentista">Dr. Zinat Ara</option>
                                            <option value="Oral Surgery">Dr. Iqbal Mahmud</option>
                                            <option value="Root Canal Specialist">Dr. Imamul Haque</option>

                                        </select>

                                    </div>
                                    {/* price  */}
                                    <div className="form-control w-full mb-5">
                                        <label className="label">
                                            <span className="label-text">Patient Email*</span>

                                        </label>
                                        <input defaultValue={user?.email} {...register("email", { required: true })} type="email" placeholder="Doctor Email " className="input input-bordered w-full" />

                                    </div>
                                </div>

                                <div className="form-control mb-5">
                                    <label className="label">
                                        <span className="label-text">Patient Problem</span>

                                    </label>
                                    <textarea {...register('about', { required: true })} className="textarea textarea-bordered h-18" placeholder="What's Your Problem?"></textarea>

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
                            </form>
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