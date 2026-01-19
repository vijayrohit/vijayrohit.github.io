import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { FaChevronRight } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import "../styles/Experience.css";

export default function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Work Experience</h2>
                </div>

                <div className="experience-stack">
                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link to={`/experience/${exp.id}`}>
                                <SpotlightCard className="experience-item-card">
                                    <div className="exp-main-info">
                                        <h3 className="exp-role-title">{exp.role}</h3>
                                        <div className="exp-company-name">{exp.company} • {exp.location}</div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span className="exp-date-badge">{exp.period}</span>
                                        <FaChevronRight className="read-more-icon" />
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
