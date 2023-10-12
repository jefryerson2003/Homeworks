import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirstApp from './challenge1/FirstApp.jsx'
import Handle from './challenge2/Handle.jsx'
import Categories from './challenge3/categories.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Categories />
  </React.StrictMode>,
)
