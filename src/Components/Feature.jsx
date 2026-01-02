import React from 'react'
import FeatureCard from "./FeatureCard.jsx";
import "../CSS/features.css"

export default function Feature() {

    return (
        <section
            style={{
                padding: "8% 5%",
                position: "relative",
                zIndex: 1,
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                {/* Section Header */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "80px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "48px",
                            fontWeight: 900,
                            color: "#FFFFFF",
                            marginBottom: "16px",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Powerful AI Chatbot Features
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            color: "#FFFFFF",
                            opacity: 0.7,
                            maxWidth: "640px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Everything you need to build, deploy, and scale intelligent AI
                        conversations across all platforms.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="features-grid">
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </div>
            </div>
        </section>
    );
};