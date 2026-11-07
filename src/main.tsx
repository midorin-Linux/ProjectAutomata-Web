import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { ErrorBoundary, ErrorPage } from "@/components/error-page"
import { Home } from "@/pages/home"
import { About } from "@/pages/about"
import { PlaceholderPage } from "@/pages/placeholder"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="news" element={<PlaceholderPage title="News" />} />
              <Route
                path="research"
                element={<PlaceholderPage title="Research" />}
              />
              <Route
                path="production"
                element={<PlaceholderPage title="Production" />}
              />
              <Route
                path="contact"
                element={<PlaceholderPage title="Contact us" />}
              />
            </Route>
            <Route path="*" element={<ErrorPage status={404} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
)
