import { motion } from 'framer-motion'

/*
  ════════════════════════════════════════════════
  FLOATING IMAGES CONFIG
  ════════════════════════════════════════════════
  Replace the placeholder backgrounds below with
  your actual images. Just swap the `bg` style with:
    backgroundImage: 'url(/your-image.png)'
    backgroundSize: 'cover'
    backgroundPosition: 'center'
  ════════════════════════════════════════════════
*/
const floatingImages = [
    {
        id: 'hero-main',
        label: 'Your Photo',
        bg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        style: {
            right: '5%',
            top: '15%',
            width: 'clamp(220px, 22vw, 360px)',
            height: 'clamp(280px, 28vw, 450px)',
            borderRadius: '28px',
            zIndex: 2,
        },
        animClass: 'float-slow glow-pulse-img',
        delay: 0,
    },
    {
        id: 'lightning-1',
        label: '⚡',
        bg: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
        style: {
            right: '28%',
            top: '10%',
            width: 'clamp(50px, 5vw, 80px)',
            height: 'clamp(50px, 5vw, 80px)',
            borderRadius: '14px',
            zIndex: 3,
        },
        animClass: 'float-fast',
        delay: 0.2,
    },
    {
        id: 'lightning-2',
        label: '⚡',
        bg: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
        style: {
            right: '2%',
            top: '55%',
            width: 'clamp(40px, 4vw, 65px)',
            height: 'clamp(40px, 4vw, 65px)',
            borderRadius: '12px',
            zIndex: 3,
        },
        animClass: 'float-medium',
        delay: 0.4,
    },
    {
        id: 'tech-icon-1',
        label: '</>',
        bg: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
        style: {
            right: '30%',
            bottom: '18%',
            width: 'clamp(55px, 5vw, 85px)',
            height: 'clamp(55px, 5vw, 85px)',
            borderRadius: '14px',
            zIndex: 3,
        },
        animClass: 'float-drift',
        delay: 0.3,
    },
    {
        id: 'tech-icon-2',
        label: '{ }',
        bg: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
        style: {
            right: '18%',
            top: '65%',
            width: 'clamp(45px, 4.5vw, 70px)',
            height: 'clamp(45px, 4.5vw, 70px)',
            borderRadius: '50%',
            zIndex: 3,
        },
        animClass: 'float-fast',
        delay: 0.5,
    },
    {
        id: 'accent-shape',
        label: '✦',
        bg: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
        style: {
            right: '35%',
            top: '38%',
            width: 'clamp(35px, 3.5vw, 55px)',
            height: 'clamp(35px, 3.5vw, 55px)',
            borderRadius: '50%',
            zIndex: 1,
        },
        animClass: 'float-medium',
        delay: 0.6,
    },
    {
        id: 'card-preview',
        label: 'Project Preview',
        bg: 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)',
        style: {
            left: '2%',
            bottom: '8%',
            width: 'clamp(180px, 18vw, 280px)',
            height: 'clamp(110px, 10vw, 160px)',
            borderRadius: '18px',
            zIndex: 2,
            border: '1px solid rgba(255,255,255,0.08)',
        },
        animClass: 'float-drift',
        delay: 0.7,
    },
]

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
            {/* Dark radial gradient background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 110% 90% at 70% 50%, rgba(249,115,22,0.14) 0%, transparent 65%), ' +
                        'radial-gradient(ellipse 70% 65% at 20% 80%, rgba(99,102,241,0.06) 0%, transparent 55%)',
                }}
            />

            {/* ── Text content (left side) ── */}
            <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start h-full">
                <div className="flex-1 max-w-4xl mt-12 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p className="text-base md:text-lg text-gray-400 mb-4 tracking-wide">
                            Hey, I am <span className="text-white font-semibold">Noah</span>
                        </p>

                        <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-extrabold leading-none tracking-tighter mb-10 -ml-1 pb-2">
                            <span className="hero-gradient-text">Web</span>
                            <br />
                            <span className="accent-text" style={{ WebkitTextFillColor: 'var(--color-accent)' }}>
                                Developer.
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed relative z-20">
                            Crafting immersive digital experiences with modern technologies and pixel-perfect precision.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4 mt-10">
                            <button className="glow-btn px-8 py-4 rounded-full text-base font-bold text-white tracking-wide">
                                Hire me
                            </button>
                            <button className="glass-pill w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                                </svg>
                            </button>
                            <button className="glass-pill w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </button>
                        </div>

                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.9 }}
                            className="glass-card p-5 mt-12 max-w-sm border border-white/10"
                        >
                            <p className="text-sm text-gray-300 leading-relaxed italic">
                                &ldquo;Noah delivers exceptional quality. His attention to detail and design sense is unmatched in the industry.&rdquo;
                            </p>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex-shrink-0 shadow-lg" />
                                <div>
                                    <p className="text-sm font-bold text-white">Caroline Abbott</p>
                                    <p className="text-xs text-gray-500 font-medium">CEO at TechFlow</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Floating images (right side) ── */}
            <div className="absolute inset-0 pointer-events-none">
                {floatingImages.map((img) => (
                    <motion.div
                        key={img.id}
                        className={`floating-image ${img.animClass} pointer-events-auto`}
                        style={{ ...img.style, background: img.bg }}
                        initial={{ opacity: 0, scale: 0.8, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: img.delay, ease: 'easeOut' }}
                    >
                        <div className="image-placeholder">{img.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
