import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdCallEnd } from "react-icons/md";
import logo from '../../../src/assets/logo.png'
import userPic from '../../../src/assets/user.png'
// import { FaUser } from "react-icons/fa";



const Header = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update-profile'>Update Profile</NavLink></li>
        <li><NavLink to='/user-profile'>User Profile</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>

    </>
    return (

        <div className="navbar flex-col pl-0 md:flex-row  w-full lg:max-w-[1280px] lg:mx-auto lg:items-center">
            <div className="md:navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                        {navLinks}


                    </ul>
                </div>
                <div className='flex items-center gap-2 '>
                    <img className='w-20' src={logo} alt="" />
                    <p className="font-poppins text-3xl font-bold>RealCom">RealCom</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal mx-10 gap-10">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end md:mr-10 mr-10 lg:mr-0">
                {/* bg-[#f94747] */}
                <div className='flex flex-row items-center justify-center gap-6'>


                    <div className="avatar offline">
                        <div className="w-12 rounded-full">
                            <img src={userPic} />
                            {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                            {/* <FaUser className='max-w-28'></FaUser> */}
                        </div>
                    </div>
                     <Link to='/login'>   
                    <button className='btn bg-[#fb6a19] text-white font-bold'>Log In</button>
                    </Link>

                    <div className='flex flex-col justify-center items-center relative gap-2'>
                        <MdCallEnd className='text-red-700 font-extraboldbold text-4xl absolute top-6'></MdCallEnd>
                        <p className=" text-black text-2xl font-extrabold pt-6">1234</p>
                    </div>

                </div>

            </div>
        </div>


    );
};

export default Header;