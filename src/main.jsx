import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routers.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
    <FirebaseProvider>
  <RouterProvider router={Router} />
  </FirebaseProvider>
    </HelmetProvider>
  
  </StrictMode>
)
