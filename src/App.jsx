import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import React from "react";
import Home from "./Components/Home.jsx";
import Features from "./Components/Feature.jsx";
import Platform from "./Components/Platform.jsx";
import Pricing from "./Components/Pricing.jsx";
import Chatbot from "./Components/Chatbot.jsx";
import SignUp from "./Components/Auth.jsx";
import {SignIn} from "./Components/Auth.jsx";

function App() {
    const [auth,setAuth] = React.useState(false);
    return (
        <>
            <BrowserRouter>
                <div className="grain-texture">
                    {/* Cyan Glow */}
                    <div
                        style={{
                            position: "fixed",
                            top: "15%",
                            right: "10%",
                            width: "500px",
                            height: "500px",
                            background: "radial-gradient(circle, rgba(255, 145, 145,0.2) 0%, transparent 70%)",
                            borderRadius: "50%",
                            filter: "blur(80px)",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />

                    {/* Purple Glow */}
                    <div
                        style={{
                            position: "fixed",
                            bottom: "20%",
                            left: "15%",
                            width: "600px",
                            height: "600px",
                            background: "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
                            borderRadius: "50%",
                            filter: "blur(100px)",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />
                    <Navbar Auth={auth}/>
                    <Routes>
                        <Route path="/" element={<Home Auth={auth}/>}/>
                        <Route path="/features" element={<Features />}/>
                        <Route path="/platform" element={<Platform Auth={auth}/>}/>
                        <Route path="/pricing" element={<Pricing />}/>
                        <Route path="/chatbot" element={<Chatbot />}/>
                        <Route path="/login" element={<SignIn />}/>
                        <Route path="/register" element={<SignUp />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
