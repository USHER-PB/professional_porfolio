'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaCode, 
  FaDatabase, 
  FaTools, 
  FaChartLine, 
  FaPalette,
  FaServer,
  FaMobile,
  FaCloud
} from 'react-icons/fa'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: 'Technical Skills',
      icon: <FaCode className="text-3xl" />,
      skills: [
        { name: 'Programming Languages', level: 90 },
        { name: 'Web Development', level: 85 },
        { name: 'Software Architecture', level: 88 },
        { name: 'API Development', level: 82 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: <FaTools className="text-3xl" />,
      skills: [
        { name: 'Version Control (Git)', level: 90 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Docker & Kubernetes', level: 75 },
        { name: 'Testing Frameworks', level: 85 }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: <FaChartLine className="text-3xl" />,
      skills: [
        { name: 'Data Analysis', level: 85 },
        { name: 'SQL & NoSQL', level: 88 },
        { name: 'Business Intelligence', level: 80 },
        { name: 'Reporting Tools', level: 82 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: <FaPalette className="text-3xl" />,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Communication', level: 90 },
        { name: 'Project Management', level: 85 },
        { name: 'Leadership', level: 88 }
      ]
    }
  ]

  const technologies = [
    { name: 'Cloud Computing', icon: <FaCloud /> },
    { name: 'Backend Development', icon: <FaServer /> },
    { name: 'Mobile Development', icon: <FaMobile /> },
    { name: 'Database Management', icon: <FaDatabase /> }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="text-white text-4xl mb-3 flex justify-center">
                  {tech.icon}
                </div>
                <p className="text-white font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
