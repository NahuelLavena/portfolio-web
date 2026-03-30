import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Landing pages que convierten',
    value: 'Diseño y copy orientados a resultados: claridad, velocidad y un CTA fuerte.',
    bullets: ['Diseño responsive', 'SEO base + performance', 'Integración con WhatsApp / formularios']
  },
  {
    title: 'Sitios web profesionales',
    value: 'Tu marca con presencia sólida: estructura clara, contenido editable y escalabilidad.',
    bullets: ['Secciones a medida', 'Buenas prácticas de accesibilidad', 'Optimización para Google']
  },
  {
    title: 'E-commerce / Catálogo',
    value: 'Mostrá productos con una experiencia fluida y una estética cuidada.',
    bullets: ['Catálogo + filtros', 'Checkout (según plataforma)', 'Métricas y tracking']
  },
  {
    title: 'Mantenimiento y mejoras',
    value: 'Seguimiento continuo: cambios, soporte y evolución del sitio.',
    bullets: ['Soporte y ajustes', 'Nuevas secciones', 'Mejoras de velocidad']
  }
];

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-label">Servicios</span>
          <h2 className="services-title">Lo que ofrecemos</h2>
          <p className="services-subtitle">
            Un proceso simple, diseño con intención y entregas rápidas. Elegís el objetivo,
            nosotros construimos la web para alcanzarlo.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, idx) => (
            <motion.article
              key={s.title}
              className="services-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <h3 className="services-cardTitle">{s.title}</h3>
              <p className="services-cardValue">{s.value}</p>
              <ul className="services-bullets">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="services-cta">
          <div className="services-ctaCard">
            <div>
              <h3 className="services-ctaTitle">¿Querés que te lo hagamos nosotros?</h3>
              <p className="services-ctaText">Contanos tu idea y te pasamos una propuesta clara.</p>
            </div>
            <button className="btn btn-primary" onClick={scrollToContact}>
              Pedir presupuesto
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

  );
}
