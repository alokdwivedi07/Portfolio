import { motion } from 'framer-motion'
import { ArrowUpRight, BrainCircuit, Github, Leaf, NotebookTabs } from 'lucide-react'
import { staggerContainer, viewport, zoomIn } from '../../animations/motion'
import { portfolioData } from '../../data/portfolioData'
import { config } from '../../services/config'

const projectIcons = [BrainCircuit, Leaf, NotebookTabs]

const projectLinks = [
  {
    github: `${config.links.github}/rag-knowledge-assistant`,
  },
  {
    github: `${config.links.github}/agritech-ai-platform`,
  },
  {
    github: `${config.links.github}/exam-prep-platform`,
  },
]

function Projects() {
  return (
    <section id="projects" className="section-pad border-y border-line bg-white">
      <div className="site-container">
        <div className="section-label">Projects</div>

        <div className="relative mb-5 min-h-44 overflow-hidden rounded-tr-[3rem] border border-line bg-[linear-gradient(135deg,#ffffff,#e7f6ff_48%,#fff0c7)] text-ink shadow-premium">
          <div className="absolute inset-0 bg-grid-ink bg-grid opacity-45" />
          <div className="absolute right-[-5rem] top-[-5rem] size-64 rounded-full border border-line bg-white/60" />
          <div className="relative z-10 flex min-h-44 items-center justify-center px-5 text-center sm:px-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.34em] text-ink/72">
                Projects
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase leading-none text-ink sm:text-4xl lg:text-5xl">
                Works
              </h2>
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid min-w-0 gap-3 md:grid-cols-3"
        >
          {portfolioData.projects.map((project, index) => {
            const Icon = projectIcons[index] ?? BrainCircuit
            return (
              <motion.article
                key={project.title}
                variants={zoomIn}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex min-h-[20rem] min-w-0 flex-col justify-between overflow-hidden bg-paper-clean p-4 shadow-fine transition duration-premium ease-premium odd:rounded-tl-[2.5rem] even:rounded-br-[2.5rem] hover:z-10 hover:-translate-y-2 hover:bg-white hover:shadow-premium sm:min-h-[23rem] sm:p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-grid-ink bg-grid opacity-0 transition duration-premium group-hover:opacity-30" />
                <div>
                  <div className="relative z-10 flex items-center justify-between">
                    <Icon size={30} className="transition group-hover:scale-110" />
                    <ArrowUpRight size={18} className="text-ink/70 transition group-hover:scale-110" />
                  </div>
                  <p className="relative z-10 mt-5 text-[10px] font-black uppercase tracking-[0.28em] text-ink/68">
                    {project.category}
                  </p>
                  <h3 className="relative z-10 mt-4 break-words text-xl font-black uppercase leading-tight text-ink sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-6 text-ink/78">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-line-strong bg-white/70 px-3 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-ink/76 transition group-hover:border-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <a
                      href={projectLinks[index]?.github ?? config.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="relative inline-flex min-w-36 items-center justify-center gap-2 overflow-hidden rounded-subtle border border-ink bg-white px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.22em] text-ink shadow-fine transition duration-premium ease-premium before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-ink before:transition-all hover:-translate-y-1 hover:bg-paper-warm hover:pl-4 hover:shadow-premium hover:before:w-full hover:before:opacity-10"
                    >
                      <Github size={13} />
                      Github
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
