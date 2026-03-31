import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral pt-20 pb-3'>
            <div className='max-w-[80%] mx-auto grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-2'>
                <div className='sm:col-span-2 space-y-1.5'>
                    <h1 className='font-extrabold text-2xl text-white'>DigiTools</h1>
                    <p className='text-gray-400 max-w-[90%] text-sm'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of t tools.</p>
                </div>
                <ul className='text-gray-400 space-y-1.5 text-sm'>
                    <li className='text-white font-bold text-base'>Product</li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Features</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Pricing</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Templates</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Integration</a></li>
                </ul>
                <ul className='text-gray-400 space-y-1.5 text-sm'>
                    <li className='text-white font-bold text-base'>Company</li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>About</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Blog</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Careers</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Press</a></li>
                </ul>
                <ul className='text-gray-400 space-y-1.5 text-sm'>
                    <li className='text-white font-bold text-base'>Resources</li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Documentation</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Help Center</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Community</a></li>
                    <li><a className='hover:underline hover:underline-offset-4 hover:decoration-lime-100' href='#'>Contact</a></li>
                </ul>
                <div>
                    <p className='text-white font-bold mb-2'>Social Links</p>
                    <div className='flex justify-start items-center gap-2.5'>
                        <div className='bg-white hover:bg-lime-300 rounded-full w-6 flex justify-center items-center'><a href='#'><i class="fa-brands fa-square-instagram"></i></a></div>
                        <div className='bg-white hover:bg-lime-300 rounded-full w-6 flex justify-center items-center'><a href='#'><i class="fa-brands fa-square-facebook"></i></a></div>
                        <div className='bg-white hover:bg-lime-300 rounded-full w-6 flex justify-center items-center'><a href='#'><i class="fa-brands fa-x-twitter"></i></a></div>
                    </div>
                </div>
            </div>
            <hr className='max-w-[80%] mx-auto text-gray-800 mt-8'></hr>
            <div className='text-gray-400 max-w-[80%] mx-auto flex flex-col sm:flex-row justify-between py-3.5 text-[12px]'>
                <h5>© {new Date().getFullYear()} Digitools. All rights reserved.</h5>
                <div className='flex gap-3'>
                    <a className='hover:text-lime-300 hover:font-bold' href='#'>Privacy Policy</a>
                    <a className='hover:text-lime-300 hover:font-bold' href='#'>Terms of Service</a>
                    <a className='hover:text-lime-300 hover:font-bold' href='#'>Cookies</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;