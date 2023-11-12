import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import App from "./components/App"
import { AppContextProvider } from "./components/AppContext"

const rootElement = document.querySelector("#app")
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
)
