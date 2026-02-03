"use client";

import { useEffect,useState } from "react";



export default function HomePage() {
  // Fade-up animation
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  const services = [
    {
      title: "Web Applications",
      desc: "Modern, responsive web applications built for scale.",
      icon: "🌐",
    },
    {
      title: "Mobile Applications",
      desc: "High-quality iOS and Android mobile applications.",
      icon: "📱",
    },
    {
      title: "Backend Systems & APIs",
      desc: "Secure and scalable backend architectures.",
      icon: "🧠",
    },
    {
      title: "Payments & Integrations",
      desc: "Payment gateways and third-party integrations.",
      icon: "💳",
    },
    {
      title: "E-commerce Platforms",
      desc: "Full-featured online stores and marketplaces.",
      icon: "🛒",
    },
    {
      title: "Admin Dashboards & Analytics",
      desc: "Data dashboards and business intelligence tools.",
      icon: "📊",
    },
    {
      title: "AI & Automation Tools",
      desc: "Workflow automation and intelligent systems.",
      icon: "🤖",
    },
    {
      title: "Cloud & DevOps Infrastructure",
      desc: "CI/CD pipelines and scalable cloud deployments.",
      icon: "☁️",
    },
  ];

  return (
    <>
{/* ================= HERO ================= */}
<section
  style={{
    background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
    padding: "140px 0",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "64px",
      alignItems: "center",
    }}
  >
    {/* ===== LEFT: TEXT ===== */}
    <div>
      <h1
        style={{
          fontSize: "56px",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: "28px",
          letterSpacing: "-0.02em",
        }}
      >
        We build reliable digital products
        <br />
        for growing businesses
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.75,
          color: "#cbd5f5",
          marginBottom: "44px",
          maxWidth: "520px",
          fontWeight: 400,
        }}
      >
        Pycore Technologies designs and develops secure web and mobile
        applications that help businesses operate efficiently,
        scale confidently, and grow without technical friction.
      </p>

      <a
        href="/contact"
        style={{
          display: "inline-block",
          backgroundColor: "#a78bfa",
          color: "#020617",
          padding: "16px 42px",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Start a Project
      </a>
    </div>

    {/* ===== RIGHT: VISUAL ===== */}
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
      }}
    >
      <img
        src="/illustrations/hero3.svg"
        alt="Technology illustration"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  </div>
