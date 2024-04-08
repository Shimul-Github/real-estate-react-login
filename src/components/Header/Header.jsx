import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdCallEnd } from "react-icons/md";
 

const Header = () => {
    const navLinks = <>
        <Link>
            <li>PROPERTIES</li>
        </Link>
        <Link>
            <li>AGENTS</li>
        </Link>
        <Link>
            <li>BLOGS</li>
        </Link>

    </>
    return (
       
            <div className="navbar bg-base-100 max-w-[1280px] mx-auto py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {navLinks}

                        </ul>
                    </div>
                    <div className='flex items-center gap-2 '>
                    <img className='w-20' src="/public/logo.png" alt="" />
                    <p className="font-poppins text-3xl font-bold>RealCom">RealCom</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-5">

                    {navLinks}

                    </ul>
                </div>
                <div className=" navbar-end"> 
                {/* bg-[#f94747] */}
                    <div className='flex flex-col items-center justify-center'>
                    <MdCallEnd className='text-red-700 font-extrabold text-3xl mb-0'></MdCallEnd>
                    <a className=" text-black text-2xl font-extrabold">1234</a>
                    </div>
                </div>
            </div>

         
    );
};

export default Header;