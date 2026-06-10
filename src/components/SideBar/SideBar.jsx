import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/stackly_logo.webp";

function Sidebar() {
  const location = useLocation();

  const role = localStorage.getItem("role") || "user";
  const base = role === "admin" ? "/admin-dashboard" : "/dashboard";

  const navItems = [
    { path: "",          icon: "📊", label: "Dashboard"  },
    { path: "/events",   icon: "📅", label: "My Events"  },
    { path: "/bookings", icon: "🎫", label: "Bookings"   },
    { path: "/venues",   icon: "🏛️", label: "Venues"     },
    { path: "/tickets",  icon: "🎟️", label: "Tickets"    },
    { path: "/messages", icon: "💬", label: "Messages"   },
    { path: "/reviews",  icon: "⭐", label: "Reviews"    },
    { path: "/settings", icon: "⚙️", label: "Settings"   },
  ];

  return (
    <aside className="sidebar">
      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="Stackly" />
      </div>

      {/* ROLE BADGE */}
      {role === "admin" && (
        <span className="sidebar-role-badge">Admin</span>
      )}

      {/* NAV LABEL */}
      <span className="sidebar-section-label">Main Menu</span>

      {/* NAV ITEMS — buttons only, no navigation */}
      <ul className="sidebar-menu">
        {navItems.map((item) => {
          const to = `${base}${item.path}`;
          const isActive = location.pathname === to;

          return (
            <li key={item.label} className={isActive ? "active" : ""}>
              <button type="button">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {isActive && <span className="active-indicator" />}
              </button>
            </li>
          );
        })}
      </ul>

      {/* BOTTOM */}
      <div className="sidebar-bottom">
        {/* USER CARD */}
        <div className="sidebar-user">
          <div className="user-avatar">
            {role === "admin" ? "A" : "U"}
          </div>
          <div className="user-info">
            <span className="user-name">
              {role === "admin" ? "Admin User" : "User Account"}
            </span>
            <span className="user-role">
              {role === "admin" ? "Administrator" : "Standard User"}
            </span>
          </div>
        </div>

        {/* LOGOUT */}
        <Link
          to="/login"
          className="sidebar-logout"
          onClick={() => localStorage.removeItem("role")}
        >
          <span>🚪</span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;