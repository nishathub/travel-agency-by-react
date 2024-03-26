import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import facebookLogo from '../../assets/images/icons/fb.png';
import googleLogo from '../../assets/images/icons/google.png';
import { useContext, useState } from "react";
import { TravelContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const { loginUser, resetPassword } = useContext(TravelContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleForgotPassword = e => {
        e.preventDefault();
        // reset state
        setErrorMessage('');
        setSuccessMessage('');

        const loginEmail = document.getElementById('login-email');
        if (loginEmail.value == '') {
            return setErrorMessage('enter your email');
        }
        resetPassword(loginEmail.value)
            .then(() => {
                setSuccessMessage('An email has been sent to your mail inbox')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }

    const handleLogin = e => {
        e.preventDefault();

        // reset state
        setErrorMessage('');
        setSuccessMessage('');
        // get form data
        const form = new FormData(e.currentTarget);
        const loginEmail = form.get('email');
        const loginPassword = form.get('password');


        loginUser(loginEmail, loginPassword)
            .then((result) => {
                console.log(result.user);
                setSuccessMessage('login successfull')
            })
            .catch((error) => {
                console.error(error.message)
                setErrorMessage(error.message)
            })


    }

    return (
        <div>
            <div className="">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="my-12">
                    <form onSubmit={handleLogin} className="border border-slate-500 rounded-md max-w-lg mx-auto p-8">
                        <h2 className="text-xl font-bold mb-8">Login here</h2>
                        <div className="my-2">
                            <p className="text-red-500 text-center">{errorMessage}</p>
                            <p className="text-green-500 text-center">{successMessage}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <input className="bg-transparent py-2 border-b outline-none" type="email" name="email" placeholder="Email" id="login-email" />
                            <input className="bg-transparent py-2 border-b outline-none" type="password" name="password" placeholder="Password" />
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" />
                                    <span>Remember Me</span>
                                </div>
                                <div>
                                    <a onClick={handleForgotPassword} className="text-pink-500 underline" href="#">Forgot Password</a>
                                </div>
                            </div>
                            <button className="w-full btn btn-accent" type="submit">Log in</button>
                        </div>
                        <p className="text-center mt-4">Don't have an account? <Link to={'/Register'}><span className="text-accent font-bold">Register</span></Link></p>
                    </form>
                    <div>
                        <div className="flex items-center justify-center gap-2 max-w-md mx-auto mt-4 ">
                            <div className="border w-28"></div>
                            <div><h2>or</h2></div>
                            <div className="border w-28"></div>
                        </div>
                        <div className="max-w-md mx-auto flex flex-col gap-4 mt-4">
                            <button className="btn btn-outline rounded-full grid grid-cols-4 justify-start w-full text-left">
                                <img className="w-6" src={facebookLogo} alt="facebook-logo" />
                                <span className="col-span-3">Continue with Facebook</span>
                            </button>
                            <button className="btn btn-outline rounded-full grid grid-cols-4 justify-start w-full text-left">
                                <img className="w-6" src={googleLogo} alt="facebook-logo" />
                                <span className="col-span-3">Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;