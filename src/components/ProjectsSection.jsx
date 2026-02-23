import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Full Stack",
        desc: "A scalable e-commerce solution with real-time inventory, payment processing, and an intuitive admin dashboard.",
        image: "Project 1 Image", // Placeholder
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        link: "#"
    },
    {
        title: "AI Writer Assistant",
        category: "AI Integration",
        desc: "An innovative writing companion powered by OpenAI, offering grammar checks, tone adjustment, and smart autocompletion.",
        image: "Project 2 Image", // Placeholder
        tags: ["React", "Node.js", "OpenAI"],
        link: "#"
    },
    {
        title: "Financial Tech Dashboard",
        category: "Frontend",
        desc: "A sleek, data-heavy dashboard for cryptocurrency tracking, featuring live WebSockets charts and portfolio analysis.",
        image: "Project 3 Image", // Placeholder
        tags: ["Vue", "TailwindCore", "WebSockets"],
        link: "#"
    }
]

export default function ProjectsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <div ref={ref} className="w-full max-w-7xl mx-auto">
            <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
                        Featured <span className="accent-text" style={{ WebkitTextFillColor: 'var(--color-accent)' }}>Work</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        A selection of my recent projects, showcasing my expertise in modern web development.
                    </p>
                </div>
                <button className="hidden md:flex items-center gap-2 text-white hover:text-orange-400 font-semibold transition-colors group">
                    View All Projects
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariants}
                        className="group relative rounded-2xl overflow-hidden glass-card flex flex-col h-full border border-white/5 hover:border-orange-500/30 transition-all duration-500 bg-white/[0.02]"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-video overflow-hidden bg-[#111]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                            <div className="w-full h-full flex items-center justify-center image-placeholder text-white/20 group-hover:scale-105 transition-transform duration-700 ease-in-out">
                                {project.image}
                            </div>

                            {/* Overlay CTA */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="glass-pill w-14 h-14 rounded-full flex items-center justify-center bg-black/40 hover:bg-orange-500 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="7" y1="17" x2="17" y2="7" />
                                        <polyline points="7 7 17 7 17 17" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow relative z-30">
                            <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                                {project.category}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.desc}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-10 md:hidden flex justify-center">
                <button className="flex items-center gap-2 text-white hover:text-orange-400 font-semibold transition-colors group">
                    View All Projects
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
