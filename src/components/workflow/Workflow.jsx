import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20'>
            <div className='text-center space-y-3 px-2.5'>
                <h1 className='text-white text-xl sm:text-3xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='text-white font-light text-[12px]'>Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
                <div className='flex justify-center items-center gap-3'>
                    <button className='btn bg-white text-purple-500 rounded-3xl'>Explore Products</button>
                    <button className='btn bg-transparent hover:bg-lime-300 hover:text-black text-white border border-white rounded-3xl'> View Pricing</button>
                </div>
                <p className='text-gray-400 text-[12px]'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;