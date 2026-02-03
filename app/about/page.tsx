"use client";

import { useEffect } from "react";

export default function AboutPage() {
  /* ================= FADE-UP OBSERVER ================= */
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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section
        style={{
          background: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
          padding: "140px 0",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <h1
            className="fade-up"
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "24px",
              color: "#a78bfa",
            }}
          >
            Engineering software
            <br />
            that lasts
          </h1>

          <p
            className="fade-up"
            style={{
              fontSize: "20px",
              color: "#cbd5f5",
              lineHeight: 1.8,
              maxWidth: "640px",
              fontWeight: 400,
            }}
          >
            Pycore Technologies is a software engineering and technology
            consulting company dedicated to building secure, scalable,
            production-ready digital systems that grow with your business.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section style={{ padding: "120px 0", backgroundColor: "#020617" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
          }}
        >
          <div className="fade-up">
            <h2
              style={{
                fontFamily: "'Lexend', sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                marginBottom: "20px",
                color: "#a78bfa",
              }}
            >
              Who We Are
            </h2>

            <p
              style={{
                color: "#cbd5f5",
                lineHeight: 1.8,
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Pycore was founded to help businesses move beyond fragile
              software and short-term fixes. We operate at the intersection
              of engineering, architecture, and product thinking.
            </p>
          </div>

          <div className="fade-up">
            <p
              style={{
                color: "#cbd5f5",
                lineHeight: 1.8,
                fontSize: "18px",
                fontWeight: 400,
              }}
            >
              Our focus is on systems that are reliable, maintainable,
              and ready to scale. We don’t just deliver features — we build
              foundations for long-term growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW WE THINK ================= */}
     <section style={{ padding: "120px 0", backgroundColor: "#020617" }}>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 32px",
    }}
  >
    <h2
      className="fade-up"
      style={{
        fontFamily: "'Lexend', sans-serif",
        fontSize: "36px",
        fontWeight: 800,
        marginBottom: "48px",
        color: "#a78bfa",
      }}
    >
      How We Think About Engineering
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "32px",
      }}
    >
      {[
        [
          "Architecture First",
          "We design systems before writing code to avoid expensive rewrites later.",
        ],
        [
          "Scalability by Design",
          "Our systems are built to grow seamlessly with users, data, and traffic.",
        ],
        [
          "Security as a Baseline",
          "Security is integrated from the start, not tacked on after launch.",
        ],
        [
          "Clarity Over Complexity",
          "We prioritize clean, understandable solutions over unnecessary complexity.",
        ],
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="fade-up"
          style={{
            padding: "32px",
            borderRadius: "16px",
            border: "1px solid #1e293b",
            backgroundColor: "#020617",
          }}
        >
          <h3
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#a78bfa",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              color: "#cbd5f5",
              lineHeight: 1.7,
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


      {/* ================= EXPERIENCE ================= */}
      <section style={{ padding: "120px 0", backgroundColor: "#020617" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <h2
            className="fade-up"
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: "36px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#a78bfa",
            }}
          >
            Experience That Matters
          </h2>

          <p
            className="fade-up"
            style={{
              fontSize: "18px",
              color: "#cbd5f5",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            We’ve worked across industries including fintech, e-commerce,
            logistics, real estate, and internal business platforms. Our
            experience includes systems handling payments, authentication,
            admin dashboards, and customer-facing applications used by
            real users.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CTA ================= */}
      <section
        style={{
          padding: "140px 0",
          background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <h2
            className="fade-up"
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: "40px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#a78bfa",
            }}
          >
            Let’s Build Something Solid
          </h2>

          <p
            className="fade-up"
            style={{
              fontSize: "20px",
              color: "#cbd5f5",
              lineHeight: 1.8,
              marginBottom: "40px",
              fontWeight: 400,
            }}
          >
            If you’re looking for a long-term technology partner who
            values quality and clarity, we’d love to talk.
          </p>

          <a
            href="/contact"
            className="fade-up"
            style={{
              display: "inline-block",
              backgroundColor: "#a78bfa",
              color: "#020617",
              padding: "18px 48px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c4b5fd")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#a78bfa")}
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  );
}
