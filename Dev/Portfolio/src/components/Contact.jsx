import React from "react";
import { portfolioData } from "../data/portfolioData";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import "../styles/Contact.css";

export default function Contact() {
    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <SpotlightCard className="contact-card">
                    <h2 className="contact-title">Let's Connect</h2>
                    <p className="contact-text">
                        I'm always open to discussing new projects, creative ideas, or opportunities in software engineering and AI.
                    </p>

                    <div className="contact-actions">
                        <a href={`mailto:${portfolioData.email}`} className="btn btn-outline">
                            <FaEnvelope />
                        </a>
                        <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FaLinkedin />
                        </a>
                        <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FaGithub />
                        </a>
                    </div>
                </SpotlightCard>

                <div className="footer-bar">
                    <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
