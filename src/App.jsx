import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'

/* ─── Scroll-animated wrapper ─── */
function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="relative w-full min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-center"
        style={{ background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(16px)' }}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-primary)' }}>
            Daniel<span className="text-xs align-super text-gray-1000"> Fr</span>
          </span>

          <div className="nav-glass rounded-full px-1 py-1 hidden md:flex gap-1">
            {['Home', 'Skills', 'Experience', 'Connect'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button className="glow-btn px-5 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </button>
        </div>
      </motion.nav>

      {/* ─── Hero ─── */}
      <section id="home">
        <HeroSection />
      </section>

      {/* ─── Skills ─── */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <SkillsSection />
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ─── Experience ─── */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <ExperienceSection />
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* ─── Contact ─── */}
      <section id="connect" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-xs text-gray-600">© 2026 noah. All rights reserved.</p>
      </footer>
    </div>
  )
}
