'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaGraduationCap, FaAward, FaHeart } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: <FaBriefcase className="text-3xl" />,
      title: 'Projects Completed',
      value: '200+',
      description: 'Residential and commercial projects'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Years Experience',
      value: '25+',
      description: 'In masonry and structural engineering'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Certifications',
      value: '8+',
      description: 'Professional engineering and masonry credentials'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Client Satisfaction',
      value: '98%',
      description: 'Happy clients with lasting results'
    }
  ]

  return (
    <section id="services" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Masonry Services</h3>
              <p className="text-gray-100 leading-relaxed mb-4">
                We provide comprehensive masonry and structural engineering services for residential and commercial projects. 
                Our expertise combines traditional craftsmanship with modern engineering principles to deliver exceptional results that stand the test of time.
              </p>
              <p className="text-gray-100 leading-relaxed">
                From custom stone work and brick laying to complete structural design and building construction, 
                we bring technical precision and artistic vision to every project. Your satisfaction is guaranteed with quality materials and expert workmanship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 text-center hover:bg-slate-700 transition-all hover:scale-105 shadow-lg"
              >
                <div className="text-primary-400 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-slate-800 rounded-2xl p-8 shadow-2xl"
        >
              <h4 className="text-white font-bold text-lg mb-2">Ready to Build Your Dream?</h4>
              <p className="text-gray-100 text-sm">
                Get a free consultation and detailed quote for your masonry or structural engineering project.
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </a>
        </motion.div>
      </div>
    </section>
  )
}
