import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: "⚛️", color: "#61DAFB" },
            { name: "Next.js", icon: "▲", color: "#000000" },
            { name: "Tailwind", icon: "🎨", color: "#38B2AC" },
            { name: "TypeScript", icon: "📘", color: "#3178C6" },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: "🟢", color: "#339933" },
            { name: "PostgreSQL", icon: "🐘", color: "#336791" },
            { name: "GraphQL", icon: "◈", color: "#E10098" },
            { name: "Python", icon: "🐍", color: "#3776AB" },
        ]
    },
    {
        title: "Tools & Design",
        skills: [
            { name: "Figma", icon: "🖌️", color: "#F24E1E" },
            { name: "Git", icon: "📦", color: "#F05032" },
            { name: "Docker", icon: "🐳", color: "#2496ED" },
            { name: "AWS", icon: "☁️", color: "#FF9900" },
        ]
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    }
}

export default function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <div ref={ref} className="w-full">
            <div className="mb-16 md:mb-24">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    My <span className="accent-text" style={{ WebkitTextFillColor: 'var(--color-accent)' }}>Arsenal</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                    A curated stack of technologies I use to build scalable, high-performance applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {skillCategories.map((category, catIndex) => (
                    <div key={category.title} className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-200 border-b border-white/10 pb-2 inline-block">
                            {category.title}
                        </h3>

                        <motion.div
                            className="grid grid-cols-1 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="group relative p-4 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors flex items-center gap-4 cursor-default overflow-hidden"
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)` }}
                                    />

                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-inner relative z-10"
                                        style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}
                                    >
                                        {skill.icon}
                                    </div>

                                    <div className="relative z-10">
                                        <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </h4>
                                        <div className="h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full mt-1" style={{ background: skill.color }} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}
