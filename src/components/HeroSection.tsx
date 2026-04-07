export const HeroSection = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-layout">
                <article className="hero-panel">
                    <span className="hero-kicker">النماء الليبي للاستثمار الزراعي</span>
                    <h1>
                        نزرع المستقبل ونصنع الجودة…

                        نقود الاستثمار الزراعي نحو نتائج ملموسة
                    </h1>
                    <p className="hero-intro">
                        حلول تشغيل وتمويل مختصرة ترفع الإنتاج وتخلق عائدا مستداما.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn hero-primary-btn">
                            استعرض المشاريع
                        </a>
                        <a href="#contact" className="hero-link-btn">
                            تواصل معنا
                        </a>
                    </div>
                </article>

                <figure className="hero-visual">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200"
                        alt="البيوت المحمية الذكية"
                    />
                    <div className="hero-info-card hero-info-top">
                        <strong>+18</strong>
                        <span>فرصة قيد التطوير</span>
                    </div>
                    <div className="hero-info-card hero-info-bottom">
                        <strong>100%</strong>
                        <span>التزام بمعايير الاستدامة</span>
                    </div>
                </figure>
            </div>

        </section>
    )
}