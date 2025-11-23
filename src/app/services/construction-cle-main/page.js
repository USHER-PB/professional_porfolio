'use client'

import { motion } from 'framer-motion'
import { FaArrowLeft, FaHammer, FaHardHat, FaCheckCircle, FaClock, FaTruck, FaUsers, FaTools } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ConstructionCleMain() {
  const phases = [
    {
      icon: <FaTools className="text-2xl" />,
      title: "Préparation du Chantier",
      description: "Installation, sécurité, préparation des matériaux et planning détaillé"
    },
    {
      icon: <FaHammer className="text-2xl" />,
      title: "Gros Œuvre",
      description: "Fondations, structure, murs porteurs, toiture"
    },
    {
      icon: <FaHardHat className="text-2xl" />,
      title: "Second Œuvre",
      description: "Menuiserie, plomberie, électricité, isolation"
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: "Finitions et Livraison",
      description: "Aménagements intérieurs, réception des travaux, remise des clés"
    }
  ]

  const advantages = [
    {
      title: "Un seul Interlocuteur",
      description: "Coordination simplifiée avec un gestionnaire de projet dédié",
      icon: <FaUsers className="text-3xl" />
    },
    {
      title: "Maîtrise des Délais",
      description: "Planning rigoureux et respect des échéances contractuelles",
      icon: <FaClock className="text-3xl" />
    },
    {
      title: "Contrôle Budgétaire",
      description: "Suivi précis des coûts et optimisation des ressources",
      icon: <FaTruck className="text-3xl" />
    },
    {
      title: "Garantie Qualité",
      description: "Normes respectées et inspections à chaque étape du projet",
      icon: <FaCheckCircle className="text-3xl" />
    }
  ]

  const projectTypes = [
    {
      title: "Maisons Individuelles",
      description: "Construction sur mesure de villas et maisons familiales",
      image: "https://images.unsplash.com/photo-1518547916183-28d83bf51ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Immeubles Collectifs",
      description: "Bâtiments résidentiels de plusieurs étages",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Bâtiments Commerciaux",
      description: "Bureaux, commerces, espaces professionnels",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
              <FaHammer className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Construction <span className="text-amber-500">Clé en Main</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              De la conception à la livraison, nous gérons l&apos;ensemble de votre projet de construction. 
              Une solution complète pour réaliser vos ambitions sans vous préoccuper des détails techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Types de <span className="text-amber-500">Projets</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectTypes.map((item, index) => (
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

      {/* Process Phases */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Phases du <span className="text-amber-500">Projet</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-amber-500 transition-all text-center"
              >
                <div className="text-amber-500 mb-4 flex justify-center">
                  {phase.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300 text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Nos <span className="text-amber-500">Avantages</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-amber-500 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="text-amber-500 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{advantage.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Garantie <span className="text-amber-500">Qualité</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Matériaux Premium</h4>
                    <p className="text-gray-300">Sélection rigoureuse des fournisseurs et matériaux certifiés</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Contrôles Réguliers</h4>
                    <p className="text-gray-300">Inspections à chaque étape du chantier</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Normes Respectées</h4>
                    <p className="text-gray-300">Conformité avec toutes les réglementations en vigueur</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Suivi Post-Livraison</h4>
                    <p className="text-gray-300">Accompagnement après la remise des clés</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-96 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
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
            Prêt à construire votre projet ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-amber-100 mb-8"
          >
            Confiez-nous la réalisation complète de vos ambitions
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-white text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transform hover:scale-105 transition-all shadow-xl"
          >
            Démarrer votre projet
          </motion.button>
        </div>
      </section>
    </div>
  )
}
