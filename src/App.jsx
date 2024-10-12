import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-500 z-50"
        style={{ scaleX }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 py-12">
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App