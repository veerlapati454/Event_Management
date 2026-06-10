import "./Home.css";
import { useNavigate } from "react-router-dom";

import s1 from "../../assets/s1.webp";
import s2 from "../../assets/s2.webp";
import s3 from "../../assets/s3.webp";
import s4 from "../../assets/s4.webp";
import s5 from "../../assets/s5.webp";
import s6 from "../../assets/s6.webp";
import A1 from "../../assets/A1.webp";
import A2 from "../../assets/A2.webp";
import A3 from "../../assets/A3.webp";
import A4 from "../../assets/A4.webp";
import A5 from "../../assets/A5.webp";
import A6 from "../../assets/A6.webp";
import s14 from "../../assets/s14.webp";

function Home() {
  const navigate = useNavigate();

  const goTo404 = () => {
    navigate("/404");
  };

  const services = [
    {
      // Replace s1 with your dedicated wedding image e.g. import svcWedding from "../../assets/svc-wedding.webp"
      image: A1,
      title: "Wedding Planning",
      desc: "Bespoke ceremonies crafted around your story — from intimate gatherings to grand celebrations.",
      tag: "Most Requested"
    },
    {
      // Replace s2 with your dedicated corporate image e.g. import svcCorporate from "../../assets/svc-corporate.webp"
      image: A2,
      title: "Corporate Events",
      desc: "High-impact conferences, product launches, and executive summits that leave lasting impressions.",
      tag: null
    },
    {
      // Replace s3 with your dedicated birthday image e.g. import svcBirthday from "../../assets/svc-birthday.webp"
      image: A3,
      title: "Birthday Celebrations",
      desc: "Themed, stylish, and tailored experiences for milestone birthdays at any scale.",
      tag: null
    },
    {
      // Replace s4 with your dedicated festival image e.g. import svcFestival from "../../assets/svc-festival.webp"
      image: A4,
      title: "Music Festivals",
      desc: "End-to-end production for concerts and outdoor festivals — logistics, staging, and crowd management.",
      tag: null
    },
    {
      // Replace s5 with your dedicated exhibitions image e.g. import svcExhibitions from "../../assets/svc-exhibitions.webp"
      image: A5,
      title: "Exhibitions",
      desc: "Curated showcase experiences for brands, artists, and innovators to engage their audiences.",
      tag: null
    },
    {
      // Replace s6 with your dedicated private parties image e.g. import svcParties from "../../assets/svc-parties.webp"
      image: A6,
      title: "Private Parties",
      desc: "Exclusive, invite-only gatherings with premium service, custom décor, and flawless execution.",
      tag: null
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      desc: "We learn your vision, goals, and guest experience expectations in a focused consultation."
    },
    {
      step: "02",
      title: "Concept & Proposal",
      desc: "Our team crafts a tailored event blueprint — theme, vendor selection, and full-scope planning."
    },
    {
      step: "03",
      title: "Execution",
      desc: "Seamless on-site management, coordinating every detail so you can be fully present."
    },
    {
      step: "04",
      title: "Post-Event Review",
      desc: "A wrap-up debrief with feedback collection and highlights documentation."
    }
  ];

  const testimonials = [
    {
      quote:
        "The team managed our corporate event perfectly. Professional, organized, and highly responsive throughout.",
      name: "Rajesh Kumar",
      role: "CEO, TechBridge India",
      initial: "R"
    },
    {
      quote:
        "Our wedding was beautifully planned — every detail executed exactly as we imagined. We couldn't have asked for more.",
      name: "Priya Sharma",
      role: "Architect, Hyderabad",
      initial: "P"
    },
    {
      quote:
        "Outstanding coordination and premium service. Our festival ran without a single hitch. Highly recommended.",
      name: "Arjun Reddy",
      role: "Festival Director, SoundWave",
      initial: "A"
    }
  ];

  const faqs = [
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 3–6 months in advance for large events, and 4–8 weeks for smaller gatherings. For peak seasons, earlier is always better."
    },
    {
      q: "Do you work within specific budgets?",
      a: "Absolutely. We structure our planning to match your budget without compromising on quality — we're transparent about costs from day one."
    },
    {
      q: "Can you manage destination events?",
      a: "Yes. We have experience managing events across South India, and work with a network of destination partners for out-of-city events."
    },
    {
      q: "What's included in your full-service package?",
      a: "Venue sourcing, vendor coordination, décor, catering liaison, day-of management, and post-event reporting — all under one roof."
    }
  ];

  return (
    <main className="home">
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${s14})` }}
      >
        {/* Dark overlay so text stays readable over the bg image */}
        <div className="hero-bg-overlay" aria-hidden="true"></div>
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-accent-ring" aria-hidden="true"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" aria-hidden="true"></span>
            Event Management Solutions
          </div>

          <h1 className="hero-headline">
            We craft events
            <br />
            <em>worth remembering.</em>
          </h1>

          <p className="hero-subtext">
            From intimate weddings to large-scale festivals — we bring your
            vision to life with precision, creativity, and care.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={goTo404}>
              Plan Your Event
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </button>

            <button className="btn-ghost" onClick={goTo404}>
              View Our Work
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-stack">
            <img src={s1} alt="" className="stack-img stack-back" />
            <img src={s2} alt="" className="stack-img stack-front" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          {[
            "Weddings",
            "Corporate Events",
            "Festivals",
            "Exhibitions",
            "Private Parties",
            "Product Launches",
            "Brand Activations",
            "Celebrations",
            "Weddings",
            "Corporate Events",
            "Festivals",
            "Exhibitions",
            "Private Parties",
            "Product Launches",
            "Brand Activations",
            "Celebrations"
          ].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-header">
          <span className="section-label">What We Offer</span>
          <h2>A service for every occasion</h2>
          <p>
            Whether it's a boardroom or a ballroom, we bring the same level of
            care and expertise.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.tag && (
                <span className="service-tag">{service.tag}</span>
              )}

              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <button className="card-link" onClick={goTo404}>
                  Explore <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="featured-events">
        <div className="section-header">
          <span className="section-label">Our Work</span>
          <h2>Events that set the standard</h2>
        </div>

        <div className="events-bento">
          <div className="event-tile tile-large">
            <img src={s3} alt="Luxury Wedding event décor" />
            <div className="tile-overlay">
              <span className="tile-category">Wedding</span>
              <h3>Luxury Wedding — The Oberoi, Hyderabad</h3>
              <p>
                An elevated 3-day ceremony with 800 guests, custom floral
                installations, and live orchestration.
              </p>
            </div>
          </div>

          <div className="event-tile tile-small">
            <img src={s4} alt="Corporate summit stage" />
            <div className="tile-overlay">
              <span className="tile-category">Corporate</span>
              <h3>TechSummit 2024</h3>
              <p>
                1,200-delegate conference with keynotes, panels, and networking
                activations.
              </p>
            </div>
          </div>

          <div className="event-tile tile-small">
            <img src={s5} alt="Music festival crowd" />
            <div className="tile-overlay">
              <span className="tile-category">Festival</span>
              <h3>SoundWave Music Festival</h3>
              <p>
                A 2-day outdoor festival with 15 artists, 8,000 attendees, and
                zero incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <div className="section-header light">
          <span className="section-label">How It Works</span>
          <h2>From brief to brilliant</h2>
          <p>
            A clear, collaborative process that keeps you in control at every
            stage.
          </p>
        </div>

        <div className="process-track">
          {process.map((item, i) => (
            <div key={i} className="process-step">
              <div className="step-number">{item.step}</div>

              <div className="step-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {i < process.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us">
        <div className="why-inner">
          <div className="why-text">
            <span className="section-label">Why Choose Us</span>

            <h2>Your trusted event partner in South India</h2>

            <p>
              We're not just planners — we're storytellers, logistics experts,
              and creative directors who treat every event as our own.
            </p>

            <button className="btn-primary" onClick={goTo404}>
              Talk to Us <span>→</span>
            </button>
          </div>

          <div className="why-features">
            {[
              {
                icon: "🎯",
                title: "Precision Planning",
                desc: "Every detail tracked and owned."
              },
              {
                icon: "🤝",
                title: "Dedicated Manager",
                desc: "One point of contact from start to finish."
              },
              {
                icon: "🌐",
                title: "Vendor Network",
                desc: "300+ vetted vendors."
              },
              {
                icon: "💡",
                title: "Creative Direction",
                desc: "Custom themes and branding."
              },
              {
                icon: "📋",
                title: "Transparent Pricing",
                desc: "No hidden costs."
              },
              {
                icon: "🛡️",
                title: "Contingency Ready",
                desc: "Always prepared with backup plans."
              }
            ].map((f, i) => (
              <div key={i} className="why-feature">
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-header">
          <span className="section-label">Client Reviews</span>
          <h2>Straight from the people we've served</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>

              <blockquote>"{t.quote}"</blockquote>

              <div className="testimonial-author">
                <div className="author-avatar">{t.initial}</div>

                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="section-header light">
          <span className="section-label">FAQ</span>
          <h2>Answers to common questions</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-inner">
          <div className="cta-glow"></div>

          <span className="section-label light">Let's Begin</span>

          <h2>Ready to create something extraordinary?</h2>

          <p>
            Book a free 30-minute consultation and let's start turning your
            vision into an unforgettable experience.
          </p>

          <div className="cta-actions">
            <button className="btn-primary large" onClick={goTo404}>
              Book Free Consultation
              <span>→</span>
            </button>

            <p className="cta-note">
              No commitment required. Response within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;