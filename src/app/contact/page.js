'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaBuilding } from 'react-icons/fa'
import Navbar from '@/components/Navbar'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: result.message
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          subject: '',
          message: ''
        })

        // Log for debugging
        console.log('Form submitted successfully:', result)
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Une erreur est survenue. Veuillez réessayer.'
        })
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus({
        success: false,
        message: 'Erreur de connexion. Veuillez réessayer plus tard.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "fakbru@yahoo.com",
      link: "mailto:fakbru@yahoo.com"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      value: "+237 694 338 988",
      link: "https://wa.me/237694338988"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Téléphone",
      value: "+237 694 338 988",
      link: "tel:+237694338988"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Localisation",
      value: "Canada / Cameroun",
      link: null
    }
  ]

  const projectTypes = [
    "Construction neuve",
    "Rénovation complète",
    "Extension",
    "Conception architecturale",
    "Calcul structurel",
    "Devis quantitatif",
    "Autre"
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
            Contactez-<span className="text-amber-500">nous</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Parlons de votre projet. Notre équipe est à votre disposition pour vous conseiller 
            et vous accompagner dans la réalisation de vos ambitions.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Envoyez-nous un <span className="text-amber-500">message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Type de projet</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.success 
                        ? 'bg-green-900/50 border border-green-600 text-green-300' 
                        : 'bg-red-900/50 border border-red-600 text-red-300'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-bold text-lg hover:from-amber-700 hover:to-amber-800 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informations de <span className="text-amber-500">contact</span>
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-amber-500">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-amber-500 transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Horaires <span className="text-amber-500">d&apos;ouverture</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaClock className="text-amber-500" />
                    <div className="text-gray-300">
                      <div>Lundi - Vendredi: 8h00 - 18h00</div>
                      <div>Samedi: 9h00 - 16h00</div>
                      <div>Dimanche: Fermé</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Temps de réponse
                </h3>
                <p className="text-amber-100 leading-relaxed">
                  Nous nous engageons à répondre à toutes vos demandes dans un délai de 24 heures 
                  ouvrables. Pour les projets urgents, n&apos;hésitez pas à nous contacter directement 
                  par téléphone ou WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
