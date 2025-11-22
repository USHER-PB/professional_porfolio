'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaCode, 
  FaDatabase, 
  FaTools, 
  FaChartLine, 
  FaPalette,
  FaServer,
  FaMobile,
  FaCloud,
  FaHome,
  FaBuilding
} from 'react-icons/fa'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projectCategories = [
    {
      category: 'Projets Résidentiels',
      icon: <FaHome className="text-3xl" />,
      skills: [
        { name: 'Maisons Personnalisées', level: 95 },
        { name: 'Extensions Domicile', level: 90 },
        { name: 'Espaces Extérieurs', level: 92 },
        { name: 'Restauration Historique', level: 88 }
      ]
    },
    {
      category: 'Travaux Commerciaux',
      icon: <FaBuilding className="text-3xl" />,
      skills: [
        { name: 'Bureaux', level: 93 },
        { name: 'Espaces Commerciaux', level: 87 },
        { name: 'Installations Industrielles', level: 91 },
        { name: 'Structures Publiques', level: 89 }
      ]
    },
    {
      category: 'Maçonnerie Spécialisée',
      icon: <FaTools className="text-3xl" />,
      skills: [
        { name: 'Travail Pierre', level: 94 },
        { name: 'Maçonnerie Briques', level: 92 },
        { name: 'Design Béton', level: 88 },
        { name: 'Éléments Architecturaux', level: 90 }
      ]
    },
    {
      category: 'Ingénierie Structurelle',
      icon: <FaChartLine className="text-3xl" />,
      skills: [
        { name: 'Conception Fondations', level: 96 },
        { name: 'Analyse Charges', level: 91 },
        { name: 'Ingénierie Sismique', level: 89 },
        { name: 'Inspection Bâtiments', level: 93 }
      ]
    }
  ]

  const featuredProjects = [
    { name: 'Villa Pierre Moderne', icon: <FaHome /> },
    { name: 'Centre Commercial', icon: <FaBuilding /> },
    { name: 'Restauration Église Historique', icon: <FaTools /> },
    { name: 'Construction Pont', icon: <FaServer /> }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Projets
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez notre portfolio de réalisations en ingénierie et construction
          </p>
        </motion.div>

        {/* Project Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Signature Projects
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-white text-4xl mb-3 flex justify-center">
                  {project.icon}
                </div>
                <p className="text-white font-semibold">{project.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Voir Notre Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
