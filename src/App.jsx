import { useEffect, useRef } from 'react';
import TextBlockAnimation from './components/TextBlockAnimation';
import TextRotateBlock from './components/TextRotateBlock';

const benefitCards = [
  {
    title: 'Tu público objetivo bien definido',
    text: 'Un público objetivo definido con precisión: saber exactamente a quién le hablas y qué problema le resuelves.',
    tone: 'tone-coral'
  },
  {
    title: 'Una oferta clara y estructurada',
    text: 'Una oferta estructurada y con precio: líneas de negocio claras, con alcance definido y precios que reflejan el valor real de lo que entregas.',
    tone: 'tone-yellow'
  },
  {
    title: 'Un precio ajustado a la oferta real',
    text: 'Líneas de negocio claras, con alcance definido y precios que reflejan el valor real de lo que entregas.',
    tone: 'tone-green'
  },
  {
    title: 'Un posicionamiento de marca que diferencia',
    text: 'Un posicionamiento de marca personal: un mensaje claro sobre quién eres y qué haces, sin confusión ni dispersión.',
    tone: 'tone-blue'
  },
  {
    title: 'Un sistema comercial que atrae y convierte',
    text: 'Un sistema comercial: un proceso documentado que define cómo una persona pasa de no conocerte a convertirse en cliente.',
    tone: 'tone-coral'
  },
  {
    title: 'Claridad, foco y confianza para crecer',
    text: 'Un plan de implementación de 90 días: con prioridades, acciones concretas y acompañamiento para que esto no quede en el papel.',
    tone: 'tone-yellow'
  }
];

const phases = [
  {
    id: '01',
    name: 'CLARIDAD',
    duration: '2 semanas',
    subtitle: 'Nicho, posicionamiento y mensaje de marca personal',
    summary: 'Definimos tu público objetivo, propuesta de valor y diferenciadores clave.',
    paragraphs: [
      'El punto de partida de todo. No se construye nada sin esto.',
      'Se trabaja con precisión quién es tu cliente ideal, qué problema resuelves y cómo lo dices en palabras que esa persona reconoce como propias. Al mismo tiempo se define tu posicionamiento como marca personal: qué lugar ocupas, qué te diferencia y qué mensaje atraviesa todo lo que comunicas.',
      'Aquí también se toman las primeras decisiones difíciles: qué líneas de negocio siguen vivas, cuáles se pausan y cuáles se reorganizan.'
    ],
    deliverables: [
      'Perfil de cliente ideal: demografía, psicografía, dolores, motivaciones y objeciones',
      'Propuesta de valor: el problema que resuelves y la transformación que generas',
      'Declaración de posicionamiento de marca personal',
      'Mensaje central de marca y diferenciadores frente a otros en el mismo espacio',
      'Mensajes clave para bio, web, contenido y conversaciones comerciales',
      'Lista de líneas de negocio activas, pausadas y descartadas con criterios de decisión'
    ],
    tone: 'tone-01'
  },
  {
    id: '02',
    name: 'ARQUITECTURA DE OFERTA',
    duration: '3 semanas',
    subtitle: 'Qué vender, cómo estructurarlo y a qué precio',
    summary: 'Diseñamos tu oferta principal, estructura complementaria, beneficios y precios.',
    paragraphs: [
      'Con claridad sobre el público, se diseña la oferta. No se parte de supuestos: se exploran las opciones reales, se evalúan con criterio estratégico y se decide qué formato de acompañamiento tiene sentido, cómo se estructura el producto escalable y cómo se relacionan las líneas de negocio.',
      'Los precios se definen aquí, dentro del contexto de la oferta y del cliente. Al cerrar esta fase, sabrás exactamente qué vendes, a quién, cuánto cobras y bajo qué condiciones.'
    ],
    deliverables: [
      'Mapa de arquitectura de oferta: oferta premium + oferta escalable',
      'Estructura, alcance, duración y precios de cada oferta',
      'Definición de cómo se complementan y se alimentan las líneas de negocio',
      'Criterios claros para aceptar o rechazar proyectos y clientes',
      'Lista de servicios que se pausan o eliminan del menú activo'
    ],
    tone: 'tone-02'
  },
  {
    id: '03',
    name: 'SISTEMA COMERCIAL',
    duration: '2 semanas',
    subtitle: 'Cómo opera la máquina de ventas',
    summary: 'Construimos tu embudo comercial, mensajes clave y guiones de venta.',
    paragraphs: [
      'Esta es la fase que convierte la estrategia en un proceso real. Se diseña la ruta completa del cliente: cómo llega, cómo se interesa, cómo toma la decisión de compra y qué pasa después.',
      'Se define el proceso de venta para cada oferta y los mecanismos concretos de conversión, eliminando la dependencia de la improvisación.'
    ],
    deliverables: [
      'Mapa del ciclo comercial: ruta completa del cliente desde que llega hasta que recomienda',
      'Proceso de venta para la oferta de acompañamiento premium',
      'Proceso de venta para el producto digital o programa escalable',
      'Mecanismos de conversión definidos por etapa',
      'Métricas clave para monitorear el sistema comercial'
    ],
    tone: 'tone-03'
  },
  {
    id: '04',
    name: 'ACTIVOS DIGITALES Y VISIBILIDAD',
    duration: '3 semanas',
    subtitle: 'Que todo lo que ya tienes empiece a trabajar en la misma dirección',
    summary: 'Creamos tus activos clave y plan de visibilidad para atraer a tu cliente ideal.',
    paragraphs: [
      'Con el sistema claro, se auditan y reorientan los activos digitales existentes: Instagram, podcast y página web. El objetivo es que todos comuniquen el mismo mensaje, hablen a la misma persona y conduzcan hacia la oferta.',
      'Se construye también el plan de contenidos y la estrategia de captación, incluyendo la decisión sobre un recurso gratuito o lead magnet y las bases para activar pauta cuando sea el momento.'
    ],
    deliverables: [
      'Auditoría estratégica de activos digitales actuales (Instagram, web, podcast)',
      'Nueva estructura estratégica por canal y mapa de conexión entre activos y oferta',
      'Pilares de contenido alineados al nicho y al posicionamiento',
      'Plan de contenidos inicial de 30 días',
      'Definición de lead magnet o recurso de captación',
      'Orientaciones para estrategia de pauta: cuándo activarla y por dónde empezar'
    ],
    tone: 'tone-04'
  },
  {
    id: '05',
    name: 'IMPLEMENTACIÓN ACOMPAÑADA',
    duration: '2 meses',
    subtitle: 'Que lo construido no quede en papel',
    summary: 'Implementamos, medimos y optimizamos para generar resultados reales.',
    paragraphs: [
      'Esta fase existe porque la diferencia entre una buena estrategia y un negocio que funciona es la ejecución. Y la ejecución es exactamente donde la mayoría de emprendedoras se frenan.',
      'Durante dos meses no solo hay seguimiento — hay co-ejecución. Mientras avanzas en la implementación, hay producción activa de materiales, revisión de lo que se publica y acompañamiento directo en las primeras acciones comerciales reales.'
    ],
    deliverables: [
      'Roadmap de implementación de 90 días con activaciones priorizadas por activo y por impacto potencial',
      'Campaña de comunicación de relanzamiento: estructura de campaña de 4 semanas con canales, mensajes clave y objetivos por semana',
      'Brief de los primeros 3 episodios del podcast: ángulo de reentrada, estructura y conexión con la oferta',
      '12 briefs de contenido listos para ejecutar: tema, ángulo, gancho de apertura y CTA',
      'Diseño conjunto de la primera propuesta comercial real: identificamos el prospecto, construimos el mensaje y hacemos seguimiento al resultado',
      'Revisión del copy del sitio web una vez actualizado, con ajustes puntuales antes de activar tráfico',
      '4 sesiones quincenales con agenda definida: avances por activo, bloqueos, ajustes y próximos pasos concretos',
      'Revisión de métricas clave por canal en cada sesión y decisión sobre qué ajustar'
    ],
    tone: 'tone-05'
  }
];

const summaryItems = [
  '5 fases estratégicas',
  '5 meses de trabajo conjunto',
  'Sesiones 1:1, 2 por semana',
  'Entregables en cada fase',
  'Acompañamiento personalizado'
];

const objectiveText =
  'Acompañarte en la construcción de tu modelo de negocio claro, enfocado y operativo: con tu público objetivo definido, una oferta estructurada y con precio ajustado a la oferta real, un posicionamiento de marca que diferencia y un sistema comercial que atrae, convierte y sostiene clientes de forma consistente.';

const structureText =
  'El proceso se organiza en cinco fases secuenciales. Cada una construye sobre la anterior y cierra con entregables concretos. El orden importa: no se define la oferta sin tener claridad sobre el público, y no se construye el sistema comercial sin tener la oferta lista.';

export default function App() {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ left: 0 });
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;

    let cleanupHeroVideo = () => {};
    const heroVideo = heroVideoRef.current;
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.defaultMuted = true;
      heroVideo.setAttribute('muted', '');
      heroVideo.setAttribute('playsinline', '');
      heroVideo.setAttribute('webkit-playsinline', '');

      const playHeroVideo = () => {
        if (heroVideo.paused) {
          heroVideo.play().catch(() => {
            // iOS may delay autoplay until the first user gesture or when low-power mode is disabled.
          });
        }
      };

      playHeroVideo();
      heroVideo.addEventListener('loadeddata', playHeroVideo);
      heroVideo.addEventListener('canplay', playHeroVideo);
      document.addEventListener('visibilitychange', playHeroVideo);
      window.addEventListener('touchstart', playHeroVideo, { passive: true });
      window.addEventListener('scroll', playHeroVideo, { passive: true });

      cleanupHeroVideo = () => {
        heroVideo.removeEventListener('loadeddata', playHeroVideo);
        heroVideo.removeEventListener('canplay', playHeroVideo);
        document.removeEventListener('visibilitychange', playHeroVideo);
        window.removeEventListener('touchstart', playHeroVideo);
        window.removeEventListener('scroll', playHeroVideo);
      };
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const targets = document.querySelectorAll('[data-reveal]');
    targets.forEach(target => observer.observe(target));

    return () => {
      cleanupHeroVideo();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <header className="hero" id="inicio">
        <div className="hero-overlay" />
        <video
          ref={heroVideoRef}
          className="hero-bg-video"
          src="/media/video-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex="-1"
        />

        <div className="hero-content shell">
          <nav className="top-nav" data-reveal>
            <div className="brand">
              <img src="/media/logo.png" alt="Vena Digital" className="brand-logo" />
              <span>Vena Digital</span>
            </div>
            <div className="nav-links">
              <a href="#objetivo">Propuesta</a>
              <a href="#fases">Fases</a>
              <a href="#modalidad">Modalidad</a>
              <a href="#inversion">Inversión</a>
            </div>
          </nav>

        </div>

        <a href="#objetivo" className="hero-scroll-cta" data-reveal>
          Ver propuesta
        </a>
      </header>

      <main className="shell sections">
        <section className="proposal-intro" id="objetivo" data-reveal>
          <article className="proposal-main">
            <TextBlockAnimation lines={['Modelo de negocio, oferta', 'y sistema de ventas']} />
          </article>
        </section>

        <section className="overview">
          <div className="section-head" data-reveal>
            <p className="section-id">01</p>
            <h2>¿Qué vas a tener al terminar este proceso?</h2>
          </div>

          <div className="overview-grid" data-reveal>
            <div className="benefits-grid">
              <p className="benefits-intro">
                Un negocio que se puede explicar en una sola oración, con un sistema para crecer y un plan de
                operación.
              </p>
              {benefitCards.map(card => (
                <article key={card.title} className={`benefit-card ${card.tone}`}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>

            <aside className="summary-card">
              <h3>Propuesta Comercial</h3>
              <ul>
                <li>Creado para: Diana Boldizar</li>
                <li>Por: Vena Digital ✌️</li>
                <li>Mayo 8 / 2026</li>
              </ul>
              <div className="summary-brand">
                <img src="/media/tecleando-02.png" alt="Mascota Vena Digital tecleando" />
                <p>Laura Salazar,</p>
                <small>Creadora de contenido y Consultora Tech / IA aplicada a negocios</small>
              </div>
              <a
                href="https://wa.me/573043787768"
                className="btn btn-highlight"
                target="_blank"
                rel="noreferrer"
              >
                📱 304 378 7768
              </a>
            </aside>
          </div>

          <div className="strategy-notes" data-reveal>
            <article className="strategy-note">
              <p className="section-id">02</p>
              <h3>Objetivo del proceso</h3>
              <TextRotateBlock text={objectiveText} />
            </article>

            <article className="strategy-note">
              <p className="section-id">03</p>
              <h3>Estructura de trabajo</h3>
              <TextRotateBlock text={structureText} />
            </article>
          </div>
        </section>

        <section id="fases" className="phase-section" data-reveal>
          <div className="section-head">
            <p className="section-id">04</p>
            <h2>Fases del proceso</h2>
          </div>

          <div className="phase-timeline">
            {phases.map(phase => (
              <article key={phase.id} className="phase-item" data-reveal>
                <div className="phase-marker">
                  <div className={`phase-pill ${phase.tone}`}>{phase.id}</div>
                </div>

                <div className="phase-body">
                  <div className="phase-title">
                    <p>{phase.duration}</p>
                    <h3>{phase.name}</h3>
                    <small>{phase.subtitle}</small>
                  </div>

                  <div className="phase-summary">
                    <p>{phase.summary}</p>
                    <div className="phase-note">
                      <h4>Detalle de la fase</h4>
                      {phase.paragraphs.map(paragraph => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="phase-deliverables">
                    <h4>Entregables</h4>
                    <ul>
                      {phase.deliverables.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="modalidad" className="mode-section" data-reveal>
          <div className="section-head">
            <p className="section-id">05</p>
            <h2>Duración y modalidad</h2>
          </div>

          <div className="mode-grid">
            <article className="mode-card mode-duration">
              <span className="mode-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M7 2v3M17 2v3M4.5 8.5h15M6 4h12a2 2 0 0 1 2 2v12.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                  <path d="M8 13h3v3H8z" />
                </svg>
              </span>
              <h3>Duración total</h3>
              <p className="mode-strong">5 meses</p>
              <p>Un proceso completo de trabajo conjunto para construir, validar y poner en marcha el sistema.</p>
            </article>

            <article className="mode-card mode-sessions">
              <span className="mode-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                  <path d="M2.5 21a5.5 5.5 0 0 1 11 0M12 20.5a5 5 0 0 1 9.5-2.2" />
                </svg>
              </span>
              <h3>Modalidad</h3>
              <p className="mode-strong">2 sesiones semanales</p>
              <p>Videollamadas, entregables documentados por fase y canal de comunicación para consultas entre sesiones.</p>
            </article>

            <article className="mode-card mode-progress">
              <span className="mode-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M4 18h16M6 15l4-4 3 3 5-7" />
                  <path d="M18 7h-4M18 7v4" />
                </svg>
              </span>
              <h3>Avance</h3>
              <p className="mode-strong">Fase a fase</p>
              <p>Cada etapa se revisa y valida en conjunto antes de avanzar, para cuidar foco, ritmo y calidad.</p>
            </article>
          </div>
        </section>

        <section id="inversion" className="investment-section" data-reveal>
          <div className="section-head">
            <p className="section-id">06</p>
            <h2>Inversión</h2>
          </div>

          <div className="investment-grid">
            <article className="investment-card total-card pricing-card-creative">
              <span className="pricing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M12 3v18M17 7.5c-.8-1.2-2.2-2-4.1-2-2.1 0-3.7 1.1-3.7 2.8 0 1.8 1.6 2.5 4.2 3.1 2.7.7 4.1 1.4 4.1 3.4 0 1.8-1.8 3-4.3 3-2.2 0-3.8-.8-4.8-2.1" />
                </svg>
              </span>
              <p>Valor total del proceso</p>
              <h3>USD 2.500</h3>
              <small>Inversión completa del acompañamiento estratégico.</small>
            </article>

            <article className="investment-card pricing-card-creative">
              <span className="pricing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M5 12h14M5 6h14M5 18h14" />
                  <path d="M8 3v18M16 3v18" />
                </svg>
              </span>
              <h3>Opción A</h3>
              <p>Pago en dos cuotas</p>
              <p className="money">USD 1.250 × 2</p>
              <small>50% al inicio del proceso · 50% al finalizar a satisfacción</small>
            </article>

            <article className="investment-card pricing-card-creative pricing-popular">
              <span className="pricing-badge">10% descuento</span>
              <span className="pricing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path d="m5 12 4 4L19 6" />
                  <path d="M20 12a8 8 0 1 1-4.7-7.3" />
                </svg>
              </span>
              <h3>Opción B</h3>
              <p>Pago anticipado completo</p>
              <p className="money">USD 2.250</p>
              <small>Pago único al inicio con 10% de descuento sobre el valor total</small>
            </article>

            <article className="investment-card note-card pricing-note">
              <p>
                El inicio del proceso se confirma con el primer pago. Los entregables de cada fase se entregan
                al cierre de la misma y antes de avanzar a la siguiente.
              </p>
            </article>
          </div>
        </section>

        <section id="cierre" className="closing" data-reveal>
          <div className="closing-copy">
            <blockquote>
              No te falta talento. Te falta un hilo conductor que ordene tu valor y lo convierta en ventas.
            </blockquote>
            <p className="signature">Laura Salazar · Vena Digital</p>
          </div>
          <figure className="closing-photo">
            <img src="/media/foto-laura.jpeg" alt="Laura Salazar" />
          </figure>
          <a
            href="https://wa.me/573043787768"
            className="btn btn-primary closing-cta"
            target="_blank"
            rel="noreferrer"
          >
            Quiero que comencemos a trabajar
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-content">
          <div className="footer-brand">
            <img src="/media/logo.png" alt="Vena Digital" className="brand-logo" />
          </div>
          <p>Acompañamiento estratégico para negocios digitales con propósito.</p>
          <small>© 2026 Vena Digital · Todos los derechos reservados.</small>
        </div>
      </footer>
    </div>
  );
}
