import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { AppProvider } from "./Context/appContext"

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
