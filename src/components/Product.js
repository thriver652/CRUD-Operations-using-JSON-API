import React from 'react'
import { useEffect, useState } from 'react';
const Product = ({ data }) => {

    const [product, setProduct] = useState([]);

    return (
        <div>
            {
                data.map((item) => {
                    return (
                        <div style={{ border: '1px solid black', margin: '15px' }} key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product