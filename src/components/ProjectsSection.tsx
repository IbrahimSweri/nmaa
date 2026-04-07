const projects = [
    {
        title: 'مجمع الزيتون المتكامل',
        desc: 'مشروع استثماري متكامل لتطوير سلاسل إنتاج الزيتون بأحدث التقنيات، من الزراعة وصولاً إلى التعبئة بمواصفات تصديرية وعوائد مستدامة.',
        meta: 'استثمار استراتيجي',
        img: '/olive-tree.png',
    },
    {
        title: 'مزارع أشجار الزيتون',
        desc: 'استثمار زراعي مستدام لإدارة مزارع أشجار الزيتون بأساليب ذكية، لرفع الكفاءة الإنتاجية وتعظيم القيمة التجارية والاستثمارية في الأسواق المستهدفة.',
        meta: 'تنمية واستثمار',
        img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'الاستثمار الزراعي الذكي',
        desc: 'فرص استثمارية رائدة في زراعة أشجار الزيتون والإنتاج الزراعي المستمر، تعتمد على تقنيات زراعية مبتكرة لتحقيق أعلى معايير الجودة ودعم الأمن الغذائي.',
        meta: 'تكنولوجيا زراعية',
        img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title projects-title">مشاريعنا</h2>
                <p className="projects-copy">
                    نركز على مشاريع الزيتون كأولوية استراتيجية، من التوسع في الزراعة
                    إلى الاستخلاص والتعبئة والتسويق، مع إدارة تشغيلية ذكية ترفع القيمة
                    المضافة وتدعم نموًا زراعيًا مستدامًا.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.title} className="project-card">
                            <img src={project.img} alt={project.title} />
                            <div className="project-overlay" />
                            <div className="project-body">
                                <span className="project-chip">{project.meta}</span>
                                <h4>{project.title}</h4>
                                <p>{project.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}