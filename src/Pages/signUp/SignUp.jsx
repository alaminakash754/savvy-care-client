import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/socialLogin/SocialLogin";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [signUpError, setSignUpError] = useState("");
  const [successSignUp, setSuccessSignUp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, logOut } = useContext(AuthContext);
  const [userPhoto, setUserPhoto] = useState(null);

  const handleImage = (e) => {
    setUserPhoto(e.target.files[0]);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);
    setSignUpError("");
    setSuccessSignUp("");

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password must be more than six character",
      });
      setSignUpError();

      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password must be one capital letter",
      });
      setSignUpError();

      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>\s]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password must be one capital letter",
      });
      setSignUpError();

      return;
    }
    const imageFile = { image: userPhoto };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          updateProfile(result.user, {
            displayName: name,
            photoURL: res.data.data.url,
          })
            .then(() => {
              const userInfo = {
                name,
                email,
              };
              axiosPublic.post("/users", userInfo).then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:
                      "User created successfully & added to mongodb database",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setSuccessSignUp();
                }
              });
              console.log("Profile Updated");
            })
            .catch((error) => {
              console.error(error);
            });
          logOut();
          navigate(from, { replace: true });
          navigate("/login");
        })
        .catch((error) => {
          console.error(error);
          setSignUpError(error.message);
        });
    }
  };

  return (
    <>
      {/* <Helmet><title>Survey Sphere | SignUp</title></Helmet> */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto items-center justify-center text-center bg-blue-50 p-1 gap-5">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <img
            className="rounded-lg ml-12"
            src="https://i.ibb.co/XZxNFTb/computer-security-with-login-password-padlock.jpg"
            alt=""
          />
        </div>
        <div
          className="items-center mx-auto "
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
        >
          <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h2 className="italic text-2xl font-bold text-blue-800 text-center ">
                SignUp Here
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                {/* <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                /> */}
                <input
                  onChange={handleImage}
                  type="file"
                  name="photo"
                  className="file-input file-input-bordered file-input-md w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary bg-blue-800">Sign Up</button>
              </div>
            </form>
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <button className="btn btn-link">Login</button>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
          {signUpError && <p className="text-red-700">{signUpError}</p>}
          {successSignUp && <p className="text-green-700">{successSignUp}</p>}
        </div>
      </div>
    </>
  );
};

export default SignUp;
