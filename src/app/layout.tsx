import type { Metadata } from 'next'
import '@/styles/global.css'
import AppProvider from '@/context/AppProvider'
import { AuthProvider } from '@/context/AuthContext'


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
          <AuthProvider>
            {children}
          </AuthProvider>
      </body>
    </html>
  )
}
