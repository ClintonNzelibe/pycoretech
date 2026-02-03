"use client";

import { useState } from "react";

export default function ContactPage() {
  // ✅ ADDED: form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // ✅ ADDED: handle input change
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // ✅ ADDED: submit handler
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

   const res = await fetch("/api/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});

const data = await res.json();

if (data.whatsapp) {
  window.open(data.whatsapp, "_blank");
}


    if (res.ok) {
      setSuccess("Message sent successfully. We’ll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <>
      {/* ================= HERO ================= */}
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
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Lexend', sans-serif",
              fontSize: "52px",
              fontWeight: 800,
              marginBottom: "24px",
              color: "#a78bfa",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5f5",
              lineHeight: 1.8,
            }}
          >
            Tell us about your project. We’ll review it and get back to you
            with clear next steps.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section style={{ padding: "120px 0", backgroundColor: "#020617" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
          }}
        >
          {/* ===== LEFT INFO ===== */}
          <div>
            <h2
              style={{
                fontFamily: "'Lexend', sans-serif",
                fontSize: "36px",
                fontWeight: 800,
                marginBottom: "24px",
                color: "#a78bfa",
              }}
            >
              Start a Conversation
            </h2>

            <p
              style={{
                fontSize: "18px",
                color: "#cbd5f5",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Whether you’re planning a new product, improving an existing
              system, or exploring ideas, we’re happy to talk.
            </p>

            <p
              style={{
                fontSize: "18px",
                color: "#cbd5f5",
                lineHeight: 1.8,
              }}
            >
              Provide as much detail as possible so we can understand your
              goals and respond effectively.
            </p>
          </div>

          {/* ===== FORM ===== */}
          <form
            onSubmit={handleSubmit} // ✅ ADDED
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              border: "1px solid #1e293b",
              borderRadius: "20px",
              padding: "32px",
              backgroundColor: "#020617",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ color: "#cbd5f5", fontWeight: 500 }}>
                Full Name
              </label>
              <input
                type="text"
                name="name" // ✅ ADDED
                required
                placeholder="Your full name"
                value={form.name} // ✅ ADDED
                onChange={handleChange} // ✅ ADDED
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ color: "#cbd5f5", fontWeight: 500 }}>
                Email Address
              </label>
              <input
                type="email"
                name="email" // ✅ ADDED
                required
                placeholder="you@example.com"
                value={form.email} // ✅ ADDED
                onChange={handleChange} // ✅ ADDED
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ color: "#cbd5f5", fontWeight: 500 }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone" // ✅ ADDED
                placeholder="+234 000 000 0000"
                value={form.phone} // ✅ ADDED
                onChange={handleChange} // ✅ ADDED
                style={inputStyle}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ color: "#cbd5f5", fontWeight: 500 }}>
                Project Details
              </label>
              <textarea
                name="message" // ✅ ADDED
                required
                rows={5}
                placeholder="Briefly describe your project, goals, or challenges"
                value={form.message} // ✅ ADDED
                onChange={handleChange} // ✅ ADDED
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: "#a78bfa",
                color: "#020617",
                padding: "16px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p style={{ color: "#22c55e", marginTop: "12px" }}>
                {success}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #1e293b",
  backgroundColor: "#020617",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
};
