import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

function Theme() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <button
      type="button"
      aria-label="Toggle visual theme"
      onClick={() => setDark((value) => !value)}
      className="icon-button bg-paper-clean"
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  )
}

export default Theme
