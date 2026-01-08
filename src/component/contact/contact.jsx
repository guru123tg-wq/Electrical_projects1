import React from 'react';
import './contact.css';

const ContactSection = () => {
  return (
    <footer className="footer-wrapper">
      <section className="contact-section">
        <div className="section-container">
          
          {/* Header Area */}
          <div className="section-header">
            <div className="title-group">
              <span className="accent-red-line"></span>
              <h2 className="main-title">Tell Us What You Need</h2>
            </div>
          </div>

          <div className="contact-content">
            {/* Left Column: Info */}
            <div className="info-column">
              <p className="intro-text">
                We're just one call or form away. Let's get your materials moving.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <span className="icon">📍</span>
                  <p>75, Godown Street, Flower Bazaar, PARRY'S, George Town, Chennai, Tamil Nadu 600001</p>
                </div>
                <div className="detail-item">
                  <span className="icon">📞</span>
                  <p>+91 99626 22633 / +91 99628 19851</p>
                </div>
                <div className="detail-item">
                  <span className="icon">☎️</span>
                  <p>044-42166030</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="form-column">
              <form className="contact-form">
                <input type="text" placeholder="Name*" required />
                <input type="tel" placeholder="Phone Number*" required />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Service" />
                <button type="submit" className="submit-btn">Submit your details</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <div className="bottom-bar">
        <p>© 2025 Sri Ambaajee Electricals - All rights reserved</p>
        <p>Marketed By <span className="red-text underline">Profitcast</span> — Efficient growth, delivered.</p>
      </div>
    </footer>
  );
};

export default ContactSection;