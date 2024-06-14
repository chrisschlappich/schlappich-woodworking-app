import React from "react";
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom";

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
        <div>
            <h1 className="route-header">Shop Our Products</h1>
            <div className="products-container">
                {products.map((product: Product) => (
                    <Link to={`/product/${product.id}`} className="link">
                        <ProductCard 
                            key={product.id} 
                            name={product.name} 
                            price={product.price} 
                            saleprice={product.sale_price}
                            imageurl={product.image_url}
                        />
                    </Link>
                ))}
            </div>

            <div id="ready-to-start-container" className="home-cta-container">
                    <h4 className="call-to-action">Don't see what you want above? Contact us to get started.</h4>
                    <Link to="/contact">
                        <button className="call-to-action-button">Get in Touch</button>
                    </Link>
            </div>
        </div>
    )
}

export default Products