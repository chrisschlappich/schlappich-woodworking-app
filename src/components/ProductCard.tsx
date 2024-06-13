import React from "react";

// Define interface for ProductCardProps
interface ProductCardProps {
    key : string;
    name : string;
    price : number;
    saleprice : number;
    imageurl: string;
}

function ProductCard({key, name, price, saleprice, imageurl} : ProductCardProps): React.ReactElement {
    return (
        <div className="product-card">
            <img className="product-card-image" src={imageurl} alt="Picture"></img>
            <div className="product-details-container">
                <div className="product-card-name">{name}</div>
                <div className="product-card-price">{price}</div>
                <div className="product-card-sale-price">{saleprice}</div>
            </div>
        </div>
    )
}

export default ProductCard