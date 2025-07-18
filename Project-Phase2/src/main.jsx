import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import F from './d.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <F />
  </StrictMode>,
)
