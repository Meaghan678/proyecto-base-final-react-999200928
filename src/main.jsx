import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Chat } from './components/Chat'
import { Aside } from './components/Aside'

// main styles
import "./styles/main.css"
import { ChatProvider } from './context/ChatContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ChatProvider>
        <main className='app'>
          <Aside/>
          <Chat/>
        </main>
      </ChatProvider>
  </StrictMode>,
)