</section>
{/* ================= WHAT WE BUILD ================= */}
<section
  id="services"
  style={{
    backgroundColor: "#020617",
    padding: "120px 0",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        fontWeight: 800,
        marginBottom: "16px",
        letterSpacing: "-0.02em",
      }}
    >
      What We Build
    </h2>

    <p
      style={{
        fontSize: "18px",
        color: "#cbd5f5",
        maxWidth: "720px",
        marginBottom: "64px",
        lineHeight: 1.75,
        fontWeight: 400,
      }}
    >
      We design and engineer digital products that solve real business
      problems from customer-facing applications to complex internal
      systems built for performance, security, and growth.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "32px",
      }}
    >
      {services.map((item) => (
        <div
          key={item.title}
          className="fade-up"
          style={{
            backgroundColor: "#020617",
            border: "1px solid #1e293b",
            borderRadius: "16px",
            padding: "36px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.borderColor = "#a78bfa";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(167,139,250,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#1e293b";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "rgba(167,139,250,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            {item.icon}
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: "#cbd5f5",
              lineHeight: 1.65,
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= HOW WE WORK ================= */}
<section
  style={{
    backgroundColor: "#020617",
    padding: "120px 0",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        fontWeight: 800,
        marginBottom: "64px",
        letterSpacing: "-0.02em",
      }}
    >
      How We Work
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "40px",
      }}
    >
      {[
        [
          "01",
          "Discovery",
          "We start by understanding your business, goals, and challenges to ensure we build the right solution.",
        ],
        [
          "02",
          "Design",
          "We plan system architecture and user experience with scalability, clarity, and usability in mind.",
        ],
        [
          "03",
          "Build",
          "We develop clean, secure, and production-ready software using proven technologies and best practices.",
        ],
        [
          "04",
          "Launch & Support",
          "We deploy, monitor, and support your product to ensure stability and long-term growth.",
        ],
      ].map(([step, title, desc]) => (
        <div key={step} className="fade-up">
          <div
            style={{
              color: "#a78bfa",
              fontSize: "28px",
              fontWeight: 800,
              marginBottom: "14px",
              letterSpacing: "-0.01em",
            }}
          >
            {step}
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              color: "#cbd5f5",
              lineHeight: 1.7,
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ================= FEATURED PROJECT ================= */}
<section
  style={{
    padding: "120px 0",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
    }}
  >
    <h2
      style={{
        fontSize: "40px",
        fontWeight: 800,
        color: "#a78bfa",
        marginBottom: "64px",
        letterSpacing: "-0.02em",
      }}
    >
      Featured Project
    </h2>

    <div
      className="fade-up"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "48px",
        backgroundColor: "#020617",
        padding: "48px",
        borderRadius: "20px",
      }}
    >
      <div style={{
  background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "20px",
  height: "260px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#94a3b8",
  fontSize: "14px",
}}>
  Live Project Preview
</div>


      <div>
        <h3
          style={{
            fontSize: "28px",
            fontWeight: 700,
            marginBottom: "20px",
            letterSpacing: "-0.01em",
          }}
        >
          Ekenedilichukwu Global Concept Nig. Ltd
        </h3>

        <p
          style={{
            color: "#cbd5f5",
            fontSize: "18px",
            marginBottom: "32px",
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          A corporate business website designed and developed for a Nigerian
          services company, focused on Electrical, security, solar, and interior solutions, design,
          and a professional online presence.
        </p>

        <a
          href="https://ekenedilichukwuglobalconceptngltd.com/"
          target="_blank"
          style={{
            display: "inline-block",
            backgroundColor: "#a78bfa",
            color: "#020617",
            padding: "14px 34px",
            borderRadius: "12px",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          View Live Project
        </a>
      </div>
    </div>
  </div>
</section>
{/* ================= TESTIMONIALS ================= */}
<section
  style={{
    padding: "120px 0",
    backgroundColor: "#020617",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
    <h2
      style={{
        fontSize: "40px",
        fontWeight: 800,
        marginBottom: "64px",
        letterSpacing: "-0.02em",
      }}
    >
      What Clients Say
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "32px",
      }}
    >
      {[
        {
          name: "Ekenedilichukwu Global Concept",
          role: "Business Owner",
          text:
            "Pycore delivered a clean, professional website that truly reflects our brand. Communication was clear throughout the process, and the final result exceeded our expectations.",
        },
        {
          name: "Uchenna Uzoagbado",
          role: " Manager",
          text:
            "They understand scalable architecture and clean systems. Our backend and admin dashboard were delivered on time and built with long-term growth in mind.",
        },
        {
          name: "Ifeoma Okonkwo",
          role: "C.E.O of Cash4us groups",
          text:
            "Professional, reliable, and technically solid. Pycore helped us seamlessly integrate payments and streamline critical workflows without any disruption.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="fade-up"
          style={{
            position: "relative",
            border: "1px solid #1e293b",
            borderTop: "3px solid #a78bfa",
            borderRadius: "16px",
            padding: "36px",
            backgroundColor: "#020617",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(167,139,250,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Quote Icon */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              fontSize: "48px",
              color: "rgba(167,139,250,0.15)",
              lineHeight: 1,
            }}
          >
            “
          </div>

          <p
            style={{
              color: "#cbd5f5",
              fontSize: "17px",
              lineHeight: 1.75,
              marginBottom: "32px",
              fontWeight: 400,
            }}
          >
            {item.text}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Avatar */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "rgba(167,139,250,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                color: "#a78bfa",
              }}
            >
              {item.name.charAt(0)}
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.name}
              </strong>
              <span
                style={{
                  color: "#94a3b8",
                  fontSize: "14px",
                }}
              >
                {item.role}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= IDEAL CLIENTS ================= */}
<section
  style={{
    padding: "120px 0",
    backgroundColor: "#020617",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "64px",
      alignItems: "center",
    }}
  >
    {/* ===== LEFT: TEXT ===== */}
    <div>
      <h2
        style={{
          fontSize: "40px",
          fontWeight: 800,
          marginBottom: "24px",
          letterSpacing: "-0.02em",
        }}
      >
        Who We Work With
      </h2>

      <p
        style={{
          color: "#cbd5f5",
          fontSize: "18px",
          lineHeight: 1.75,
          marginBottom: "32px",
          fontWeight: 400,
        }}
      >
        We partner with teams and businesses that view technology as a
        strategic asset  not just a short-term solution.
      </p>

      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {[
          "Startups building MVPs or scaling existing products",
          "Small and medium businesses improving digital operations",
          "Enterprises requiring secure, well-structured systems",
          "Non-technical founders seeking clear technical guidance",
          "Teams replacing or modernizing legacy software",
        ].map((item, i) => (
          <div
            key={i}
            className="fade-up"
            style={{
              padding: "14px 18px",
              borderRadius: "10px",
              border: "1px solid #1e293b",
              color: "#cbd5f5",
              backgroundColor: "#020617",
              fontSize: "16px",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* ===== RIGHT: IMAGES ===== */}
    <div
      className="fade-up"
      style={{
        position: "relative",
        width: "100%",
        height: "420px",
      }}
    >
      {/* Main image */}
      <img
        src="https://images.unsplash.com/photo-1573164574511-73c773193279"
        alt="Team collaboration"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "20px",
          border: "1px solid #1e293b",
        }}
      />

      {/* Accent image */}
      <img
        src="https://images.unsplash.com/photo-1590650153855-d9e808231d41"
        alt="Planning and strategy"
        style={{
          position: "absolute",
          bottom: "-32px",
          right: "-32px",
          width: "180px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "16px",
          border: "1px solid #1e293b",
          backgroundColor: "#020617",
        }}
      />
    </div>
  </div>
</section>

{/* ================= WHY CHOOSE PYCORE ================= */}
<section
  style={{
    padding: "120px 0",
    backgroundColor: "#020617",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "64px",
      alignItems: "center",
    }}
  >
    {/* ===== LEFT CONTENT ===== */}
    <div>
      <h2
        style={{
          fontSize: "40px",
          fontWeight: 800,
          marginBottom: "24px",
          letterSpacing: "-0.02em",
        }}
      >
        Why Choose Pycore
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#cbd5f5",
          lineHeight: 1.75,
          marginBottom: "24px",
          fontWeight: 400,
        }}
      >
        We don’t just deliver features, we build systems that are reliable,
        secure, and designed to grow alongside your business.
      </p>

      <p
        style={{
          fontSize: "18px",
          color: "#cbd5f5",
          lineHeight: 1.75,
          fontWeight: 400,
        }}
      >
        Our focus is long-term value, clear thinking, and engineering
        decisions that won’t hold you back in the future.
      </p>
    </div>

    {/* ===== RIGHT PILLARS ===== */}
    <div
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      {[
        [
          "01",
          "Production-First Engineering",
          "We build for real users, real traffic, and real business demands from day one.",
        ],
        [
          "02",
          "Scalable Architecture",
          "Systems are designed to adapt and expand without costly rewrites.",
        ],
        [
          "03",
          "Security by Design",
          "Security is built into every layer, not added as an afterthought.",
        ],
        [
          "04",
          "Clear Communication",
          "We explain technical decisions in straightforward, honest language.",
        ],
        [
          "05",
          "Long-Term Partnership",
          "We stay involved beyond launch to support improvements and growth.",
        ],
      ].map(([num, title, desc]) => (
        <div
          key={num}
          className="fade-up"
          style={{
            display: "flex",
            gap: "20px",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
            backgroundColor: "#020617",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              fontWeight: 800,
              color: "#a78bfa",
              minWidth: "40px",
              letterSpacing: "-0.01em",
            }}
          >
            {num}
          </div>

          <div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                marginBottom: "6px",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h3>

            <p
              style={{
                color: "#cbd5f5",
                lineHeight: 1.65,
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ================= PRICING PHILOSOPHY ================= */}
<section
  style={{
    padding: "120px 0",
    backgroundColor: "#020617",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "64px",
      alignItems: "center",
    }}
  >
    {/* ===== RIGHT: PRICING PRINCIPLES ===== */}
    <div
      style={{
        display: "grid",
        gap: "24px",
      }}
    >
      {[
        [
          "Project-Based Pricing",
          "Each project is priced based on scope, complexity, and business objectives.",
        ],
        [
          "No One-Size-Fits-All",
          "We don’t reuse templates or apply generic pricing models.",
        ],
        [
          "Built for Longevity",
          "Our work prioritizes maintainability, scalability, and security.",
        ],
        [
          "Clear Scope & Deliverables",
          "You receive transparent milestones and clearly defined outcomes.",
        ],
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="fade-up"
          style={{
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
            backgroundColor: "#020617",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginBottom: "8px",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              color: "#cbd5f5",
              lineHeight: 1.65,
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {desc}
          </p>
        </div>
      ))}
    </div>

    {/* ===== LEFT: STATEMENT ===== */}
    <div>
      <h2
        style={{
          fontSize: "40px",
          fontWeight: 800,
          marginBottom: "24px",
          letterSpacing: "-0.02em",
        }}
      >
        Pricing Philosophy
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#cbd5f5",
          lineHeight: 1.75,
          marginBottom: "24px",
          fontWeight: 400,
        }}
      >
        We don’t price projects based on shortcuts or assumptions. Our pricing
        reflects careful planning, sound engineering decisions, and long-term
        reliability.
      </p>

      <p
        style={{
          fontSize: "18px",
          color: "#cbd5f5",
          lineHeight: 1.75,
          fontWeight: 400,
        }}
      >
        Every project is scoped individually to ensure it is built properly 
        not rushed.
      </p>
    </div>
  </div>
</section>
{/* ================= FAQs ================= */}
<section
  style={{
    padding: "120px 0",
    backgroundColor: "#020617",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px" }}>
    <h2
      style={{
        fontSize: "40px",
        fontWeight: 800,
        marginBottom: "64px",
        letterSpacing: "-0.02em",
      }}
    >
      Frequently Asked Questions
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px",
      }}
    >
      {[
        [
          "How long does a typical project take?",
          "Timelines vary by scope and complexity. Most projects run from a few weeks to a few months, with clear milestones agreed upon before development begins.",
        ],
        [
          "Do you provide support after launch?",
          "Yes. We offer ongoing maintenance, updates, and technical support to keep your product stable and scalable.",
        ],
        [
          "Can you work with existing systems?",
          "Absolutely. We can improve, refactor, or extend existing platforms while preserving system integrity.",
        ],
        [
          "Do I need technical knowledge to work with you?",
          "No. We guide you through every step and communicate clearly without unnecessary technical jargon.",
        ],
      ].map(([question, answer], i) => (
        <div
          key={i}
          className="fade-up"
          style={{
            padding: "28px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
            backgroundColor: "#020617",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginBottom: "12px",
              letterSpacing: "-0.01em",
            }}
          >
            {question}
          </h3>
          <p
            style={{
              color: "#cbd5f5",
              lineHeight: 1.65,
              fontSize: "16px",
            }}
          >
            {answer}
          </p>
        </div>
      ))}

      {/* CTA CARD */}
      <a
        href="https://wa.me/2347034522313"
        target="_blank"
        rel="noopener noreferrer"
        className="fade-up"
        style={{
          gridColumn: "span 2", // 👈 THIS IS THE ONLY CHANGE
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #1e293b",
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(2,6,23,1))",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "36px", marginBottom: "16px" }}>💬</div>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}
        >
          Still have questions?
        </h3>

        <p
          style={{
            color: "#cbd5f5",
            fontSize: "16px",
            lineHeight: 1.6,
            marginBottom: "20px",
          }}
        >
          Chat directly with us on WhatsApp and get fast, clear answers about your
          project.
        </p>

        <span
          style={{
            alignSelf: "flex-start",
            padding: "12px 18px",
            borderRadius: "10px",
            backgroundColor: "#22c55e",
            color: "#020617",
            fontWeight: 700,
            fontSize: "15px",
          }}
        >
          Chat on WhatsApp →
        </span>
      </a>
    </div>
  </div>
</section>


{/* ================= CLIENTS ================= */}
<section
  style={{
    padding: "80px 0",
    backgroundColor: "#020617",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 32px",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "32px",
        fontWeight: 800,
        marginBottom: "32px",
        letterSpacing: "-0.02em",
      }}
    >
      Trusted By
    </h2>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "48px",
        flexWrap: "wrap",
        color: "#94a3b8",
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: 1.5,
      }}
    >
      <span>Fintech</span>
      <span>E-commerce</span>
      <span>Logistics</span>
      <span>Real Estate</span>
      <span>Healthcare</span>
    </div>
  </div>
</section>

{/* ================= FINAL CTA ================= */}
<section
  style={{
    padding: "140px 0",
    background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
    textAlign: "center",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 32px",
    }}
  >
    <h2
      style={{
        fontSize: "44px",
        fontWeight: 800,
        marginBottom: "24px",
        letterSpacing: "-0.02em",
      }}
    >
      Ready to Build Something That Lasts?
    </h2>

    <p
      style={{
        fontSize: "20px",
        color: "#cbd5f5",
        lineHeight: 1.75,
        marginBottom: "40px",
        fontWeight: 400,
      }}
    >
      Start with a conversation. We’ll review your idea, understand your goals,
      and help you determine the best technical approach with no obligation.
    </p>

    <a
      href="/contact"
      style={{
        display: "inline-block",
        backgroundColor: "#a78bfa",
        color: "#020617",
        padding: "18px 48px",
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      Start a Conversation
    </a>
  </div>
</section>



    </>
  );
}


