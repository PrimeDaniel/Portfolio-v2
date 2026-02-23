import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socialLinks = [
    { label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
    { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { label: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
]

export default function ContactSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    const [focusedField, setFocusedField] = useState(null)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleFocus = (field) => setFocusedField(field)
    const handleBlur = (field) => setFocusedField(null)
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const isFloating = (field) => focusedField === field || formData[field].length > 0


    return (
        <div ref={ref} className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">

            {/* Left: Text & Socials */}
            <div className="flex-1 text-left">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-orange-400 font-bold tracking-widest mb-4">WHAT'S NEXT?</p>
                    <h2 className="text-7xl md:text-9xl font-extrabold mb-8 leading-[0.9]">
                        Let's<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Work</span><br />
                        <span className="accent-text" style={{ WebkitTextFillColor: 'var(--color-accent)' }}>Together</span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-md mb-12 leading-relaxed">
                        I'm currently available for freelance projects. If you have an idea you want to discuss, don't hesitate to reach out.
                    </p>

                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={social.label}
                                href="#"
                                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-orange-500/30 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d={social.icon} />
                                </svg>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
                className="flex-1 w-full"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                    <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative">
                            <label className={`text-xs font-bold tracking-wider absolute left-4 transition-all duration-300 ${isFloating('name') ? '-top-2 bg-[#1b1b1d] px-2 text-orange-400 rounded-md shadow-[0_0_10px_#1b1b1d]' : 'top-4 text-gray-500 pointer-events-none'}`}>NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => handleFocus('name')}
                                onBlur={() => handleBlur('name')}
                                className="w-full bg-transparent border border-white/10 rounded-xl px-6 py-4 text-white text-lg outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <label className={`text-xs font-bold tracking-wider absolute left-4 transition-all duration-300 ${isFloating('email') ? '-top-2 bg-[#1b1b1d] px-2 text-orange-400 rounded-md shadow-[0_0_10px_#1b1b1d]' : 'top-4 text-gray-500 pointer-events-none'}`}>EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleBlur('email')}
                                className="w-full bg-transparent border border-white/10 rounded-xl px-6 py-4 text-white text-lg outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <label className={`text-xs font-bold tracking-wider absolute left-4 transition-all duration-300 ${isFloating('message') ? '-top-2 bg-[#1b1b1d] px-2 text-orange-400 rounded-md shadow-[0_0_10px_#1b1b1d]' : 'top-4 text-gray-500 pointer-events-none'}`}>MESSAGE</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                                className="w-full bg-transparent border border-white/10 rounded-xl px-6 py-4 text-white text-lg outline-none focus:border-orange-500 transition-colors resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-black text-lg font-bold py-5 rounded-xl hover:bg-orange-400 hover:text-white transition-colors duration-300 mt-4"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </motion.div>

        </div>
    )
}
