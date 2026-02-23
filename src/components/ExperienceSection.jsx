import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
    {
        period: '2024 – Present',
        role: 'Senior Frontend Developer',
        company: 'TechCorp Inc.',
        desc: 'Leading a team of 5 engineers to build a SaaS dashboard serving 50k+ users. Migrated legacy codebase to React 18 with a 40% performance improvement.',
        tags: ['React', 'TypeScript', 'AWS'],
    },
    {
        period: '2022 – 2024',
        role: 'Full-Stack Developer',
        company: 'StartupXYZ',
        desc: 'Built the entire product from zero to launch. Architected both the Next.js frontend and Node.js API, handling payment integrations and real-time features.',
        tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    },
    {
        period: '2020 – 2022',
        role: 'Junior Developer',
        company: 'DigitalAgency',
        desc: 'Developed responsive websites and e-commerce platforms for 20+ clients. Focused on pixel-perfect implementations and cross-browser compatibility.',
        tags: ['HTML/CSS', 'JavaScript', 'WordPress'],
    },
]

export default function ExperienceSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })

    return (
        <div ref={ref} className="w-full">
            <div className="mb-10 md:mb-14">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                    My <span className="accent-text" style={{ WebkitTextFillColor: 'var(--color-accent)' }}>Journey</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                    A timeline of my professional growth and key milestones.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={exp.role}
                        className="experience-card"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">{exp.role}</h3>
                            <span className="text-sm font-bold px-3 py-1 rounded-full bg-white/5 text-orange-400 border border-orange-500/20">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-lg text-gray-300 font-medium mb-4">{exp.company}</p>
                        <p className="text-base text-gray-400 leading-relaxed mb-6 max-w-3xl">{exp.desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors hover:bg-orange-500/20"
                                    style={{ background: 'rgba(255,255,255,0.05)', color: '#fb923c' }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
