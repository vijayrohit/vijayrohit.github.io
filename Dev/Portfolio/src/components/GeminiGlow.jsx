import React from 'react';
import { motion } from 'framer-motion';

const GeminiGlow = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 5, // Behind content but in front of bg? Or overlay?
                // Let's make it a bottom overlay like the app
                background: 'radial-gradient(circle at 50% 100%, rgba(66, 133, 244, 0.2) 0%, rgba(219, 68, 55, 0.1) 25%, rgba(244, 180, 0, 0.05) 50%, transparent 80%)',
                mixBlendMode: 'screen'
            }}
        >
            {/* The signature Gemini sparkle/wave at bottom */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '-10vh',
                    left: '10vw',
                    right: '10vw',
                    height: '40vh',
                    background: 'conic-gradient(from 180deg at 50% 100%, #4285F4, #9B72CB, #D96570, #9B72CB, #4285F4)',
                    filter: 'blur(60px)',
                    opacity: 0.7
                }}
            />
        </motion.div>
    );
};

export default GeminiGlow;
