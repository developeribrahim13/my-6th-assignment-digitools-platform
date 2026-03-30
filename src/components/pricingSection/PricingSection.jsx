import { Check } from 'lucide-react';
import React from 'react';

const PricingSection = () => {
    return (
        <div className='max-w-[80%] mx-auto py-32'>
            <h1 className='text-5xl font-extrabold text-center'>Simple, Transparent Pricing</h1>
            <p className='text-gray-600 text-center mt-4 mb-7'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='bg-gray-100 rounded-2xl p-5'>
                    <h3 className='text-lg font-extrabold'>Starter</h3>
                    <p className='text-sm text-gray-500 font-medium'>Perfect for getting started</p>
                    <h1 className='text-3xl font-bold my-3.5'>$0<span className='text-sm text-gray-400 font-mono'>/Month</span></h1>
                    <ul>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Access to 10 free tools</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Basic templates</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Community support</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />1 project per month</li>
                    </ul>
                    <button className='btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full mt-10'>Get Started Free</button>
                </div>

                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl p-5 relative'>
                    <h3 className='text-2xl font-extrabold text-white'>Pro</h3>
                    <p className='text-sm text-gray-300 font-medium'>Best for professionals</p>
                    <h1 className='text-3xl font-bold text-white my-3.5'>$29<span className='text-sm text-gray-400 font-mono'>/Month</span></h1>
                    <ul>
                        <li className='flex gap-2 items-center text-sm text-white'><Check color="#0cb017" />Access to all premium tools</li>
                        <li className='flex gap-2 items-center text-sm text-white'><Check color="#0cb017" />Unlimited templates</li>
                        <li className='flex gap-2 items-center text-sm text-white'><Check color="#0cb017" />Priority support</li>
                        <li className='flex gap-2 items-center text-sm text-white'><Check color="#0cb017" />Unlimited projects</li>
                        <li className='flex gap-2 items-center text-sm text-white'><Check color="#0cb017" />Cloud sync</li>
                        <li className='flex gap-2 items-center text-sm text-white'><Check color="#0cb017" />Advanced analytics</li>
                    </ul>
                    <div className='bg-white rounded-3xl mt-3  flex justify-center items-center'><button className='font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  py-1.5 cursor-pointer'>Start Pro Trial</button></div>
                    <div className='absolute top-[-10px] left-1/2 -translate-x-1/2 whitespace-nowrap border border-amber-400 bg-amber-100 text-amber-700 px-2 rounded-3xl'>Most Popular</div>
                </div>

                <div className='bg-gray-100 rounded-2xl p-5'>
                    <h3 className='text-lg font-extrabold'>Enterprise</h3>
                    <p className='text-sm text-gray-500 font-medium'>For teams and businesses</p>
                    <h1 className='text-3xl font-bold my-3.5'>$99<span className='text-sm text-gray-400 font-mono'>/Month</span></h1>
                    <ul>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Everything in Pro</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Team collaboration</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Custom integrations</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Dedicated support</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />SLA guarantee</li>
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />Custom branding</li>
                    </ul>
                    <button className='btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full mt-5'>Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;