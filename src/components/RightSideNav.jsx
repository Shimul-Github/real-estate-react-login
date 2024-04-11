import React from 'react';
import { RiFacebookFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { PiGithubLogoDuotone } from "react-icons/pi";
import pic1 from '../assets/qZone1.png'
import pic2 from '../assets/qZone2.png'
import pic3 from '../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className='px-2'>
            <div className='space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline btn-secondary lg:w-full">
                    <RiFacebookFill></RiFacebookFill>
                    Login with Facebook
                </button>
                <button className="btn btn-outline btn-secondary lg:w-full">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline btn-secondary lg:w-full">
                    <PiGithubLogoDuotone></PiGithubLogoDuotone>
                    Login with Github
                </button>
            </div>
            <div className='mb-6'>
                <h2 className="text-3xl">Find Us On</h2>
                <a className='flex flex-col lg:flex-row items-center justify-center gap-2 text-xl font-bold outline rounded-t-lg py-2' href=''>
                    <RiFacebookFill></RiFacebookFill>
                    Login with Facebook
                </a>


                <a className='flex flex-col lg:flex-row items-center justify-center text-xl  gap-2  font-bold outline-x py-2' href=''>
                    <FcGoogle></FcGoogle>
                    Login with Google
                </a>
                <a className='flex flex-col lg:flex-row items-center justify-center text-xl gap-2  font-bold outline rounded-b-lg py-2' href=''>
                    <PiGithubLogoDuotone></PiGithubLogoDuotone>
                    Login with Github
                </a>
            </div>
            <div className='space-y-3 mb-6 text-center'>
                <h2 className="text-3xl">Commercial Info</h2>
                <div className='flex flex-col md:flex-col'>
                    <img src={pic1} alt="" />
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />
                </div>



            </div>
        </div>
    );
};

export default RightSideNav;