"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navLinkStyle = {
    color: "#a78bfa",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    letterSpacing: "0.2px",
  };

  return (
    <div
      style={{
        backgroundColor: "#020617",
        borderBottom: "1px solid #6d28d9",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "24px",
            fontWeight: 600,
            color: "#a78bfa",
            letterSpacing: "-0.2px",
          }}
        >
          <img
            src="/illustrations/logo.jpeg"
            alt="Pycore logo"
            style={{
              width: "34px",
              height: "34px",
              objectFit: "contain",
            }}
          />

          <span>Pycore</span>
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "36px",
              alignItems: "center",
            }}
          >
            <Link href="/" style={navLinkStyle}>Home</Link>
            <Link href="/#services" style={navLinkStyle}>Services</Link>
            <Link href="/products" style={navLinkStyle}>Projects</Link>
            <Link href="/about" style={navLinkStyle}>About</Link>

            <Link
              href="/contact"
              style={{
                ...navLinkStyle,
                fontWeight: 500,
                padding: "8px 16px",
                border: "1px solid #a78bfa",
                borderRadius: "6px",
              }}
            >
              Contact
            </Link>
          </div>
        )}

        {/* MOBILE HAMBURGER */}
        {isMobile && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              fontSize: "28px",
              background: "none",
              border: "none",
              color: "#a78bfa",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div
          style={{
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <Link href="/" style={navLinkStyle}>Home</Link>
          <Link href="/#services" style={navLinkStyle}>Services</Link>
          <Link href="/products" style={navLinkStyle}>Projects</Link>
          <Link href="/about" style={navLinkStyle}>About</Link>
          <Link href="/contact" style={{ ...navLinkStyle, fontWeight: 500 }}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
