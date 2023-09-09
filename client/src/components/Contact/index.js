import React, { useState } from 'react';
import './style.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                alert('Message sending failed.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <div className="contact-form">
            <div className='contact-content'>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group-name">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='  John Doe'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group-email">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='  youremail@gmail.com'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group-message">
       
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group-submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default ContactForm;