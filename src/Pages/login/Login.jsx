import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialLogin from "../../components/socialLogin/SocialLogin";



const Login = () => {
    const [logInError, setLogInError] = useState('');
    const [successLogin, setSuccessLogin] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signInUser } = useContext(AuthContext);
   

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        setLogInError('');
        setSuccessLogin('');

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                e.target.reset();
                setSuccessLogin(Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }))
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setLogInError(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '"email or password are wrong"',
                }));
            })
    }



    return (

        <div>
            {/* <Helmet>
                <title>Survey Sphere | Login</title>
            </Helmet> */}
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 justify-between">

                <img className="rounded-xl ml-5" src="https://i.ibb.co/tqLXbMR/12953560-Data-security-01.jpg" alt="" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000" />

                <div className="card shrink-0  max-w-lg shadow-2xl rounded-lg bg-gradient-to-r from-blue-400 to-blue-900" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="2000">
                    <h2 className="italic text-4xl font-bold text-blue-800 text-center mt-2">Login Here !</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-2xl font-semibold hover:bg-blue-50 hover:text-blue-700">Login</button>
                        </div>
                    </form>
                    <p className="text-center text-white">Do not have an account? Please <Link to='/signup'><button className="btn btn-link text-white text-lg font-bold ">Sign Up</button></Link></p>

                    <SocialLogin></SocialLogin>
                </div>
                {
                    logInError && <p className="text-red-700">{logInError}</p>
                }
                {
                    successLogin && <p className="text-green-600">{successLogin}</p>
                }
            </div>

        </div>

    );
};

export default Login;