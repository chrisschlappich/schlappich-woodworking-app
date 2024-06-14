import React from "react";

function AboutUs(): React.ReactElement {
    return (
        <div className="main-container">
            <h1 className="route-header">About Us</h1>
            <div className="about-us-container">
                <div className="about-us-image-container">
                    <img id="about-us-image" src={`${process.env.PUBLIC_URL}/about_us.jpg`} alt="Me and my dad" />
                </div>
                <div className="about-us-content-container">
                    <p className="about-us-paragraph">Welcome to Schlappich & Schlappich Custom Woodworking, your local experts in custom woodworking. 
                        We are a father-son team dedicated to creating high-quality, handcrafted wood pieces that bring warmth 
                        and elegance to your home.</p>
                    <p className="about-us-paragraph">Our passion for woodworking spans generations, and we take pride in every project we undertake. 
                        Whether you're looking for custom furniture, cabinetry, or wood carvings, we work closely with 
                        you to bring your vision to life.</p>
                    <p className="about-us-paragraph">Thank you for supporting our family business. We look forward to creating something beautiful for you.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
