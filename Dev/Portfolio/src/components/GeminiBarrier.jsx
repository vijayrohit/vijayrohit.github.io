import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GeminiBarrier = ({ isBroken }) => {
    const BARRIER_LEFT = '99.5vw';

    return (
        <AnimatePresence>
            {!isBroken && (
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 0.5, scaleY: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.5,
                        filter: "blur(20px)",
                        transition: { duration: 0.2 }
                    }}
                    style={{
                        position: 'absolute',
                        left: BARRIER_LEFT,
                        top: 'auto', // Only at bottom
                        bottom: 0,
                        height: '240px', // ~3x wolf height (assuming wolf is ~80px tall)
                        width: '2px',
                        background: 'linear-gradient(to bottom, transparent, #4dabf7, #da77f2)',
                        boxShadow: '0 0 15px rgba(77, 171, 247, 0.5)',
                        zIndex: 15
                    }}
                />
            )}
        </AnimatePresence>
    );
};

export default GeminiBarrier;
