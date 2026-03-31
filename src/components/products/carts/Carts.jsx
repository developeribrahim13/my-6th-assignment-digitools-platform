import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({carteAche, setCarteAche}) => {
    return (
        <div>
            <h1 className='text-2xl font-extrabold mb-5'>Your Cart</h1>
            {
               carteAche.length!=0?<>
               {carteAche.map(el=>(
                <div className='flex justify-between items-center p-4 mb-5 rounded-2xl bg-gray-100'>
                    <div className='flex gap-3 items-center'>
                    <div className='shadow w-15 h-15 rounded-full flex justify-center items-center'>
                        <img src={el.icon}></img>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'>{el.name}</h3>
                        <p className='text-sm text-gray-500'>${el.price}</p>
                    </div>
                    </div>
                    <button onClick={()=>{setCarteAche(carteAche.filter(f=>f.id!=el.id)); 
                        toast.error(`${el.name} is remove from the chart!`)
                    }} className='btn btn-soft border-0 hover:bg-blue-50 bg-transparent rounded-3xl text-red-500'>Remove</button>
                </div>
            ))}
            <div className='flex justify-between items-center p-4 mb-5 rounded-2xl bg-gray-100'>
        <h1 className='text-2xl font-extrabold'>Total-</h1>
        <h2 className='text-2xl font-extrabold text-purple-600 pr-4'>
            ${carteAche.reduce((sum,item) => sum + item.price,0)}</h2>
        </div>
        <button onClick={()=>{setCarteAche([]);
            toast.success('All item successfully Proceeds!')
        }} className='btn text-xl text-white rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full mt-5 py-8'>Proceed To Checkout</button>
        </>
            :
            <div className='py-11 bg-blue-50 flex items-center justify-center rounded-3xl'>
                <div className='flex flex-col justify-items-center items-center gap-3'>
                <ShoppingCart size={100}/>
                <p>There is no data in the cart.</p>
                </div>
            </div>
        }      
     </div>
    );
};

export default Carts;