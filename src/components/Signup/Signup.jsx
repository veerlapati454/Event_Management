import { useState } from "react";
import {
  FaGoogle,
  FaLinkedinIn,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  // Full Name - only alphabets and spaces
  const handleFullNameChange = (e) => {
    const value = e.target.value.replace(
      /[^a-zA-Z\s]/g,
      ""
    );
    setFullName(value);
  };

  // Username - only alphabets
  const handleUsernameChange = (e) => {
    const value = e.target.value.replace(
      /[^a-zA-Z]/g,
      ""
    );
    setUsername(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailRegex =
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
      alert("Only Gmail addresses are allowed.");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        "Password must contain at least 8 characters, one uppercase letter, one number and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
    navigate("/login");
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
          <Link to="/" className="back-home">
            <HiArrowLeft />
            Back to Home
          </Link>

          <h2>Create Account</h2>

          <p className="subtitle">
            Start your event management journey
          </p>

          <div className="row">
            {/* Full Name */}
            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={handleFullNameChange}
                title="Only alphabets and spaces are allowed"
                required
              />
            </div>

            {/* Username */}
            <div className="input-group">
              <label>Username</label>

              <input
                type="text"
                placeholder="john"
                value={username}
                onChange={handleUsernameChange}
                title="Only alphabets are allowed"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="john@gmail.com"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
              title="Only Gmail addresses are allowed"
              required
            />
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              required
            />
          </div>

          <div className="row">
            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="password-wrapper">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <span
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="input-group">
              <label>Confirm Password</label>

              <div className="password-wrapper">
                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <span
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="password-info">
            Password must contain at least 8
            characters, one uppercase letter,
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