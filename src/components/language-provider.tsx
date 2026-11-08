import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type Language = "ja" | "en"
const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
}>({
  language: "en" as Language,
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language")
    return saved === "ja" || saved === "en"
      ? saved
      : navigator.language.startsWith("ja")
        ? "ja"
        : "en"
  })
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem("language", language)
  }, [language])
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return {
    ...context,
    t: (en: string, ja: string) => (context.language === "ja" ? ja : en),
  }
}
