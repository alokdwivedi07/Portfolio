import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { fadeUp, staggerContainer, viewport } from '../../animations/motion'
import { portfolioData } from '../../data/portfolioData'

function Certificates() {
  return (
    <section id="certificates" className="section-pad-tight">
      <div className="container-narrow text-center">
        <div className="section-label">Certificates</div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {portfolioData.certificates.map((certificate) => (
            <motion.article
              key={certificate.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-52 min-w-0 flex-col justify-between bg-paper-clean p-5 text-left shadow-fine transition duration-premium ease-premium odd:rounded-tl-[2.5rem] even:rounded-br-[2.5rem] hover:relative hover:z-10 hover:-translate-y-2 hover:bg-white hover:shadow-premium sm:min-h-56 sm:p-6"
            >
              <div>
                <div className="grid size-10 place-items-center border border-line bg-white transition group-hover:border-ink group-hover:bg-paper-warm group-hover:text-ink">
                  <Award size={20} />
                </div>
                <p className="mt-6 micro-copy">
                  {certificate.issuer}
                </p>
                <h3 className="mt-3 break-words text-lg font-black uppercase leading-tight text-ink sm:text-xl">
                  {certificate.title}
                </h3>
              </div>
              <a
                href={
                  certificate.url ??
                  `/certificates/${certificate.title.toLowerCase().replaceAll(' ', '-')}.svg`
                }
                target="_blank"
                rel="noreferrer"
                className="relative mt-5 inline-flex w-fit items-center gap-2 overflow-hidden rounded-subtle border border-ink bg-white px-4 py-2.5 text-[9px] font-black uppercase tracking-[0.22em] text-ink shadow-fine transition duration-premium ease-premium before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-ink before:transition-all hover:-translate-y-1 hover:bg-paper-warm hover:pl-5 hover:shadow-premium hover:before:w-full hover:before:opacity-10"
              >
                View <ExternalLink size={13} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
