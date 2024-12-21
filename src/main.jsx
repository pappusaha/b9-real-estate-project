import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routers.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <FirebaseProvider>
  <RouterProvider router={Router} />
  </FirebaseProvider>
  </StrictMode>
)
