import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Cabecalho from './componentes/Cabecalho';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cabecalho />   
    <App />
  </StrictMode>,
)
