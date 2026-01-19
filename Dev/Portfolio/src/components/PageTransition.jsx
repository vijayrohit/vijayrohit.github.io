import React from 'react';
import { motion } from 'framer-motion';
import BinaryCurtain from './BinaryCurtain';

const PageTransition = ({ children }) => {
    // Mobile detection for optimized transitions
    const isMobile = typeof window !== 'undefined' && (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: isMobile ? 0.3 : 0.4, // Faster on mobile
                        duration: isMobile ? 0.3 : 0.5
                    }
                }}
                // Delay content slightly LESS to account for faster reveal
                exit={{
                    opacity: 0,
                    transition: { duration: isMobile ? 0.15 : 0.2 }
                }}
                style={{
                    width: '100%',
                    willChange: 'opacity', // Hardware acceleration hint
                }}
            >
                {children}
            </motion.div>

            {/* The Overlay */}
            {/* 
                We place it outside the content div.
                BinaryCurtain now uses usePresence inside, so it just needs to be rendered conditionally by AnimatePresence.
            */}
            <BinaryCurtain />
        </>
    );
};

export default PageTransition;
