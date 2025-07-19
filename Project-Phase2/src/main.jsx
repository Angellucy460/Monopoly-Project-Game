import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Tile from './componets/square'
import Board from './componets/gameboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tile/>
    <Board/>
  </StrictMode>,
)
