import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js.",
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "AI-powered Chat Bot",
    description: "An intelligent chatbot using Python and natural language processing.",
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Task Management App",
    description: "A responsive web app for task management using React and Firebase.",
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=200&width=300"
  }
]

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-teal-500">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-teal-500 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <a href={project.link} className="text-teal-500 hover:text-teal-600 inline-flex items-center transition-colors duration-200">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a href={project.github} className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects