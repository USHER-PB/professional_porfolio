'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft, FaRulerCombined, FaBuilding, FaCheckCircle, FaClock, FaCalculator, FaHardHat } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function CalculStructures() {
  const features = [
    {
      icon: <FaRulerCombined className="text-2xl" />,
      title: "Analyse Structurelle",
      description: "Calcul complet des charges et contraintes sur votre structure"
    },
    {
      icon: <FaBuilding className="text-2xl" />,
      title: "Béton Armé",
      description: "Dimensionnement précis des éléments en béton armé selon les normes"
    },
    {
      icon: <FaHardHat className="text-2xl" />,
      title: "Charpente Métallique",
      description: "Conception et calcul de structures métalliques optimisées"
    },
    {
      icon: <FaCalculator className="text-2xl" />,
      title: "Logiciels BIM",
      description: "Utilisation des logiciels les plus avancés pour modélisation 3D"
    }
  ]

  const expertise = [
    {
      title: "Bâtiments Résidentiels",
      description: "Maisons individuelles, immeubles, copropriétés",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Bâtiments Commerciaux",
      description: "Bureaux, commerces, entrepôts industriels",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Structures Spéciales",
      description: "Ponts, ouvrages d'art, structures complexes",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-amber-900/20 to-slate-900/80">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941229-c2b07e8e8da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors">
              <FaArrowLeft />
              <span>Retour aux services</span>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center">
              <FaRulerCombined className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Calcul des <span className="text-amber-500">Structures</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expertise en calcul structural pour garantir la sécurité et la pérennité de vos constructions. 
              Notre approche rigoureuse assure des structures optimisées et conformes aux normes les plus strictes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Notre <span className="text-amber-500">Expertise</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Services <span className="text-amber-500">Techniques</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-amber-500">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Normes et <span className="text-amber-500">Standards</span>
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Eurocodes et normes internationales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Normes canadiennes (NBCC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Règles de calcul BAEL et CM66</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Analyse sismique et thermique</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Logiciels <span className="text-amber-500">Utilisés</span>
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">AutoCAD et Revit pour la modélisation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Robot Structural Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">ETABS et SAP2000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Tekla Structures pour la charpente</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Besoin d&apos;une étude structurelle ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Confiez-nous le calcul de vos structures pour une sécurité garantie
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-xl"
          >
            Demander une étude
          </motion.button>
        </div>
      </section>
    </div>
  )
}
