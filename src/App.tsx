import { useEffect, useState } from 'react'
import './App.css'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteFooter } from './components/SiteFooter'
import { WhyUsSection } from './components/WhyUsSection'

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'مشاريعنا', href: '#projects' },
  { label: 'لماذا نحن', href: '#why' },
  { label: 'اتصل بنا', href: '#contact' },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section))

    const updateActiveHref = () => {
      const probeLine = window.scrollY + 150
      let currentHref = '#home'

      for (const section of sections) {
        if (probeLine >= section.offsetTop) {
          currentHref = `#${section.id}`
        }
      }

      setActiveHref(currentHref)
    }

    updateActiveHref()
    window.addEventListener('scroll', updateActiveHref, { passive: true })
    window.addEventListener('resize', updateActiveHref)

    return () => {
      window.removeEventListener('scroll', updateActiveHref)
      window.removeEventListener('resize', updateActiveHref)
    }
  }, [])

  return (
    <div className="app" dir="rtl">
      <Navbar
        isScrolled={isScrolled}
        navLinks={navLinks}
        activeHref={activeHref}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

export default App
