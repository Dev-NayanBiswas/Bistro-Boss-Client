import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactLenis from 'lenis/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
import { ParallaxProvider } from 'react-scroll-parallax';
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AllContext/AuthContext/AuthProvider.jsx'

const queryClient = new QueryClient();

axios.defaults.baseURL = 'http://localhost:8000'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
      <HelmetProvider>
        <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
        <RouterProvider router={Routes}/>
        <ReactQueryDevtools initialIsOpen/>
        </ParallaxProvider>
      </QueryClientProvider>
      </AuthProvider>
      </HelmetProvider>
    </ReactLenis>
  </StrictMode>,
)
