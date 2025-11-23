'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleNavigation = (href) => {
    router.push(href)
    setIsOpen(false)
    setShowMenu(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-slate-900/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-1">
                <span className="text-amber-500">Fâk-brù</span>
                <span className="text-gray-300"> Solution</span>
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Ingénierie Civile & Construction</p>
            </div>
          </div>

          {/* Desktop Menu Toggle */}
          <div className="hidden md:block">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 text-gray-300 hover:text-amber-500 px-4 py-2 rounded-lg border border-gray-600 hover:border-amber-500 transition-all"
            >
              <span className="text-sm font-medium">Menu</span>
              <FaChevronDown className={`transform transition-transform ${showMenu ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-500 p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Menu */}
      {showMenu && (
        <div className="hidden md:block bg-slate-800/95 backdrop-blur-sm border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-amber-500 px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-slate-700/50"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-amber-500 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
