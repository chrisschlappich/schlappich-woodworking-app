import React from "react";

function FAQ(): React.ReactElement {
    return (
        <div className="main-container">
            <h1 className="route-header">Frequently Asked Questions</h1>
            <div className="faq-container">
                <div className="faq-item">
                    <h3 className="faq-question">What types of custom woodworking do you offer?</h3>
                    <p className="faq-answer">We specialize in custom furniture, cabinetry, wood carving, and restoration. Whether you need a unique piece of furniture designed from scratch or want to choose from our templates, we can create the perfect piece for your home.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">Can I order custom pieces if I have my own design in mind?</h3>
                    <p className="faq-answer">Absolutely! We welcome custom design requests. You can bring your ideas and specifications, and we will work with you to create a piece that meets your vision.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">How do I place an order for a custom piece?</h3>
                    <p className="faq-answer">To place an order for a custom piece, please visit our contact page and fill out the form with your details and requirements. We will get in touch with you to discuss your project further and provide a quote.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">Do you have ready-made products available for purchase?</h3>
                    <p className="faq-answer">Yes, we offer a selection of ready-made products that you can choose from in our products section. These items are crafted with the same attention to detail and quality as our custom pieces.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">Where can I pick up my order?</h3>
                    <p className="faq-answer">All orders must be picked up locally in Newburgh, NY. Unfortunately, we do not offer shipping at this time. Once your order is ready, we will contact you to arrange a convenient pick-up time.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">What is the lead time for custom orders?</h3>
                    <p className="faq-answer">The lead time for custom orders can vary depending on the complexity of the project and our current workload. Typically, custom pieces take between 4-8 weeks to complete. We will provide you with an estimated timeline when you place your order.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">What materials do you use for your woodworking projects?</h3>
                    <p className="faq-answer">We use a variety of high-quality woods, including oak, maple, cherry, and walnut, among others. If you have a specific material in mind, please let us know, and we will do our best to accommodate your request.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">I have a question that isn't listed here. Where can I ask it?</h3>
                    <p className="faq-answer">Navigate to the Contact Us tab and submit your inquiry there. We'll answer as soon as possible.</p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;