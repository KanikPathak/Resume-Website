import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Project Trainee",
    company: "Bhabha Atomic Research Center (BARC), Mumbai",
    duration: "April 2024 - July 2024",
    description: "Developed a deepfake video detection system leveraging neural networks and GPU acceleration.",
    achievements: [
      "Implemented ResNeXt and EfficientNet architectures, achieving 86% validation accuracy.",
      "Reduced training time by 60% through optimization on Nvidia A100 GPUs.",
      "Improved detection accuracy by refining hyperparameters and testing multiple models."
    ]
  },
  {
    title: "Frontend Developer Intern ",
    company: "Clinical AI Assistance",
    duration: "December 2023 - March 2024",
    description: "Worked from Re-design to Deployment of the website.",
    achievements: [
      "Developed responsive components using Figma and React for enhanced usability.",
      "Collaborated with backend teams for seamless API integration and data synchronization.",
      "Built user-friendly interfaces for individuals with cognitive impairments."
    ]
  }
];

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-teal-500">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-500">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience