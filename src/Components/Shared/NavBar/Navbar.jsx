import { Link } from "react-router-dom";
import brand_logo from '../../../assets/logo.png';
const Navbar = () => {
    
    const links =
        <>
            <li><Link to={'/News'}>News</Link></li>
            <li><Link to={'/Destination'}>Destination</Link></li>
            <li><Link to={'/Blog'}>Blog</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/Register'}>Register</Link></li>
        </>
    return (
        <div>
            <div className="navbar text-slate-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img id="brand_logo" src={brand_logo} className="h-16"></img>
                </div>
                <div className="navbar-input">
                    <div className="form-control">
                        <input type="text" placeholder="Search your destination" className="input input-bordered w-24 md:w-auto bg-slate-200/15" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent text-">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;