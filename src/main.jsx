import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './assets/Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './assets/Provider/AuthProvider';

// tasStackQuery
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
     <div className='max-w-7xl mx-auto'>
       <RouterProvider router={router} />
     </div>
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
