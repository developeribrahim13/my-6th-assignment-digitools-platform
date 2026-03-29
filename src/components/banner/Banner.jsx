import React from 'react';
import bannerImg from '../../assets/banner.png'
import playIcon from '../../assets/Play.png'
const Banner = () => {
    return (
        <div className='max-w-[80%] mx-auto my-16'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-7'>
                <div className='space-y-4 flex-7'>
                    <h1 className='text-3xl md:text-6xl font-extrabold'>Supercharge Your</h1>
                    <h1 className='text-3xl md:text-6xl font-extrabold bg-linear-[-35deg] from-blue-500 to-purple-700 text-transparent bg-clip-text pb-4'>Digital Workflow</h1>
                    <p className='font-medium text-lg text-gray-500 text-left md:text-justify max-w-[90%]'>Access premium AI tools, design assets, templates, and productivitysoftware—all in one place. Start creating faster today.Explore Products.</p>
                    <div className='flex flex-wrap justify-start gap-3'>
                        <button className='btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</button>
                        <button className='btn rounded-3xl bg-transparent border border-purple-400 text-purple-600 font-medium hover:bg-purple-200'><img src={playIcon}></img> Watch Demo</button>
                    </div>
                </div>
                
                <div className='flex-6'><img src={bannerImg} className='w-full h-full'></img></div>
            </div>
        </div>
    );
};

export default Banner;