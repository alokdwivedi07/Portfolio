import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import CountUp from 'react-countup'
import { fadeUp, staggerContainer, viewport } from '../../animations/motion'

const achievements = [
  { label: 'CGPA', value: 9.25, decimals: 2, suffix: '' },
  { label: 'Projects', value: 3, decimals: 0, suffix: '+' },
  { label: 'Internships', value: 2, decimals: 0, suffix: '+' },
  { label: 'Certifications', value: 4, decimals: 0, suffix: '+' },
]

function Achievements() {
  return (
    <section id="achievements" className="section-pad-tight border-y border-line bg-white">
      <div className="container-narrow text-center">
        <div className="section-label">Achievements</div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.map((achievement) => (
            <motion.article
              key={achievement.label}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group min-w-0 bg-paper-clean p-4 text-center shadow-fine transition duration-premium ease-premium even:rounded-tl-[2rem] odd:rounded-br-[2rem] hover:relative hover:z-10 hover:-translate-y-2 hover:bg-white hover:shadow-premium sm:p-5"
            >
              <Trophy
                size={22}
                className="mx-auto text-ink transition group-hover:scale-110"
              />
              <h3 className="mt-4 text-3xl font-black uppercase text-ink">
                <CountUp
                  end={achievement.value}
                  decimals={achievement.decimals}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {achievement.suffix}
              </h3>
              <p className="mt-2 text-[10px] font-black uppercase tracking-[0.25em] text-ink/70">
                {achievement.label}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
