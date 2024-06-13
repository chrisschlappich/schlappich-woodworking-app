import React from "react";
import ProductCard from "./ProductCard"

// Define interface for Product
interface Product {
    id: string;
    name: string;
    price: number;
    sale_price: number;
    image_url: string;
}

// Define interface for ProductsProps
interface ProductsProps {
    products: Product[];
}

function Products({ products }: ProductsProps ): React.ReactElement {
    return (
        <div className="main-container">
            <h1 className="route-header">Products</h1>
            <div className="products-container">
                {products.map((product: Product) => (
                    <ProductCard 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        saleprice={product.sale_price}
                        imageurl={product.image_url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products