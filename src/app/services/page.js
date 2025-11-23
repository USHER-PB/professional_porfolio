'use client'

import { motion } from 'framer-motion'
import { FaHardHat, FaDraftingCompass, FaRulerCombined, FaHammer, FaPaintRoller, FaSnowflake, FaTools, FaTruck, FaHome } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function Services() {
  const services = [
    {
      icon: <FaDraftingCompass className="text-4xl" />,
      title: "Conception Architecturale",
      description: "Plans détaillés, conception 3D, permis de construction, études de faisabilité",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaRulerCombined className="text-4xl" />,
      title: "Calcul des Structures",
      description: "Analyse structurelle, dimensionnement, béton armé, charpente métallique",
      image: "https://images.unsplash.com/photo-1541888941229-c2b07e8e8da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaHammer className="text-4xl" />,
      title: "Construction Clé en Main",
      description: "Gestion complète de projet, coordination des corps de métier, livraison",
      image: "https://images.unsplash.com/photo-1518547916183-28d83bf51ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaPaintRoller className="text-4xl" />,
      title: "Rénovation Complète",
      description: "Modernisation, extension, mise aux normes, rénovation énergétique",
      image: "https://images.unsplash.com/photo-1583847268964-4a4b7283c370?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaSnowflake className="text-4xl" />,
      title: "Services Divers Canada",
      description: "Déneigement, pavage, pneus, déménagement, assistance domicile",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Devis Quantitatifs",
      description: "Estimation précise des coûts, matériaux, main d'œuvre, planning",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Nos <span className="text-amber-500">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Une expertise complète en ingénierie civile et construction pour tous vos projets
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-amber-500 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Prêt à démarrer votre projet ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
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
