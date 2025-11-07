import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Professional Portfolio | Your Uncle\'s Name',
  description: 'Professional portfolio showcasing skills, experience, and expertise. Available for new opportunities.',
  keywords: 'portfolio, professional, skills, experience, hire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
