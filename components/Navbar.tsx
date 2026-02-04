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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const navLinkStyle = {
    color: "#a78bfa",
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "16px",
    letterSpacing: "0.2px",
  };

  return (
    <>
      {/* NAV BAR */}
      <div
        style={{
          backgroundColor: "#020617",
          borderBottom: "1px solid #6d28d9",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          position: "relative",
          zIndex: 50,
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
              style={{ width: "34px", height: "34px", objectFit: "contain" }}
            />
            <span>Pycore</span>
          </div>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
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
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              ☰
            </button>
          )}
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(4px)",
            zIndex: 40,
          }}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "#020617",
            borderBottom: "1px solid #1e293b",
            transform: open ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.35s ease",
            zIndex: 50,
            paddingTop: "96px",
            paddingBottom: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              padding: "0 32px",
            }}
          >
            <Link href="/" onClick={() => setOpen(false)} style={navLinkStyle}>
              Home
            </Link>
            <Link href="/#services" onClick={() => setOpen(false)} style={navLinkStyle}>
              Services
            </Link>
            <Link href="/products" onClick={() => setOpen(false)} style={navLinkStyle}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} style={navLinkStyle}>
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              style={{ ...navLinkStyle, fontWeight: 600 }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
