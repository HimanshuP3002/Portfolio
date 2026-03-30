"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            const sections = ["about", "projects", "contact"];
            let current = "";
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Check if section is in the middle of screen
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 pointer-events-auto ${isScrolled || mobileMenuOpen ? "py-4 backdrop-blur-md bg-black/50 border-b border-white/10" : "py-6 bg-transparent"}`}
        >
            <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
                <h1 className="font-black text-sm md:text-lg tracking-widest uppercase text-white cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    HIMANSHU B. PANDEY
                </h1>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href} 
                            className={`transition-colors relative pb-1 ${activeSection === link.name.toLowerCase() ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" : "text-gray-300 hover:text-white"}`}
                        >
                            {link.name}
                            {activeSection === link.name.toLowerCase() && (
                                <motion.div layoutId="navIndicator" className="absolute left-0 right-0 bottom-0 h-[2px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] rounded-full" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-blue-400 focus:outline-none transition-colors">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Drawer */}
            {mobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-white/10 overflow-hidden mt-4"
                >
                    <div className="flex flex-col items-center py-6 space-y-6">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                onClick={() => setMobileMenuOpen(false)}
                                className={`text-xl font-bold tracking-widest ${activeSection === link.name.toLowerCase() ? "text-blue-400" : "text-white"}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}