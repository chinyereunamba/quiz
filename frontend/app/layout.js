import './globals.css'
import { Poppins } from 'next/font/google'
import { Providers } from './providers'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Quiz App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <Providers>
          {children}
      </Providers>
    </html>
  )
}
