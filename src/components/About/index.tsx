import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { fadeUp, staggerContainer, viewport } from '../../animations/motion'

const aboutStats = [
  { label: 'CGPA', value: '9.25', count: 9.25 },
  { label: 'Role', value: 'AI/ML Intern' },
  { label: 'Projects', value: '3+', count: 3, suffix: '+' },
  { label: 'Education', value: 'B.Tech Student' },
]

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-narrow text-center">
        <div className="section-label">About me</div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-readable text-base leading-7 text-ink/80"
        >
          data & MERN Stack Developer and WBL(AI/ML) Intern at National Institute
          of Electronics and Information Technology, building intelligent
          AI-driven products with a passion for innovation, automation, and
          solving real-world problems through technology.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {aboutStats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={fadeUp}
              className="group min-w-0 bg-paper-clean px-4 py-5 shadow-fine transition duration-premium ease-premium even:rounded-tr-[2rem] odd:rounded-bl-[2rem] hover:-translate-y-2 hover:bg-white hover:shadow-premium sm:px-5 sm:py-6"
            >
              <p className="text-3xl font-black text-ink">
                {typeof stat.count === 'number' ? (
                  <>
                    <CountUp
                      end={stat.count}
                      decimals={stat.label === 'CGPA' ? 2 : 0}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </>
                ) : (
                  stat.value
                )}
              </p>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.25em] text-ink/70">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
