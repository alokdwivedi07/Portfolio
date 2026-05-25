import { motion } from 'framer-motion'
import {
  SiC,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'
import { BrainCircuit, Cloud, Code2, Database, Wrench } from 'lucide-react'
import { fadeUp, staggerContainer, viewport } from '../../animations/motion'

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', icon: Database },
      { name: 'C', icon: SiC },
    ],
  },
  {
    title: 'Frameworks',
    icon: BrainCircuit,
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'NodeJS', icon: SiNodedotjs },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Scikit Learn', icon: SiScikitlearn },
      { name: 'LangChain', icon: BrainCircuit },
    ],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-pad-tight border-y border-line bg-white">
      <div className="site-container">
        <div className="section-label">Skills</div>
        <div className="grid min-w-0 gap-5 lg:grid-cols-2 lg:gap-6">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="min-w-0 border border-line bg-paper-clean shadow-fine"
              >
                <div className="flex min-w-0 items-center justify-between gap-4 border-b border-line bg-paper-clean px-5 py-4 sm:px-6">
                  <h2 className="break-words text-[10px] font-black uppercase tracking-[0.24em] text-ink/78 sm:text-[11px] sm:tracking-[0.32em]">
                    {category.title}
                  </h2>
                  <CategoryIcon size={18} className="text-ink/70" />
                </div>

                <div className="grid min-w-0 grid-cols-2 gap-3 bg-paper p-3 sm:grid-cols-3 sm:gap-4 sm:p-4">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        variants={fadeUp}
                        whileHover={{ y: -6, scale: 1.03 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="group grid min-h-28 min-w-0 place-items-center bg-paper-clean px-3 py-5 shadow-none transition duration-premium ease-premium even:rounded-tr-[2rem] odd:rounded-bl-[2rem] hover:relative hover:z-10 hover:bg-white hover:shadow-premium sm:min-h-32 sm:px-4 sm:py-6"
                      >
                        <div className="text-center">
                          <Icon
                            className="mx-auto text-ink transition duration-premium ease-premium group-hover:scale-110"
                            size={30}
                          />
                          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-ink/78">
                            {skill.name}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
