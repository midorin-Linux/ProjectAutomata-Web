import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link, NavLink, Outlet } from "react-router"

export function App() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <header className="flex justify-center border-b border-primary px-8">
        <div className="flex w-full max-w-7xl items-center justify-between border-x border-primary px-8 py-4">
          <Link
            className="font-['Bitter',serif] text-2xl whitespace-nowrap"
            to="/"
          >
            Project Automata
          </Link>
          <div>
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {[
                  ["/about", "About"],
                  ["/news", "News"],
                  ["/research", "Research"],
                  ["/production", "Production"],
                  ["/contact", "Contact us"],
                ].map(([to, label]) => (
                  <NavigationMenuItem key={to}>
                    <NavigationMenuLink
                      asChild
                      className="relative after:absolute after:top-full after:left-1/2 after:mt-1 after:hidden after:-translate-x-1/2 after:border-x-4 after:border-b-4 after:border-x-transparent after:border-b-primary aria-[current=page]:bg-muted aria-[current=page]:after:block"
                    >
                      <NavLink to={to} end>
                        {label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      <div className="flex h-full justify-center border-b border-primary px-8">
        <div className="w-full max-w-7xl gap-6 border-x border-primary">
          <div className="h-full"></div>
        </div>
      </div>

      {/*<div className="flex justify-center border-b border-primary px-8">*/}
      {/*  <div className="w-full max-w-7xl gap-6 border-x border-primary">*/}
      {/*  </div>*/}
      {/*</div>*/}

      <footer className="flex justify-center px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[2fr_3fr]">
          <div className="flex min-w-0 flex-col gap-4 px-6 py-20">
            <Link
              className="font-['Bitter',serif] text-2xl whitespace-nowrap"
              to="/"
            >
              Project Automata
            </Link>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} midorin-Linux. All rights
              reserved.
            </p>
          </div>
          <div className="gap-4px-6 flex min-w-0 flex-col py-20"></div>
        </div>
      </footer>
    </div>
  )
}

export default App
