import { useLanguage } from "@/components/language-provider"
export function PlaceholderPage({ title }: { title: string }) {
  const { t } = useLanguage()
  return (
    <div className="flex justify-center border-b border-primary px-3 sm:px-8">
      <title>{`Project Automata | ${title}`}</title>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
        <div className="min-w-0 px-4 py-12 sm:px-6 md:py-20">
          <h1 className="font-['Bitter',serif] text-[clamp(2.5rem,7vw,6rem)] leading-none">
            {title}
          </h1>
          <h2 className="mt-8 font-['Bitter',serif] text-2xl sm:text-3xl">
            Coming soon
          </h2>
          <p className="mt-8">
            {t(
              "This page is currently being prepared.",
              "このページは現在準備中です。"
            )}
          </p>
        </div>
        <div className="hidden min-w-0 border-l border-primary px-6 py-20 md:block"></div>
      </div>
    </div>
  )
}
