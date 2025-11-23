'use client'

import { motion } from 'framer-motion'
import { FaBuilding, FaAward, FaUsers, FaClock, FaCheckCircle, FaHardHat } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function About() {
  const timeline = [
    {
      year: "2020",
      title: "Fondation de Fâk-brù Solution",
      description: "Création de l'entreprise avec une vision d'excellence en ingénierie civile"
    },
    {
      year: "2021",
      title: "Expansion des Services",
      description: "Diversification vers la rénovation et les services complémentaires"
    },
    {
      year: "2022",
      title: "Certification & Qualification",
      description: "Obtention des certifications professionnelles et agréments"
    },
    {
      year: "2023",
      title: "Projets Majeurs",
      description: "Réalisation de projets complexes en construction et rénovation"
    }
  ]

  const values = [
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Qualité",
      description: "Standards d'excellence dans chaque projet"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Respect des Délais",
      description: "Livraison ponctuelle des projets"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Relation Client",
      description: "Communication transparente et écoute active"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Expertise",
      description: "Compétences techniques pointues et actualisées"
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518547916183-28d83bf51ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <FaHardHat className="text-6xl text-amber-500 mx-auto mb-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            À Propos de <span className="text-amber-500">Fâk-brù Solution</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ingénieur civil spécialisé en construction bâtiment, nous mettons notre expertise 
            technique et notre passion pour l'excellence au service de vos projets.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Notre <span className="text-amber-500">Histoire</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Fondée par un ingénieur civil passionné, Fâk-brù Solution est née de la volonté 
                d'offrir des services de construction de haute qualité, alliant savoir-faire technique 
                et innovation. Notre expertise couvre l'ensemble du cycle de vie des projets de construction.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                De la conception architecturale à la réalisation clé en main, en passant par les calculs 
                structurels et les estimations quantitatives, nous garantissons des solutions sur mesure 
                adaptées aux besoins spécifiques de chaque client.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-96 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Notre <span className="text-amber-500">Parcours</span>
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
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
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all">
                    <div className="text-amber-500 font-bold text-lg mb-2">{item.year}</div>
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

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Nos <span className="text-amber-500">Valeurs</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-amber-500 mb-4 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
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
            Discutons de votre projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Notre expertise à votre service pour concrétiser vos ambitions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-xl"
          >
            Nous contacter
          </motion.button>
        </div>
      </section>
    </div>
  )
}
