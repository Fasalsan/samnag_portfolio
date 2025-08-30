'use client'

import { useEffect, useState } from 'react'

const sections = ['home', 'about', 'skill', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')

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
    <nav className="fixed top-0 flex justify-between items-center px-20 py-7 w-full bg-white z-50">
      <div>
        <h1 className='font-bold text-4xl'>Portfolio.</h1>
      </div>
      <ul className="flex justify-center gap-24 p-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`capitalize font-semibold transition-colors ${active === section
                ? 'text-[#FC4F46] border-b-2 border-[#FC4F46]'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
