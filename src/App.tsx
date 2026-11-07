import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button.tsx"
import { ChevronRight } from "lucide-react"

export function App() {
  return (
    // <div className="flex min-h-svh p-6">
    //   <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
    //     <div>
    //       <h1 className="font-medium">Project ready!</h1>
    //       <p>You may now add components and start building.</p>
    //       <p>We&apos;ve already added the button component for you.</p>
    //       <Button className="mt-2">Button</Button>
    //     </div>
    //     <div className="font-mono text-xs text-muted-foreground">
    //       (Press <kbd>d</kbd> to toggle dark mode)
    //     </div>
    //   </div>
    // </div>
    <div className="flex w-screen flex-col justify-center">
      <div className="flex w-full justify-center border-b border-primary px-8">
        <div className="flex w-full max-w-7xl items-center justify-between border-x border-primary px-8 py-4">
          <div>
            <a
              className="font-['Bitter',serif] text-2xl whitespace-nowrap"
              href="/"
            >
              Project Automata
            </a>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink>About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>News</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Research</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Production</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Contact us</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center px-8">
        <div className="flex w-full max-w-7xl items-center justify-between border-x border-primary">
          <section id="hero" className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_2fr]">
              <div className="min-w-0 px-6 py-20">
                <div className="flex flex-col items-start justify-start">
                  <h1 className="font-['Bitter',serif]">
                    <span className="text-8xl whitespace-nowrap">
                      Intelligence
                    </span>
                    <br />
                    <span className="text-5xl whitespace-nowrap">
                      With No Boundaries
                    </span>
                  </h1>
                </div>
                <div className="mt-8">
                  <h2>
                    Project Automata is an integrated initiative dedicated to
                    advancing AI through research, development, and real-world
                    applications.
                  </h2>
                </div>
                <Button className="mt-6 px-4 py-8 text-xl">
                  <a href="/about" className="flex items-center gap-2">
                    <ChevronRight className="size-8" />
                    About us
                  </a>
                </Button>
              </div>
              <div className="min-w-0 border-l border-primary">
                <h1>Hello!</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
