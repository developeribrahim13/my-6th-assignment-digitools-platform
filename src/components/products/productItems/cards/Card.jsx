import React from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';
const Card = ({ items, carteAche, setCarteAche }) => {
    
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                items.map(item => {
                const Isexist = carteAche.find(el=> el.id==item.id)
                return (<div className='shadow rounded-2xl p-5 border border-gray-100'>
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
                
                <button onClick={()=>{
                    if(!Isexist)
                    {
                        setCarteAche([...carteAche,item])
                        toast.success(`${item.name} is successfuly added in the Chart`)
                    }
                    else
                        toast.error(`${item.name} already exist in the Chart`)
                        return;
                }} className={`btn text-white rounded-3xl w-full mt-3 ${Isexist?"bg-green-600":"bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>{Isexist?"Already in Cart ✔":"Buy Now"}</button>
            </div>
                )})
            }
        </div>
    );
};

export default Card;