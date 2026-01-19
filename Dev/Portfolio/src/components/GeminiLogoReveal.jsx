import React from 'react';
import { motion } from 'framer-motion';

const GeminiLogoReveal = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px', // Moved to Right
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                pointerEvents: 'none'
            }}
        >
            {/* Main Star */}
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                    <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4dabf7" />
                        <stop offset="50%" stopColor="#da77f2" />
                        <stop offset="100%" stopColor="#ff6b6b" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central 4-pointed Star */}
                <motion.path
                    d="M50 0 C50 0 70 40 100 50 C100 50 70 60 50 100 C50 100 30 60 0 50 C0 50 30 40 50 0"
                    fill="url(#gemini-gradient)"
                    filter="url(#glow)"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                />

                {/* Smaller Orbiting Star 1 */}
                <motion.circle
                    cx="80" cy="20" r="5"
                    fill="#fff"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Smaller Orbiting Star 2 */}
                <motion.path
                    d="M10 80 L15 85 L10 90 L5 85 Z"
                    fill="#da77f2"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </motion.div>
    );
};

export default GeminiLogoReveal;
