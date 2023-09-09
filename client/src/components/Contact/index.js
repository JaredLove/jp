import React, { useState } from 'react';
import './style.css';

function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.status === 200) {
          // Reset the form on successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          alert('Message sent successfully!');
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
  
      setIsSubmitting(false);
    };
  
    return (
      <div className="contact-form">
        <div className='contact-content'>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group-message">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        </div>
      </div>
    );
  }
  
  export default ContactForm;