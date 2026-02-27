import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Chat } from './components/Chat'
import { Aside } from './components/Aside'

// main styles
import "./styles/main.css"
import { ChatProvider } from './context/ChatContext'
import { RouterApp } from './router/RouterApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ChatProvider>
        <RouterApp/>
      </ChatProvider>
  </StrictMode>,
)
