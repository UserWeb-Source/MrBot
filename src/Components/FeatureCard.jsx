import React from 'react'

export default function FeatureCard() {
    const accentPurple = "#f66d0d";
    const textWhite = "#FFFFFF";
    const baseSize = 16;

    return (
        <div
            className="glass-card feature-card"
            style={{
                padding: "44px 36px",
                borderRadius: "24px",
                cursor: "pointer",
            }}
        >
            {/* Icon */}
            <div
                className="glass-strong feature-icon"
                style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "28px",
                    border: "1px solid rgba(255, 145, 145, 0.4)",
                }}
            >
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={accentPurple}
                    strokeWidth="2"
                >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                    <polyline points="7.5 19.79 7.5 14.6 3 12" />
                    <polyline points="21 12 16.5 14.6 16.5 19.79" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
            </div>

            {/* Title */}
            <h3
                style={{
                    fontSize: `${baseSize * 1.625}px`,
                    fontWeight: 800,
                    color: textWhite,
                    marginBottom: "14px",
                    letterSpacing: "-0.01em",
                }}
            >
                Seamless Integration
            </h3>

            {/* Description */}
            <p
                style={{
                    fontSize: `${baseSize}px`,
                    color: textWhite,
                    opacity: 0.7,
                    lineHeight: 1.7,
                }}
            >
                Easy integration with Slack, WhatsApp, Facebook Messenger, and 50+ other
                platforms
            </p>
        </div>
    );
};
