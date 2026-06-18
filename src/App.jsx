import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  const location = useLocation()
  const navigate = useNavigate()

  // Track dark theme changes
  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  // Scroll to top or section on page navigation and re-run scroll reveal observers
  useEffect(() => {
    let scrollTimer
    let observerTimer

    if (location.hash) {
      // Small timeout to allow the DOM to mount
      scrollTimer = setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo(0, 0)
        }
      }, 150)
    } else {
      window.scrollTo(0, 0)
    }
    
    // Tiny delay to ensure DOM is rendered before observing
    observerTimer = setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    }, 100)

    return () => {
      if (scrollTimer) clearTimeout(scrollTimer)
      if (observerTimer) clearTimeout(observerTimer)
    }
  }, [location.pathname, location.hash])

  // Intercept all hash links clicks to handle them client-side
  useEffect(() => {
    const handleHashLinkClick = (e) => {
      const link = e.target.closest('a')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      if (href.startsWith('#') || href.startsWith('/#')) {
        const hash = href.startsWith('/#') ? href.substring(1) : href
        const targetId = hash.replace('#', '')
        
        if (location.pathname === '/') {
          const targetEl = document.getElementById(targetId)
          if (targetEl) {
            e.preventDefault()
            window.location.hash = hash
            targetEl.scrollIntoView({ behavior: 'smooth' })
          }
        } else if (href.startsWith('/#')) {
          e.preventDefault()
          navigate('/' + hash)
        }
      }
    }

    document.addEventListener('click', handleHashLinkClick)
    return () => document.removeEventListener('click', handleHashLinkClick)
  }, [location.pathname, navigate])

  return (
    <Layout dark={dark} setDark={setDark}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  )
}
