import React from "react";
import { Link } from "react-router-dom";

function Cart(): React.ReactElement {
    return (
        <div id="main-cart-container" className="main-container">
            <h1 className="route-header">Your Cart</h1>
            <p id="cart-disclaimer">The cart functionality is still in development. 
            Please contact us for business inquiries.
            </p>
            <button className="call-to-action-button">
                            <Link to="/contact" className="link">Contact Us</Link>
            </button>
            <button className="call-to-action-button">
                            <Link to="/" className="link">Home</Link>
            </button>
        </div>
    );
}

export default Cart;