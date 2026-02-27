import { useEffect, useRef } from 'react'

import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Terminal from './components/Terminal'
import Skills   from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import About    from './components/About'
import Timeline from './components/Timeline'
import Contact  from './components/Contact'
import CTA      from './components/CTA'
import Footer   from './components/Footer'

export default function App() {
  const pageRef = useRef(null)

  // Scroll-triggered fade-in for all .fade-in and .tl-item elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    const el = pageRef.current
    if (el) el.querySelectorAll('.fade-in, .tl-item').forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Background glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Cursor />
      <Navbar />

      <main ref={pageRef}>
        <Hero />

        <div className="container"><div className="divider" /></div>
        <Terminal />

        <div className="container"><div className="divider" /></div>
        <Skills />

        <div className="container"><div className="divider" /></div>
        <Services />

        <div className="container"><div className="divider" /></div>
        <Projects />

        <div className="container"><div className="divider" /></div>
        <About />

        <div className="container"><div className="divider" /></div>
        <Timeline />

        <div className="container"><div className="divider" /></div>
        <Contact />

        <CTA />
      </main>

      <Footer />
    </>
  )
}
