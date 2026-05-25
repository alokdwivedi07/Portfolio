import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { navbarSlide } from '../../animations/motion'
import { config } from '../../services/config'

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Achievements', to: 'achievements' },
  { label: 'Contact', to: 'contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <motion.header
      variants={navbarSlide}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-50 px-3 py-3 text-ink sm:px-5"
    >
      <nav className="site-container flex h-16 min-w-0 items-center justify-between gap-3 rounded-[1.35rem] border border-line bg-white/82 px-3 shadow-premium backdrop-blur-2xl sm:px-4">
        <Link
          to="home"
          smooth
          spy
          offset={-104}
          duration={700}
          onClick={() => setIsOpen(false)}
          className="group relative flex cursor-pointer items-center gap-2 rounded-[1rem] border border-line-strong bg-paper-clean px-3 py-2 text-sm font-black uppercase tracking-[0.24em] text-ink shadow-fine transition duration-premium ease-premium hover:-translate-y-0.5 hover:border-ink hover:bg-white hover:shadow-premium"
        >
          <span className="grid size-7 place-items-center rounded-full border border-ink bg-white text-[10px] tracking-normal transition group-hover:bg-paper-warm">
            A
          </span>
          <span>ALOK</span>
        </Link>

        <div className="hidden min-w-0 items-center gap-1 rounded-[1rem] border border-line bg-paper/70 p-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              spy
              offset={-104}
              duration={700}
              activeClass="!border-line-strong !bg-white !text-ink !shadow-fine"
              className="cursor-pointer whitespace-nowrap rounded-[0.8rem] border border-transparent px-3 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-ink/68 transition duration-premium ease-premium hover:bg-white hover:text-ink hover:shadow-fine xl:text-[11px] xl:tracking-[0.16em]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={config.links.resume}
          className="hidden shrink-0 rounded-[1rem] border border-ink bg-paper-warm px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] text-ink shadow-fine transition hover:-translate-y-0.5 hover:bg-white hover:shadow-premium sm:inline-flex xl:tracking-[0.2em]"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-[1rem] border border-line-strong bg-white text-ink shadow-fine transition hover:border-ink hover:bg-paper-warm lg:hidden"
        >
          {isOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation backdrop"
              className="fixed inset-0 top-[5.5rem] z-40 bg-paper/70 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed inset-x-3 top-[5.5rem] z-50 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-[1.35rem] border border-line bg-white/95 px-5 py-5 text-ink shadow-premium backdrop-blur-2xl lg:hidden"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto grid max-w-section gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035, duration: 0.25 }}
                  >
                    <Link
                      to={item.to}
                      smooth
                      spy
                      offset={-104}
                      duration={700}
                      activeClass="!border-ink !text-ink"
                      onClick={() => setIsOpen(false)}
                      className="flex cursor-pointer items-center justify-between gap-4 rounded-[1rem] border border-transparent px-4 py-3 text-sm font-black uppercase tracking-[0.18em] text-ink/78 transition hover:border-line hover:bg-paper-clean hover:text-ink sm:text-base sm:tracking-[0.22em]"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-ink/55">0{index + 1}</span>
                    </Link>
                  </motion.div>
                ))}

                <a
                  href={config.links.resume}
                  className="mt-4 inline-flex justify-center rounded-[1rem] border border-ink bg-paper-warm px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-ink shadow-fine transition hover:-translate-y-1 hover:bg-white hover:shadow-premium"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
