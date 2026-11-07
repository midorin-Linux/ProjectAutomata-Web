import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { ErrorBoundary, ErrorPage } from "@/components/error-page"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        {window.location.pathname === "/" ? (
          <App />
        ) : (
          <ErrorPage status={404} />
        )}
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
)
