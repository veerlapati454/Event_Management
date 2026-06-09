import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/stackly_logo.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="Stackly Logo" />
          </div>

          <p>
            Creating unforgettable experiences through innovative
            event planning, venue management, and seamless
            execution for every celebration.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/home-page">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/venues">Venues</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>

          <ul>
            <li>
              <Link to="/wedding-planning">
                Wedding Planning
              </Link>
            </li>

            <li>
              <Link to="/corporate-events">
                Corporate Events
              </Link>
            </li>

            <li>
              <Link to="/birthday-parties">
                Birthday Parties
              </Link>
            </li>

            <li>
              <Link to="/music-festivals">
                Music Festivals
              </Link>
            </li>

            <li>
              <Link to="/conference-management">
                Conference Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>

          <ul className="contact-info">
            <li>
              <FaPhoneAlt />
              <Link to="/phone-contact">
                +91 98765 43210
              </Link>
            </li>

            <li>
              <FaEnvelope />
              <Link to="/email-contact">
                stackly@events.com
              </Link>
            </li>

            <li>
              <FaMapMarkerAlt />
              <Link to="/location">
                Hyderabad, India
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 EventSphere. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;