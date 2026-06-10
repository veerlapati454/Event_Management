import { useState, useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import "./Dashboard.css";

function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900 && sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    /* CHANGED: Dynamic class added here to handle responsive layouts */
    <div className={`dashboard-layout ${sidebarOpen ? "sidebar-open" : ""}`}>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="dashboard-content">

        {/* MOBILE TOPBAR */}
        <div className="mobile-topbar">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            ☰
          </button>
          <span className="mobile-topbar-title">Dashboard</span>
        </div>

        {/* WELCOME BANNER */}
        <div className="welcome-banner">
          <div className="welcome-text">
            <div className="welcome-eyebrow">
              <span className="status-dot"></span>
              Dashboard
            </div>
            <h1>Welcome Back 👋</h1>
            <p>Manage your events, bookings and tickets from a single dashboard.</p>
          </div>
          <div className="welcome-actions">
            <button className="btn-secondary">Browse Events</button>
            <button className="btn-primary">+ New Booking</button>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎟️</div>
            <div className="stat-info">
              <h2>24</h2>
              <p>Total Bookings</p>
            </div>
            <span className="stat-badge up">+3 this week</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-info">
              <h2>8</h2>
              <p>Upcoming Events</p>
            </div>
            <span className="stat-badge up">Next in 3 days</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎫</div>
            <div className="stat-info">
              <h2>15</h2>
              <p>Active Tickets</p>
            </div>
            <span className="stat-badge neutral">2 expiring soon</span>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✉️</div>
            <div className="stat-info">
              <h2>4</h2>
              <p>Messages</p>
            </div>
            <span className="stat-badge alert">2 unread</span>
          </div>
        </div>

        {/* TWO-COL GRID */}
        <div className="dashboard-grid">

          {/* UPCOMING EVENTS */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Upcoming Events</h3>
              <a href="#" className="card-link">View All →</a>
            </div>
            {[
              { name: "Tech Summit 2026",  date: "15 Jun", tag: "Technology", color: "tag-violet" },
              { name: "Wedding Expo",       date: "22 Jun", tag: "Lifestyle",  color: "tag-pink"   },
              { name: "Music Festival",     date: "30 Jun", tag: "Music",      color: "tag-cyan"   },
              { name: "Startup Meetup",     date: "04 Jul", tag: "Business",   color: "tag-green"  },
            ].map((ev, i) => (
              <div className="event-row" key={i}>
                <div className="event-row-left">
                  <div className="event-date-block">
                    <span className="event-day">{ev.date.split(" ")[0]}</span>
                    <span className="event-month">{ev.date.split(" ")[1]}</span>
                  </div>
                  <div>
                    <span className="event-name">{ev.name}</span>
                    <span className={`event-tag ${ev.color}`}>{ev.tag}</span>
                  </div>
                </div>
                <button className="btn-ghost">View</button>
              </div>
            ))}
          </div>

          {/* RECENT ACTIVITY */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recent Activity</h3>
              <a href="#" className="card-link">See All →</a>
            </div>
            {[
              { icon: "🏛️", action: "Venue Booked",       sub: "Convention Hall · Tech Summit",   time: "2h ago",  type: "success" },
              { icon: "🎫", action: "Ticket Confirmed",    sub: "Ticket #TK-4821 issued",           time: "5h ago",  type: "success" },
              { icon: "⭐", action: "Review Submitted",    sub: "Wedding Expo — 5 stars",           time: "1d ago",  type: "info"    },
              { icon: "📝", action: "Event Registered",    sub: "Startup Meetup · Seat A-14",       time: "2d ago",  type: "info"    },
              { icon: "💳", action: "Payment Processed",   sub: "₹2,400 · Music Festival",          time: "3d ago",  type: "neutral" },
            ].map((act, i) => (
              <div className="activity-row" key={i}>
                <div className={`activity-icon-wrap type-${act.type}`}>{act.icon}</div>
                <div className="activity-body">
                  <span className="activity-title">{act.action}</span>
                  <span className="activity-sub">{act.sub}</span>
                </div>
                <span className="activity-time">{act.time}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RECENT BOOKINGS TABLE */}
        <div className="dashboard-card bookings-card">
          <div className="card-header">
            <h3>Recent Bookings</h3>
            <a href="#" className="card-link">Manage All →</a>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { event: "Tech Summit",    venue: "Convention Hall", date: "15 Jun 2026", amount: "₹3,200", status: "Confirmed", cls: "status-confirmed" },
                  { event: "Music Festival", venue: "Open Arena",      date: "30 Jun 2026", amount: "₹1,800", status: "Confirmed", cls: "status-confirmed" },
                  { event: "Wedding Expo",   venue: "Royal Palace",    date: "22 Jun 2026", amount: "₹5,500", status: "Pending",   cls: "status-pending"   },
                  { event: "Startup Meetup", venue: "Tech Hub",        date: "04 Jul 2026", amount: "₹800",   status: "Confirmed", cls: "status-confirmed" },
                  { event: "Food Carnival",  venue: "City Square",     date: "10 Jul 2026", amount: "₹600",   status: "Cancelled", cls: "status-cancelled" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="td-event">{row.event}</td>
                    <td>{row.venue}</td>
                    <td className="td-muted">{row.date}</td>
                    <td className="td-amount">{row.amount}</td>
                    <td><span className={`status-pill ${row.cls}`}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTTOM ROW: Quick Actions + Recommended Events */}
        <div className="dashboard-grid bottom-grid">

          {/* QUICK ACTIONS */}
          <div className="dashboard-card quick-actions-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="quick-actions-grid">
              {[
                { icon: "🔍", label: "Browse Events"    },
                { icon: "📋", label: "My Bookings"      },
                { icon: "🎫", label: "My Tickets"       },
                { icon: "⭐", label: "My Reviews"       },
                { icon: "🏛️", label: "Explore Venues"  },
                { icon: "💬", label: "Messages"         },
              ].map((a, i) => (
                <button className="quick-action-btn" key={i}>
                  <span className="qa-icon">{a.icon}</span>
                  <span>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RECOMMENDED */}
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recommended for You</h3>
              <a href="#" className="card-link">Explore →</a>
            </div>
            {[
              { name: "Art & Culture Fair",  venue: "City Museum",    price: "₹400",  tag: "Art"      },
              { name: "Dev Conference 2026", venue: "Tech Park",      price: "₹1,200", tag: "Tech"    },
              { name: "Jazz Night",          venue: "Blue Room Café", price: "₹600",  tag: "Music"    },
            ].map((r, i) => (
              <div className="recommend-row" key={i}>
                <div className="recommend-info">
                  <span className="recommend-name">{r.name}</span>
                  <span className="recommend-venue">{r.venue}</span>
                </div>
                <div className="recommend-right">
                  <span className="recommend-price">{r.price}</span>
                  <button className="btn-ghost small">Book</button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>
    </div>
  );
}

export default UserDashboard;