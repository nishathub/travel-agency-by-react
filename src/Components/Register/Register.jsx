import { Link } from "react-router-dom";
import Navbar from "../Shared/NavBar/Navbar";
import facebookLogo from '../../assets/images/icons/fb.png';
import googleLogo from '../../assets/images/icons/google.png';

const Register = () => {
    return (
        <div className="">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="my-12">
                <form className="border border-slate-500 rounded-md max-w-lg mx-auto p-8">
                    <h2 className="text-xl font-bold mb-8">Create an account</h2>
                    <div className="flex flex-col gap-4">
                        <input className="bg-transparent py-2 border-b outline-none" type="text" name="f_Name" placeholder="First Name" />
                        <input className="bg-transparent py-2 border-b outline-none" type="text" name="l_Name" placeholder="Last Name" />
                        <input className="bg-transparent py-2 border-b outline-none" type="email" name="email" placeholder="Email" />
                        <input className="bg-transparent py-2 border-b outline-none" type="password" name="password" placeholder="Password" />
                        <input className="bg-transparent py-2 border-b outline-none" type="password" name="confirm_Password" placeholder="Confirm Password" />
                        <button className="w-full btn btn-accent" type="submit">Create an account</button>
                    </div>
                    <p className="text-center mt-4">Already have an account? <Link to={'/Login'}><span className="text-accent font-bold">Login</span></Link></p>
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

    );
};

export default Register;