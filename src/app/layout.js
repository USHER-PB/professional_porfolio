import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DJOMO KAMGA ARISTIDE | Civil Engineering & Construction Services',
  description: 'Professional civil engineer specializing in building construction. Offering architectural design, structural calculations, cost estimates, turnkey projects, renovation, and comprehensive construction services.',
  keywords: 'DJOMO KAMGA ARISTIDE, civil engineering, building construction, architectural design, structural calculations, cost estimates, turnkey projects, construction renovation, snow removal, paving services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
