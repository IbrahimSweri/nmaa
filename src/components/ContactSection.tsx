import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Building2, Mail, PhoneCall, Send } from 'lucide-react'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'

type ContactFormState = {
    fullName: string
    email: string
    company: string
    message: string
}

type SubmitState = {
    type: 'success' | 'error'
    message: string
} | null

const initialFormState: ContactFormState = {
    fullName: '',
    email: '',
    company: '',
    message: '',
}

const fallbackDirectEndpoint = 'https://formsubmit.co/ajax/info@al-nama.ly'

export const ContactSection = () => {
    const [formData, setFormData] = useState<ContactFormState>(initialFormState)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitState, setSubmitState] = useState<SubmitState>(null)

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()
    const submissionEndpoint = formspreeEndpoint || fallbackDirectEndpoint

    const handleChange = (field: keyof ContactFormState) =>
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData((previous) => ({ ...previous, [field]: event.target.value }))
        }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const trimmed = {
            fullName: formData.fullName.trim(),
            email: formData.email.trim(),
            company: formData.company.trim(),
            message: formData.message.trim(),
        }

        if (!trimmed.fullName || !trimmed.email || !trimmed.company || !trimmed.message) {
            setSubmitState({
                type: 'error',
                message: 'الرجاء تعبئة جميع الحقول قبل الإرسال.',
            })
            return
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(trimmed.email)) {
            setSubmitState({
                type: 'error',
                message: 'الرجاء إدخال بريد إلكتروني صالح.',
            })
            return
        }

        setSubmitState(null)
        setIsSubmitting(true)

        try {
            const response = await fetch(submissionEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: trimmed.fullName,
                    email: trimmed.email,
                    company: trimmed.company,
                    message: trimmed.message,
                    _subject: 'رسالة جديدة من صفحة تواصل معنا - شركة النماء',
                    _captcha: 'false',
                }),
            })

            if (!response.ok) {
                throw new Error('Contact request failed')
            }

            setFormData(initialFormState)
            setSubmitState({
                type: 'success',
                message: 'تم إرسال رسالتك بنجاح، وسنتواصل معك قريباً عبر البريد info@al-nama.ly.',
            })
        } catch {
            setSubmitState({
                type: 'error',
                message: 'تعذر إرسال الرسالة حالياً. الرجاء المحاولة مرة أخرى بعد قليل.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-head">
                    <span className="contact-kicker">قنوات تواصل مباشرة</span>
                    <h2 className="section-title">تواصل معنا</h2>
                    <p className="contact-copy">
                        ننسق معكم خطوة بخطوة لبدء المشروع، من الفكرة وحتى التشغيل،
                        مع رد سريع وخطة واضحة تناسب حجم الاستثمار.
                    </p>
                </div>

                <div className="contact-grid">
                    <article className="contact-info-card">
                        <h3>ابدأ المحادثة الآن</h3>
                        <ul className="contact-methods-list">
                            <li>
                                <div className="contact-method-head">
                                    <span className="contact-method-icon" aria-hidden="true">
                                        <Building2 size={16} />
                                    </span>
                                    <div>
                                        <strong>المكتب الرئيسي</strong>
                                        <span>بنغازي - ليبيا</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-method-head">
                                    <span className="contact-method-icon" aria-hidden="true">
                                        <Mail size={16} />
                                    </span>
                                    <div>
                                        <strong>البريد الإلكتروني</strong>
                                        <a href="mailto:info@al-nama.ly" className="contact-inline-link contact-data-ltr">
                                            info@al-nama.ly
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-method-head">
                                    <span className="contact-method-icon" aria-hidden="true">
                                        <PhoneCall size={16} />
                                    </span>
                                    <div>
                                        <strong>الهاتف المحمول</strong>
                                        <a href="tel:+218910926877" className="contact-inline-link contact-data-ltr">
                                            +218 91-0926877
                                        </a>
                                    </div>
                                </div>
                            </li>
                                                  <li>
                                <div className="contact-method-head">
                                    <span className="contact-method-icon" aria-hidden="true">
                                        <PhoneCall size={16} />
                                    </span>
                                    <div>
                                        <strong>الهاتف المحمول</strong>
                                        <a href="tel:+218927279080" className="contact-inline-link contact-data-ltr">
                                            +218 92-7279080
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="contact-social-row" aria-label="روابط واتساب وفيسبوك">
                            <a
                                href="https://wa.me/218927279080"
                                className="contact-social-chip"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaWhatsapp size={17} aria-hidden="true" />
                                <span>واتساب مباشر</span>
                            </a>
                            <a
                                href="https://facebook.com/share/1f4wyxlxrf"
                                className="contact-social-chip"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebookF size={15} aria-hidden="true" />
                                <span>صفحة فيسبوك</span>
                            </a>
                        </div>
                    </article>

                    <article className="contact-form-card">
                        <form className="contact-form" onSubmit={handleSubmit} noValidate>
                            <label className="contact-field">
                                <span>الاسم الكامل</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="مثال: محمد علي"
                                    value={formData.fullName}
                                    onChange={handleChange('fullName')}
                                    required
                                />
                            </label>
                            <label className="contact-field">
                                <span>البريد الإلكتروني</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="name@company.com"
                                    className="contact-data-ltr"
                                    value={formData.email}
                                    onChange={handleChange('email')}
                                    required
                                />
                            </label>
                            <label className="contact-field">
                                <span>اسم الشركة أو الجهة</span>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="مثال: شركة النماء للاستثمار"
                                    value={formData.company}
                                    onChange={handleChange('company')}
                                    required
                                />
                            </label>
                            <label className="contact-field">
                                <span>نبذة عن هدف الاستثمار أو المشروع</span>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="مثال: نحتاج إنشاء خط إنتاج أعلاف بطاقة تشغيلية متوسطة"
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                    required
                                />
                            </label>
                            {submitState && (
                                <p
                                    className={`contact-form-status contact-form-status-${submitState.type}`}
                                    role={submitState.type === 'error' ? 'alert' : 'status'}
                                    aria-live={submitState.type === 'error' ? 'assertive' : 'polite'}
                                >
                                    {submitState.message}
                                </p>
                            )}
                            <button type="submit" className="btn" disabled={isSubmitting}>
                                <Send size={16} aria-hidden="true" />
                                {isSubmitting ? 'جارٍ إرسال الطلب...' : 'إرسال الطلب'}
                            </button>
                        </form>
                    </article>
                </div>

                <div className="contact-map-wrap">
                    <div className="contact-map-meta">
                        <strong>موقعنا في بنغازي - Zhou Tower</strong>
                        <a
                            href="https://maps.google.com/?q=Zhou%20Tower%20Benghazi%2C%20Benghazi%2C%20Libya"
                            target="_blank"
                            rel="noreferrer"
                        >
                            فتح في خرائط Google
                        </a>
                    </div>
                    <div className="map-box" aria-label="خريطة موقع الشركة">
                        <iframe
                            src="https://maps.google.com/maps?q=Zhou%20Tower%20Benghazi%2C%20Benghazi%2C%20Libya&z=16&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'saturate(0.8) contrast(1.05)' }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Zhou Tower Benghazi Map"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}