import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';



import Tile from './components/square';
import Board from './components/gameboard';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
  
  </StrictMode>
)
