import { useLanguage } from "@/components/language-provider"

// Keep project metadata independent of the editorial presentation.
const featuredProduction = {
  name: "Chandelier UI",
  description: {
    en: "Chandelier UI is a self-built desktop AI chat app made with Tauri 2.0, Rust, and React/TypeScript, using an integrated architecture.",
    ja: "Chandelier UI は、Tauri 2.0・Rust・React/TypeScript で開発した、統合アーキテクチャを採用する自作のデスクトップ AI チャットアプリです。",
  },
  technologies: ["Tauri 2.0", "Rust", "React", "TypeScript"],
  kind: { en: "Desktop application", ja: "デスクトップアプリ" },
  // No local detail route exists; use the public project linked in the README.
  href: "https://github.com/midorin-Linux/ChandelierUI",
}

type ProductionProject = typeof featuredProduction

export function Production() {
  const { t } = useLanguage()
  return (
    <div className="flex flex-col">
      <title>Project Automata | Production</title>
      <div className="flex justify-center border-b border-primary px-3 sm:px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
          <div className="min-w-0 px-4 py-12 sm:px-6 md:py-20">
            <h1 className="font-['Bitter',serif] text-[clamp(2.5rem,7vw,6rem)] leading-none">
              Production
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
      <FeaturedProduction project={featuredProduction} />
      <UpcomingProduction />
    </div>
  )
}

function FeaturedProduction({ project }: { project: ProductionProject }) {
  const { t } = useLanguage()
  return (
    <section
      aria-labelledby="featured-production-heading"
      className="flex justify-center border-b border-primary px-3 sm:px-8"
    >
      <div className="grid w-full max-w-7xl grid-cols-1 border-x border-primary md:grid-cols-[3fr_2fr]">
        <div className="flex min-w-0 flex-col items-start px-4 py-10 sm:px-6 md:py-16 lg:py-20">
          <p className="text-xs tracking-widest text-primary">
            {t("01 / FEATURED PRODUCTION", "01 / 注目のプロジェクト")}
          </p>
          <h2
            id="featured-production-heading"
            className="mt-8 font-['Bitter',serif] text-[clamp(2.25rem,4.5vw,4.5rem)] leading-tight"
          >
            {project.name}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            {t(project.description.en, project.description.ja)}
          </p>
          <a
            href={project.href}
            className="group mt-10 inline-flex min-h-11 items-center gap-3 text-primary underline underline-offset-4 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            {t("Explore Project", "プロジェクトを見る")}
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
            >
              ↗
            </span>
            <span className="sr-only">{t(" on GitHub", "（GitHub）")}</span>
          </a>
        </div>
        <div className="flex min-w-0 flex-col border-t border-primary md:border-t-0 md:border-l">
          <ProductionSpecs project={project} />
        </div>
      </div>
    </section>
  )
}

function ProductionSpecs({ project }: { project: ProductionProject }) {
  const { t } = useLanguage()
  const rows: [string, React.ReactNode][] = [
    [
      "Status",
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden="true"
          className="size-2 animate-pulse rounded-full bg-primary motion-reduce:animate-none"
        />
        {t("In Development", "開発中")}
      </span>,
    ],
    ["Type", t(project.kind.en, project.kind.ja)],
    ["Stack", project.technologies.join(" / ")],
  ]
  return (
    <dl className="flex flex-1 flex-col text-sm">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="grid flex-1 grid-cols-[6rem_1fr] border-b border-primary last:border-b-0"
        >
          <dt className="flex items-center border-r border-primary px-4 py-3 text-xs tracking-widest text-primary uppercase sm:px-6">
            {label}
          </dt>
          <dd className="flex min-w-0 items-center px-4 py-3 sm:px-6">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function UpcomingProduction() {
  // const { t } = useLanguage()
  return (
    <section
      aria-labelledby="upcoming-production-heading"
      className="flex justify-center border-b border-primary px-3 sm:px-8"
    >
      {/*<div className="grid w-full max-w-7xl grid-cols-1 border-x border-primary md:grid-cols-[1fr_3fr]">*/}
      {/*  <p className="min-w-0 px-4 py-6 text-xs tracking-widest text-primary sm:px-6">*/}
      {/*    {t("02 / UPCOMING", "02 / 公開予定")}*/}
      {/*  </p>*/}
      {/*  <div className="min-w-0 border-t border-primary px-4 py-8 sm:px-6 md:border-t-0 md:border-l md:py-10">*/}
      {/*    <h2*/}
      {/*      id="upcoming-production-heading"*/}
      {/*      className="font-['Bitter',serif] text-2xl sm:text-3xl"*/}
      {/*    >*/}
      {/*      {t("Coming soon", "近日公開")}*/}
      {/*    </h2>*/}
      {/*    <p className="mt-4 leading-relaxed text-muted-foreground">*/}
      {/*      {t(*/}
      {/*        "Project details are being prepared for publication.",*/}
      {/*        "プロジェクトの詳細は公開に向けて準備中です。"*/}
      {/*      )}*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </section>
  )
}
