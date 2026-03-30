"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const projects = [
        { 
            id: 1, 
            title: "Crime Analysis and Prediction System",
            shortDesc: "Platform to analyze historical crime data and predict occurrences.",
            desc: "The Crime Analysis and Prediction System (CAPS) is a web-based application developed using Django and MongoDB. It allows users to analyze historical crime data and predict possible crime occurrences based on location and time. This system helps law enforcement agencies, researchers, and decision-makers to understand crime patterns and trends more efficiently.",
            tech: ["Django", "MongoDB", "Bootstrap CSS", "Render"],
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop", 
            demoLink: "https://crimeanalysis-project-hosting.onrender.com/",
            githubLink: "https://github.com/HimanshuP3002/crime-analysis-project",
            span: "col-span-12",
            height: "min-h-[400px] md:min-h-[450px]"
        },
        { 
            id: 2, 
            title: "Fixora", 
            shortDesc: "Civic operations and issue management platform.",
            desc: "Fixora is a Django-based civic operations and issue management platform built for hackathons, smart governance demos, and operational dashboards. It combines a modern Tailwind-powered UI with MongoDB-backed business data, role-aware workflows, AI review tooling, reporting, notifications, and admin-driven system settings.",
            tech: ["Django", "MongoDB", "TailwindCSS", "Allauth"],
            img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop", 
            demoLink: "https://fixora-61qg.onrender.com/",
            githubLink: "https://github.com/HimanshuP3002/Fixora",
            span: "col-span-12 md:col-span-6",
            height: "min-h-[350px]"
        },
        { 
            id: 3, 
            title: "PrepWise", 
            shortDesc: "Smart meal planning and attendance optimization.",
            desc: "Smart meal planning and attendance optimization for messes and hostels.",
            tech: ["Python", "React", "Node.js"],
            img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1000&auto=format&fit=crop", 
            demoLink: "https://prepwise-v0gk.onrender.com/",
            githubLink: "https://github.com/HimanshuP3002/PrepWise",
            span: "col-span-12 md:col-span-6",
            height: "min-h-[350px]"
        },
        { 
            id: 4, 
            title: "Replate", 
            shortDesc: "Food waste-to-value platform.",
            desc: "RePlate is a web-first food waste-to-value platform for restaurants, consumers, NGOs, and local operators. The current MVP is designed for a Nagpur pilot and focuses on fast surplus listing, self-pickup, donation rescue, and lightweight partner moderation.",
            tech: ["Next.js", "React", "TypeScript", "PostgreSQL"],
            img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1000&auto=format&fit=crop", 
            demoLink: "https://skill-deploy-ba6qc4r9cg-codex-agent-deploys.vercel.app/",
            githubLink: "https://github.com/HimanshuP3002/RePlate",
            span: "col-span-12 lg:col-span-6",
            height: "min-h-[300px]"
        },
        { 
            id: 5, 
            title: "FeelBack", 
            shortDesc: "Student Feedback Sentiment Analyzer using AI.",
            desc: "FeelBack is a simple, beginner-friendly AI web application that analyzes student feedback and identifies whether the sentiment is Positive, Neutral, or Negative. Built using Python, Streamlit, and TextBlob, focusing on clarity, usability, and real-world relevance.",
            tech: ["Python", "Streamlit", "TextBlob", "HTML/CSS"],
            img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", 
            demoLink: "https://feelback-jjuna5kdj5zoetpck4vuwk.streamlit.app/",
            githubLink: "https://github.com/HimanshuP3002/FeelBack",
            span: "col-span-12 lg:col-span-6",
            height: "min-h-[300px]"
        }
    ];

    const activeProject = projects.find(p => p.id === selectedId);

    return (
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center pointer-events-none p-6 md:p-12 py-24 relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-sm mb-16 pointer-events-auto"
            >
                Featured <span className="text-blue-400">Work</span>
            </motion.h2>

            {/* BENTO GRID */}
            <div className="grid grid-cols-12 gap-6 md:gap-8 w-full max-w-7xl pointer-events-auto">
                {projects.map((item, i) => (
                    <Tilt 
                        key={item.id} 
                        glareEnable={true} 
                        glareMaxOpacity={0.3} 
                        tiltMaxAngleX={5} 
                        tiltMaxAngleY={5} 
                        className={item.span}
                        style={{ height: '100%' }}
                    >
                        <motion.div
                            layoutId={`card-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`group relative rounded-[2rem] backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all overflow-hidden flex flex-col cursor-pointer ${item.height} h-full`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                            
                            <motion.img 
                                layoutId={`img-${item.id}`}
                                src={item.img} 
                                alt={item.title} 
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80 mix-blend-screen"
                            />
                            
                            <div className="relative z-20 p-8 flex flex-col flex-grow justify-end">
                                <motion.h3 layoutId={`title-${item.id}`} className="text-3xl font-bold tracking-wider mb-2 drop-shadow-md text-white group-hover:text-blue-300 transition-colors">
                                    {item.title}
                                </motion.h3>
                                <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm md:text-base drop-shadow-md line-clamp-2">
                                    {item.shortDesc}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {item.tech.slice(0, 3).map((t, idx) => (
                                        <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 backdrop-blur-md">
                                            {t}
                                        </span>
                                    ))}
                                    {item.tech.length > 3 && <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">+{item.tech.length - 3}</span>}
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>

            {/* EXPANDED MODAL */}
            <AnimatePresence>
                {selectedId && activeProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto px-4 perspective-1000">
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        />
                        
                        <motion.div 
                            layoutId={`card-${activeProject.id}`}
                            className="relative w-full max-w-4xl bg-[#0f111a] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(59,130,246,0.3)] z-10 flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Modal Image Half */}
                            <motion.div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f111a] z-10 hidden md:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] to-transparent z-10 md:hidden" />
                                <motion.img 
                                    layoutId={`img-${activeProject.id}`}
                                    src={activeProject.img} 
                                    alt={activeProject.title} 
                                    className="w-full h-full object-cover opacity-80"
                                />
                            </motion.div>

                            {/* Modal Content Half */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overscroll-contain overflow-y-auto">
                                <motion.h3 layoutId={`title-${activeProject.id}`} className="text-3xl md:text-4xl font-bold mb-4 text-white">
                                    {activeProject.title}
                                </motion.h3>
                                
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {activeProject.tech.map((t, idx) => (
                                        <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-10 flex-grow">
                                    {activeProject.desc}
                                </p>

                                <div className="flex gap-4 mt-auto">
                                    <a href={activeProject.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                                        Live Demo
                                    </a>
                                    <a href={activeProject.githubLink} target="_blank" rel="noreferrer" className="flex-1 text-center py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-widest uppercase transition-all border border-white/10">
                                        GitHub
                                    </a>
                                </div>
                                
                                <button 
                                    onClick={() => setSelectedId(null)}
                                    className="absolute top-6 right-6 w-10 h-10 bg-black/50 hover:bg-white/10 text-white rounded-full flex items-center justify-center transition-colors border border-white/10"
                                >
                                    ✕
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}