import { BarChart3, Droplets, Sprout, Wheat } from 'lucide-react'

const services = [
    {
        title: 'التخطيط الاستراتيجي ودراسات الجدوى',
        desc: 'رؤية تحليلية دقيقة لمشاريع الحبوب والأعلاف قبل التنفيذ، مع تقييم شامل للمخاطر وفرص النمو المستدام.',
        icon: BarChart3,
    },
    {
        title: 'الإدارة التشغيلية المتكاملة لإنتاج الحبوب والأعلاف',
        desc: 'حوكمة شاملة لمراحل الإنتاج من تجهيز الأرض حتى الحصاد والتخزين، مع تركيز خاص على محصول القمح.',
        icon: Wheat,
    },
    {
        title: 'الابتكار الزراعي والري الذكي',
        desc: 'توظيف تقنيات إنترنت الأشياء (IoT) والري الدقيق لتعظيم إنتاجية القمح والمحاصيل الحقلية مع ترشيد الموارد.',
        icon: Droplets,
    },
    {
        title: 'إدارة سلاسل التوريد والتسويق الزراعي',
        desc: 'تنظيم مراحل ما بعد الحصاد والتخزين والنقل لضمان جودة الحبوب والأعلاف ورفع القيمة التجارية في الأسواق.',
        icon: Sprout,
    },
]

export const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="services-header-simple">
                    <h2 className="section-title">خدماتنا</h2>
                    <p className="section-lead">
                        نقدم حزمة متكاملة تغطي دورة إنتاج الحبوب والأعلاف من التخطيط وحتى
                        التشغيل والتسويق، عبر منهجية واضحة ونتائج قابلة للقياس.
                    </p>
                </div>

                <div className="services-grid-simple">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <article key={service.title} className="service-card-simple">
                                <div className="service-icon-box-simple">
                                    <Icon size={24} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}