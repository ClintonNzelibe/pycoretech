"use client";

import { useEffect, useState } from "react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const password = prompt("Enter admin password");

    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAuthorized(true);
      fetch("/api/messages")
        .then((res) => res.json())
        .then(setMessages);
    } else {
      alert("Unauthorized");
    }
  }, []);

  if (!authorized) return null;

  return (
    <section style={{ padding: "120px 0", backgroundColor: "#020617" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 32px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "40px" }}>
          Contact Messages
        </h1>

        {messages.length === 0 && (
          <p style={{ color: "#cbd5f5" }}>No messages yet.</p>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              border: "1px solid #1e293b",
              borderRadius: "14px",
              padding: "24px",
              marginBottom: "20px",
            }}
          >
            <strong>{msg.name}</strong>
            {msg.email && <> — {msg.email}</>}
            {msg.phone && <> — {msg.phone}</>}

            <p style={{ color: "#cbd5f5", marginTop: "12px" }}>
              {msg.message}
            </p>

            <small style={{ color: "#94a3b8" }}>
              {new Date(msg.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}
