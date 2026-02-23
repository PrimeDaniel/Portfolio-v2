import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import AboutSection from './components/AboutSection'
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
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Navbar (Fixed outside scroll container) */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-center pointer-events-none"
      >
        <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto">
          <span className="flex-shrink-0 text-xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-primary)' }}>
            Daniel<span className="text-xs align-super text-gray-500"> Fr</span>
          </span>

          <div className="nav-glass rounded-full px-3 py-2 hidden md:flex items-center justify-between flex-1 max-w-2xl mx-6">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Connect'].map((item) => {
              const id = item.toLowerCase()
              const isActive = activeSection === id
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`px-4 lg:px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item}
                </a>
              )
            })}
          </div>

          <button className="flex-shrink-0 glow-btn px-8 py-3 rounded-full text-base font-semibold text-white flex items-center gap-2.5 whitespace-nowrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </button>
        </div>
      </motion.nav>

      {/* Main Snap Container */}
      <main
        id="snap-container"
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* ─── Hero ─── */}
        <section id="home" className="h-screen w-full snap-start snap-always flex items-center justify-center relative overflow-hidden">
          <ScrollReveal className="w-full h-full">
            <HeroSection />
          </ScrollReveal>
        </section>

        {/* ─── About ─── */}
        <section id="about" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-transparent relative">
          <div className="max-w-7xl mx-auto w-full px-6">
            <ScrollReveal>
              <AboutSection />
            </ScrollReveal>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-4xl opacity-0" />

        {/* ─── Skills ─── */}
        <section id="skills" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-transparent relative">
          <div className="max-w-7xl mx-auto w-full px-6">
            <ScrollReveal>
              <SkillsSection />
            </ScrollReveal>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-4xl opacity-0" />

        {/* ─── Projects ─── */}
        <section id="projects" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-transparent relative">
          <div className="max-w-7xl mx-auto w-full px-6">
            <ScrollReveal>
              <ProjectsSection />
            </ScrollReveal>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-4xl opacity-0" />

        {/* ─── Experience ─── */}
        <section id="experience" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-transparent relative">
          <div className="max-w-7xl mx-auto w-full px-6">
            <ScrollReveal>
              <ExperienceSection />
            </ScrollReveal>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-4xl opacity-0" />

        {/* ─── Contact ─── */}
        <section id="connect" className="h-screen w-full snap-start snap-always flex items-center justify-center bg-transparent relative">
          <div className="max-w-7xl mx-auto w-full px-6">
            <ScrollReveal>
              <ContactSection />
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/5 snapped-footer scroll-snap-align-start">
          <p className="text-xs text-gray-600">© 2026 Noah. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
