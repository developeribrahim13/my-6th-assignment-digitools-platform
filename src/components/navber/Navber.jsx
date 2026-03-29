import React from 'react';
import chartImg from '../../assets/products/shopping-cart.png'

const Navber = () => {
    return (
        <div className='border-b border-gray-200'>
            <nav className='max-w-[80%] mx-auto flex justify-between items-center py-4'>
                <h1 className='text-3xl font-extrabold bg-linear-[-35deg] from-blue-500 to-purple-700 text-transparent bg-clip-text pb-2'>DigiTools</h1>
                <ul className='hidden lg:flex justify-between gap-6 font-medium'>
                    <li><a className='hover:bg-linear-[-35deg] from-blue-500 to-purple-700 hover:text-transparent hover:bg-clip-text' href='#'>Products</a></li>
                    <li><a className='hover:bg-linear-[-35deg] from-blue-500 to-purple-700 hover:text-transparent hover:bg-clip-text' href='#'>Features</a></li>
                    <li><a className='hover:bg-linear-[-35deg] from-blue-500 to-purple-700 hover:text-transparent hover:bg-clip-text' href='#'>Pricing</a></li>
                    <li><a className='hover:bg-linear-[-35deg] from-blue-500 to-purple-700 hover:text-transparent hover:bg-clip-text' href='#'>Testimonials</a></li>
                    <li><a className='hover:bg-linear-[-35deg] from-blue-500 to-purple-700 hover:text-transparent hover:bg-clip-text' href='#'>FAQ</a></li>
                </ul>
                <div className='flex justify-between items-center gap-3'>
                    <div><a href='#'><img className='font-medium' src={chartImg}></img></a></div>
                    <p><a className='font-medium hidden md:flex' href='#'>Login</a></p>
                    <button className='btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Get Started</button>
                </div>
            </nav>
        </div>
    );
};

export default Navber;