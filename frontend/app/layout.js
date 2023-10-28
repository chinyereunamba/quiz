import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import NavbarComponent from './component/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <NavbarComponent />
        {children}
      </Providers>
    </html>
  )
}
