import { CalendarCheck2, CheckCircle2, Leaf, Tractor } from 'lucide-react'

const reasons = [
    {
        title: 'عقلية استثمارية، أداء زراعي',
        text: 'نحن لا نزرع فقط، بل ندير أصولاً زراعية لتحقيق نمو مالي مستدام ومدروس عبر دورات الإنتاج.',
        impact: 'تعظيم العائد المالي',
        icon: Tractor,
    },
    {
        title: 'شفافية وحوكمة تشغيلية',
        text: 'تقارير دورية ومؤشرات أداء (KPIs) تضعك في قلب الحدث وتضمن مراقبة دقيقة لكل مراحل النمو.',
        impact: 'حوكمة كاملة للمخاطر',
        icon: Leaf,
    },
    {
        title: 'خبرة محلية بمعايير عالمية',
        text: 'فريق يجمع بين الفهم العميق لخصوصية التربة والمناخ، وأحدث الممارسات الزراعية العالمية.',
        impact: 'جودة استثنائية',
        icon: CheckCircle2,
    },
    {
        title: 'حلول ذكية لنمو مستدام',
        text: 'نعتمد على التكنولوجيا المتقدمة لخفض التحديات التشغيلية وضمان ثبات الإنتاج في أقسى الظروف.',
        impact: 'كفاءة تشغيلية مطلقة',
        icon: CalendarCheck2,
    },
]

export const WhyUsSection = () => {
    return (
        <section id="why" className="why-section">
            <div className="container">
                <header className="why-header">
                    <span className="tag-investment">أداء يحرك رأس المال</span>
                    <h2 className="section-title why-title-large">لماذا يختارنا المستثمرون؟</h2>
                    <p className="section-lead why-lead-light" style={{ maxWidth: '600px' }}>
                        نحن شركاؤك في تحويل الأصول الزراعية إلى نموذج تشغيل مالي متطور، يجمع بين كفاءة الميدان واحترافية الإدارة المالية.
                    </p>
                </header>

                <div className="why-grid-modern">
                    {reasons.map((reason) => {
                        const Icon = reason.icon
                        return (
                            <article key={reason.title} className="why-card-modern">
                                <div className="icon-circle">
                                    <Icon size={32} />
                                </div>
                                <div className="why-content">
                                    <span className="tag-investment" style={{ opacity: 0.8, marginBottom: '0.8rem', display: 'inline-block' }}>
                                        {reason.impact}
                                    </span>
                                    <h3>{reason.title}</h3>
                                    <p>{reason.text}</p>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}