import React, { useRef, useEffect, useState } from 'react';
import { usePresence } from 'framer-motion';

const BinaryCurtain = () => {
    const canvasRef = useRef(null);
    const [isPresent, safeToRemove] = usePresence();
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
    const startTimeRef = useRef(performance.now());
    const isPresentRef = useRef(isPresent);

    // Track isPresent changes to reset animation
    useEffect(() => {
        if (isPresentRef.current !== isPresent) {
            startTimeRef.current = performance.now();
            isPresentRef.current = isPresent;
        }
    }, [isPresent]);

    // Mobile detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

    // Configuration - optimized for mobile
    const PIXEL_SIZE = isMobile ? 30 : 15; // Larger pixels on mobile = fewer to render
    const FONT_SIZE = isMobile ? 14 : 10;

    // Initialize Canvas Size
    useEffect(() => {
        const updateSize = () => {
            // Debounce or just update. 
            // On mobile, height changes on scroll (address bar). 
            // We update to keep canvas covering screen, but visual continuity is handled by startTimeRef.
            if (typeof window !== 'undefined') {
                setDimensions({ w: window.innerWidth, h: window.innerHeight });
            }
        };
        updateSize();
        // Optional: debounce this if needed, but the ref fix handles the visual glitch
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // Animation Loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.w === 0) return;

        const ctx = canvas.getContext('2d');
        const cols = Math.ceil(dimensions.w / PIXEL_SIZE);
        const rows = Math.ceil(dimensions.h / PIXEL_SIZE);

        // Pre-generate grid data (Same as before)
        const grid = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                grid.push({
                    r, c,
                    x: c * PIXEL_SIZE,
                    y: r * PIXEL_SIZE,
                    char: (r + c) % 2 === 0 ? '1' : '0',
                    distReveal: (rows - 1 - r) + (cols - 1 - c),
                });
            }
        }

        let animationFrameId;
        // Use the Ref time, do NOT reset it on resize
        let startTime = startTimeRef.current;

        // DURATION for the sweep - faster on mobile
        const DURATION = isMobile ? 500 : 800; // ms

        const render = (time) => {
            // Recalculate elapsed relative to the PERSISTENT start time
            // We need to sync 'time' (from requestAnimationFrame) with 'startTime' (from performance.now())
            // Ideally, we just check performance.now() inside here too for consistency
            const now = performance.now();
            const elapsed = now - startTime;

            // Clear screen
            ctx.clearRect(0, 0, dimensions.w, dimensions.h);

            ctx.font = `bold ${FONT_SIZE}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Optimization: If animation is essentially done (elapsed >> DURATION), 
            // and we are in "Enter" phase (isPresent=true), we want to show NOTHING (transparent).
            // So we can skip drawing loop entirely to save mobile battery/performance.
            if (isPresent && elapsed > DURATION) {
                // Animation done, screen fully revealed (cleared).
                // Do nothing.
            } else {
                // Draw Grid
                for (let i = 0; i < grid.length; i++) {
                    const p = grid[i];
                    let shouldDraw = false;

                    if (!isPresent) {
                        // EXIT PHASE: COVER SCREEN (L -> R)
                        const delayPerCol = DURATION / cols;
                        const delay = p.c * delayPerCol;
                        if (elapsed > delay) shouldDraw = true;
                    } else {
                        // ENTER PHASE: REVEAL SCREEN (BR -> TL)
                        const maxDist = rows + cols;
                        const delayPerDist = DURATION / maxDist;
                        const delay = p.distReveal * delayPerDist;
                        if (elapsed < delay) shouldDraw = true;
                    }

                    if (shouldDraw) {
                        ctx.fillStyle = "black";
                        ctx.fillRect(p.x, p.y, PIXEL_SIZE, PIXEL_SIZE);
                        ctx.fillStyle = "rgba(255,255,255,0.3)";
                        ctx.fillText(p.char, p.x + PIXEL_SIZE / 2, p.y + PIXEL_SIZE / 2);
                    }
                }
            }

            // Loop logic
            // We keep generating frames for a bit longer to handle resize updates smoothly if needed,
            // but we can stop if unchanged.
            // Actually, keep running to handle safeToRemove check
            if (elapsed < (DURATION + 200)) {
                animationFrameId = requestAnimationFrame(render);
            } else {
                if (!isPresent) {
                    safeToRemove();
                }
            }
        };

        animationFrameId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(animationFrameId);

    }, [isPresent, dimensions, safeToRemove]);

    return (
        <canvas
            ref={canvasRef}
            width={dimensions.w}
            height={dimensions.h}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                pointerEvents: 'none'
            }}
        />
    );
};

export default BinaryCurtain;
