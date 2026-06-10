import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { HiArrowLeft } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gmail validation
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!gmailRegex.test(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-banner">
        <div className="banner-overlay"></div>

        <div className="banner-content">
          <span>EVENT MANAGEMENT SYSTEM</span>

          <h1>
            Plan. Manage.
            <br />
            Celebrate.
          </h1>

          <p>
            Manage events, bookings, venues and attendees
            through one modern platform.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="login-container">
        <form className="login-card" onSubmit={handleSubmit}>
          <Link to="/" className="back-home">
            <HiArrowLeft />
            Back to Home
          </Link>

          <h2>Welcome Back</h2>

          <p className="subtitle">
            Login to access your account
          </p>

          {/* Role Selection */}
          <div className="role-selector">
            <button
              type="button"
              className={
                role === "user"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("user")}
            >
              User
            </button>

            <button
              type="button"
              className={
                role === "admin"
                  ? "role-btn active"
                  : "role-btn"
              }
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter Gmail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
              title="Only Gmail addresses are allowed"
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
              />

              <span
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
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

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login as {role}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <Link
            to="/signup"
            className="signup-btn"
          >
            Create New Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;