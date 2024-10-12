import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <p className="mt-2">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer