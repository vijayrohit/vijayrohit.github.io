import React, { useMemo, useEffect, useState } from "react";
import "../styles/TechBackground.css";
// Import icons matching the user's stack
import { FaReact, FaPython, FaDatabase, FaGitAlt, FaJs, FaNodeJs, FaAws, FaDocker, FaCloud, FaServer } from "react-icons/fa";
import { SiDotnet, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function TechBackground() {
    const iconSet = [
        FaReact, SiDotnet, FaPython, FaDatabase, FaCloud,
        SiTypescript, FaJs, FaNodeJs, FaGitAlt, FaServer, FaDocker
    ];

    // Client-side only rendering to avoid hydration mismatch with random values
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const icons = useMemo(() => {
        if (!mounted) return [];

        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 15 : 40;

        // Generate falling icons
        return Array.from({ length: count }).map((_, i) => {
            const Icon = iconSet[i % iconSet.length];

            // Randomize properties
            const left = Math.floor(Math.random() * 100); // 0-100%
            const animationDuration = 15 + Math.random() * 20; // 15s - 35s (slow)
            const animationDelay = -(Math.random() * 35); // Start mid-fall
            const size = 20 + Math.random() * 30; // 20px - 50px
            const opacity = 0.05 + Math.random() * 0.1; // 0.05 - 0.15 (subtle)

            return (
                <div
                    key={i}
                    className="tech-icon-wrapper"
                    style={{
                        left: `${left}%`,
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${animationDelay}s`,
                        fontSize: `${size}px`,
                        opacity: opacity
                    }}
                >
                    <Icon />
                </div>
            );
        });
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div className="tech-background">
            {icons}
        </div>
    );
}
