import type { Metadata } from 'next'
import '@/styles/global.css'
import AppProvider from '@/context/AppProvider'
import ProtectedRoute from './components/atoms/ProtectedRoute'


export const metadata: Metadata = {
  title: 'Smart Finance',
  description: 'Web-based financial recorder',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body>
          <AppProvider>
            {children}
          </AppProvider>
      </body>
    </html>
  )
}
