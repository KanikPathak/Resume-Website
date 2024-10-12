import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Mail } from "lucide-react"

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-teal-500 hover:text-teal-600 transition-colors duration-300">
            Kanik
          </a>
          <div className="hidden md:flex items-center space-x-6">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 ${activeSection === item.toLowerCase() ? 'text-teal-500 dark:text-teal-400' : ''}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="mailto:your.email@example.com" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300 flex items-center"
            >
              <Mail className="mr-2" size={18} />
              Hire Me
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <button className="md:hidden text-gray-600 dark:text-gray-300" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-800"
        >
          {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`block px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'text-teal-500 dark:text-teal-400' : ''}`}
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          <a 
            href="mailto:your.email@example.com" 
            className="block px-6 py-2 text-teal-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-600 transition-all duration-300"
            onClick={toggleMenu}
          >
            <Mail className="inline mr-2" size={18} />
            Hire Me
          </a>
          <button
            onClick={() => {
              toggleTheme()
              toggleMenu()
            }}
            className="block w-full text-left px-6 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-teal-500 dark:hover:text-teal-400 transition-all duration-300"
          >
            {theme === 'dark' ? <Sun className="inline mr-2" size={18} /> : <Moon className="inline mr-2" size={18} />}
            Toggle Theme
          </button>
        </motion.div>
      )}
    </header>
  )
}

export default Header