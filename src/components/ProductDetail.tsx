import React from "react";
import { Link, useParams } from "react-router-dom";

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

function ProductDetail({ products }: ProductsProps): React.ReactElement {
    let { sku_id } = useParams();

    const product = products.find(item => item.id === sku_id);

    if (!product) {
        // No matching product found in our search of the JSON
        return (
            <div className="product-detail-container">
                <p>Product not found.</p>
                <button className="call-to-action-button">
                    <Link to="/" className="link">Home</Link>
                </button>
            </div>
        );
    }

    return (
        <div className="main-container">
            <div className="product-detail-container">
                    <div className="product-detail-image-container">
                        <img className="product-image" src={product.image_url} alt="Picture of product" />
                    </div>
                    <div className="product-detail-content-container">
                        <p className="product-name">{product.name}</p>
                        <p className="product-card-price">${product.price}</p>
                        <p className="product-card-sale-price">${product.sale_price}</p>
                        <button className="call-to-action-button">
                            <Link to="/products" className="link">Back to products</Link>
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default ProductDetail;