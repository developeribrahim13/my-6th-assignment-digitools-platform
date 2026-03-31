import React from 'react';

const Charts = ({charteAche, setCharteAche}) => {
    return (
        <div>
            <h1 className='text-2xl font-extrabold mb-5'>Your Chart</h1>
            {charteAche.map(el=>(
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
                    <button onClick={()=>setCharteAche(charteAche.filter(f=>f.id!=el.id))} className='btn btn-soft border-0 hover:bg-blue-50 bg-transparent rounded-3xl text-red-500'>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default Charts;