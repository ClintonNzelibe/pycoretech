"use client";

export default function ProductsPage() {
  return (
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
        }}
      >
        {/* ===== HEADER ===== */}
        <h2
          style={{
            fontFamily: "'Lexend', sans-serif",
            fontSize: "40px",
            fontWeight: 800,
            marginBottom: "16px",
            color: "#a78bfa",
            letterSpacing: "-0.02em",
          }}
        >
          Selected Projects
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#cbd5f5",
            maxWidth: "640px",
            lineHeight: 1.8,
            marginBottom: "64px",
            fontWeight: 400,
          }}
        >
          A snapshot of real platforms and digital products we’ve designed
          and engineered for businesses. Each project demonstrates our focus
          on usability, scalability, and professional design.
        </p>

        {/* ===== PROJECT GRID ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {[
            {
              title: "Cash4Us",
              desc: "Financial services platform focused on accessibility, secure transactions, and reliability.",
              link: "https://cash4us.org",
            },
            {
              title: "Pycore Technologies",
              desc: "Corporate website and platform representing our engineering and technology consulting services.",
              link: "https://pycoretech.com",
            },
            {
              title: "Ekenedilichukwu Global ",
              desc: "Corporate business website focused on Electrical, security, solar, and interior solutions.",
              link: "https://ekenedilichukwuglobalconceptngltd.com",
            },
          ].map((project, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #1e293b",
                borderRadius: "16px",
                padding: "32px",
                backgroundColor: "#020617",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(167,139,250,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontFamily: "'Lexend', sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  marginBottom: "14px",
                  color: "#a78bfa",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#cbd5f5",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                  fontWeight: 400,
                }}
              >
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#a78bfa",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c4b5fd")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a78bfa")}
              >
                Visit project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
