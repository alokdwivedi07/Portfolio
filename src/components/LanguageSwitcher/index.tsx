const languages = ['EN', 'HI']

function LanguageSwitcher() {
  return (
    <div className="inline-flex border border-line bg-paper-clean">
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          className="px-3 py-2 text-[9px] font-black uppercase tracking-[0.24em] text-ink/70 first:bg-white first:text-ink"
        >
          {language}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
