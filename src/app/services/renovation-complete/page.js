'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft, FaPaintRoller, FaHammer, FaCheckCircle, FaClock, FaHome, FaTools, FaBolt } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function RenovationComplete() {
  const services = [
    {
      icon: <FaHome className="text-2xl" />,
      title: "Modernisation Intérieure",
      description: "Réaménagement des espaces, cuisine, salle de bain, revêtements"
    },
    {
      icon: <FaHammer className="text-2xl" />,
      title: "Extension et Agrandissement",
      description: "Ajout de pièces, vérandas, agrandissement de surface habitable"
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Rénovation Énergétique",
      description: "Isolation, chauffage, ventilation, économie d'énergie"
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Mise aux Normes",
      description: "Conformité électrique, plomberie, sécurité, accessibilité"
    }
  ]

  const projects = [
    {
      title: "Cuisine Moderne",
      description: "Transformation complète avec îlot central et électroménager intégré",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Salle de Bain Luxe",
      description: "Rénovation avec matériaux haut de gamme et design personnalisé",
      image: "https://images.unsplash.com/photo-1584622650116-993871e4413a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Extension Véranda",
      description: "Création d'un espace lumineux avec vue sur le jardin",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583847268964-4a4b7283c370?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
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
              <FaPaintRoller className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Rénovation <span className="text-amber-500">Complète</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Donnez une nouvelle vie à votre espace avec nos services de rénovation complète. 
              De la modernisation intérieure aux extensions, nous transformons vos idées en réalité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Nos <span className="text-amber-500">Réalisations</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Types de <span className="text-amber-500">Rénovation</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-amber-500">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Notre <span className="text-amber-500">Processus</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Évaluation", desc: "Analyse de l'existant et définition des besoins" },
              { step: "02", title: "Conception", desc: "Plans et propositions de rénovation" },
              { step: "03", title: "Réalisation", desc: "Travaux avec suivi qualité" },
              { step: "04", title: "Livraison", desc: "Finalisation et remise des travaux" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Avantages de la <span className="text-amber-500">Rénovation</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Plus-value Immobilière</h4>
                    <p className="text-gray-300">Augmentation de la valeur de votre bien</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Confort Amélioré</h4>
                    <p className="text-gray-300">Espaces adaptés à vos besoins</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Économies d&apos;Énergie</h4>
                    <p className="text-gray-300">Réduction des factures énergétiques</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Sécurité Conforme</h4>
                    <p className="text-gray-300">Mise aux normes actuelles</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-96 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25418a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
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
            Prêt à rénover votre espace ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Confiez-nous la transformation de votre habitat ou de vos locaux professionnels
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-xl"
          >
            Demander un devis
          </motion.button>
        </div>
      </section>
    </div>
  )
}
