import { useLanguage } from "@/components/language-provider"
export function Production() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col">
      <title>{`Project Automata | ${t("Production", "制作")}`}</title>
      <div className="flex justify-center border-b border-primary px-3 sm:px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
          <div className="min-w-0 px-4 py-12 sm:px-6 md:py-20">
            <h1 className="font-['Bitter',serif] text-[clamp(2.5rem,7vw,6rem)] leading-none">
              {t("Production", "制作")}
            </h1>
            <p className="mt-8">
              {t(
                "Explore the projects and applications of Project Automata.",
                "Project Automata のプロジェクトとアプリケーションをご紹介します。"
              )}
            </p>
          </div>
          <div className="hidden min-w-0 border-l border-primary px-6 py-20 md:block"></div>
        </div>
      </div>
      <section
        aria-labelledby="projects-heading"
        className="flex flex-col items-center justify-center border-primary px-3 sm:px-8"
      >
        <div className="grid w-full max-w-7xl grid-cols-1 border-x border-primary md:grid-cols-[1fr_3fr]">
          <div className="min-w-0 px-4 py-6 sm:px-6">
            <h2
              id="projects-heading"
              className="font-['Bitter',serif] text-2xl"
            >
              {t("Projects", "プロジェクト")}
            </h2>
          </div>
          <div className="min-w-0 border-t border-primary px-4 py-12 sm:px-6 md:border-t-0 md:border-l md:py-20">
            <h3 className="font-['Bitter',serif] text-2xl sm:text-3xl">
              Chandelier UI
            </h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "This project is currently underway.",
                "このプロジェクトは現在進行中です。"
              )}
            </p>
          </div>
        </div>

        <div className="grid w-full max-w-7xl grid-cols-1 border-x border-t border-primary md:grid-cols-[1fr_3fr]">
          <div className="min-w-0 px-4 py-6 sm:px-6">
            <h2
              id="projects-heading"
              className="font-['Bitter',serif] text-2xl"
            >
              {t("Projects", "プロジェクト")}
            </h2>
          </div>
          <div className="min-w-0 border-t border-primary px-4 py-12 sm:px-6 md:border-t-0 md:border-l md:py-20">
            <h3 className="font-['Bitter',serif] text-2xl sm:text-3xl">
              {t("Coming soon", "近日公開")}
            </h3>
            <p className="mt-4 text-muted-foreground">
              {t(
                "Project details are being prepared for publication.",
                "プロジェクトの詳細は公開に向けて準備中です。"
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
