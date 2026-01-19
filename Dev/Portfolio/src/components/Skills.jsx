import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SpotlightCard from "./SpotlightCard";
import "../styles/Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical Skills</h2>
                </div>

                <div className="skills-grid-wrapper">
                    {portfolioData.skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ height: '100%' }} // Ensure motion div takes height for card
                        >
                            <SpotlightCard className="skill-category-card">
                                <h3 className="skill-header">{skillGroup.category}</h3>
                                <div className="skill-list">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="skill-pill">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
