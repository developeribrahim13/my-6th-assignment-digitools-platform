import React, { useState } from 'react';
import Carts from './carts/Carts';
import ProductItems from './productItems/ProductItems';

const fetchData = async  () => {
    const rspns = await fetch('/data.json')
    return rspns.json();
}

const collectData = fetchData();

const Products = ({carteAche,setCarteAche}) => {
   
    const [clickProduct,setClickProduct] = useState(true);
    
    return (
        <div className='max-w-[80%] mx-auto mt-20'>
            <div className=''>
                <h1 className='text-5xl font-extrabold text-center'>Premium Digital Tools</h1>
                <p className='text-gray-600 text-center mt-4 mb-3'>Choose from our curated collection of premium digital products designed<br />to boost your productivity and creativity.</p>
            </div>
            <div className="tabs tabs-box justify-center bg-white">
                <input onChange={()=>setClickProduct(true)} type="radio" name="my_tabs_6" className={`tab text-purple-800 ${clickProduct?"rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white":""}`} aria-label="Products" defaultChecked />
                <div className="tab-content bg-base-100 mt-8 p-6"><ProductItems collectData = {collectData} carteAche={carteAche} setCarteAche={setCarteAche}/></div>

                <input onChange={()=>setClickProduct(false)} type="radio" name="my_tabs_6" className={`tab text-purple-800 ${clickProduct?"":"rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`} aria-label={`Chart(${carteAche.length})`} />
                <div className="tab-content bg-base-100 mt-8 p-6"><Carts carteAche={carteAche} setCarteAche={setCarteAche}/></div>
            </div>
        </div>
    );
};

export default Products;