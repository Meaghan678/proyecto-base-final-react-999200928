import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './views/Home'
import { ChatProvider } from './context/ChatContext'
import { RouterApp } from './router/RouterApp'

// main styles
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ChatProvider>
        <RouterApp/>
      </ChatProvider>
  </StrictMode>,
)
