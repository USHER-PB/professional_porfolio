'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: 'Quote request sent successfully! We will contact you within 24 hours.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      value: 'uncle@masonry.com',
      link: 'mailto:uncle@masonry.com'
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Service Area',
      value: 'Greater Metropolitan Region',
      link: null
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/uncle-masonry',
      link: 'https://linkedin.com'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Quote
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next construction project? Contact us for a free consultation and detailed quote for your masonry or structural engineering needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Reach out to discuss your project requirements. 
              We offer free consultations and detailed quotes for all masonry and structural engineering services.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all"
                >
                  <div className="text-primary-400">{info.icon}</div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6"
            >
              <h4 className="text-white font-bold text-lg mb-2">Available for Projects</h4>
              <p className="text-gray-100 text-sm">
                Currently accepting new residential and commercial projects. Licensed, insured, and ready to build.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-800 rounded-xl p-8 shadow-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {status.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500'
                      : 'bg-red-500/20 text-red-400 border border-red-500'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Get Quote
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
