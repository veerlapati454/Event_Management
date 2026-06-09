import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaLinkedinIn
} from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend Logic Later
    navigate("/dashboard");
  };

  return (
    <div className="signup-page">

      {/* LEFT */}

      <div className="signup-banner">

        <div className="banner-overlay"></div>

        <div className="banner-content">

          <span>EVENT MANAGEMENT SYSTEM</span>

          <h1>
            Join The Future
            <br />
            Of Event Planning
          </h1>

          <p>
            Create your account and start managing
            events, bookings, venues and attendees
            from one modern platform.
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="signup-container">

        <form
          className="signup-card"
          onSubmit={handleSubmit}
        >

          <Link
            to="/"
            className="back-home"
          >
            <HiArrowLeft />
            Back to Home
          </Link>

          <h2>Create Account</h2>

          <p className="subtitle">
            Start your event management journey
          </p>

          <div className="row">

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="input-group">
              <label>Username</label>

              <input
                type="text"
                placeholder="john123"
                required
              />
            </div>

          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="john@gmail.com"
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              required
            />
          </div>

          <div className="row">

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Create Password"
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>

          </div>

          <div className="password-info">
            Password must contain at least:
            8 characters, one uppercase,
            one number and one special symbol.
          </div>

          <div className="terms">

            <input
              type="checkbox"
              required
            />

            <span>
              I agree to the Terms &
              Conditions and Privacy Policy
            </span>

          </div>

          <button
            type="submit"
            className="signup-btn-main"
          >
            Create Account
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="social-btn google"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <button
            type="button"
            className="social-btn linkedin"
          >
            <FaLinkedinIn />
            Continue with LinkedIn
          </button>

          <p className="login-link">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Signup;