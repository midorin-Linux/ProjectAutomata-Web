import { useLanguage } from "@/components/language-provider"
import { Link } from "react-router"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Home() {
  const { t } = useLanguage()
  return (
    <div className="flex justify-center border-b border-primary px-3 sm:px-8">
      <title>Project Automata | Home</title>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
        <div className="min-w-0 px-4 py-12 sm:px-6 md:py-20">
          <h1 className="font-['Bitter',serif]">
            <span className="text-[clamp(2.5rem,7vw,6rem)] leading-none whitespace-nowrap">
              Intelligence
            </span>
            <br />
            <span className="text-[clamp(1.25rem,3.5vw,3rem)] leading-none whitespace-nowrap">
              With No Boundaries
            </span>
          </h1>
          <h2 className="mt-8">
            {t(
              "Salvation for Those Devoid of Intelligence.",
              "知性無き者への救済を。"
            )}
          </h2>
          <Button asChild className="mt-6 px-4 py-8 text-xl">
            <Link to="/about" className="flex items-center gap-2">
              <ChevronRight className="size-8" />
              About us
            </Link>
          </Button>
        </div>
        <div className="hidden min-w-0 border-l border-primary md:block"></div>
      </div>
    </div>
  )
}
