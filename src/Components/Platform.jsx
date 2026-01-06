import React from 'react'

export default function Platform({Auth}) {
    const baseSize = 16;
    const textWhite = "#ffffff";
    const red = "#ef1717";
    const orange = "#fc9003";
    const glassBorder = "#ffffff";

    const BotMessage = ({children, baseSize, textWhite}) => (
            <div style={{display: "flex", maxWidth: "85%"}}>
                <div className="glass-card" style={botBubbleStyle}>
                    <p style={{fontSize: baseSize * 1.0625, color: textWhite, margin: 0}}>
                        {children}
                    </p>
                </div>
            </div>
    );

    const UserMessage = ({children, baseSize, textWhite, orange, red}) => (
            <div style={{display: "flex", maxWidth: "85%", marginLeft: "auto"}}>
                <div
                        style={{
                            background: `linear-gradient(135deg, ${orange}, ${red})`,
                            padding: "18px 24px",
                            borderRadius: 20,
                            borderTopRightRadius: 4,
                        }}
                >
                    <p style={{fontSize: baseSize * 1.0625, color: textWhite, margin: 0}}>
                        {children}
                    </p>
                </div>
            </div>
    );

    const TypingDot = ({color, delay = "0s"}) => (
            <span
                    style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: color,
                        animation: `pulse-glow 1.4s ease-in-out ${delay} infinite`,
                    }}
            />
    );

    const StatCard = ({value, label, baseSize, orange, red, textWhite}) => (
            <div className="glass-card" style={statCardStyle}>
                <div style={statValueStyle(baseSize, orange, red)}>{value}</div>
                <div style={{fontSize: baseSize, color: textWhite, opacity: 0.7}}>{label}</div>
            </div>
    );

    /* Styles */

    const sectionStyle = {
        padding: "8% 5%",
        position: "relative",
        zIndex: 1,
        minHeight: "80%",
    };

    const containerStyle = {
        maxWidth: 1100,
        margin: "0 auto",
    };

    const outerCardStyle = {
        padding: 60,
        borderRadius: 32,
    };

    const chatCardStyle = {
        padding: 32,
        borderRadius: 24,
        minHeight: 500,
    };

    const messagesStyle = {
        padding: "40px 0",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        maxHeight: 400,
        overflowY: "auto",
    };

    const botBubbleStyle = {
        padding: "18px 24px",
        borderRadius: 20,
        borderTopLeftRadius: 4,
    };

    const typingCardStyle = {
        padding: "18px 24px",
        borderRadius: 20,
        borderTopLeftRadius: 4,
        display: "flex",
        gap: 6,
    };

    const inputCardStyle = {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "16px 24px",
        borderRadius: 18,
        marginTop: 28,
    };

    const settingsButtonStyle = {
        width: 44,
        height: 44,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const sendButtonStyle = (orange, red) => ({
        width: 48,
        height: 48,
        borderRadius: 14,
        border: "none",
        cursor: "pointer",
        background: `linear-gradient(135deg, ${orange}, ${red})`,
        color: "#fff",
        fontSize: 18,
    });

    const statsGridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        marginTop: 40,
    };

    const statCardStyle = {
        padding: 28,
        borderRadius: 18,
        textAlign: "center",
    };

    const statValueStyle = (baseSize, orange, red) => ({
        fontSize: baseSize * 2.5,
        fontWeight: 900,
        background: `linear-gradient(135deg, ${orange}, ${red})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: 8,
    });
    return (
            <>
                <div id="platform-page" className="page">
                    <section style={sectionStyle}>
                        <div style={containerStyle}>
                            <div className="glass-strong" style={outerCardStyle}>

                                {/* Header */}
                                <div style={{textAlign: "center", marginBottom: 50}}>
                                    <h2
                                            style={{
                                                fontSize: baseSize * 3.5,
                                                fontWeight: 900,
                                                color: textWhite,
                                                marginBottom: 16,
                                                letterSpacing: "-0.02em",
                                            }}
                                    >
                                        Experience the Platform
                                    </h2>
                                    <p
                                            style={{
                                                fontSize: baseSize * 1.25,
                                                color: textWhite,
                                                opacity: 0.7,
                                            }}
                                    >
                                        Intuitive interface designed for seamless interaction
                                    </p>
                                </div>

                                {/* Chat Demo */}
                                <div className="glass-card" style={chatCardStyle}>

                                    {/* Chat Header */}
                                    <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                paddingBottom: 24,
                                                borderBottom: `1px solid ${glassBorder}10`,
                                            }}
                                    >
                                        <div style={{display: "flex", gap: 14, alignItems: "center"}}>
                                            <div
                                                    style={{
                                                        width: 52,
                                                        height: 52,
                                                        borderRadius: "50%",
                                                        background: `linear-gradient(135deg, ${orange}, ${red})`,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontSize: baseSize * 1.75,
                                                    }}
                                            >
                                                🤖
                                            </div>

                                            <div>
                                                <div
                                                        style={{
                                                            fontSize: baseSize * 1.25,
                                                            fontWeight: 700,
                                                            color: textWhite,
                                                        }}
                                                >
                                                    AI Assistant
                                                </div>
                                                <div
                                                        style={{
                                                            fontSize: baseSize,
                                                            color: orange,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 6,
                                                        }}
                                                >
                      <span
                              style={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  background: orange,
                                  boxShadow: `0 0 8px ${orange}`,
                              }}
                      />
                                                    <p className="font-semibold"> Active Now </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="glass-card" style={settingsButtonStyle}>
                                            <span style={{fontSize: baseSize * 1.375}}>⚙️</span>
                                        </div>
                                    </div>

                                    {/* Messages */}
                                    <div style={messagesStyle}>
                                        <BotMessage baseSize={baseSize} textWhite={textWhite}>
                                            Hello! I'm your AI assistant. I'm here to help with any questions you have
                                            about
                                            our platform. What would you like to know?
                                        </BotMessage>

                                        <UserMessage baseSize={baseSize} textWhite={textWhite} orange={orange}
                                                     red={red}>
                                            What features does your platform offer?
                                        </UserMessage>

                                        <BotMessage baseSize={baseSize} textWhite={textWhite}>
                                            Great question! We offer neural processing for intelligent responses,
                                            adaptive
                                            learning that improves over time, real-time insights with comprehensive
                                            analytics, multi-language support, enterprise-grade security, and seamless
                                            integrations with 50+ platforms.
                                        </BotMessage>

                                        <UserMessage baseSize={baseSize} textWhite={textWhite} orange={orange}
                                                     red={red}>
                                            Tell me about the analytics dashboard
                                        </UserMessage>

                                        {/* Typing Indicator */}
                                        <div style={{display: "flex", maxWidth: "85%"}}>
                                            <div className="glass-card" style={typingCardStyle}>
                                                <TypingDot color={orange}/>
                                                <TypingDot color={orange} delay="0.2s"/>
                                                <TypingDot color={orange} delay="0.4s"/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input */}
                                    <div className="glass-card" style={inputCardStyle}>
                                        <input
                                                type="text"
                                                placeholder="Type your message..."
                                                style={{
                                                    flex: 1,
                                                    background: "transparent",
                                                    border: "none",
                                                    outline: "none",
                                                    color: textWhite,
                                                    fontSize: baseSize * 1.0625,
                                                    fontFamily: "inherit",
                                                }}
                                        />
                                        <button style={sendButtonStyle(orange, red)} onClick={() => {
                                            if (!Auth) {
                                                return window.location.href = "/login";
                                            }
                                            window.location.href = "/chatbot";
                                        }}>
                                            ➤
                                        </button>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div style={statsGridStyle}>
                                    <StatCard label="Response Time" value="< 100ms" {...{
                                        baseSize,
                                        orange,
                                        red,
                                        textWhite
                                    }} />
                                    <StatCard label="Availability" value="24/7" {...{
                                        baseSize,
                                        orange,
                                        red,
                                        textWhite
                                    }} />
                                    <StatCard label="Accuracy Rate" value="95%" {...{
                                        baseSize,
                                        orange,
                                        red,
                                        textWhite
                                    }} />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                );
            </>
    )
}
