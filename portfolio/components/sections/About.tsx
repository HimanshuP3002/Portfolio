"use client";

import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
  };

  const textCardClass = "flex items-start gap-5 p-6 md:p-8 rounded-[2rem] bg-black/40 border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md hover:bg-white/5 transition-all group";
  
  const skillChipClass = "px-4 py-2 bg-black/60 border border-white/10 rounded-xl text-sm font-mono text-gray-300 hover:text-white transition-all cursor-default focus:outline-none focus:ring-2";

  return (
    <section
      id="about"
      className="w-full relative z-10 px-4 sm:px-6 py-24 md:py-32 pointer-events-none flex flex-col items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center pointer-events-auto"
      >
        {/* LEFT COLUMN - TEXT INFO */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-black mb-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            About Me.
          </motion.h2>

          <motion.div variants={itemVariants} className={textCardClass}>
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-500/10 text-2xl border border-blue-400/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">👨‍💻</div>
            <p className="text-lg leading-relaxed text-gray-400 font-light pt-2 group-hover:text-gray-300 transition-colors">
              Aspiring Developer passionate about building modern and
              scalable digital experiences. I enjoy transforming ideas into
              real-world applications using clean and efficient code.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={textCardClass}>
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/10 text-2xl border border-purple-400/20 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]">🌐</div>
            <p className="text-lg leading-relaxed text-gray-400 font-light pt-2 group-hover:text-gray-300 transition-colors">
              Web & Software Enthusiast focused on creating interactive,
              high-performance applications with modern technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={textCardClass}>
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-red-500/10 text-2xl border border-red-400/20 group-hover:scale-110 group-hover:bg-red-500/20 transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)]">💡</div>
            <p className="text-lg leading-relaxed text-gray-400 font-light pt-2 group-hover:text-gray-300 transition-colors">
              Constantly learning, experimenting, and building innovative
              web solutions to push my limits and grow as a developer.
            </p>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - SKILLS BENTO BOXES */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full mt-6 lg:mt-0">
          
            <motion.div variants={itemVariants} className="flex-1">
              <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02} className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-900/40 to-black/60 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-2xl h-full flex flex-col justify-center transition-all hover:border-blue-400/50">
                <h4 className="flex items-center gap-3 text-sm text-blue-300 font-bold uppercase tracking-widest mb-8">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  Frontend Stack
                </h4>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Three.js"].map(skill => (
                    <span key={skill} className={`${skillChipClass} hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} className="p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-purple-900/40 to-black/60 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-2xl h-full flex flex-col hover:border-purple-400/50 transition-all">
                <h4 className="flex items-center gap-3 text-sm text-purple-300 font-bold uppercase tracking-widest mb-6">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Node.js", "Python", "Django"].map(skill => (
                    <span key={skill} className={`${skillChipClass} hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt>

              <Tilt glareEnable={true} glareMaxOpacity={0.15} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} className="p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-red-900/40 to-black/60 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] backdrop-blur-2xl h-full flex flex-col hover:border-red-400/50 transition-all">
                <h4 className="flex items-center gap-3 text-sm text-red-300 font-bold uppercase tracking-widest mb-6">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  Database
                </h4>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {["MongoDB", "Firebase"].map(skill => (
                    <span key={skill} className={`${skillChipClass} hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>

        </div>
      </motion.div>
    </section>
  );
}