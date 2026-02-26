import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Chat } from './components/Chat'
import { Aside } from './components/Aside'
import { App } from "./components/App"

// main styles
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
