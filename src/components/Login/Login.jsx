import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { HiArrowLeft } from "react-icons/hi";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

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

        <form
          className="login-card"
          onSubmit={handleSubmit}
        >
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

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              required
            />
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