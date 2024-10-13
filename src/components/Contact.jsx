import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-teal-500">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-teal-500 mb-4">Contact Information</h3>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
            <Mail className="w-5 h-5 text-teal-500" />
            kanikpathak1234@gmail.com
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/KanikPathak" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white p-2 rounded-full transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/kanik-pathak-542322259/" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white p-2 rounded-full transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Remove form and replace with email link */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-teal-500 mb-4">Send Me an Email</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you'd like to reach out, feel free to email me directly.
          </p>
          <a 
            href="mailto:kanikpathak1234@gmail.com"
            className="w-full bg-teal-500 text-white hover:bg-teal-600 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 inline-block text-center"
          >
            Send Email
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
