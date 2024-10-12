import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-teal-500">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-xl text-gray-600 dark:text-gray-300">
          Hello! I'm Kanik,
          a passionate web developer and AI enthusiast. 
            As a recent MCA graduate, I've completed two internships that have shaped my skills and 
            given me practical industry experience.</p>


        </div>
        <div className="flex justify-center">
          <motion.img
            src="/Mai.jpeg"
            alt="Kanik Pathak"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-teal-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default About