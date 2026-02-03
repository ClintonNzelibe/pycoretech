# Pycore Technologies Ltd — Company Website

Official website for **Pycore Technologies Ltd**, a software development company focused on building scalable digital products for modern businesses.

This site serves as an informational and lead-generation platform, showcasing services, process, featured work, and providing a secure way for clients to contact the team.

---

## 🚀 Live Website
**https://pycoretech.com**

---

## 🧠 Overview

Pycore Technologies designs and develops:

- Web Applications
- Mobile Applications
- Backend Systems & APIs
- Payments & Integrations
- E-commerce Platforms
- Admin Dashboards & Analytics
- AI & Automation Tools
- Cloud & DevOps Infrastructure

The website is intentionally lightweight, fast, and easy to maintain.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **CSS (Inline styles, no Tailwind dependency)**
- **Vercel** (deployment)
- **Hostinger** (domain)

---

## ✨ Key Features

### ✅ Informational Website
- Professional landing page
- Services overview
- Process explanation
- Testimonials & client trust sections
- Featured project showcase

### ✅ Contact System (No Database)
- Contact form with name, email, phone, and message
- Messages sent to:
  - Admin inbox (`/admin/messages`)
  - WhatsApp instantly
- Designed for manual follow-up (call or reply later)

### ✅ Admin Messages (Read-Only)
- Password-protected admin page
- View submitted contact messages
- No editing or deleting (simple & secure)

---

## 🔐 Admin Access

Admin messages are available at:


Access is protected using an environment variable–based password.

---

## 🌍 Environment Variables

Create a `.env.local` file in the project root with:

```env
ADMIN_PASSWORD=your-admin-password
NEXT_PUBLIC_ADMIN_PASSWORD=your-admin-password
