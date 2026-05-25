import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import { viewport } from '../../animations/motion'

const experiences = [
  {
    role: 'AI/ML Intern',
    organization: 'NIELIT',
    duration: '2025-Present',
    highlights: [
      'Contributing to real-time AI/ML and Generative AI projects, designing end-to-end system architectures including dataset curation from Kaggle and Hugging Face, preprocessing pipelines, model training, fine-tuning, and production deployment.',
      'Engineering LLM-powered multi-agent systems and Retrieval-Augmented Generation pipelines using LangChain and vector databases for document intelligence and enterprise-grade reasoning.',
      'Integrating trained ML models into scalable Django REST APIs and deploying containerized AI services on AWS with performance monitoring and reliability optimization.',
      'Delivering structured technical training and hands-on workshops to paid certification cohorts in AI/ML, covering model development, deployment strategies, and applied industry use cases.',
      'Supporting institutional and government initiatives through examination invigilation, lab supervision, and participation in technology-driven public projects.',
    ],
  },
  {
    role: 'Developer Trainee',
    organization: 'SoftPro India Computer Technologies Private Limited',
    highlights: [
      'Developed a web-based exam platform with interactive user features.',
      'Collaborated with teams to design interactive and user-friendly interfaces.',
      'Implemented automated performance analysis, reducing manual evaluation time significantly.',
      'Managed database integration, ensuring secure handling of student information.',
    ],
  },
]

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const timelineItem: Variants = {
  hidden: { opacity: 0, x: -34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: premiumEase },
  },
}

function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-narrow">
        <div className="section-label">Experience</div>
        <div className="mx-auto max-w-3xl min-w-0">
          <div className="relative border-l border-line-strong">
            <motion.span
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: premiumEase }}
              className="absolute -left-px top-0 h-full w-px origin-top bg-line-strong"
            />
            {experiences.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.organization}`}
                variants={timelineItem}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="relative min-w-0 pb-7 pl-8 last:pb-0 sm:pl-10"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.16, duration: 0.42 }}
                  className="absolute -left-[17px] top-0 grid size-8 place-items-center border border-ink bg-paper"
                >
                  <BriefcaseBusiness size={14} />
                </motion.span>
                <p className="micro-copy">0{index + 1}</p>
                <h3 className="mt-3 break-words text-xl font-black uppercase leading-tight text-ink sm:text-2xl">
                  {item.role}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-ink/70">
                  <span>{item.organization}</span>
                  {item.duration && <span>{item.duration}</span>}
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/78">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-line-strong" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
