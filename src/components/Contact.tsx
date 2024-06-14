import React, { useState } from "react";

function Contact(): React.ReactElement {
    // Set up form data state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        description: ""
    });

    // Set up error logs state
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        description: ""
    });

    // Define function to react as person types (on change)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Define function to check if email adress is valid or not
    const validateEmail = (email: string) => {
        // Regex for email address is /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Check full form; leverage validateEmail
    const validateForm = () => {
        // Assume submission is valid; we will check and flag is otherwise
        let valid = true;
        const newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            description: ""
        };

        if (formData.firstName.length < 2) {
            // Invalid first name - doesn't ahve two characters
            newErrors.firstName = "First name must be at least 2 letters.";
            valid = false;
        }

        if (formData.lastName.length < 2) {
            // Invalid last name - doesn't ahve two characters
            newErrors.lastName = "Last name must be at least 2 letters.";
            valid = false;
        }

        if (!validateEmail(formData.email)) {
            // Invalid email
            newErrors.email = "Invalid email address.";
            valid = false;
        }

        if (formData.description.trim() === "") {
            // Invalid description - empty
            newErrors.description = "Description cannot be empty.";
            valid = false;
        }

        // Push the errors (if any) to our errors array from above
        setErrors(newErrors);
        return valid;
    };

    // 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent from sending to server
        if (validateForm()) {
            // Create a new paragraph div to tell them it was a successful submission
            const successMessage = document.createElement("p");
            successMessage.innerHTML = "Success! We'll be in touch shortly.";
            successMessage.style.color = "green";
            successMessage.style.fontStyle = "italic";

            // Insert success message after the form and then hide the form
            const formContainer = document.getElementById("contact-form");

            if (formContainer) {
                formContainer.insertAdjacentElement('afterend', successMessage);
                formContainer.style.display = 'none';
            }

            // Reset form field array
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                description: ""
            });
            // Reset error array
            setErrors({
                firstName: "",
                lastName: "",
                email: "",
                description: ""
            });
        }
    };

    return (
        <div className="main-container">
            <h1 className="route-header">Contact Us</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div id="form-name-fields-container">
                    <div className="form-question" id="first-name-container">
                        <label className="form-question-label" htmlFor="first-name">First Name: </label>
                        <input
                            className="form-question-input"
                            type="text"
                            id="first-name"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.firstName}</div>
                    </div>

                    <div className="form-question">
                        <label className="form-question-label" htmlFor="last-name">Last Name: </label>
                        <input
                            className="form-question-input"
                            type="text"
                            id="last-name"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <div className="error">{errors.lastName}</div>
                    </div>
                </div>

                <div className="form-question">
                    <label className="form-question-label" htmlFor="email">Email Address: </label>
                    <input
                        className="form-question-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className="error">{errors.email}</div>
                </div>

                <div className="form-question">
                    <label className="form-question-label" htmlFor="description">Description: </label>
                    <textarea
                        className="form-question-textarea"
                        id="description"
                        name="description"
                        placeholder="Explain your project"
                        rows={5}
                        cols={33}
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <div className="error">{errors.description}</div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;
