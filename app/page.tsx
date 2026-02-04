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
<section className="bg-gradient-to-b from-[#020617] to-[#0f172a] py-20 md:py-32 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
    
    {/* LEFT: TEXT */}
    <div>
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
        We build reliable digital products for growing businesses
      </h1>

      <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
        Pycore Technologies designs and develops secure web and mobile
        applications that help businesses operate efficiently, scale
        confidently, and grow without technical friction.
      </p>

      <a
        href="/contact"
        className="inline-block bg-violet-400 text-slate-900 font-semibold text-base px-8 py-4 rounded-xl hover:bg-violet-300 transition"
      >
        Start a Project
      </a>
    </div>

    {/* RIGHT: VISUAL */}
    <div className="w-full h-64 md:h-[420px]">
      <img
        src="/illustrations/hero3.svg"
        alt="Technology illustration"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

{/* ================= WHAT WE BUILD ================= */}
<section
  id="services"
  className="bg-[#020617] py-16 md:py-28 font-inter"
>
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-4">
      What We Build
    </h2>

    <p className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed mb-12 md:mb-16">
      We design and engineer digital products that solve real business
      problems—from customer-facing applications to complex internal
      systems built for performance, security, and growth.
    </p>

    <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-slate-800 bg-[#020617] p-6 md:p-8 transition hover:-translate-y-2 hover:border-violet-400 hover:shadow-[0_20px_40px_rgba(167,139,250,0.2)]"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-400/15 text-2xl">
            {item.icon}
          </div>

          <h3 className="text-lg font-bold tracking-tight mb-2">
            {item.title}
          </h3>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= HOW WE WORK ================= */}
<section className="bg-[#020617] py-16 md:py-28 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 md:mb-16">
      How We Work
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
        <div
          key={step}
          className="rounded-2xl border border-slate-800 bg-[#020617] p-6 md:p-8 transition hover:-translate-y-2 hover:border-violet-400"
        >
          <div className="text-violet-400 text-2xl font-extrabold mb-4">
            {step}
          </div>

          <h3 className="text-lg font-bold mb-2 tracking-tight">
            {title}
          </h3>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* ================= FEATURED PROJECT ================= */}
<section className="bg-[#020617] py-16 md:py-28 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-violet-400 mb-10 md:mb-16">
      Featured Project
    </h2>

    <div className="grid gap-10 md:grid-cols-2 items-center rounded-3xl border border-slate-800 bg-[#020617] p-6 md:p-10">
      
   {/* VISUAL: FADE SLIDESHOW */}
<div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl border border-slate-700 bg-black">
  <img
    src="/projects/homes.png"
    className="absolute inset-0 w-full h-full object-cover fade-slide delay-0"
    alt="Homepage preview"
  />
  <img
    src="/projects/services.png"
    className="absolute inset-0 w-full h-full object-cover fade-slide delay-1"
    alt="Services preview"
  />
  <img
    src="/projects/about.png"
    className="absolute inset-0 w-full h-full object-cover fade-slide delay-2"
    alt="About preview"
  />
