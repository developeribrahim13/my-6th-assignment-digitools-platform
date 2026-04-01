import React from 'react';
import user from "../../assets/user.png"
import packageImg from "../../assets/package.png"
import rocket from "../../assets/rocket.png"
const StepsSection = () => {
    return (
        <div className='bg-gray-50 py-25 mt-20'>
            <div className='max-w-[95%] sm:max-w-[80%] mx-auto space-y-3'>
                <h1 className='text-4xl text-center font-extrabold'>Get Started in 3 Steps</h1>
                <p className='text-gray-500 text-[12px] text-center'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8'>
                    <div className='bg-white rounded-2xl py-5 shadow'>
                        <div className='max-w-[90%] mx-auto'>
                            <div className='flex justify-end items-center'>
                                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-6 h-6 rounded-full flex justify-center items-center'>
                                    <p className='text-white text-[10px]'>01</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 items-center justify-items-center'>
                            <div className='w-23 h-23 bg-purple-100 flex justify-center items-center rounded-full'>
                            <img src={user}></img>
                            </div>
                            <h3 className='font-bold text-xl'>Create Account</h3>
                            <p className='text-center text-gray-500 text-[12px] mb-8'>Sign up for free in seconds. No credit card<br />required to get started.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl py-5 shadow'>
                        <div className='max-w-[90%] mx-auto'>
                            <div className='flex justify-end items-center'>
                                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-6 h-6 rounded-full flex justify-center items-center'>
                                    <p className='text-white text-[10px]'>02</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 items-center justify-items-center'>
                            <div className='w-23 h-23 bg-purple-100 flex justify-center items-center rounded-full'>
                            <img src={packageImg}></img>
                            </div>
                            <h3 className='font-bold text-xl'>Choose Products</h3>
                            <p className='text-center text-gray-500 text-[12px] mb-8'>Browse our catalog and select the tools<br />that fit your needs.</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-2xl py-5 shadow'>
                        <div className='max-w-[90%] mx-auto'>
                            <div className='flex justify-end items-center'>
                                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-6 h-6 rounded-full flex justify-center items-center'>
                                    <p className='text-white text-[10px]'>03</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5 items-center justify-items-center'>
                            <div className='w-23 h-23 bg-purple-100 flex justify-center items-center rounded-full'>
                            <img src={rocket}></img>
                            </div>
                            <h3 className='font-bold text-xl'>Start Creating</h3>
                            <p className='text-center text-gray-500 text-[12px] mb-8'>Download and start using your premium<br />tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsSection;