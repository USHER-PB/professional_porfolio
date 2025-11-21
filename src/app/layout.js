import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Professional Masonry & Structural Engineering | Building Strong Foundations',
  description: 'Expert mason and structural engineer providing quality construction, building design, and craftsmanship services. Residential and commercial projects with 25+ years experience.',
  keywords: 'mason, structural engineer, masonry services, building construction, structural engineering, construction design, local masonry, stone work, brick laying, building design, construction contractor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
