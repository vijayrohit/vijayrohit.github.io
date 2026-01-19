import React, { useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaArrowLeft, FaExclamationTriangle, FaLightbulb, FaChartLine, FaRocket } from "react-icons/fa";
import { FaReact, FaCloud, FaDatabase, FaJava, FaAws, FaPython, FaServer, FaCogs, FaBolt } from "react-icons/fa";
import { SiDotnet, SiTypescript, SiAngular, SiTailwindcss, SiMongodb } from "react-icons/si";
import "../styles/ExperienceDetail.css";

// --- Helpers ---
const extractStats = (text) => {
    if (!text) return [];
    const regex = /([$0-9]+(?:\.[0-9]+)?(?:[KMB]|%))/g;
    const matches = text.match(regex);
    return matches ? [...new Set(matches)] : [];
};

const getTechIcon = (tech) => {
    const map = {
        "React": <FaReact />, "Azure": <FaCloud />, ".NET": <SiDotnet />, "C#": <SiDotnet />,
        "OpenAI": <FaLightbulb />, "SQL": <FaDatabase />, "Angular": <SiAngular />,
        "Sentry": <FaServer />, "Dynatrace": <FaServer />, "Java": <FaJava />, "AWS": <FaAws />,
        "DynamoDB": <FaDatabase />, "JavaScript": <SiTypescript />
    };
    return map[tech] || <FaCogs />;
};

export default function ExperienceDetail() {
    const { id } = useParams();
    const experience = portfolioData.experience.find((exp) => exp.id === id);
    const containerRef = useRef(null);

    // Track scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Add SPRING physics for that "Apple" smooth inertia feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Reset scroll when entering
    useEffect(() => {
        window.scrollTo(0, 0);

        // Also force checks on legacy browsers/delayed renders
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => clearTimeout(timer);
    }, [id]);

    if (!experience) return <div>Not Found</div>;
    const { story } = experience;
    const impactStats = story ? extractStats(story.impact) : [];

    // --- ANIMATION RANGES (Using smoothProgress) ---

    // 1. Hero: Fades out quickly
    const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
    const heroFilter = useTransform(smoothProgress, [0, 0.15], ["blur(0px)", "blur(20px)"]);
    const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 1.1]); // Subtle zoom out

    // 2. Challenge: "Bold & Illuminating"
    // Enters fast, stays centered, leaves fast
    const challengeOpacity = useTransform(smoothProgress, [0.15, 0.25, 0.40, 0.50], [0, 1, 1, 0]);
    const challengeBlur = useTransform(smoothProgress, [0.15, 0.25, 0.40, 0.50], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);
    const challengeScale = useTransform(smoothProgress, [0.15, 0.50], [0.9, 1.1]); // Slow grow

    // 3. Solution
    const solutionOpacity = useTransform(smoothProgress, [0.45, 0.55, 0.70, 0.80], [0, 1, 1, 0]);
    const solutionBlur = useTransform(smoothProgress, [0.45, 0.55, 0.70, 0.80], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]);

    // 4. Impact
    const impactOpacity = useTransform(smoothProgress, [0.75, 0.85], [0, 1]);
    const impactBlur = useTransform(smoothProgress, [0.75, 0.85], ["blur(20px)", "blur(0px)"]);

    // Dynamic Theme Color for Text Shadows
    const themeParams = experience.colorTheme ? experience.colorTheme.match(/#[0-9a-f]{6}/gi) : ['#ffffff'];
    const primaryColor = themeParams ? themeParams[0] : '#ffffff';

    return (
        <div ref={containerRef} className="cinema-scroll-container">

            <div className="cinema-stage">

                <Link to="/" className="cinema-back">
                    <FaArrowLeft /> Exit
                </Link>

                <motion.div
                    className="cinema-progress"
                    style={{ scaleX: smoothProgress, background: experience.colorTheme }}
                />

                {/* --- SECT 1: HERO --- */}
                <motion.div
                    className="cinema-slide hero-slide"
                    style={{ opacity: heroOpacity, filter: heroFilter, scale: heroScale }}
                >
                    <h2 className="cinema-company">{experience.company}</h2>
                    <h1
                        className="cinema-role"
                        style={{
                            backgroundImage: experience.colorTheme,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            filter: `drop-shadow(0 0 30px ${primaryColor}50)` // Illuminating Glow
                        }}
                    >
                        {experience.role}
                    </h1>

                    <div className="cinema-tech-row">
                        {experience.technologies?.map((tech, i) => (
                            <span key={i} className="cinema-tech-item">
                                {getTechIcon(tech)} {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>


                {/* --- SECT 2: CHALLENGE --- */}
                <motion.div
                    className="cinema-slide text-slide"
                    style={{ opacity: challengeOpacity, filter: challengeBlur, scale: challengeScale }}
                >
                    <div className="cinema-emoji-icon">⚠️</div>
                    <h2 className="cinema-headline">THE CHALLENGE</h2>

                    {/* Reduced Text: Focusing on the "Hook" */}
                    <div className="cinema-text-block">
                        <p className="cinema-lead-text">
                            "{story?.challenge.split('.')[0]}."
                        </p>
                        <p className="cinema-sub-text">
                            {story?.challenge.split('.').slice(1).join('.')}
                        </p>
                    </div>
                </motion.div>


                {/* --- SECT 3: SOLUTION --- */}
                <motion.div
                    className="cinema-slide text-slide"
                    style={{ opacity: solutionOpacity, filter: solutionBlur }}
                >
                    <div className="cinema-emoji-icon">💡</div>
                    <h2
                        className="cinema-headline"
                        style={{
                            color: primaryColor,
                            textShadow: `0 0 40px ${primaryColor}80` // Strong illuminating glow
                        }}
                    >
                        THE SOLUTION
                    </h2>

                    <div className="cinema-text-block">
                        <p className="cinema-lead-text">
                            {story?.solution.split('.')[0]}.
                        </p>
                        <p className="cinema-sub-text">
                            {story?.solution.split('.').slice(1).join('.')}
                        </p>
                    </div>
                </motion.div>


                {/* --- SECT 4: IMPACT --- */}
                <motion.div
                    className="cinema-slide impact-slide"
                    style={{ opacity: impactOpacity, filter: impactBlur }}
                >
                    <div className="cinema-emoji-icon">🚀</div>
                    <h2 className="cinema-headline" style={{ color: '#10b981', textShadow: '0 0 40px #10b98180' }}>
                        THE IMPACT
                    </h2>

                    <div className="cinema-stats-grid">
                        {impactStats.map((stat, i) => (
                            <div key={i} className="cinema-stat-item">
                                <span
                                    className="cinema-stat-val"
                                    style={{
                                        backgroundImage: experience.colorTheme,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        filter: `drop-shadow(0 0 20px ${primaryColor}60)`
                                    }}
                                >
                                    {stat}
                                </span>
                            </div>
                        ))}
                    </div>

                    <p className="cinema-impact-text">{story?.impact}</p>
                </motion.div>

            </div>

            <motion.div
                className="scroll-hint"
                style={{ opacity: heroOpacity }}
            >
                <div className="mouse"></div>
                <span>Scroll to explore</span>
            </motion.div>
        </div>
    );
}
