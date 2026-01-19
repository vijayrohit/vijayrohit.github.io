import React from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import "../styles/Navbar.css";

export default function Navbar() {
    const navLinks = [
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Experience", href: "/#experience" },
        { name: "Contact", href: "/#contact" },
    ];

    const [activeSection, setActiveSection] = React.useState("about");

    React.useEffect(() => {
        // Wait for DOM to paint (especially with Framer Motion entry animations)
        const timer = setTimeout(() => {
            const sections = document.querySelectorAll("section, footer");

            if (sections.length === 0) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id);
                        }
                    });
                },
                {
                    rootMargin: "-40% 0px -45% 0px", // Focus on the middle band of the screen
                    threshold: 0.1
                }
            );

            sections.forEach((section) => observer.observe(section));

            // Cleanup function closure specific
            return () => observer.disconnect();
        }, 300); // 300ms delay to ensure PageTransition has mounted content

        return () => clearTimeout(timer); // Cleanup timeout if unmounted fast
    }, []);

    const handleScroll = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = href;
        }
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="/" className="nav-logo">
                    {portfolioData.name}
                </a>

                <ul className="nav-links">
                    {navLinks.map((link) => {
                        const linkId = link.href.replace('/#', '');
                        return (
                            <li key={link.name} className={`nav-link ${activeSection === linkId ? "active" : ""}`}>
                                <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>{link.name}</a>
                            </li>
                        );
                    })}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <a
                        href={portfolioData.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn desktop-only"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}
