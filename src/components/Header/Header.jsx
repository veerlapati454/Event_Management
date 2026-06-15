import { useState, useEffect, useRef } from "react";
import { Link, useLocation ,useNavigate} from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Header.css";
import logo from "../../assets/stackly_logo.webp"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate=useNavigate();
  const dropdownRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    {
      label: "Events",
      to: "/events",
    },
    { label: "Venues", to: "/venues" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (to) =>
    to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(to);

  return (
    <header
      className={`header ${scrolled ? "header--scrolled" : ""} ${menuOpen ? "header--open" : ""}`}
      role="banner"
    >
      <div className="header-inner">

        {/* LOGO */}
        <Link to="/" className="header-logo" aria-label="Go to homepage" onClick={closeMenu}>
          <div className="logo-img-wrap">
            {/* Replace this img tag src with your actual logo path */}
            <img
              src={logo}
              alt="Your Logo"
              className="logo-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
              onClick={()=> navigate("/")}
            />
            {/* Fallback shown if logo fails to load */}
            <div className="logo-fallback" aria-hidden="true">
              <span className="logo-fallback-icon">✦</span>
              <span className="logo-fallback-text">Your Logo</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="header-nav" aria-label="Main navigation" ref={dropdownRef}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${isActive(link.to) ? "nav-link--active" : ""}`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="nav-link-dot" aria-hidden="true" />
              )}
            </Link>          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="header-actions">
          <Link to="/login" className="header-login">
            Login
          </Link>
          <Link to="/signup" className="header-signup">
            Sign Up
            <span aria-hidden="true" className="signup-arrow">→</span>
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          className={`header-hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      <div
        id="mobile-nav"
        className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-inner">

          <div className="mobile-divider" aria-hidden="true">
            <span>Navigation</span>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-nav-link ${isActive(link.to) ? "mobile-nav-link--active" : ""}`}
                onClick={closeMenu}
              >
                {link.label}
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-cta">
            <Link to="/login" className="mobile-login" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/signup" className="mobile-signup" onClick={closeMenu}>
              Get Started →
            </Link>
          </div>

          <p className="mobile-tagline">Creating extraordinary event experiences.</p>

        </div>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}

export default Header;