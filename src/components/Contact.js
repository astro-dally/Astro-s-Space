import React from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    // Initialize EmailJS with your public key
    emailjs.init('user_LwEDyEJvqTwoRZel0');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        // Send email using EmailJS
        const serviceId = 'service_od2vw1t'; // Replace with your EmailJS service ID
        const templateId = 'template_wdjksl9'; // Replace with your EmailJS template ID

        emailjs.send(serviceId, templateId, data)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('status-message').innerText = 'Your message has been sent successfully!';
            }, function (error) {
                console.error('FAILED...', error);
                document.getElementById('status-message').innerText = 'There was an error sending your message. Please try again later.';
            });

        // Reset the form
        e.target.reset();
    };

    return (
        <div className="contact-container" id="contact">
            <div className="contact-details">
                <h2>Contact Me</h2>
                <div className="contact-icons">
                    <a href="mailto:dallyr2004@gmail.com" className="contact-icon"><FaEnvelope /></a>
                    <a href="https://www.linkedin.com/in/dally-r-astro6/" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaLinkedin /></a>
                    <a href="https://github.com/astro-dally" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaGithub /></a>
                    <a href="https://www.instagram.com/astrodally64/" target="_blank" rel="noopener noreferrer" className="contact-icon"><FaInstagram /></a>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-color-2">Send Message</button>
            </form>
            <p id="status-message" className="status-message"></p>
        </div>
    );
}

export default Contact;
