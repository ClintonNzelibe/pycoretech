"use client";
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#020617",
        borderTop: "1px solid #1e293b",
        padding: "56px 0",
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
        {/* BRAND */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#a78bfa",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}
        >
          Pycore Technologies
        </div>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
            lineHeight: 1.6,
            marginBottom: "32px",
            fontWeight: 400,
          }}
        >
          Engineering scalable digital products for modern businesses.
        </p>

        {/* LINKS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            flexWrap: "wrap",
            marginBottom: "32px",
          }}
        >
          {[
            ["Instagram", "https://www.instagram.com/clinton_the_developer?igsh=NW9lNG43c2R5cXQ5&utm_source=qr"],
            ["Facebook", "https://www.facebook.com/share/1K2KMFEF5c/?mibextid=wwXIfr"],
            ["Telegram", "https://t.me/pycoretech"],
            ["WhatsApp", "https://wa.me/2347034522313"],
          ].map(([name, url], i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#a78bfa",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "16px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c4b5fd")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a78bfa")}
            >
              {name}
            </a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <p
          style={{
            color: "#64748b",
            fontSize: "14px",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          © {new Date().getFullYear()} Pycore Technologies Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
