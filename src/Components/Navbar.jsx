import React from 'react';
import "../CSS/navbar.css";
import {useHref} from "react-router-dom";

export default function Navbar() {
    const red= "#ef1717";
    const orange = "#ff9100";
    const textWhite = "#FFFFFF";
    const glassBorder = "#ffffff";
    const baseSize = 16;
    const loc = useHref()
    return (
        <>
            <nav
                className={`glass-card ${loc==="/chatbot"?"hidden":""}`}
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    padding: "18px 5%",
                    borderBottom: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            cursor: "pointer",
                        }}
                    >
                        <div
                            className="glass-strong"
                            style={{
                                width: "44px",
                                height: "44px",
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 0 25px rgba(255,145,145,0.2)",
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <defs>
                                    <linearGradient id="logoGrad1" x1="2" y1="2" x2="22" y2="12">
                                        <stop offset="0%" stopColor={red} />
                                        <stop offset="100%" stopColor={orange} />
                                    </linearGradient>
                                    <linearGradient id="logoGrad2" x1="2" y1="17" x2="22" y2="22">
                                        <stop offset="0%" stopColor={red} />
                                        <stop offset="100%" stopColor={orange} />
                                    </linearGradient>
                                </defs>
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logoGrad1)" />
                                <path
                                    d="M2 17L12 22L22 17"
                                    stroke="url(#logoGrad2)"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>

                        <span
                            style={{
                                fontSize: `${baseSize * 1.375}px`,
                                fontWeight: 800,
                                color: textWhite,
                                letterSpacing: "-0.02em",
                            }}
                        >
            Mr.Bott
          </span>
                    </div>

                    {/* Navigation Links */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "40px",
                        }}
                    >
                        {["Home", "Features", "Platform", "Pricing"].map((item) => (
                            <a
                                key={item}
                                className="nav-link"
                                href={`${item==="Home"?`/`:item.toLowerCase()}`}
                                style={{
                                    color: textWhite,
                                    opacity: 0.8,
                                    fontSize: `${baseSize}px`,
                                    fontWeight: 600,
                                    textDecoration: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {item}
                            </a>
                        ))}

                        {/* CTA Button */}
                        <button
                            className="glass-strong"
                            style={{
                                background: `linear-gradient(135deg, ${red}, ${orange})`,
                                color: textWhite,
                                padding: "11px 28px",
                                borderRadius: "12px",
                                fontSize: `${baseSize}px`,
                                fontWeight: 700,
                                border: "none",
                                cursor: "pointer",
                                boxShadow: "0 4px 20px rgba(34,211,238,0.3)",
                            }}
                                onClick={() => {window.location.href="/chatbot"}}>
                            Get Started with AI
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
