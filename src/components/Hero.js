'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center text-6xl font-bold text-white shadow-2xl"
          >
            ME
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
           Building Strong Foundations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-primary-400 mb-6"
          >
            Crafting Lasting Beauty
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Professional mason and structural engineer with decades of experience in quality construction. 
            From custom stonework to complete building design, we bring technical expertise and artistic craftsmanship to every project.
            Your vision, built to last.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#services"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Get a Quote
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="mailto:uncle@masonry.com"
              className="text-gray-400 hover:text-primary-400 transform hover:scale-110 transition-all"
            >
              <FaEnvelope size={32} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
