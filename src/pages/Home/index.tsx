import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { pageTransition } from '../../animations/motion'
import About from '../../components/About'
import Achievements from '../../components/Achievements'
import Certificates from '../../components/Certificates'
import Contact from '../../components/Contact'
import Experience from '../../components/Experience'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Projects from '../../components/Projects'
import Skills from '../../components/Skills'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.section-pad, .section-pad-tight').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.9 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              once: true,
            },
          },
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-paper text-ink"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}

export default Home
