import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Problem from './components/Problem.jsx'
import Story from './components/Story.jsx'
import Mission from './components/Mission.jsx'
import Protect from './components/Protect.jsx'
import Impact from './components/Impact.jsx'
import Gallery from './components/Gallery.jsx'
import WhyMatters from './components/WhyMatters.jsx'
import Help from './components/Help.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  useReveal()

  useEffect(() => {
    const nav = document.getElementById('nav')
    if (!nav) return
    const onScroll = () => {
      if (window.scrollY > 80) nav.classList.add('nav-scrolled')
      else nav.classList.remove('nav-scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Problem />
        <Story />
        <Mission />
        <Protect />
        <Impact />
        <Gallery />
        <WhyMatters />
        <Help />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
