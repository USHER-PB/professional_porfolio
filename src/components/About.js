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
      title: 'Years of Experience',
      value: '10+',
      description: 'Professional experience in the field'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: 'Projects Completed',
      value: '50+',
      description: 'Successfully delivered projects'
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: 'Certifications',
      value: '5+',
      description: 'Professional certifications'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Client Satisfaction',
      value: '100%',
      description: 'Happy clients and partners'
    }
  ]

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
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
              <h3 className="text-2xl font-bold text-white mb-4">Professional Background</h3>
              <p className="text-gray-100 leading-relaxed mb-4">
                I am a dedicated professional with extensive experience in [specific field/industry]. 
                Throughout my career, I have developed a strong expertise in [key skills/areas], 
                consistently delivering exceptional results and exceeding expectations.
              </p>
              <p className="text-gray-100 leading-relaxed">
                My approach combines technical proficiency with creative problem-solving, 
                allowing me to tackle complex challenges and drive meaningful outcomes. 
                I am passionate about continuous learning and staying current with industry trends.
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
          <h3 className="text-2xl font-bold text-white mb-6">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-lg font-semibold text-white mb-2">Goal-Oriented</h4>
              <p className="text-gray-400 text-sm">
                Focused on achieving objectives and delivering measurable results
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-lg font-semibold text-white mb-2">Team Player</h4>
              <p className="text-gray-400 text-sm">
                Excellent collaboration and communication skills
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="text-lg font-semibold text-white mb-2">Innovative</h4>
              <p className="text-gray-400 text-sm">
                Creative problem solver with fresh perspectives
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
