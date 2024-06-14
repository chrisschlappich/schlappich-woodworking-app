import React from "react";
import { Link } from "react-router-dom";

function Home(): React.ReactElement {
    return (
        <div className="main-container-no-pad">
            <div className="home-hero-container">
                <div className="home-hero-content-container">
                    <h2 id="home-page-hero-title">Handcrafted woodwork for everyone!</h2>
                    <p id="satisfaction-guaranteed">Satisfaction guaranteed.</p>
                </div>
                <div className="home-hero-image-container">
                    <img id="home-hero-image" src="/shorechair.jpg" alt="Shore chair" />
                </div>
            </div>

            <div id="home-welcome-container">
                <h4>Welcome to Schlappich & Schlappich Custom Woodworking, where craftsmanship meets tradition. 
                    We're a father-son duo dedicated to creating custom woodwork that brings warmth and elegance to your home.</h4>
            </div>

            <div className="home-services-container">
                <div className="home-services-content-container">
                    <h4 id="home-page-services-title">SERVICES</h4>
                    <li className="service">Custom Furniture</li>
                    <li className="service">Custom Cabinetry</li>
                    <li className="service">Restoration</li>
                </div>
                <div className="home-cta-container">
                    <h4 className="call-to-action">Check out our products.</h4>
                    <Link to="/products">
                        <button className="call-to-action-button">Browse Products</button>
                    </Link>
                </div>
            </div>

            <div id="ready-to-start-container" className="home-cta-container">
                    <h4 className="call-to-action">Ready to start your project?</h4>
                    <Link to="/contact">
                        <button className="call-to-action-button">Get in Touch</button>
                    </Link>
            </div>
        </div>
    )
}

export default Home