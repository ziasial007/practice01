import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import ReactRout from './rout/ReactRout.tsx'
import { ContextData } from './contextapi/ContextData.tsx'

createRoot(document.getElementById('root')!).render(

  <ContextData>
    <BrowserRouter>
      <ReactRout />
    </BrowserRouter>
  </ContextData>

)
