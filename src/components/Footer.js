'use client'

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaGithub size={24} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaEnvelope size={24} />, url: 'mailto:uncle@example.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-slate-950 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-400">Professional</span> Portfolio
            </h3>
            <p className="text-gray-400 mb-4">
              Showcasing expertise, experience, and passion for excellence. 
              Let&apos;s connect and explore opportunities together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 uncle@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
              <p>📍 City, Country</p>
              <p className="mt-4 text-sm">
                Available for new opportunities and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Professional Portfolio. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <FaHeart className="text-red-500" /> for career success
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
