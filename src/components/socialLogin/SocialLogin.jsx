import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { signWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');
                    })
            })
    }
    return (
        <>
            <p className="text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost" > <FaGoogle className="text-2xl" /></button></p>
        </>
    );
};

export default SocialLogin;