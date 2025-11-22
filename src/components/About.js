'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaAward, FaHeart } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: 'Projets Réalisés',
      value: '200+',
      description: 'Projets résidentiels et commerciaux'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Ingénieur Civil',
      value: 'Diplômé',
      description: 'Spécialisation construction bâtiment'
    }
  ]

  return (
    <section id="services" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Services Professionnels d'Ingénierie</h3>
              <p className="text-gray-100 leading-relaxed mb-4">
                DJOMO KAMGA ARISTIDE - Ingénieur civil spécialisé en construction bâtiment. 
                Nous fournissons des services complets d'ingénierie et de construction pour projets résidentiels et commerciaux, 
                combinant expertise technique et qualité d'artisanat.
              </p>
              <p className="text-gray-100 leading-relaxed">
                De la conception architecturale aux calculs structurels et projets clés en main, 
                nous livrons des services professionnels qui répondent à vos besoins de construction avec précision et fiabilité.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-all hover:scale-105 shadow-lg"
              >
                <div className="text-primary-400 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-lg text-gray-400 font-semibold">{item.title}</div>
                <div className="text-sm text-gray-400 mt-1">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-slate-800 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Mes Prestations</h3>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-primary-400 mb-4">🏗️ Au Pays</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Conception Architecturale</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Calcul des Charges</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Différents Devis</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Réalisation Clé en Main</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold text-primary-400 mb-4">🇨🇦 Au Canada</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Rénovation Construction</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Déneigement</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Réalisation Pavés</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Achat Montage Pneus</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Déménagement</h5>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary-400 mt-1">•</span>
                <div>
                  <h5 className="text-white font-semibold">Assistance Domicile</h5>
                </div>
              </div>
            </div>
          </div>

              <h4 className="text-white font-bold text-lg mb-2">Prêt à Commencer?</h4>
              <p className="text-gray-100 text-sm">
                Contactez-moi pour vos projets de construction et ingénierie.
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Obtenir un Devis
              </a>
        </motion.div>
      </div>
    </section>
  )
}
