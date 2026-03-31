import React from 'react';
import { Check } from 'lucide-react';
const Card = ({ items, charteAche, setCharteAche }) => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                items.map(item => (
                    <div className='shadow rounded-2xl p-5 border border-gray-100'>
                <div className='flex justify-between'>
                    <div className='flex justify-start items-end'>
                        <div className='w-15 h-15 rounded-full shadow flex justify-center items-center'>
                            <img src={item.icon}></img>
                        </div>
                    </div>
                    <div className={`flex justify-end items-start badge badge-soft ${item.tag=='Popular'?"badge-primary":item.tag=='New'?"badge-success":"badge-warning"}`}>{item.tag}</div>
                </div>
                <h3 className='text-lg font-extrabold my-3.5'>{item.name}</h3>
                <p className='text-[12px] text-gray-500 font-medium'>{item.description}</p>
                <h1 className='text-xl font-bold my-3.5'>${item.price}<span className='text-sm text-gray-400 font-normal'>/Month</span></h1>
                <ul>
                    {item.features.map(el=>(
                        <li className='flex gap-2 items-center text-sm text-gray-500'><Check color="#0cb017" />{el}</li>
                    ))}
                </ul>
                <button onClick={()=>setCharteAche([...charteAche,item])} className='btn text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full mt-3'>Buy Now</button>
            </div>
                ))
            }
        </div>
    );
};

export default Card;