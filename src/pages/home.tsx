import { Link } from "react-router"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Home() {
  return (
    <div className="flex justify-center border-b border-primary px-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[3fr_2fr]">
        <div className="min-w-0 px-6 py-20">
          <h1 className="font-['Bitter',serif]">
            <span className="text-8xl whitespace-nowrap">Intelligence</span>
            <br />
            <span className="text-5xl whitespace-nowrap">
              With No Boundaries
            </span>
          </h1>
          <h2 className="mt-8">
            Project Automata is an integrated initiative dedicated to advancing
            AI through research, development, and real-world applications.
          </h2>
          <Button asChild className="mt-6 px-4 py-8 text-xl">
            <Link to="/about" className="flex items-center gap-2">
              <ChevronRight className="size-8" />
              About us
            </Link>
          </Button>
        </div>
        <div className="min-w-0 border-l border-primary"></div>
      </div>
    </div>
  )
}
