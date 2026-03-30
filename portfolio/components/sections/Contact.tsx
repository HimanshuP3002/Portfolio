"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await fetch("https://formsubmit.co/ajax/h.pandey3011@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: "New Portfolio Contact Form Submission!" // Hidden subject line for the email
                })
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000); // Reset to idle after 5 seconds
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center pointer-events-none p-6 md:p-12 py-24"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl p-10 md:p-16 backdrop-blur-2xl bg-black/40 border border-white/20 rounded-[2.5rem] pointer-events-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2 gap-16"
            >
                {/* Left side info */}
                <div className="flex flex-col justify-center">
                    <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider drop-shadow-md text-white">
                        Let's <span className="text-blue-400">Talk</span>
                    </h2>
                    
                    <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed">
                        Ready to build something amazing? Whether you have a visionary project or just want to say hi, I'd love to hear from you.
                    </p>

                    <div className="space-y-4 font-mono text-sm text-gray-300">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-colors">
                           <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                           </span>
                           <span className="font-semibold tracking-wide text-white break-all">h.pandey3011@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-colors">
                           <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                           </span>
                           <span className="font-semibold tracking-wide text-white">+91 75229 17974 <span className="text-gray-500 mx-1">|</span> +91 92797 05630</span>
                        </div>
                    </div>
                </div>

                {/* Right side Form */}
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                    <div className="relative group">
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none text-white focus:border-blue-500 focus:bg-white/10 transition-all peer placeholder-transparent"
                            placeholder="Name"
                            disabled={status === "submitting"}
                        />
                        <label htmlFor="name" className="absolute left-5 top-4 text-gray-400 font-light text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-black peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-300 peer-valid:bg-black peer-valid:px-2 rounded-md pointer-events-none">Your Name</label>
                    </div>

                    <div className="relative group">
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required 
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none text-white focus:border-blue-500 focus:bg-white/10 transition-all peer placeholder-transparent"
                            placeholder="Email"
                            disabled={status === "submitting"}
                        />
                        <label htmlFor="email" className="absolute left-5 top-4 text-gray-400 font-light text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-black peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-300 peer-valid:bg-black peer-valid:px-2 rounded-md pointer-events-none">Your Email</label>
                    </div>

                    <div className="relative group">
                        <textarea 
                            id="message" 
                            name="message"
                            required 
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none text-white focus:border-blue-500 focus:bg-white/10 transition-all peer placeholder-transparent resize-none"
                            placeholder="Message"
                            disabled={status === "submitting"}
                        />
                        <label htmlFor="message" className="absolute left-5 top-4 text-gray-400 font-light text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-focus:bg-black peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:text-gray-300 peer-valid:bg-black peer-valid:px-2 rounded-md pointer-events-none">Your Message</label>
                    </div>

                    <button 
                        type="submit"
                        disabled={status === "submitting"}
                        className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase transition-all border ${
                            status === "success" 
                            ? "bg-green-600 border-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.6)]"
                            : status === "error"
                            ? "bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                            : "bg-blue-600 border-blue-500 hover:bg-blue-500 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:-translate-y-1"
                        } ${status === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Error! Try Again" : "Send Message"}
                    </button>
                    
                    {status === "success" && (
                        <p className="text-green-400 text-sm font-mono text-center mt-2 absolute bottom-2 left-0 right-0">Thank you! I will get back to you soon.</p>
                    )}
                </form>

            </motion.div>
        </section>
    );
}