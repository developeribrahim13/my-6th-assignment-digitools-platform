import React, { use } from 'react';
import Card from './cards/Card';

const ProductItems = ({collectData, carteAche, setCarteAche}) => {
    const items = use(collectData);
    return (
        <div>
            <Card items={items} carteAche={carteAche} setCarteAche={setCarteAche}/>
        </div>
    );
};

export default ProductItems;