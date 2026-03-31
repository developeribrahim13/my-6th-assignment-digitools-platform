import React, { use } from 'react';
import Card from './cards/Card';

const ProductItems = ({collectData}) => {
    const items = use(collectData);
    console.log(items);
    return (
        <div>
            <Card items={items}/>
        </div>
    );
};

export default ProductItems;