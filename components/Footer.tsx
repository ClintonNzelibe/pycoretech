"use client";

import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-800 py-14 font-inter">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        
        {/* BRAND */}
        <div className="text-xl md:text-2xl font-extrabold tracking-tight text-violet-400 mb-3">
          Pycore Technologies
        </div>

        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
          Engineering scalable digital products for modern businesses.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <a
            href="https://www.instagram.com/clinton_the_developer?igsh=NW9lNG43c2R5cXQ5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
          >
            <FaInstagram size={16} />
            Instagram
          </a>

          <a
            href="https://www.facebook.com/share/1K2KMFEF5c/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
          >
            <FaFacebook size={16} />
            Facebook
          </a>

          <a
            href="https://t.me/pycoretech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
          >
            <FaTelegramPlane size={16} />
            Telegram
          </a>

          <a
            href="https://wa.me/2347034522313"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition"
          >
            <FaWhatsapp size={16} />
            WhatsApp
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-slate-500 text-xs md:text-sm">
          © {new Date().getFullYear()} Pycore Technologies Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
