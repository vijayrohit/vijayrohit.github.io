import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const RunningWolf = ({ onBarrierHit }) => {
    const controls = useAnimation();

    // Configuration
    const START_X = -150;
    const BARRIER_X = window.innerWidth * 0.995; // 99.5% of screen width (Absolute Edge)
    const END_X = window.innerWidth + 150;
    const SPEED_PX_PER_SEC = 200; // Adjust speed

    useEffect(() => {
        const sequence = async () => {
            // 1. Reset
            await controls.set({ x: START_X, display: 'block' });

            // 2. Run to Barrier
            // Time = Distance / Speed
            const distToBarrier = BARRIER_X - START_X;
            const timeToBarrier = distToBarrier / SPEED_PX_PER_SEC;

            await controls.start({
                x: BARRIER_X,
                transition: {
                    duration: timeToBarrier,
                    ease: "linear"
                }
            });

            // 3. HIT BARRIER event
            if (onBarrierHit) onBarrierHit();

            // 4. Stop and Fade Out
            // The wolf has done its job. We fade it out to avoid "running in place" visual.
            await controls.start({
                opacity: 0,
                transition: { duration: 0.5 }
            });

            // End sequence (no loop)
        };

        sequence();
    }, [controls]);

    return (
        <motion.img
            src="/wolf_f.gif"
            alt="Running Wolf"
            animate={controls}
            className="hero-running-wolf-interactive"
            style={{
                position: 'absolute',
                bottom: 0,
                width: '120px',
                zIndex: 20,
                pointerEvents: 'none',
                left: 0 // Controlled by x
            }}
        />
    );
};

export default RunningWolf;
