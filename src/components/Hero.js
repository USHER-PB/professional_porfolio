'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp, FaPhone, FaBuilding, FaHardHat, FaDraftingCompass } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 relative overflow-hidden">
      {/* Background Construction Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-amber-900/20 to-slate-900/80">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941229-c2b07e8e8da9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center shadow-2xl border-4 border-white/20"
          >
            <FaBuilding className="text-white text-5xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold text-white mb-4"
          >
            <span className="text-amber-500">Fâk-brù</span><br />
            <span className="text-3xl md:text-5xl text-gray-300">Solution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-amber-400 mb-6 font-semibold"
          >
            Ingénierie Civile & Construction Bâtiment
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Expertise en conception architecturale, calcul des structures, devis quantitatifs, 
            et réalisation clé en main. Services complets de construction et rénovation au Canada.
          </motion.p>

          {/* Key Services Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex flex-col items-center text-gray-300">
              <FaDraftingCompass className="text-3xl mb-2 text-amber-500" />
              <span className="text-sm">Conception</span>
            </div>
            <div className="flex flex-col items-center text-gray-300">
              <FaHardHat className="text-3xl mb-2 text-amber-500" />
              <span className="text-sm">Construction</span>
            </div>
            <div className="flex flex-col items-center text-gray-300">
              <FaBuilding className="text-3xl mb-2 text-amber-500" />
              <span className="text-sm">Rénovation</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <button
              onClick={() => window.location.href = '/services'}
              className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all border-2 border-amber-500"
            >
              Découvrir nos services
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold text-lg shadow-2xl hover:shadow-lg transform hover:scale-105 transition-all border-2 border-gray-600 hover:border-amber-500"
            >
              Demander un devis
            </button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-gray-300"
          >
            <a
              href="mailto:ushertchankoumi9@gmail.com"
              className="flex items-center gap-3 hover:text-amber-500 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
              <span>ushertchankoumi9@gmail.com</span>
            </a>
            <a
              href="https://wa.me/237690290961"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-amber-500 transition-colors"
            >
              <FaWhatsapp className="text-2xl" />
              <span>+237 690 290 961</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
