import { useState, useEffect } from "react";
import Sidebar from "../SideBar/SideBar";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900 && sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <div className={`admin-layout ${sidebarOpen ? "sidebar-open" : ""}`}>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="admin-content">

        {/* MOBILE TOPBAR */}
        <div className="mobile-topbar">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            ☰
          </button>
          <span className="mobile-topbar-title">Admin Panel</span>
        </div>

        {/* WELCOME BANNER */}
        <div className="admin-banner">
          <div className="admin-banner-left">
            <div className="admin-eyebrow">
              <span className="status-dot"></span>
              Admin Panel
            </div>
            <h1>Admin Dashboard 🚀</h1>
            <p>Manage events, venues, bookings, users and platform analytics.</p>
          </div>
          <div className="admin-banner-actions">
            <button className="btn-secondary">Export Report</button>
          </div>
        </div>

        {/* STATS */}
        <div className="admin-stats">
          {[
            { icon: "👥", value: "12,458", label: "Total Users",  badge: "+124 this week",  type: "up"      },
            { icon: "📅", value: "248",    label: "Total Events", badge: "+12 new",          type: "up"      },
            { icon: "🎫", value: "5,821",  label: "Bookings",     badge: "+340 this month",  type: "up"      },
            { icon: "💰", value: "₹18.6L", label: "Revenue",      badge: "+8.2% growth",    type: "up"      },
            { icon: "🏛️", value: "34",     label: "Venues",       badge: "3 pending",        type: "neutral" },
            { icon: "⭐", value: "4.8",    label: "Avg Rating",   badge: "1,240 reviews",    type: "info"    },
          ].map((s, i) => (
            <div className="admin-stat-card" key={i}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-info">
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </div>
              <span className={`stat-badge ${s.type}`}>{s.badge}</span>
            </div>
          ))}
        </div>

        

          

        {/* ROW 2 — Popular Events + Venue Performance */}
        <div className="admin-grid">

          {/* POPULAR EVENTS */}
          <div className="admin-card">
            <div className="card-header">
              <h3>Popular Events</h3>
              <a href="#" className="card-link">View All →</a>
            </div>
            {[
              { name: "Music Festival 2026", regs: 2451, cap: 3000, tag: "Music",      color: "tag-cyan"   },
              { name: "Wedding Expo",         regs: 1832, cap: 2500, tag: "Lifestyle",  color: "tag-pink"   },
              { name: "Tech Summit",          regs: 1516, cap: 2000, tag: "Technology", color: "tag-violet" },
              { name: "Startup Meetup",       regs: 980,  cap: 1500, tag: "Business",   color: "tag-green"  },
            ].map((ev, i) => (
              <div className="popular-event" key={i}>
                <div className="popular-event-top">
                  <div>
                    <span className="popular-event-name">{ev.name}</span>
                    <span className={`event-tag ${ev.color}`}>{ev.tag}</span>
                  </div>
                  <span className="popular-event-regs">{ev.regs.toLocaleString()} <span>registered</span></span>
                </div>
                <div className="event-progress-bar">
                  <div style={{ width: `${Math.round((ev.regs / ev.cap) * 100)}%` }}></div>
                </div>
                <div className="event-progress-meta">
                  <span>{Math.round((ev.regs / ev.cap) * 100)}% capacity</span>
                  <span>{(ev.cap - ev.regs).toLocaleString()} seats left</span>
                </div>
              </div>
            ))}
          </div>

          {/* VENUE PERFORMANCE */}
          <div className="admin-card">
            <div className="card-header">
              <h3>Venue Performance</h3>
              <a href="#" className="card-link">Manage →</a>
            </div>
            {[
              { name: "Royal Palace Hall", pct: 89, bookings: 142, status: "Active"      },
              { name: "Convention Center", pct: 76, bookings: 118, status: "Active"      },
              { name: "Open Arena",        pct: 68, bookings: 96,  status: "Active"      },
              { name: "City Center Hub",   pct: 54, bookings: 74,  status: "Maintenance" },
            ].map((v, i) => (
              <div className="venue-block" key={i}>
                <div className="venue-row">
                  <div>
                    <span className="venue-name">{v.name}</span>
                    <span className={`venue-status ${v.status === "Active" ? "v-active" : "v-maintenance"}`}>{v.status}</span>
                  </div>
                  <div className="venue-right">
                    <span className="venue-bookings">{v.bookings} bookings</span>
                    <span className="venue-pct">{v.pct}%</span>
                  </div>
                </div>
                <div className="progress-track">
                  <div
                    className={`progress-fill ${v.pct >= 80 ? "fill-high" : v.pct >= 60 ? "fill-mid" : "fill-low"}`}
                    style={{ width: `${v.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ROW 3 — Recent Bookings Table */}
        <div className="admin-card bookings-full">
          <div className="card-header">
            <h3>Recent Bookings</h3>
            <div className="table-actions">
              <input className="table-search" placeholder="🔍  Search bookings..." />
              <a href="#" className="card-link">Export →</a>
            </div>
          </div>
          <div className="table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Event</th>
                  <th>Venue</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "BK-001", user: "Rahul Sharma", event: "Tech Summit",     venue: "Convention Hall", date: "15 Jun 2026", amt: "₹3,200", status: "Confirmed", cls: "status-confirmed" },
                  { id: "BK-002", user: "Sneha Reddy",  event: "Wedding Expo",    venue: "Royal Palace",    date: "22 Jun 2026", amt: "₹5,500", status: "Pending",   cls: "status-pending"   },
                  { id: "BK-003", user: "Arjun Kumar",  event: "Music Festival",  venue: "Open Arena",      date: "30 Jun 2026", amt: "₹1,800", status: "Confirmed", cls: "status-confirmed" },
                  { id: "BK-004", user: "Priya Singh",  event: "Business Meetup", venue: "City Center",     date: "04 Jul 2026", amt: "₹800",   status: "Confirmed", cls: "status-confirmed" },
                  { id: "BK-005", user: "Karan Mehta",  event: "Food Carnival",   venue: "City Square",     date: "10 Jul 2026", amt: "₹600",   status: "Cancelled", cls: "status-cancelled" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="td-id">{row.id}</td>
                    <td className="td-user">{row.user}</td>
                    <td>{row.event}</td>
                    <td className="td-muted">{row.venue}</td>
                    <td className="td-muted">{row.date}</td>
                    <td className="td-amount">{row.amt}</td>
                    <td><span className={`status-pill ${row.cls}`}>{row.status}</span></td>
                    <td>
                      <div className="row-actions">
                        <button className="btn-ghost small">View</button>
                        <button className="btn-ghost small danger">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROW 4 — Quick Actions + Top Users */}
        <div className="admin-grid bottom-grid">

          {/* QUICK ACTIONS */}
          <div className="admin-card">
            <div className="card-header"><h3>Quick Actions</h3></div>
            <div className="quick-actions-grid">
              {[
                { icon: "➕", label: "Add Event"     },
                { icon: "🏛️", label: "Add Venue"     },
                { icon: "👤", label: "Manage Users"  },
                { icon: "📊", label: "Analytics"     },
                { icon: "💬", label: "Broadcast Msg" },
                { icon: "⚙️", label: "Settings"      },
              ].map((a, i) => (
                <button className="quick-action-btn" key={i}>
                  <span className="qa-icon">{a.icon}</span>
                  <span>{a.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* TOP USERS */}
          <div className="admin-card">
            <div className="card-header">
              <h3>Top Users</h3>
              <a href="#" className="card-link">View All →</a>
            </div>
            {[
              { name: "Rahul Sharma", bookings: 12, spent: "₹24,400", avatar: "R" },
              { name: "Sneha Reddy",  bookings: 9,  spent: "₹18,200", avatar: "S" },
              { name: "Arjun Kumar",  bookings: 8,  spent: "₹15,800", avatar: "A" },
              { name: "Priya Singh",  bookings: 6,  spent: "₹11,200", avatar: "P" },
            ].map((u, i) => (
              <div className="top-user-row" key={i}>
                <div className="top-user-avatar">{u.avatar}</div>
                <div className="top-user-info">
                  <span className="top-user-name">{u.name}</span>
                  <span className="top-user-sub">{u.bookings} bookings</span>
                </div>
                <span className="top-user-spent">{u.spent}</span>
              </div>
            ))}
          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminDashboard;