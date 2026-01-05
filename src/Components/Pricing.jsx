import React from "react";
import "../CSS/PricingPage.css";

export default function PricingPage(){
    const baseSize = 16;
    const textWhite = "#ffffff";
    const red= "#ef1717";
    const orange = "#fc9003";
    const glassBorder = "#ffffff";
    return (
        <div id="pricing-page" className="page">
            <section className="pricing-section">
                <div className="pricing-container">

                    {/* Header */}
                    <div className="pricing-header">
                        <h2
                            style={{
                                fontSize: baseSize * 3.5,
                                fontWeight: 900,
                                color: textWhite,
                            }}
                        >
                            Simple, Transparent Pricing
                        </h2>
                        <p
                            style={{
                                fontSize: baseSize * 1.25,
                                color: textWhite,
                                opacity: 0.7,
                            }}
                        >
                            Choose the plan that fits your needs perfectly
                        </p>
                    </div>

                    {/* Plans */}
                    <div className="pricing-grid">

                        {/* Starter */}
                        <div className="glass-card pricing-card starter">
                            <PlanTitle color={red}>Starter</PlanTitle>
                            <Price value="$49" baseSize={baseSize} textWhite={textWhite} />
                            <PlanList color={red} baseSize={baseSize} textWhite={textWhite}>
                                <li>5,000 messages/month</li>
                                <li>Basic AI responses</li>
                                <li>Email support</li>
                                <li>1 chatbot</li>
                                <li>Basic analytics</li>
                            </PlanList>
                            <OutlineButton>Get Started</OutlineButton>
                        </div>

                        {/* Pro */}
                        <div className="glass-strong pricing-card featured">
                            <div
                                className="badge"
                                style={{
                                    background: `linear-gradient(135deg, ${red}, ${orange})`,
                                }}
                            >
                                Most Popular
                            </div>

                            <PlanTitle color={red}>Professional</PlanTitle>
                            <Price value="$149" baseSize={baseSize} textWhite={textWhite} />
                            <PlanList color={red} baseSize={baseSize} textWhite={textWhite}>
                                <li>50,000 messages/month</li>
                                <li>Advanced AI learning</li>
                                <li>Priority support</li>
                                <li>5 chatbots</li>
                                <li>Full analytics dashboard</li>
                                <li>API access</li>
                            </PlanList>

                            <GradientButton
                                red={red}
                                orange={orange}
                            >
                                Get Started
                            </GradientButton>
                        </div>

                        {/* Enterprise */}
                        <div className="glass-card pricing-card enterprise">
                            <PlanTitle color={orange}>Enterprise</PlanTitle>
                            <div
                                style={{
                                    fontSize: baseSize * 3.5,
                                    fontWeight: 900,
                                    color: textWhite,
                                    marginBottom: 32,
                                }}
                            >
                                Custom
                            </div>

                            <PlanList color={orange} baseSize={baseSize} textWhite={textWhite}>
                                <li>Unlimited messages</li>
                                <li>Custom AI training</li>
                                <li>24/7 phone support</li>
                                <li>Unlimited chatbots</li>
                                <li>Advanced analytics</li>
                                <li>Dedicated manager</li>
                                <li>SLA guarantee</li>
                            </PlanList>

                            <OutlineButton>Contact Sales</OutlineButton>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

/* Reusable Components */

const PlanTitle = ({ children, color }) => (
    <div
        style={{
            fontSize: 14,
            fontWeight: 700,
            color,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: 20,
        }}
    >
        {children}
    </div>
);

const Price = ({ value, baseSize, textWhite }) => (
    <div style={{ marginBottom: 32 }}>
    <span
        style={{
            fontSize: baseSize * 3.5,
            fontWeight: 900,
            color: textWhite,
        }}
    >
      {value}
    </span>
        {value !== "Custom" && (
            <span
                style={{
                    fontSize: baseSize * 1.125,
                    color: textWhite,
                    opacity: 0.6,
                }}
            >
        /month
      </span>
        )}
    </div>
);

const PlanList = ({ children, color, baseSize, textWhite }) => (
    <ul className="plan-list">
        {React.Children.map(children, (item) => (
            <li
                style={{
                    fontSize: baseSize,
                    color: textWhite,
                    opacity: 0.85,
                }}
            >
                <span style={{ color }}>✓</span>
                {item.props.children}
            </li>
        ))}
    </ul>
);

const OutlineButton = ({ children }) => (
    <button className="outline-button">{children}</button>
);

const GradientButton = ({ children, red, orange }) => (
    <button
        className="gradient-button"
        style={{
            background: `linear-gradient(135deg, ${red}, ${orange})`,
        }}
    >
        {children}
    </button>
);
