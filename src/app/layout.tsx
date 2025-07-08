// src/app/layout.tsx
import './globals.css';


import { ReactNode } from 'react'
import { AppProvider } from '@/contexts/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <AppProvider>
          
          {children}
          <ToastContainer/>
        </AppProvider>
      </body>
    </html>
  )
}
