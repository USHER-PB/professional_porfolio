'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      project: 'Custom Stone Fireplace',
      rating: 5,
      content: 'Absolutely exceptional work! The craftsmanship on our stone fireplace exceeded our expectations. Every detail was perfect, and the structural integrity gives us complete peace of mind.',
      date: '2024'
    },
    {
      name: 'Michael Chen',
      role: 'Commercial Developer',
      project: 'Office Building Renovation',
      rating: 5,
      content: 'Professional, reliable, and incredibly skilled. The structural engineering work was flawless, and the masonry work transformed our building. Highly recommend for any commercial project.',
      date: '2024'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Historical Society Director',
      project: 'Church Restoration',
      rating: 5,
      content: 'The attention to historical detail while ensuring modern structural requirements was remarkable. Our church restoration was handled with the utmost care and expertise.',
      date: '2023'
    },
    {
      name: 'David Thompson',
      role: 'General Contractor',
      project: 'Multi-Unit Housing Complex',
      rating: 5,
      content: 'Consistently delivers quality work on time and within budget. The structural engineering expertise saved us from potential issues and the masonry work is always top-notch.',
      date: '2023'
    },
    {
      name: 'Lisa Anderson',
      role: 'Architect',
      project: 'Modern Residential Design',
      rating: 5,
      content: 'Brings architectural vision to life with technical precision. The collaboration between design and execution was seamless. Truly understands both art and engineering.',
      date: '2023'
    },
    {
      name: 'Robert Martinez',
      role: 'Property Manager',
      project: 'Retail Plaza Construction',
      rating: 5,
      content: 'Outstanding communication throughout the project. Every masonry detail was executed perfectly, and the structural work passed all inspections with flying colors.',
      date: '2022'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What our clients say about our masonry and structural engineering expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="text-primary-400 text-2xl mr-3" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="border-t border-slate-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-primary-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.project}</p>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Join our satisfied clients who have experienced exceptional masonry craftsmanship and structural engineering expertise.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Get Your Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
