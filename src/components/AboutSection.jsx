import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <div ref={ref} className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
            {/* Left: Image / Visual */}
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden glass-card group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    {/* Placeholder for actual photo, using the glow pulse class from index.css */}
                    <div className="w-full h-full bg-[#111] flex items-center justify-center image-placeholder text-white/20 transition-transform duration-500 group-hover:scale-105">
                        Your Photo Here
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full" />
                <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
            </motion.div>

            {/* Right: Text Content */}
            <div className="flex-1 text-left">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-orange-400 font-bold tracking-widest mb-4">ABOUT ME</p>
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        Passionate about <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Creating</span>
                        <span className="accent-text" style={{ WebkitTextFillColor: 'var(--color-accent)' }}> Impact.</span>
                    </h2>

                    <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
                        <p>
                            I'm a full-stack developer with a deep passion for building intuitive, high-performance web applications. I believe that great software is made by writing clean code, focusing on user experience, and constantly learning.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new design trends, contributing to open-source, or analyzing the latest tech innovations. I thrive in environments where cross-functional teams collaborate to solve complex problems.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">5+</h4>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
