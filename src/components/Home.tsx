import React from "react";

function Home(): React.ReactElement {
    return (
        <div>
            <h1 className="route-header">Home</h1>
            
            <div className="home-hero-container">
                <div className="home-hero-content-container">
                    <h2 id="home-page-hero-title">Handcrafted woodwork for everyone!</h2>
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
                    <h4 id="home-page-services-title">Our Services!</h4>
                </div>
                <div className="home-services-cta-container">
                    <p>Check out our products.</p>
                </div>
            </div>

            <div id="home-testimonials-container">
                TESTIMONIALS
            </div>
        </div>
    )
}

export default Home