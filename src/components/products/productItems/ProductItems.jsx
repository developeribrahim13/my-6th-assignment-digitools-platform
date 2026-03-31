import React, { use } from 'react';
import Card from './cards/Card';

const ProductItems = ({collectData, charteAche, setCharteAche}) => {
    const items = use(collectData);
    console.log(items);
    return (
        <div>
            <Card items={items} charteAche={charteAche} setCharteAche={setCharteAche}/>
        </div>
    );
};

export default ProductItems;