import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Layout({ children, dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const location = useLocation()

  // Track window scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      if (location.pathname !== '/') {
        setActiveSection('')
        return
      }

      const sections = ['hero', 'about', 'skills', 'work', 'experience', 'education', 'certifications', 'contact']
      let currentSection = 'hero'
      const scrollPosition = window.scrollY + 200 // offset for header height

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // Close mobile menu on routing
  useEffect(() => {
    setMobileMenu(false)
  }, [location.pathname])

  const getHashLink = (hash) => {
    return location.pathname === '/' ? hash : `/${hash}`
  }

  const getNavLinkClass = (hash, path = null) => {
    const baseClass = "nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
    
    if (path && location.pathname.startsWith(path)) {
      return "nl text-zinc-900 dark:text-white on transition-colors"
    }
    
    if (location.pathname === '/' && activeSection === hash.replace('#', '')) {
      return "nl text-zinc-900 dark:text-white on transition-colors"
    }
    
    return baseClass
  }

  const getMobileNavLinkClass = (hash, path = null) => {
    const baseClass = "block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
    
    if (path && location.pathname.startsWith(path)) {
      return "block text-accent transition-colors"
    }
    
    if (location.pathname === '/' && activeSection === hash.replace('#', '')) {
      return "block text-accent transition-colors"
    }
    
    return baseClass
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      {/* HEADER */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5' : 'bg-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
          
          <Link to="/" className="font-display font-bold text-xl tracking-wider relative z-10 uppercase">
            <span className="text-zinc-900 dark:text-white">my </span>
            <span className="text-accent">portfolio</span>
          </Link>

          <ul className="hidden md:flex items-center md:gap-4 lg:gap-6 xl:gap-8 text-xs font-bold uppercase tracking-wider" role="list">
            <li>
              <a href={getHashLink('#hero')} className={getNavLinkClass('#hero')}>
                Home
              </a>
            </li>
            <li>
              <a href={getHashLink('#about')} className={getNavLinkClass('#about')}>
                About
              </a>
            </li>
            <li>
              <a href={getHashLink('#skills')} className={getNavLinkClass('#skills')}>
                Skills
              </a>
            </li>
            <li>
              <a href={getHashLink('#work')} className={getNavLinkClass('#work', '/projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href={getHashLink('#experience')} className={getNavLinkClass('#experience')}>
                Experience
              </a>
            </li>
            <li>
              <a href={getHashLink('#education')} className={getNavLinkClass('#education')}>
                Education
              </a>
            </li>
            <li>
              <a href={getHashLink('#certifications')} className={getNavLinkClass('#certifications')}>
                Certifications
              </a>
            </li>
            <li>
              <a href={getHashLink('#contact')} className={getNavLinkClass('#contact')}>
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            {/* dark toggle */}
            <button onClick={() => setDark(!dark)} className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" aria-label={dark ? 'Light mode' : 'Dark mode'}>
              {!dark ? (
                <svg className="w-4 h-4 theme-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 theme-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"/>
                </svg>
              )}
            </button>
            {/* hire me */}
            <a href={getHashLink('#contact')} className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors">
              Hire me 
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            {/* hamburger */}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800" aria-expanded={mobileMenu} aria-label="Toggle menu">
              {!mobileMenu ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        <div className={`md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${mobileMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col px-6 py-5 gap-4 text-xs font-bold uppercase tracking-wider" role="list">
            <li>
              <a href={getHashLink('#hero')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#hero')}>
                Home
              </a>
            </li>
            <li>
              <a href={getHashLink('#about')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#about')}>
                About
              </a>
            </li>
            <li>
              <a href={getHashLink('#skills')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#skills')}>
                Skills
              </a>
            </li>
            <li>
              <a href={getHashLink('#work')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#work', '/projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href={getHashLink('#experience')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#experience')}>
                Experience
              </a>
            </li>
            <li>
              <a href={getHashLink('#education')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#education')}>
                Education
              </a>
            </li>
            <li>
              <a href={getHashLink('#certifications')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#certifications')}>
                Certifications
              </a>
            </li>
            <li>
              <a href={getHashLink('#contact')} onClick={() => setMobileMenu(false)} className={getMobileNavLinkClass('#contact')}>
                Contact
              </a>
            </li>
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a href={getHashLink('#contact')} onClick={() => setMobileMenu(false)} className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full">
                Hire me &rarr;
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Mayilsamy V. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-500">
              Portfolio Version: v1.0.0
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <a href="mailto:mayilsamyv12@gmail.com" className="hover:text-accent transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/mayilsamy12" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/Mayilsamyv12" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          </div>

          <p className="text-xs text-zinc-500 text-center sm:text-right">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
