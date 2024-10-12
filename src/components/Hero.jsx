import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="hero" className="py-20 text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Kanik Pathak
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Web Developer | AI Enthusiast | Good Listener
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
      >

        <a 
          href="/Kanik.pdf" 
          download 
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center transition-colors duration-300"
        >
          <FileDown className="mr-1" size={20} /> Download Resume
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
