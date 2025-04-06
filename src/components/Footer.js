// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Assuming enhanced CSS is already in place

// URLs for social icons from icons8.com (using 48px color versions)
const socialIcons = {
    facebook: 'https://img.icons8.com/color/48/facebook-new.png',
    twitter: 'https://img.icons8.com/color/48/twitter--v1.png',
    instagram: 'https://img.icons8.com/color/48/instagram-new--v1.png',
    linkedin: 'https://img.icons8.com/color/48/linkedin.png',
};

// URLs for payment icons from icons8.com (using 48px color versions)
const paymentIcons = {
    visa: 'https://img.icons8.com/color/48/visa.png',
    mastercard: 'https://img.icons8.com/color/48/mastercard.png',
    paypal: 'https://img.icons8.com/color/48/paypal.png',
    amex: 'https://img.icons8.com/color/48/american-express.png',
};


function Footer() {
    return (
        <footer className="app-footer-enhanced">
            <div className="footer-container">
                {/* Top section with columns */}
                <div className="footer-columns">
                    {/* Column 1: Customer Service */}
                    <div className="footer-column">
                        <h4>Customer Service</h4>
                        <ul>
                            {/* Using '#' for placeholder links */}
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping Information</a></li>
                            <li><a href="#">Returns & Exchanges</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>

                    {/* Column 2: About MyShop */}
                    <div className="footer-column">
                        <h4>About MyShop</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Shop Categories (Example) */}
                     <div className="footer-column">
                        <h4>Shop</h4>
                        <ul>
                            {/* Linking to actual category routes */}
                            <li><a href="/category/electronics">Electronics</a></li>
                            <li><a href="/category/clothing">Clothing</a></li>
                            <li><a href="/category/home-goods">Home Goods</a></li> {/* Ensure route matches if space exists */}
                             <li><a href="#">Deals</a></li>
                        </ul>
                    </div>


                    {/* Column 4: Connect With Us */}
                    <div className="footer-column">
                        <h4>Connect With Us</h4>
                        <div className="social-icons">
                            {/* Use target="_blank" and rel="noopener noreferrer" for external links */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={socialIcons.facebook} alt="Facebook" /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><img src={socialIcons.twitter} alt="Twitter" /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={socialIcons.instagram} alt="Instagram" /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={socialIcons.linkedin} alt="LinkedIn" /></a>
                        </div>
                        {/* Optional: Newsletter Signup (remains commented out) */}
                    </div>
                </div>

                {/* Middle section: Payment methods */}
                <div className="footer-payments">
                    <h4>We Securely Accept</h4>
                    <div className="payment-icons">
                        <img src={paymentIcons.visa} alt="Visa" title="Visa" /> {/* Add title attribute */}
                        <img src={paymentIcons.mastercard} alt="Mastercard" title="Mastercard" />
                        <img src={paymentIcons.paypal} alt="PayPal" title="PayPal" />
                        <img src={paymentIcons.amex} alt="American Express" title="American Express" />
                    </div>
                </div>

                {/* Bottom section: Copyright */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} MyShop E-commerce Site. All Rights Reserved.</p>
                    <p>Built for Tech Mahindra Assignment</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;