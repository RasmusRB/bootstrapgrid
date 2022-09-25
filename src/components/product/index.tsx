import React from "react";

interface IProduct {
    item: string,
    name: string,
    price: number
}

const Product: React.FC<IProduct> = ({ item, name, price }) => {
    return (
        <div>
            <h1>{item}</h1>
            <h1>{name}</h1>
            <h1>${price}</h1>
        </div>
    )
}

export default Product;