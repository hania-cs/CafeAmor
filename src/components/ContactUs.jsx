import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-content">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Visit Us</h3>
            <p>123 Coffee Street</p>
            <p>Café City, CC 12345</p>
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 7am - 7pm</p>
            <p>Saturday - Sunday: 8am - 6pm</p>
            <h3>Get in Touch</h3>
            <p>Email: hello@cafeamor.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;