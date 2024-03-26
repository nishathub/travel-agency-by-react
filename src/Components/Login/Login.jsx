import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import facebookLogo from '../../assets/images/icons/fb.png';
import googleLogo from '../../assets/images/icons/google.png';

const Login = () => {

    const handleLogin = e => {
    // get form data
    const form = new FormData(e.currentTarget);
    const loginEmail = form.get('email');
    const loginPassword = form.get('password');
    
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
                        <div className="flex flex-col gap-4">
                            <input className="bg-transparent py-2 border-b outline-none" type="email" name="email" placeholder="Email" />
                            <input className="bg-transparent py-2 border-b outline-none" type="password" name="password" placeholder="Password" />
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="" />
                                    <span>Remember Me</span>
                                </div>
                                <div>
                                    <a className="text-pink-500 underline" href="#">Forgot Password</a>
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