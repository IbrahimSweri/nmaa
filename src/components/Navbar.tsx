import { useEffect, useState } from 'react'
import { Menu, Sprout, X } from 'lucide-react'
import logoImage from '../assets/image.png'

const LOGO_PATH = logoImage

type NavItem = {
    label: string
    href: string
}

type NavbarProps = {
    navLinks: NavItem[]
    activeHref: string
    isScrolled: boolean
    isMobileMenuOpen: boolean
    onToggleMobileMenu: () => void
    onCloseMobileMenu: () => void
}

export const Navbar = ({
    navLinks,
    activeHref,
    isScrolled,
    isMobileMenuOpen,
    onToggleMobileMenu,
    onCloseMobileMenu,
}: NavbarProps) => {
    const [logoSrc, setLogoSrc] = useState<string | null>(LOGO_PATH)

    useEffect(() => {
        let cancelled = false
        const image = new Image()
        image.src = LOGO_PATH

        image.onload = () => {
            if (cancelled) return

            try {
                const canvas = document.createElement('canvas')
                canvas.width = image.naturalWidth
                canvas.height = image.naturalHeight
                const ctx = canvas.getContext('2d')
                if (!ctx) {
                    setLogoSrc(LOGO_PATH)
                    return
                }

                ctx.drawImage(image, 0, 0)
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                const { data } = imageData

                // Remove light low-saturation background while preserving green logo strokes.
                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i]
                    const g = data[i + 1]
                    const b = data[i + 2]
                    const a = data[i + 3]
                    if (a === 0) continue

                    const max = Math.max(r, g, b)
                    const min = Math.min(r, g, b)
                    const saturation = max - min
                    const brightness = (r + g + b) / 3
                    const isBackground = brightness > 165 && saturation < 30

                    if (isBackground) {
                        data[i + 3] = 0
                    }
                }

                ctx.putImageData(imageData, 0, 0)
                setLogoSrc(canvas.toDataURL('image/png'))
            } catch {
                setLogoSrc(LOGO_PATH)
            }
        }

        image.onerror = () => {
            if (!cancelled) {
                setLogoSrc(null)
            }
        }

        return () => {
            cancelled = true
        }
    }, [])

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} aria-label="التنقل الرئيسي">
            <div className="container navbar-inner">
                <a href="#home" className="brand" onClick={onCloseMobileMenu}>
                    <span className="brand-mark" aria-hidden="true">
                        {logoSrc ? (
                            <img src={logoSrc} alt="" className="brand-logo" loading="eager" decoding="async" />
                        ) : (
                            <Sprout size={16} />
                        )}
                    </span>
                    <span className="brand-text">
                        <span className="brand-title">النماء الليبي</span>
                        <span className="brand-subtitle">للاستثمار الزراعي</span>
                    </span>
                </a>

                <ul className="desktop-menu">
                    {navLinks.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`nav-link ${item.href === activeHref ? 'nav-link-active' : ''}`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#contact" className="cta-button desktop-cta">
                    استشارة سريعة
                </a>

                <button
                    className="mobile-toggle"
                    onClick={onToggleMobileMenu}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="فتح القائمة"
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`mobile-nav-link ${item.href === activeHref ? 'nav-link-active' : ''}`}
                        onClick={onCloseMobileMenu}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}