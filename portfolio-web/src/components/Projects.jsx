import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Landing de conversión',
    description: 'Diseño editorial, secciones claras y CTA enfocado para captar leads.',
    tags: ['Diseño', 'SEO', 'Performance'],
    imageSrc: '/projects/landing-01.webp',
    imageAlt: 'Ejemplo de landing moderna'
  },
  {
    id: 2,
    title: 'Sitio corporativo',
    description: 'Identidad consistente, navegación simple y experiencia mobile impecable.',
    tags: ['Branding', 'Responsive', 'Accesibilidad'],
    imageSrc: '/projects/corporate-01.webp',
    imageAlt: 'Ejemplo de sitio corporativo'
  },
  {
    id: 3,
    title: 'E-commerce / catálogo',
    description: 'Cards de producto, filtros y un recorrido de compra sin fricción.',
    tags: ['E-commerce', 'UI', 'Velocidad'],
    imageSrc: '/projects/ecommerce-01.webp',
    imageAlt: 'Ejemplo de página de e-commerce'
  },
  {
    id: 4,
    title: 'Web app',
    description: 'Pantallas limpias, sistema de componentes y micro-interacciones.',
    tags: ['Dashboard', 'UX', 'Animaciones'],
    imageSrc: '/projects/app-01.webp',
    imageAlt: 'Ejemplo de interfaz de web app'
  }
];

const Projects = () => {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const firstSlideRef = useRef(null);
  const x = useMotionValue(0);

  const [metrics, setMetrics] = useState({
    slide: 1,
    gap: 16,
    viewport: 1,
    track: 1
  });
  const [index, setIndex] = useState(0);

  const maxIndex = projects.length - 1;

  const snap = useMemo(() => {
    const step = metrics.slide + metrics.gap;
    const maxLeft = Math.min(0, metrics.viewport - metrics.track);
    const clampX = (nextX) => Math.max(maxLeft, Math.min(0, nextX));
    const toX = (i) => clampX(-i * step);
    return { step, maxLeft, clampX, toX };
  }, [metrics]);

  useEffect(() => {
    const el = viewportRef.current;
    const track = trackRef.current;
    const first = firstSlideRef.current;
    if (!el || !track || !first) return;

    const read = () => {
      const viewport = el.clientWidth || 1;
      const trackW = track.scrollWidth || 1;
      const slide = first.getBoundingClientRect().width || 1;
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || '16') || 16;
      setMetrics({ slide, gap, viewport, track: trackW });
    };

    read();
    const ro = new ResizeObserver(() => read());
    ro.observe(el);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const controls = animate(x, snap.toX(index), { duration: 0.35, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [index, snap, x]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const onDragEnd = () => {
    const i = Math.round(Math.abs(x.get()) / snap.step);
    setIndex(Math.max(0, Math.min(maxIndex, i)));
  };

  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="projects-label">Proyectos</span>
          <h2 className="projects-title">Trabajos recientes</h2>
        </motion.div>
        
        <div className="projects-carousel">
          <div className="projects-carouselTop">
            <div className="projects-progress">
              <span className="projects-progressText">
                {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="projects-progressBar" aria-hidden="true">
                <div
                  className="projects-progressFill"
                  style={{ width: `${((index + 1) / projects.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="projects-controls">
              <button
                type="button"
                className="projects-arrow"
                onClick={prev}
                disabled={index === 0}
                aria-label="Proyecto anterior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="projects-arrow"
                onClick={next}
                disabled={index === maxIndex}
                aria-label="Siguiente proyecto"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="projects-viewport" ref={viewportRef}>
            <motion.div
              className="projects-track"
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: snap.maxLeft, right: 0 }}
              dragElastic={0.08}
              dragMomentum
              style={{ x }}
              onDragEnd={onDragEnd}
              whileTap={{ cursor: 'grabbing' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {projects.map((p, i) => (
                <article
                  key={p.id}
                  className="project-slide"
                  ref={i === 0 ? firstSlideRef : undefined}
                >
                  <div className="project-media">
                    <img className="project-img" src={p.imageSrc} alt={p.imageAlt} loading="lazy" />
                  </div>
                  <div className="project-body">
                    <h3 className="project-title">{p.title}</h3>
                    <p className="project-description">{p.description}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="project-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;