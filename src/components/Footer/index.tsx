import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-scroll'
import { portfolioData } from '../../data/portfolioData'
import { config } from '../../services/config'

function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line bg-paper-clean px-5 py-8 text-center text-ink">
      <Link
        to="home"
        smooth
        offset={-64}
        duration={700}
        className="mx-auto grid size-10 cursor-pointer place-items-center rounded-tl-2xl border border-line-strong bg-white text-ink transition hover:-translate-y-1 hover:border-ink hover:shadow-premium"
      >
        <ArrowUp size={16} />
      </Link>
      <p className="mt-4 break-words text-[10px] font-black uppercase tracking-[0.24em] text-ink sm:text-[11px] sm:tracking-[0.34em]">
        {portfolioData.profile.name}
      </p>
      <p className="mt-2 break-words text-[9px] font-black uppercase tracking-[0.18em] text-ink/70 sm:text-[10px] sm:tracking-[0.25em]">
        {portfolioData.profile.title}
      </p>
      <div className="mt-4 flex justify-center gap-2">
        <a href={config.links.github} aria-label="GitHub" className="grid size-9 place-items-center border border-line-strong bg-white text-ink transition hover:-translate-y-1 hover:border-ink hover:shadow-premium">
          <Github size={15} />
        </a>
        <a href={config.links.linkedin} aria-label="LinkedIn" className="grid size-9 place-items-center border border-line-strong bg-white text-ink transition hover:-translate-y-1 hover:border-ink hover:shadow-premium">
          <Linkedin size={15} />
        </a>
        <Link to="contact" smooth offset={-104} duration={700} aria-label="Contact" className="grid size-9 cursor-pointer place-items-center border border-line-strong bg-white text-ink transition hover:-translate-y-1 hover:border-ink hover:shadow-premium">
          <Mail size={15} />
        </Link>
      </div>
      <p className="mt-5 break-words text-[9px] font-bold uppercase tracking-[0.18em] text-ink/62 sm:text-[10px] sm:tracking-[0.26em]">
      </p>
    </footer>
  )
}

export default Footer
