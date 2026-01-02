import React from 'react';
import "../CSS/home.css";

export default function Home() {
    const accentCyan = "#ef1717";
    const accentPurple = "#ff9100";
    const textWhite = "#FFFFFF";
    const bgDeep = "#0B1220";
    const glassBorder = "#FFFFFF";
    const baseSize = 16;

    return (
        <div id="home-page" className="page active ">
            {/* HERO SECTION */}
            <section style={{ padding: "3% 5%", position: "relative", zIndex: 1 }}>
                <div style={{ maxWidth: "1500px", margin: "0 0 0 auto" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "100px",
                            alignItems: "center",
                        }}
                    >
                        {/* LEFT CONTENT */}
                        <div className="fade-in-up">
                            {/* Badge */}
                            <div
                                className="glass-card"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "10px 22px",
                                    borderRadius: "50px",
                                    marginBottom: "28px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        background: "orange",
                                        borderRadius: "50%",
                                        boxShadow: `0 0 12px #ef1717`,
                                    }}
                                />
                                <span
                                    style={{
                                        fontSize: `${baseSize * 0.875}px`,
                                        color: accentCyan,
                                        fontWeight: 700,
                                        letterSpacing: "1.5px",
                                    }}
                                >
                  AI POWERED PLATFORM
                </span>
                            </div>

                            {/* Title */}
                            <h1
                                style={{
                                    fontSize: `${baseSize * 4}px`,
                                    fontWeight: 900,
                                    color: textWhite,
                                    lineHeight: 1.05,
                                    marginBottom: "24px",
                                    letterSpacing: "-0.03em",
                                }}
                            >
                                Start Journey With Mr.Bot
                            </h1>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: `${baseSize * 1.25}px`,
                                    color: textWhite,
                                    opacity: 0.7,
                                    lineHeight: 1.7,
                                    marginBottom: "44px",
                                    maxWidth: "95%",
                                }}
                            >
                                Automate conversations, boost engagement, and deliver instant
                                support with next-generation AI chat technology.
                            </p>

                            {/* CTA BUTTONS */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: "16px",
                                    flexWrap: "wrap",
                                    marginBottom: "60px",
                                }}
                            >
                                <button
                                    style={{
                                        background: `linear-gradient(135deg, ${accentCyan}, ${accentPurple})`,
                                        color: textWhite,
                                        padding: "18px 40px",
                                        borderRadius: "14px",
                                        fontSize: `${baseSize * 1.125}px`,
                                        fontWeight: 700,
                                        border: "none",
                                        cursor: "pointer",
                                        boxShadow: `0 8px 30px rgba(255,145,145,0.34)`,
                                    }}
                                >
                                    Get Started
                                </button>

                                <button
                                    className="glass-card"
                                    style={{
                                        color: textWhite,
                                        padding: "18px 40px",
                                        borderRadius: "14px",
                                        fontSize: `${baseSize * 1.125}px`,
                                        fontWeight: 600,
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        cursor: "pointer",
                                    }}
                                >
                                    View Demo
                                </button>
                            </div>

                            {/* STATS */}
                            <div style={{ display: "flex", gap: "50px" }}>
                                {[
                                    ["100K+", "Active Users"],
                                    ["10M+", "Conversations"],
                                    ["99.9%", "Uptime"],
                                ].map(([value, label]) => (
                                    <div key={label}>
                                        <div
                                            style={{
                                                fontSize: `${baseSize * 2.75}px`,
                                                fontWeight: 900,
                                                background: `linear-gradient(135deg, ${accentCyan}, ${accentPurple})`,
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: `${baseSize * 0.875}px`,
                                                color: textWhite,
                                                opacity: 0.6,
                                                marginTop: "6px",
                                            }}
                                        >
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT ILLUSTRATION */}
                        <div
                            style={{
                                position: "relative",
                                height: "700px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div className="float-animate" style={{ width: "100%" }}>
                                <svg viewBox="0 0 600 600" style={{ width: "90%" }}>
                                    <defs>
                                        <linearGradient id="chipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor={accentCyan} />
                                            <stop offset="100%" stopColor={accentPurple} />
                                        </linearGradient>
                                    </defs>

                                    <rect
                                        x="230"
                                        y="230"
                                        width="140"
                                        height="140"
                                        rx="16"
                                        fill={bgDeep}
                                        stroke="url(#chipGrad)"
                                        strokeWidth="3"
                                    />

                                    <circle cx="300" cy="300" r="25" fill="url(#chipGrad)" opacity="0.3" />
                                    <circle cx="300" cy="300" r="20" fill={bgDeep} stroke="url(#chipGrad)" strokeWidth="2" />
                                    <text x="300" y="310" textAnchor="middle" fontSize="20" fill="url(#chipGrad)" fontWeight="900">
                                        AI
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section style={{ padding: "8% 5%", position: "relative", zIndex: 1 }}>
                <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "60px" }}>
                        <h2
                            style={{
                                fontSize: `${baseSize * 3}px`,
                                fontWeight: 900,
                                color: textWhite,
                            }}
                        >
                            Trusted by Industry Leaders
                        </h2>
                        <p
                            style={{
                                fontSize: `${baseSize * 1.125}px`,
                                color: textWhite,
                                opacity: 0.7,
                            }}
                        >
                            See what our customers have to say
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "28px",
                        }}
                    >
                        {[
                            ["Sarah Chen", "CEO, TechStart", "Amazing AI support experience!"],
                            ["Michael Ross", "CTO, InnovateCo", "Adaptive learning is incredible."],
                            ["Emma Thompson", "VP, DataFlow", "Best AI analytics dashboard."],
                        ].map(([name, role, text]) => (
                            <div key={name} className="glass-card" style={{ padding: "36px", borderRadius: "24px" }}>
                                <span style={{ fontSize: `${baseSize * 2}px`, color: accentCyan }}>★★★★★</span>
                                <p
                                    style={{
                                        fontSize: `${baseSize * 1.125}px`,
                                        color: textWhite,
                                        opacity: 0.85,
                                        margin: "24px 0",
                                    }}
                                >
                                    “{text}”
                                </p>
                                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            background: `linear-gradient(135deg, ${accentCyan}, ${accentPurple})`,
                                        }}
                                    />
                                    <div>
                                        <div style={{ color: textWhite, fontWeight: 700 }}>{name}</div>
                                        <div style={{ color: textWhite, opacity: 0.6, fontSize: "14px" }}>{role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
