import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Kanik Pathak. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer