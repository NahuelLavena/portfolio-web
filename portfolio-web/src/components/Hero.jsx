import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const codeLines = [
    <>
      <span className="code-tag">&lt;!doctype html&gt;</span>
    </>,
    <>
      <span className="code-tag">&lt;html</span> <span className="code-attr">lang</span>=
      <span className="code-string">"es"</span>
      <span className="code-tag">&gt;</span>
    </>,
    <>
      {'  '}
      <span className="code-tag">&lt;head&gt;</span>
    </>,
    <>
      {'    '}
      <span className="code-tag">&lt;meta</span> <span className="code-attr">charset</span>=
      <span className="code-string">"UTF-8"</span>
      <span className="code-tag"> /&gt;</span>
    </>,
    <>
      {'    '}
      <span className="code-tag">&lt;meta</span> <span className="code-attr">name</span>=
      <span className="code-string">"viewport"</span> <span className="code-attr">content</span>=
      <span className="code-string">"width=device-width, initial-scale=1.0"</span>
      <span className="code-tag"> /&gt;</span>
    </>,
    <>
      {'    '}
      <span className="code-tag">&lt;title&gt;</span>
      <span className="code-string">Tu Marca · Desarrollo Web</span>
      <span className="code-tag">&lt;/title&gt;</span>
    </>,
    <>
      {'  '}
      <span className="code-tag">&lt;/head&gt;</span>
    </>,
    <>
      {'  '}
      <span className="code-tag">&lt;body&gt;</span>
    </>,
    <>
      {'    '}
      <span className="code-comment">&lt;!-- Una web simple. Un objetivo claro. --&gt;</span>
    </>,
    <>
      {'    '}
      <span className="code-tag">&lt;main</span> <span className="code-attr">class</span>=
      <span className="code-string">"container"</span>
      <span className="code-tag">&gt;</span>
    </>,
    <>
      {'      '}
      <span className="code-tag">&lt;h1&gt;</span>
      <span className="code-text">Tu próxima web que vende</span>
      <span className="code-tag">&lt;/h1&gt;</span>
    </>,
    <>
      {'      '}
      <span className="code-tag">&lt;a</span> <span className="code-attr">href</span>=
      <span className="code-string">"#contacto"</span> <span className="code-attr">class</span>=
      <span className="code-string">"btn"</span>
      <span className="code-tag">&gt;</span>
      <span className="code-text">Hablemos</span>
      <span className="code-tag">&lt;/a&gt;</span>
    </>,
    <>
      {'    '}
      <span className="code-tag">&lt;/main&gt;</span>
    </>,
    <>
      {'  '}
      <span className="code-tag">&lt;/body&gt;</span>
    </>,
    <>
      <span className="code-tag">&lt;/html&gt;</span>
    </>
  ];

  return (
    <section className="hero section">
      <motion.div 
        className="hero-bg"
        style={{ y: y1, opacity }}
      />
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="badge-pulse"></span>
            Desarrollo Web Profesional
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Creamos páginas web<br />
            que <span className="hero-highlight">venden</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transformamos tu presencia digital con diseños únicos, 
            modernos y optimizados para convertir visitantes en clientes.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Ver proyectos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">98%</span>
              <span className="stat-label">Clientes</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Soporte</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div className="hero-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">DevTools</span>
            </div>
            <div className="window-tabs" role="tablist" aria-label="Archivos">
              <button type="button" className="window-tab is-active" role="tab" aria-selected="true">
                index.html
              </button>
              <button type="button" className="window-tab" role="tab" aria-selected="false" tabIndex={-1}>
                styles.css
              </button>
              <button type="button" className="window-tab" role="tab" aria-selected="false" tabIndex={-1}>
                app.js
              </button>
            </div>

            <div className="window-body">
              <div className="code-area" aria-label="Código HTML de ejemplo">
                <pre className="hero-code">
                  <code>
                    {codeLines.map((line, i) => (
                      <div key={i} className="code-row">
                        <span className="code-ln" aria-hidden="true">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="code-src">{line}</span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
              <div className="window-footer" aria-hidden="true">
                <span className="window-pill">Preview ready</span>
                <span className="window-pill">HTML</span>
                <span className="window-pill">Fast</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="hero-floater hero-floater-1"
            animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </motion.div>
          
          <motion.div 
            className="hero-floater hero-floater-2"
            animate={{ y: [6, -6, 6], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div 
          className="scroll-mouse"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;