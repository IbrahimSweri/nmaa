import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'

export const SiteFooter = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-main">
                    <h3>النماء الليبي للاستثمار الزراعي</h3>
                    <p>شريكك الاستراتيجي لبناء مشاريع زراعية مستدامة وعالية القيمة.</p>
                </div>
                <div className="footer-links" aria-label="روابط سريعة">
                    <a href="#about">من نحن</a>
                    <a href="#services">خدماتنا</a>
                    <a href="#projects">المشاريع</a>
                    <a href="#contact">تواصل معنا</a>
                </div>
                <div className="footer-social" aria-label="روابط التواصل الاجتماعي">
                    <a
                        href="https://facebook.com/share/1f4wyxlxrf"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                    >
                        <FaFacebookF size={15} aria-hidden="true" />
                        <span>فيسبوك</span>
                    </a>
                    <a
                        href="https://wa.me/218946095733"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social-link"
                    >
                        <FaWhatsapp size={16} aria-hidden="true" />
                        <span>واتساب</span>
                        <span className="contact-data-ltr">+218 94-6095733</span>
                    </a>
                </div>
                <p className="footer-copy">
                    © {new Date().getFullYear()} النماء الليبي للاستثمار الزراعي. جميع الحقوق محفوظة.
                </p>
            </div>
        </footer>
    )
}