import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

import SpotlightCard from "./SpotlightCard";
import RunningWolf from "./RunningWolf";
import GeminiBarrier from "./GeminiBarrier";
import GeminiLogoReveal from "./GeminiLogoReveal";
import "../styles/Hero.css";

export default function Hero() {
    const [geminiActive, setGeminiActive] = useState(false);

    const handleBarrierHit = () => {
        setGeminiActive(true);
    };

    return (
        <section id="about" className="hero-section">
            {/* Gemini Integration - Hidden for now */}
            {/* {geminiActive && <GeminiLogoReveal />} */}

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-grid">
                    {/* Main Card */}
                    <SpotlightCard className="hero-card-main">
                        <h1 className="hero-title">
                            {portfolioData.name}
                        </h1>
                        <p className="hero-subtitle">
                            {portfolioData.summary}
                        </p>
                    </SpotlightCard>

                    {/* Image Card */}
                    <SpotlightCard className="hero-card-image">
                        <img src="/profile.jpg" alt="Sai Vijay Rohit Pantam" className="hero-profile-img" />
                    </SpotlightCard>
                </div>
            </div>

            {/* Desktop Only Animation Wrapper - Hidden for now */}
            {/* <div className="desktop-animation-container">
                <GeminiBarrier isBroken={geminiActive} />
                <RunningWolf onBarrierHit={handleBarrierHit} />
            </div> */}
        </section>
    );
}
