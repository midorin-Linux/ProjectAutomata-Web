import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  useReducedMotion,
} from "motion/react"
import * as m from "motion/react-m"
import { Dialog } from "radix-ui"
import { useState } from "react"
import { Link, NavLink, Outlet } from "react-router"

const navigationItems = [
  ["/about", "About"],
  ["/news", "News"],
  ["/research", "Research"],
  ["/production", "Production"],
  ["/contact", "Contact us"],
]

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const closedX = shouldReduceMotion ? 0 : "100%"
  const duration = shouldReduceMotion ? 0 : 0.2

  return (
    <div className="flex min-h-svh w-full flex-col">
      <header className="flex shrink-0 justify-center border-b border-primary px-3 sm:px-8">
        <div className="flex w-full max-w-7xl items-center justify-between gap-4 border-x border-primary px-4 py-4 sm:px-8">
          <Link
            className="font-['Bitter',serif] text-2xl whitespace-nowrap"
            to="/"
          >
            Project Automata
          </Link>
          <div className="hidden lg:block">
            <NavigationMenu className="max-w-full">
              <NavigationMenuList className="flex-wrap justify-start gap-x-2 gap-y-1">
                {navigationItems.map(([to, label]) => (
                  <NavigationMenuItem key={to}>
                    <NavigationMenuLink
                      asChild
                      className="relative min-h-11 justify-center whitespace-nowrap after:absolute after:top-full after:left-1/2 after:mt-1 after:hidden after:-translate-x-1/2 after:border-x-4 after:border-b-4 after:border-x-transparent after:border-b-primary hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground aria-[current=page]:bg-muted aria-[current=page]:after:block aria-[current=page]:hover:bg-primary aria-[current=page]:focus:bg-primary"
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
          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="min-h-11 min-w-11 border-primary lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </Dialog.Trigger>
            <LazyMotion features={domAnimation}>
              <AnimatePresence>
                {menuOpen && (
                  <Dialog.Portal forceMount>
                    <div className="fixed inset-0 z-50 overflow-hidden">
                      <Dialog.Overlay asChild>
                        <m.div
                          className="absolute inset-0 z-40 bg-black/50"
                          initial={shouldReduceMotion ? false : { opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration }}
                        />
                      </Dialog.Overlay>
                      <Dialog.Content asChild aria-describedby={undefined}>
                        <m.div
                          className="absolute inset-y-0 right-0 z-50 flex w-80 max-w-[calc(100%-2rem)] flex-col gap-6 overflow-y-auto overscroll-contain border-l border-primary bg-background p-6 shadow-xl"
                          initial={shouldReduceMotion ? false : { x: closedX }}
                          animate={{ x: 0 }}
                          exit={{ x: closedX }}
                          transition={{ duration, ease: "easeOut" }}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <Dialog.Title className="font-['Bitter',serif] text-2xl">
                              Menu
                            </Dialog.Title>
                            <Dialog.Close asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="min-h-11 min-w-11"
                                aria-label="Close navigation menu"
                              >
                                <X className="size-5" aria-hidden="true" />
                              </Button>
                            </Dialog.Close>
                          </div>
                          <nav aria-label="Main navigation">
                            <ul className="flex flex-col gap-2">
                              {navigationItems.map(([to, label]) => (
                                <li key={to}>
                                  <Dialog.Close asChild>
                                    <NavLink
                                      to={to}
                                      end
                                      className="flex min-h-11 items-center px-3 py-2 text-lg outline-none hover:bg-primary hover:text-primary-foreground focus-visible:bg-primary focus-visible:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:bg-muted aria-[current=page]:hover:bg-primary aria-[current=page]:focus-visible:bg-primary"
                                    >
                                      {label}
                                    </NavLink>
                                  </Dialog.Close>
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </m.div>
                      </Dialog.Content>
                    </div>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </LazyMotion>
          </Dialog.Root>
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      <div className="flex flex-1 justify-center border-b border-primary px-3 sm:px-8">
        <div className="w-full max-w-7xl border-x border-primary"></div>
      </div>

      {/*<div className="flex justify-center border-b border-primary px-8">*/}
      {/*  <div className="w-full max-w-7xl gap-6 border-x border-primary">*/}
      {/*  </div>*/}
      {/*</div>*/}

      <footer className="flex shrink-0 justify-center px-3 sm:px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 border-x border-primary md:grid-cols-[2fr_3fr]">
          <div className="flex min-w-0 flex-col gap-4 px-4 py-10 sm:px-6 md:py-20">
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
          <div className="hidden min-w-0 flex-col py-20 md:flex"></div>
        </div>
      </footer>
    </div>
  )
}

export default App
