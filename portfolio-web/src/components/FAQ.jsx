import { useId, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './FAQ.css';

const items = [
  {
    q: '¿Cuánto tarda una web?',
    a: 'Depende del alcance. Una landing suele estar en 5–10 días hábiles. Sitios más grandes pueden llevar 2–4 semanas.'
  },
  {
    q: '¿Incluye dominio y hosting?',
    a: 'Podemos asesorarte y dejar todo configurado. Si ya tenés hosting/dominio, trabajamos sobre eso sin problema.'
  },
  {
    q: '¿Puedo pedir cambios después?',
    a: 'Sí. Podemos hacer mantenimiento mensual o cambios puntuales según lo que necesites.'
  },
  {
    q: '¿La web queda optimizada para Google?',
    a: 'Incluimos bases de SEO técnico (estructura, metas, performance) y te ayudamos con recomendaciones de contenido.'
  }
];

function Chevron({ open }) {
  return (
    <motion.svg
      className="faq-chevron"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = useMemo(
    () =>
      items.map((it, idx) => ({
        ...it,
        id: `${baseId}-${idx}`,
        panelId: `${baseId}-panel-${idx}`
      })),
    [baseId]
  );

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="faq-label">FAQ</span>
          <h2 className="faq-title">Preguntas frecuentes</h2>
          <p className="faq-subtitle">Respuestas rápidas para decidir con confianza.</p>
        </motion.div>

        <div className="faq-list" role="list">
          {faqs.map((it, idx) => {
            const open = idx === openIndex;
            return (
              <div key={it.id} className={`faq-item ${open ? 'is-open' : ''}`}>
                <button
                  className="faq-trigger"
                  type="button"
                  aria-expanded={open}
                  aria-controls={it.panelId}
                  onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
                >
                  <span className="faq-q">{it.q}</span>
                  <Chevron open={open} />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={it.panelId}
                      className="faq-panel"
                      role="region"
                      aria-label={it.q}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="faq-a">{it.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

