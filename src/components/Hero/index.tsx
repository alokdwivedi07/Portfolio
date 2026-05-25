import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-scroll'
import { fadeIn, fadeUp, scaleIn, staggerContainer } from '../../animations/motion'
import { portfolioData } from '../../data/portfolioData'
import { config } from '../../services/config'

function Hero() {
  const { profile } = portfolioData

  return (
    <section id="home" className="pt-24 sm:pt-28">
      <div className="site-container grid min-h-[460px] grid-cols-1 overflow-hidden rounded-subtle border border-line bg-paper-clean shadow-premium md:min-h-[520px] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex min-w-0 flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-3"
          >
            HI, I AM
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="display-title max-w-[12ch] [overflow-wrap:normal]"
            style={{ fontSize: 'clamp(2.1rem, 9vw, 4.75rem)' }}
          >
            <span className="block">Alok Kumar</span>
            <span className="block whitespace-nowrap">Dwivedi</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg break-words text-sm font-black uppercase tracking-[0.16em] text-ink/80"
          >
            {profile.title}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-readable text-base leading-7 text-ink/78"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col items-stretch gap-2 xs:flex-row xs:flex-wrap xs:items-center"
          >
            <Link to="about" smooth offset={-104} duration={700} className="primary-button">
              About Me
            </Link>
            <a href={config.links.resume} className="secondary-button">
              Download Resume <Download size={14} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            <a href={config.links.github} aria-label="GitHub" className="icon-button">
              <Github size={15} />
            </a>
            <a href={config.links.linkedin} aria-label="LinkedIn" className="icon-button">
              <Linkedin size={15} />
            </a>
            <Link to="contact" smooth offset={-104} duration={700} aria-label="Contact" className="icon-button cursor-pointer">
              <Mail size={15} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative min-h-[340px] overflow-hidden border-t border-line bg-[linear-gradient(135deg,#ffffff_0%,#e9f7fb_48%,#fff4dc_100%)] text-ink sm:min-h-[430px] md:min-h-full md:border-t-0"
        >
          <div className="absolute inset-0 bg-grid-ink bg-grid opacity-45" />
          <div className="absolute right-[-4rem] top-20 size-72 rounded-[3rem] border border-line bg-white/45" />
          <div className="absolute bottom-[-5rem] left-[-4rem] size-80 rounded-full border border-line bg-paper/60" />
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex h-full min-h-[340px] items-center justify-center px-5 py-6 sm:min-h-[430px] sm:px-10 sm:py-8"
          >
            <img
              src="/profile/MY.png"
              alt="Alok Kumar Dwivedi"
              className="aspect-square w-full max-w-[18.5rem] rounded-full object-cover shadow-premium sm:max-w-[24rem] lg:max-w-[26rem]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
