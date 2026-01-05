import React from 'react'

export default function FeatureCard() {
    const orange = "#f66d0d";
    const textWhite = "#FFFFFF";
    const baseSize = 16;

    const cardStyle = {
        padding: "44px 36px",
        borderRadius: "24px",
        cursor: "pointer",
        transition: "all 0.4s",
    };

    const iconBoxStyle = {
        width: "70px",
        height: "70px",
        borderRadius: "18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "28px",
    };

    const titleStyle = (baseSize, color) => ({
        fontSize: `${baseSize * 1.625}px`,
        fontWeight: 800,
        color,
        marginBottom: "14px",
        letterSpacing: "-0.01em",
    });

    const descStyle = (baseSize, color) => ({
        fontSize: `${baseSize}px`,
        color,
        opacity: 0.7,
        lineHeight: 1.7,
    });
    return (
        <div className="features-grid grid gap-5">
            <div className="glass-card" style={cardStyle}>
                <div
                    className="glass-strong"
                    style={{ ...iconBoxStyle, border: `1px solid ${orange}40` }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                    </svg>
                </div>

                <h3 style={titleStyle(baseSize, textWhite)}>
                    Neural Processing
                </h3>

                <p style={descStyle(baseSize, textWhite)}>
                    Advanced neural networks process and understand complex queries with human-like comprehension and contextual awareness
                </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card" style={cardStyle}>
                <div
                    className="glass-strong"
                    style={{ ...iconBoxStyle, border: `1px solid ${orange}40` }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
                        <circle cx="12" cy="12" r="10" />
                    </svg>
                </div>

                <h3 style={titleStyle(baseSize, textWhite)}>
                    Adaptive Learning
                </h3>

                <p style={descStyle(baseSize, textWhite)}>
                    Continuously learns from interactions to provide increasingly accurate and personalized responses over time
                </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card" style={cardStyle}>
                <div
                    className="glass-strong"
                    style={{ ...iconBoxStyle, border: `1px solid ${orange}40` }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2">
                        <path d="M3 3v18h18" />
                        <path d="M18 17V9" />
                        <path d="M13 17V5" />
                        <path d="M8 17v-3" />
                    </svg>
                </div>

                <h3 style={titleStyle(baseSize, textWhite)}>
                    Real-Time Insights
                </h3>

                <p style={descStyle(baseSize, textWhite)}>
                    Comprehensive analytics dashboard with live metrics and actionable insights for optimization
                </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card" style={cardStyle}>
                <div
                    className="glass-strong"
                    style={{ ...iconBoxStyle, border: `1px solid ${orange}40` }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </div>

                <h3 style={titleStyle(baseSize, textWhite)}> Multi-Language Support </h3>

                <p style={descStyle(baseSize, textWhite)}>
                    Communicate with customers in over 100 languages with natural, culturally-aware responses
                </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-card" style={cardStyle}>
                <div
                    className="glass-strong"
                    style={{ ...iconBoxStyle, border: `1px solid ${orange}40` }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                </div>

                <h3 style={titleStyle(baseSize, textWhite)}>Enterprise Security</h3>

                <p style={descStyle(baseSize, textWhite)}>
                    Bank-level encryption, SOC 2 compliance, and GDPR-ready data handling for complete peace of mind
                </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-card" style={cardStyle}>
                <div
                    className="glass-strong"
                    style={{ ...iconBoxStyle, border: `1px solid ${orange}40` }}
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={orange} strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                        <polyline points="7.5 19.79 7.5 14.6 3 12" />
                        <polyline points="21 12 16.5 14.6 16.5 19.79" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                </div>

                <h3 style={titleStyle(baseSize, textWhite)}>Seamless Integration</h3>

                <p style={descStyle(baseSize, textWhite)}>
                    Easy integration with Slack, WhatsApp, Facebook Messenger, and 50+ other platforms
                </p>
            </div>
        </div>
    );
};
