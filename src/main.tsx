import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from '@/Home'
import './index.css'

const rootDom = document.getElementById('root')
if (rootDom) {
  ReactDOM.createRoot(rootDom).render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
}
