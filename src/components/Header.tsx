import React from "react";
import { Link } from "react-router-dom";

function Header(): React.ReactElement {
    return (
        <div className="header-container">
            <img src="schlappich_logo.png" alt="Company logo" className="header-logo"></img>
            <div id="header-nav-bar" className="nav-bar">
                <Link to="/" className="nav-bar-link">Home</Link>
                <Link to="/about" className="nav-bar-link">About</Link>
                <Link to="/products" className="nav-bar-link">Products</Link>
                <Link to="/faq" className="nav-bar-link">FAQ</Link>
                <Link to="/contact" className="nav-bar-link">Contact</Link>
            </div>
        </div>
    )
}

export default Header