</div>


      {/* CONTENT */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4">
          Ekenedilichukwu Global Concept Nig. Ltd
        </h3>

        <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
          A corporate business website designed and developed for a Nigerian
          services company focused on electrical, security, solar, and interior
          solutions, delivering a professional and credible online presence.
        </p>

        <a
          href="https://ekenedilichukwuglobalconceptngltd.com/"
          target="_blank"
          className="inline-flex items-center gap-2 bg-violet-400 text-slate-900 font-semibold px-6 py-3 rounded-xl hover:bg-violet-300 transition"
        >
          View Live Project
          <span>→</span>
        </a>
      </div>
    </div>
  </div>
</section>
{/* ================= TESTIMONIALS ================= */}
<section className="bg-[#020617] py-16 md:py-28 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-10 md:mb-16 text-violet-400">
      What Clients Say
    </h2>

    <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Ekenedilichukwu Global Concept",
          role: "Business Owner",
          text:
            "Pycore delivered a clean, professional website that truly reflects our brand. Communication was clear throughout the process, and the final result exceeded our expectations.",
        },
        {
          name: "Uchenna Uzoagbado",
          role: "Manager",
          text:
            "They understand scalable architecture and clean systems. Our backend and admin dashboard were delivered on time and built with long-term growth in mind.",
        },
        {
          name: "Ifeoma Okonkwo",
          role: "C.E.O of Cash4us Groups",
          text:
            "Professional, reliable, and technically solid. Pycore helped us seamlessly integrate payments and streamline critical workflows without any disruption.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative rounded-2xl border border-slate-800 bg-[#020617] p-6 md:p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(167,139,250,0.15)]"
        >
          {/* Quote mark */}
          <div className="absolute top-6 right-6 text-5xl leading-none text-violet-400/20">
            “
          </div>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
            {item.text}
          </p>

          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="h-11 w-11 rounded-full bg-violet-400/20 flex items-center justify-center font-bold text-violet-400">
              {item.name.charAt(0)}
            </div>

            <div>
              <div className="font-semibold tracking-tight">
                {item.name}
              </div>
              <div className="text-sm text-slate-400">
                {item.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= WHO WE WORK WITH ================= */}
<section className="bg-[#020617] py-16 md:py-28 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
    
    {/* LEFT: TEXT (Fix 4 applied) */}
    <div className="mt-0 md:mt-16">
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 ">
        Who We Work With
      </h2>

      <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8">
        We partner with teams and businesses that view technology as a strategic
        asset — not just a short-term solution.
      </p>

      <div className="grid gap-4">
        {[
          "Startups building MVPs or scaling existing products",
          "Small and medium businesses improving digital operations",
          "Enterprises requiring secure, well-structured systems",
          "Non-technical founders seeking clear technical guidance",
          "Teams replacing or modernizing legacy software",
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-800 bg-[#020617] px-4 py-3 text-sm md:text-base text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT: IMAGES */}
    <div className="relative w-full h-56 md:h-[420px]">
      
      {/* MAIN IMAGE (Fix 2 applied) */}
      <img
        src="https://images.unsplash.com/photo-1573164574511-73c773193279"
        alt="Team collaboration"
        className="w-full h-full object-cover rounded-2xl border border-slate-800"
      />

      {/* ACCENT IMAGE (Fix 3 applied) */}
      <img
        src="https://images.unsplash.com/photo-1590650153855-d9e808231d41"
        alt="Planning and strategy"
        className="hidden md:block absolute bottom-[-32px] right-[-32px] w-[180px] h-[120px] object-cover rounded-xl border border-slate-800 bg-[#020617]"
      />
    </div>
  </div>
</section>
{/* ================= WHY CHOOSE PYCORE ================= */}
<section className="bg-[#020617] py-16 md:py-28 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
    
    {/* LEFT: STATEMENT */}
    <div>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-violet-400 mb-6">
        Why Choose Pycore
      </h2>

      <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-5">
        We don’t just deliver features — we build systems that are reliable,
        secure, and designed to grow alongside your business.
      </p>

      <p className="text-base md:text-lg text-slate-300 leading-relaxed">
        Our focus is long-term value, clear thinking, and engineering decisions
        that won’t hold you back as your product scales.
      </p>
    </div>

    {/* RIGHT: PILLARS */}
    <div className="grid gap-4 md:gap-5">
      {[
        [
          "Production-First Engineering",
          "We build for real users, real traffic, and real business demands from day one.",
        ],
        [
          "Scalable Architecture",
          "Systems are designed to adapt and expand without costly rewrites.",
        ],
        [
          "Security by Design",
          "Security is built into every layer, not added as an afterthought.",
        ],
        [
          "Clear Communication",
          "We explain technical decisions in straightforward, honest language.",
        ],
        [
          "Long-Term Partnership",
          "We stay involved beyond launch to support improvements and growth.",
        ],
      ].map(([title, desc], i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-800 bg-[#020617] p-5 md:p-6 hover:border-violet-400 transition"
        >
          <h3 className="font-semibold tracking-tight mb-1 text-white">
            {title}
          </h3>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {desc}
          </p>
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

  
  </div>
</section>
{/* ================= FAQs ================= */}
<section className="bg-[#020617] py-16 md:py-28 font-inter">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    
    {/* HEADER */}
    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-violet-400 mb-10 md:mb-16">
      Frequently Asked Questions
    </h2>

    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      
      {/* FAQ ITEMS */}
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
          className="rounded-2xl border border-slate-800 bg-[#020617] p-5 md:p-6"
        >
          <h3 className="font-semibold tracking-tight mb-2">
            {question}
          </h3>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            {answer}
          </p>
        </div>
      ))}

      {/* CTA CARD */}
      <a
        href="https://wa.me/2347034522313"
        target="_blank"
        rel="noopener noreferrer"
        className="md:col-span-2 rounded-2xl border border-slate-800 bg-gradient-to-br from-violet-400/20 to-[#020617] p-6 md:p-8 flex flex-col justify-between hover:border-violet-400 transition"
      >
        <div>
          <div className="text-3xl mb-4">💬</div>
          <h3 className="text-lg md:text-xl font-extrabold tracking-tight mb-2">
            Still have questions?
          </h3>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Chat directly with us on WhatsApp and get fast, clear answers about
            your project.
          </p>
        </div>

        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-violet-400 px-5 py-3 font-semibold text-slate-900">
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
<style jsx global>{`
  @keyframes fadeSlide {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .fade-slide {
    animation: fadeSlide 15s infinite;
  }

  .delay-0 {
    animation-delay: 0s;
  }

  .delay-1 {
    animation-delay: 5s;
  }

  .delay-2 {
    animation-delay: 10s;
  }
`}</style>




    </>
  );
}


