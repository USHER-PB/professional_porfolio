'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft, FaSnowflake, FaTruck, FaCar, FaHome, FaTools, FaCheckCircle, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ServicesDivers() {
  const services = [
    {
      icon: <FaSnowflake className="text-2xl" />,
      title: "Déneigement",
      description: "Déneigement résidentiel et commercial, sablage, gestion hivernale complète",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaTruck className="text-2xl" />,
      title: "Pavage et Aménagement",
      description: "Installation de pavés, entrées, terrasses, aménagement extérieur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaCar className="text-2xl" />,
      title: "Services Pneus",
      description: "Installation et changement de pneus, équilibrage, stockage saisonnier",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaHome className="text-2xl" />,
      title: "Déménagement",
      description: "Déménagement résidentiel et commercial, transport sécurisé",
      image: "https://images.unsplash.com/photo-1618497185073-4f1b6b5e13e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: "Assistance Domicile",
      description: "Petits travaux, maintenance, réparations diverses, aide technique",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  const seasons = [
    {
      title: "Services Hiver",
      icon: <FaSnowflake className="text-3xl" />,
      services: ["Déneigement résidentiel", "Déneigement commercial", "Sablage et sel", "Gestion complète"],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Services Été",
      icon: <FaTruck className="text-3xl" />,
      services: ["Pavage et terrasses", "Aménagement extérieur", "Entretien paysager", "Préparation hiver"],
      color: "from-green-600 to-green-700"
    },
    {
      title: "Services Année",
      icon: <FaTools className="text-3xl" />,
      services: ["Déménagement", "Pneus et stockage", "Maintenance domicile", "Petits travaux"],
      color: "from-amber-600 to-amber-700"
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
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
              <FaSnowflake className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Services <span className="text-amber-500">Divers Canada</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Au-delà de la construction, nous offrons une gamme complète de services pour répondre 
              à tous vos besoins au Canada. Services saisonniers, assistance et maintenance professionnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Services par <span className="text-amber-500">Saison</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${season.color} rounded-2xl p-8 shadow-xl`}
              >
                <div className="text-white mb-6 flex justify-center">
                  {season.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{season.title}</h3>
                <ul className="space-y-2">
                  {season.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/90">
                      <FaCheckCircle className="text-sm" />
                      <span className="text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Nos <span className="text-amber-500">Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Pourquoi nos <span className="text-amber-500">Services</span>
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Disponibilité 24/7</h4>
                      <p className="text-gray-300">Intervention rapide en cas d&apos;urgence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Équipement Professionnel</h4>
                      <p className="text-gray-300">Matériels modernes et adaptés</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Personnel Qualifié</h4>
                      <p className="text-gray-300">Équipe expérimentée et formée</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Tarifs Compétitifs</h4>
                      <p className="text-gray-300">Rapport qualité-prix optimal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Zones <span className="text-amber-500">d&apos;Intervention</span>
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-300">Grand Montréal et Rive-Sud</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-300">Laval et Laurentides</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-300">Ottawa et Gatineau</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-300">Québec et environs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-amber-500" />
                    <span className="text-gray-300">Services disponibles partout au Canada</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaClock className="text-white text-2xl" />
                  <h4 className="text-xl font-bold text-white">Disponibilité</h4>
                </div>
                <p className="text-amber-100">
                  Service hiver: 24h/24 et 7j/7<br />
                  Service été: 6h00 - 22h00<br />
                  Urgences: Toujours disponible
                </p>
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
            Besoin de nos services ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Contactez-nous pour un devis rapide et intervention professionnelle
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-xl"
          >
            Contacter maintenant
          </motion.button>
        </div>
      </section>
    </div>
  )
}
