import {  Link } from "react-router-dom";
import logo from "../../assets/stackly_logo.webp";
import "./SideBar.css";

function Sidebar({ isOpen, onClose }) {
  const role = localStorage.getItem("role") || "user";
  

  const navItems = [
    { icon: "📊", label: "Dashboard" },
    { icon: "📅", label: "My Events" },
    { icon: "🎫", label: "Bookings" },
    { icon: "🏛️", label: "Venues" },
    { icon: "🎟️", label: "Tickets" },
    { icon: "💬", label: "Messages" },
    { icon: "⭐", label: "Reviews" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="sidebar-logo">
          <img src={logo} alt="Stackly" />
        </div>

        {role === "admin" && (
          <span className="sidebar-role-badge">Admin</span>
        )}

        <span className="sidebar-section-label">
          Main Menu
        </span>

        <ul className="sidebar-menu">
  {navItems.map((item) => (
    <li key={item.label}>
      <button
        type="button"
        className="sidebar-menu-btn"
        onClick={onClose}
      >
        <span className="nav-icon">{item.icon}</span>
        <span className="nav-label">{item.label}</span>
      </button>
    </li>
  ))}
</ul>

        <div className="sidebar-bottom">
          <div className="sidebar-user">
            <div className="user-avatar">
              {role === "admin" ? "A" : "U"}
            </div>

            <div className="user-info">
              <span className="user-name">
                {role === "admin"
                  ? "Admin User"
                  : "User Account"}
              </span>

              <span className="user-role">
                {role === "admin"
                  ? "Administrator"
                  : "Standard User"}
              </span>
            </div>
          </div>

          <Link
            to="/login"
            className="sidebar-logout"
            onClick={() => {
              localStorage.removeItem("role");
              onClose();
            }}
          >
            <span>🚪</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <div
        className={`sidebar-overlay ${
          isOpen ? "active" : ""
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  );
}

export default Sidebar;