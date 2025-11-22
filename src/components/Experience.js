'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const qualifications = [
    {
      title: 'Ingénieur Civil',
      issuer: 'Option Bâtiment',
      location: 'Diplômé',
      period: 'Formation Complète',
      description: 'Ingénieur civil avec spécialisation en construction bâtiment.',
      achievements: [
        'Conception architecturale',
        'Calcul des charges',
        'Différents devis',
        'Réalisation clé en main'
      ]
    }
  ]

  const education = [
    {
      name: 'Ingénieur Civil',
      issuer: 'Option Bâtiment',
      year: 'Diplômé'
    }
  ]

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ingénieur civil et maçon professionnel avec des décennies d'expérience en construction de qualité
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-500/30"></div>

          {qualifications.map((qualification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-slate-900 z-10"></div>

              <div className="bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-primary-400 mt-1">
                    <FaBriefcase size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{qualification.title}</h3>
                    <p className="text-primary-400 font-semibold text-lg mb-2">{qualification.issuer}</p>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                      <span className="flex items-center gap-2">
                        <FaCalendar /> {qualification.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {qualification.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{qualification.description}</p>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {qualification.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 flex items-start gap-2">
                        <span className="text-primary-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Formation & Éducation
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <div className="text-white text-3xl mb-4">🏆</div>
                <h4 className="text-xl font-bold text-white mb-2">{edu.name}</h4>
                <p className="text-gray-200 text-sm mb-2">{edu.issuer}</p>
                <p className="text-gray-300 text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Discuter Votre Projet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
