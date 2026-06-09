import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/stackly_logo.webp";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { to: "/dashboard",  icon: "📊", label: "Dashboard"  },
    { to: "/my-events",  icon: "📅", label: "My Events"  },
    { to: "/bookings",   icon: "🎫", label: "Bookings"   },
    { to: "/venues",     icon: "🏛️", label: "Venues"     },
    { to: "/tickets",    icon: "🎟️", label: "Tickets"    },
    { to: "/messages",   icon: "💬", label: "Messages"   },
    { to: "/reviews",    icon: "⭐", label: "Reviews"    },
    { to: "/settings",   icon: "⚙️", label: "Settings"   },
  ];

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="Stackly" />
      </div>

      {/* NAV LABEL */}
      <span className="sidebar-section-label">Main Menu</span>

      {/* NAV ITEMS */}
      <ul className="sidebar-menu">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <li key={item.to} className={isActive ? "active" : ""}>
              <Link to={item.to}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {isActive && <span className="active-indicator" />}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* BOTTOM */}
      <div className="sidebar-bottom">

        {/* USER CARD */}
        <div className="sidebar-user">
          <div className="user-avatar">A</div>
          <div className="user-info">
            <span className="user-name">Alex Johnson</span>
            <span className="user-role">User Account</span>
          </div>
        </div>

        {/* LOGOUT */}
        <Link to="/login" className="sidebar-logout">
          <span>🚪</span>
          <span>Logout</span>
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;