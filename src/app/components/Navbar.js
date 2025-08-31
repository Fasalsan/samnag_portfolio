'use client'

import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const sections = ['home', 'about', 'skill', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop - 120
          const bottom = top + el.offsetHeight
          if (scrollY >= top && scrollY < bottom) {
            setActive(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 flex justify-between items-center px-6 sm:px-20 py-5 w-full bg-white z-50 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl">Portfolio.</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-12">
        {sections.map((section) => (
          <li key={section} className="relative">
            <a
              href={`#${section}`}
              className={`relative capitalize font-semibold text-gray-600 transition-all pb-2
    ${active === section
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'border-b-2 border-transparent hover:border-red-500 hover:text-black'
                }
  `}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>


      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-gray-700"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col md:hidden shadow-lg">
          {sections.map((section) => (
            <li key={section} className="w-full">
              <a
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center w-full px-6 py-4 text-xl font-semibold transition-all
                  ${active === section
                    ? 'bg-red-100 border-l-4 border-red-500 text-red-500'
                    : 'text-gray-700 hover:bg-red-50 hover:border-l-4 hover:border-red-500'
                  }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
