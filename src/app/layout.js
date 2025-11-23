import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fâk-brù Solution | Civil Engineering & Construction Services',
  description: 'Fâk-brù Solution - Professional civil engineering and construction services. Specializing in building construction, architectural design, structural calculations, cost estimates, turnkey projects, and comprehensive renovation services.',
  keywords: 'Fâk-brù Solution, civil engineering, building construction, architectural design, structural calculations, cost estimates, turnkey projects, construction renovation, engineering services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
