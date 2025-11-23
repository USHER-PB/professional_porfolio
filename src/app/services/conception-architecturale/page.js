'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft, FaDraftingCompass, FaRulerCombined, FaBuilding, FaCheckCircle, FaClock, FaAward } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ConceptionArchitecturale() {
  const features = [
    {
      icon: <FaDraftingCompass className="text-2xl" />,
      title: "Plans Détaillés",
      description: "Conception de plans architecturaux précis et détaillés selon vos besoins"
    },
    {
      icon: <FaBuilding className="text-2xl" />,
      title: "Conception 3D",
      description: "Visualisation 3D de votre projet pour une meilleure compréhension"
    },
    {
      icon: <FaRulerCombined className="text-2xl" />,
      title: "Études de Faisabilité",
      description: "Analyse complète de la viabilité technique et réglementaire"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Permis de Construction",
      description: "Gestion complète des démarches administratives et autorisations"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Consultation Initiale",
      description: "Discussion de vos besoins, contraintes et aspirations pour votre projet"
    },
    {
      step: "02", 
      title: "Analyse du Site",
      description: "Étude du terrain, réglementation locale et contraintes techniques"
    },
    {
      step: "03",
      title: "Conceptualisation",
      description: "Création des premières esquisses et propositions architecturales"
    },
    {
      step: "04",
      title: "Développement des Plans",
      description: "Élaboration des plans détaillés et documents techniques"
    },
    {
      step: "05",
      title: "Validation et Permis",
      description: "Finalisation et soumission pour obtention des autorisations"
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
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
              <FaDraftingCompass className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Conception <span className="text-amber-500">Architecturale</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transformez vos idées en plans concrets avec notre expertise en conception architecturale. 
              De la première esquisse aux plans détaillés, nous accompagnons votre projet à chaque étape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Image Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative h-96 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative h-48 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941229-c2b07e8e8da9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Points Clés</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Plans architecturaux conformes aux normes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Optimisation de l&apos;espace et de la lumière</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Intégration des contraintes réglementaires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Solutions techniques innovantes</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaClock className="text-white text-2xl" />
                  <h4 className="text-xl font-bold text-white">Délai Moyen</h4>
                </div>
                <p className="text-amber-100">2-4 semaines selon la complexité du projet</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Nos <span className="text-amber-500">Services</span>
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
          <div className="space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                    <div className="text-amber-500 font-bold text-lg mb-2">{item.step}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
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
            Prêt à concrétiser votre projet ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Contactez-nous pour une consultation architecturale personnalisée
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-xl"
          >
            Demander une consultation
          </motion.button>
        </div>
      </section>
    </div>
  )
}
