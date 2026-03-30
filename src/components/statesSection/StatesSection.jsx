import { Star } from 'lucide-react';
import React from 'react';

const StatesSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-14'>
            <div className='max-w-[80%] mx-auto grid min-[480px]:grid-cols-3 justify-items-center items-center'>
                <div className='w-full text-center'>
                    <h1 className='text-4xl font-extrabold text-white min-[480px]:pb-3'>50K+</h1>
                    <p className='text-white text-sm font-light max-[480px]:mb-1.5'>Active users</p>
                </div>
                <div className='w-full text-center'>
                    <h1 className='text-4xl font-extrabold text-white min-[480px]:pb-3 border-x-2 border-gray-300 '>200+</h1>
                    <p className='text-white text-sm font-light max-[480px]:mb-1.5'>Premium Tools</p>
                </div>
                <div className='w-full text-center'>
                    <h1 className='text-4xl font-extrabold text-white min-[480px]:pb-3 flex justify-center items-center gap-0.5'>4.9<Star/></h1>
                    <p className='text-white text-sm font-light max-[480px]:mb-1.5'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default StatesSection;