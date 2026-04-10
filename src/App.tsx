import { useState } from "react";

const siteUrl = "https://rixxs443.github.io/FernandoSamudio/";

const profileMarks = [
  "Vecino de Garupa",
  "Raiz barrial en Nu Pora",
  "Presencia publica desde 2019",
  "Proyeccion politica hacia 2027",
];

const publicTimeline = [
  {
    year: "2019",
    title: "Aparece en la escena publica de Garupa",
    body: "Su nombre queda registrado oficialmente en la eleccion municipal de 2019, donde fue candidato a intendente y comenzo a ser identificado por vecinos y medios locales.",
  },
  {
    year: "2019",
    title: "Se instala un perfil de cercania y recambio",
    body: "En distintas notas fue presentado como comerciante, vecino de Garupa y una figura asociada a un discurso directo, simple y cercano a la realidad cotidiana del municipio.",
  },
  {
    year: "2025",
    title: "Sigue ligado a temas concretos del barrio",
    body: "Vuelve a aparecer publicamente en reclamos vinculados a la inseguridad en Nu Pora, esta vez como parte de una dinamica de organizacion vecinal y contacto directo con la comunidad.",
  },
  {
    year: "2027",
    title: "Empieza a proyectarse como nombre a mirar",
    body: "Esta pagina ordena su perfil para que mas vecinos sepan quien es, de donde viene y por que empieza a sonar con fuerza de cara a 2027.",
  },
];

const profileTraits = [
  {
    title: "Barrio",
    description:
      "Su identidad publica nace desde Garupa y especialmente desde Nu Pora, no desde una construccion armada de escritorio.",
  },
  {
    title: "Comunidad",
    description:
      "Las fotos y apariciones publicas lo muestran en contacto con vecinos, familias, jovenes y actividades de base.",
  },
  {
    title: "Proyeccion",
    description:
      "Su nombre empieza a tener sentido para 2027 porque combina presencia territorial, reconocimiento local y un perfil de cercania.",
  },
];

const trustDrivers = [
  {
    title: "Cercania real",
    description:
      "Fernando se entiende mejor cuando aparece en contacto directo con vecinos, no en un formato distante o demasiado armado.",
  },
  {
    title: "Capacidad para resolver",
    description:
      "Ademas de cercania, la gente necesita ver capacidad, orden y criterio para hacerse cargo de problemas concretos.",
  },
  {
    title: "Mensaje consistente",
    description:
      "Su perfil crece mas cuando repite pocas ideas fuertes: barrio, gestion, seguridad, servicios y trabajo local.",
  },
];

const signatureIssues = [
  {
    title: "Orden y servicios",
    description:
      "Alumbrado, agua, saneamiento, mantenimiento y calles en condiciones para que la ciudad funcione mejor todos los dias.",
  },
  {
    title: "Seguridad cercana",
    description:
      "Mas presencia, mejor respuesta y una agenda que tome en serio la preocupacion barrial por robos, oscuridad y abandono.",
  },
  {
    title: "Trabajo y movimiento local",
    description:
      "Comercio, oficios, corredores y pequenos productores como base para que Garupa tenga mas actividad propia y menos dependencia.",
  },
];

const visionPoints = [
  {
    title: "Garupa con orden",
    description:
      "Una ciudad que crezca mejor, con prioridades claras, servicios mas consistentes y una gestion que no llegue siempre tarde.",
  },
  {
    title: "Garupa con cercania",
    description:
      "Una forma de hacer politica menos lejana y mas conectada con los problemas concretos de cada barrio y de cada familia.",
  },
  {
    title: "Garupa con futuro",
    description:
      "Un municipio que deje de improvisar y pueda proyectar desarrollo, trabajo, infraestructura y oportunidades para los jovenes.",
  },
];

const proposals = [
  {
    title: "Plan de luz y alumbrado barrial",
    description:
      "Reforzar alumbrado en puntos criticos, atender cortes repetidos y priorizar zonas donde la oscuridad alimenta el abandono y la inseguridad.",
  },
  {
    title: "Agua, saneamiento y mantenimiento esencial",
    description:
      "Trabajar sobre agua potable, drenaje, limpieza, poda y saneamiento como base minima para que los barrios funcionen mejor.",
  },
  {
    title: "Calles transitables todo el ano",
    description:
      "Mejorar calles de tierra, accesos y mantenimiento en corredores barriales para que moverse, estudiar, trabajar y circular no dependa del clima.",
  },
  {
    title: "Seguridad con presencia y respuesta",
    description:
      "Combinar prevencion, corredores iluminados, canales rapidos de reclamo y articulacion con vecinos para que la seguridad deje de ser solo reaccion.",
  },
  {
    title: "Programa municipal contra la violencia familiar y de genero",
    description:
      "Abrir una respuesta local mas cercana con orientacion, acompanamiento y deteccion temprana en un municipio donde los indicadores ya muestran una alerta fuerte.",
  },
  {
    title: "Garupa emprende y trabaja",
    description:
      "Acompanar comercio barrial, oficios, pequenos emprendedores y corredores de actividad para fortalecer ingresos y movimiento economico local.",
  },
  {
    title: "Orden en corredores y accesos",
    description:
      "Mejorar circulacion, senalizacion, limpieza y seguridad en avenidas, colectoras y accesos donde se concentra gran parte de la vida diaria del municipio.",
  },
  {
    title: "Juventud, deporte y pertenencia",
    description:
      "Multiplicar espacios deportivos, comunitarios y de formacion para que mas chicos y jovenes tengan actividades, red y oportunidades.",
  },
  {
    title: "Municipio que responde",
    description:
      "Crear un sistema simple de reclamos, seguimiento y respuesta para que el vecino sepa a quien reclamar, cuando y con que resultado.",
  },
  {
    title: "Santa Ines y zona periurbana con mirada productiva",
    description:
      "Integrar mejor el borde periurbano con caminos, conectividad y acompanamiento a pequenos productores y actividades de crecimiento futuro.",
  },
];

const territorialPlans = [
  {
    id: "nu-pora",
    label: "Nu Pora",
    electors: "27.818",
    share: "48%",
    coords: { lat: -27.43556, lon: -55.87389 },
    context:
      "Es el principal corazon electoral de Garupa y una zona donde se mezclan volumen poblacional, cercania barrial y problemas cotidianos que necesitan presencia constante.",
    focus: "Presencia sostenida, seguridad, mantenimiento y escucha barrial.",
    plans: [
      "Mas cercania en calle y seguimiento de reclamos repetidos.",
      "Prioridad en iluminacion, accesos y respuestas a problemas de inseguridad.",
      "Trabajo con familias, jovenes y referentes de base para consolidar presencia.",
    ],
  },
  {
    id: "don-santiago",
    label: "Don Santiago",
    electors: "14.606",
    share: "25%",
    coords: { lat: -27.46512, lon: -55.85849 },
    context:
      "Es un circuito de peso alto para consolidar cercania barrial, recorridas familiares y una agenda concreta vinculada a vida cotidiana, accesos y servicios.",
    focus: "Recorridas, cercania familiar y agenda de servicios.",
    plans: [
      "Presencia frecuente con reuniones chicas y escucha territorial.",
      "Trabajo sobre calles, conectividad interna, movilidad y mantenimiento.",
      "Impulso a actividades con jovenes, clubes y espacios comunitarios.",
    ],
  },
  {
    id: "garupa-centro",
    label: "Garupa Centro",
    electors: "13.170",
    share: "23%",
    coords: { lat: -27.48371, lon: -55.82966 },
    context:
      "Es la zona de mayor visibilidad politica y comercial. Lo que pasa ahi ordena parte de la percepcion general del municipio.",
    focus: "Orden urbano, comercio, circulacion y visibilidad publica.",
    plans: [
      "Agenda centrada en transito, comercio y funcionamiento urbano.",
      "Mejora de corredores, limpieza, iluminacion y puntos de referencia.",
      "Presencia publica clara para mostrar capacidad de gestion y orden.",
    ],
  },
  {
    id: "santa-ines",
    label: "Santa Ines",
    electors: "2.423",
    share: "4%",
    coords: { lat: -27.51667, lon: -55.85 },
    context:
      "Aunque tiene menor peso relativo, permite hablar de integracion, periurbano, produccion y crecimiento con mirada de largo plazo.",
    focus: "Integracion, produccion periurbana y conectividad.",
    plans: [
      "Agenda de acceso, conectividad y presencia puntual bien aprovechada.",
      "Acompanamiento a pequenos productores y actividades de borde periurbano.",
      "Lectura de crecimiento futuro para que Garupa se expanda con mas orden.",
    ],
  },
];

const faq = [
  {
    question: "Quien es Fernando Samudio",
    answer:
      "Es un vecino de Garupa con raiz publica en Nu Pora, presencia barrial y trayectoria visible en temas comunitarios y de cercania con la gente.",
  },
  {
    question: "Ya es candidato para 2027",
    answer:
      "Hoy esta presentado como una figura con proyeccion hacia 2027. Esta pagina busca que la gente pueda conocerlo mejor, ver su recorrido y entender por que empieza a ser tenido en cuenta.",
  },
  {
    question: "Que propone para Garupa",
    answer:
      "Propone una mirada centrada en orden urbano, servicios, cercania barrial, seguridad, comercio local, juventud y una ciudad con mejor proyeccion de futuro.",
  },
  {
    question: "Donde seguir novedades",
    answer:
      "En esta pagina y en los canales oficiales que se iran completando a medida que el perfil publico quede mas consolidado.",
  },
];

const channels = [
  {
    name: "Telegram",
    href: "#",
    description: "Canal para novedades, actividades y mensajes publicos.",
  },
  {
    name: "WhatsApp",
    href: "#",
    description: "Difusion directa, contacto cercano y comunidad barrial.",
  },
  {
    name: "Instagram",
    href: "#",
    description: "Imagenes, recorridas y momentos de presencia territorial.",
  },
  {
    name: "Facebook",
    href: "#",
    description: "Publicaciones abiertas y contenido para mas alcance local.",
  },
];

const metroScaleProposals = [
  {
    title: "Garupa Responde",
    description:
      "Crear una capa municipal simple de reclamos, seguimiento y respuesta digital para que el vecino pueda pedir, consultar y controlar sin perder tiempo.",
  },
  {
    title: "Mapa publico de obras y prioridades",
    description:
      "Traducir la planificacion urbana a una herramienta clara y publica donde cada barrio pueda ver que se hace, que falta y que prioridad tiene.",
  },
  {
    title: "Corredores con mas orden y mas identidad",
    description:
      "Recuperar centros, accesos, avenidas y espacios publicos para que Garupa gane orden, referencia urbana y vida propia sin depender siempre de Posadas.",
  },
  {
    title: "Mas economia local y menos ciudad dormitorio",
    description:
      "Fortalecer comercio, oficios, pequenos productores y actividad en corredores para que Garupa tenga mas movimiento economico propio y menos dependencia externa.",
  },
];

function createMapEmbed(lat: number, lon: number) {
  const deltaLat = 0.022;
  const deltaLon = 0.03;
  const bbox = `${lon - deltaLon}%2C${lat - deltaLat}%2C${lon + deltaLon}%2C${lat + deltaLat}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}

function App() {
  const [selectedZone, setSelectedZone] = useState(territorialPlans[0]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">FS</span>
          <span className="brand-copy">
            <strong>Fernando Samudio</strong>
            <span>Perfil publico</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegacion principal">
          <a href="#historia">Historia</a>
          <a href="#vision">Vision</a>
          <a href="#garupa">Garupa</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Perfil publico 2027</p>
            <h1>
              <span>Fernando</span>
              <em>Samudio</em>
            </h1>
            <p className="hero-lead">
              Vecino de Garupa, con raiz barrial, presencia comunitaria y una proyeccion
              politica que empieza a mirar hacia 2027.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#historia">
                Conocer su historia
              </a>
              <a className="button button-secondary" href="#garupa">
                Ver Garupa en foco
              </a>
            </div>

            <ul className="hero-tags" aria-label="Marcas del perfil">
              {profileMarks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className="hero-photo">
            <img
              src="/FernandoSamudio/images/fernando-hero.jpeg"
              alt="Fernando Samudio conversando con vecinos en una calle de Garupa"
            />
            <figcaption>
              Una imagen que lo muestra donde mejor se entiende su perfil: en la calle,
              hablando con vecinos.
            </figcaption>
          </figure>
        </section>

        <section className="section intro-section" id="historia">
          <div className="section-head">
            <p className="eyebrow">Quien es</p>
            <h2>Una figura que se entiende mejor desde la cercania que desde el discurso.</h2>
          </div>

          <div className="intro-grid">
            <div className="intro-copy">
              <p>
                Fernando Samudio es un nombre que empieza a sonar en Garupa desde una
                combinacion simple y potente: barrio, presencia y contacto real con la
                gente.
              </p>
              <p>
                Su perfil publico no se apoya en una imagen distante, sino en apariciones
                concretas junto a vecinos, actividades comunitarias y escenas donde se lo ve
                cerca de la vida cotidiana del municipio.
              </p>
              <p>
                Esta pagina no busca exagerar ni inventar. Busca ordenar quien es, de donde
                viene y por que empieza a tener sentido como una figura a mirar hacia 2027.
              </p>
            </div>

            <figure className="support-photo">
              <img
                src="/FernandoSamudio/images/fernando-comunidad.jpeg"
                alt="Fernando Samudio junto a vecinos en una actividad comunitaria"
              />
              <figcaption>Presencia cercana, sencilla y reconocible en actividades locales.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section traits-section">
          <div className="section-head">
            <p className="eyebrow">Lo que lo define</p>
            <h2>Tres claves para entender por que su nombre empieza a crecer.</h2>
          </div>

          <div className="agenda-grid">
            {profileTraits.map((item) => (
              <article className="agenda-item" key={item.title}>
                <p className="agenda-phase">{item.title}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-section">
          <div className="section-head">
            <p className="eyebrow">Confianza publica</p>
            <h2>Tres señales que vuelven mas creible un perfil politico local.</h2>
          </div>

          <div className="agenda-grid">
            {trustDrivers.map((item) => (
              <article className="agenda-item" key={item.title}>
                <p className="agenda-phase">Confianza</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section priorities-section">
          <div className="section-head">
            <p className="eyebrow">Prioridades centrales</p>
            <h2>Tres temas que Fernando deberia liderar con mas claridad frente a la gente.</h2>
          </div>

          <div className="agenda-grid">
            {signatureIssues.map((item) => (
              <article className="agenda-item" key={item.title}>
                <p className="agenda-phase">Prioridad</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section vision-section" id="vision">
          <div className="section-head">
            <p className="eyebrow">Vision de Fernando</p>
            <h2>Una idea de ciudad con mas orden, mas cercania y mas futuro.</h2>
          </div>

          <div className="agenda-grid">
            {visionPoints.map((item) => (
              <article className="agenda-item" key={item.title}>
                <p className="agenda-phase">Vision</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proposals-section">
          <div className="section-head">
            <p className="eyebrow">Propuestas</p>
            <h2>Diez propuestas base para atacar lo que mas le importa hoy a la gente.</h2>
          </div>

          <div className="proposal-grid">
            {proposals.map((item) => (
              <article className="proposal-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section">
          <div className="section-head">
            <p className="eyebrow">Trayectoria publica</p>
            <h2>Una linea de tiempo breve para ubicar su recorrido.</h2>
          </div>

          <div className="timeline">
            {publicTimeline.map((item) => (
              <article className="timeline-item" key={`${item.year}-${item.title}`}>
                <p className="timeline-year">{item.year}</p>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section community-section">
          <div className="section-head">
            <p className="eyebrow">En comunidad</p>
            <h2>Las imagenes ayudan a entender el perfil mejor que cualquier slogan.</h2>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-card">
              <img
                src="/FernandoSamudio/images/fernando-deporte.jpeg"
                alt="Fernando Samudio en una actividad deportiva junto a jovenes y familias"
              />
              <figcaption>Actividad deportiva y presencia en espacios comunitarios.</figcaption>
            </figure>

            <div className="gallery-copy">
              <p>
                Las fotos elegidas no muestran una produccion artificial. Muestran a Fernando
                en situaciones donde su perfil se vuelve mas claro: barrio, vecinos, jovenes,
                deporte y conversacion directa.
              </p>
              <ul className="reasons-list">
                <li>La cercania con la gente es parte central de su imagen publica.</li>
                <li>La presencia en territorio le da sentido a su proyeccion hacia 2027.</li>
                <li>Su perfil crece mejor cuando se lo ve en la vida real de Garupa.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section zone-section" id="garupa">
          <div className="section-head">
            <p className="eyebrow">Garupa en foco</p>
            <h2>Un mapa simple para conectar la vision de Fernando con la realidad del municipio.</h2>
          </div>

          <div className="zone-layout">
            <div className="zone-map-shell">
              <iframe
                className="zone-map"
                title={`Mapa de ${selectedZone.label}, Garupa`}
                src={createMapEmbed(selectedZone.coords.lat, selectedZone.coords.lon)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="zone-map-note">
                Mapa base de OpenStreetMap centrado en {selectedZone.label}, Garupa.
              </p>
            </div>

            <div className="zone-detail">
              <div className="zone-controls" role="tablist" aria-label="Zonas prioritarias de Garupa">
                {territorialPlans.map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    className={`zone-button ${selectedZone.id === zone.id ? "is-active" : ""}`}
                    onClick={() => setSelectedZone(zone)}
                  >
                    {zone.label}
                  </button>
                ))}
              </div>

              <article className="zone-panel">
                <div className="zone-stats">
                  <div>
                    <span>Electores</span>
                    <strong>{selectedZone.electors}</strong>
                  </div>
                  <div>
                    <span>Peso estimado</span>
                    <strong>{selectedZone.share}</strong>
                  </div>
                </div>

                <h3>{selectedZone.label}</h3>
                <p>{selectedZone.context}</p>
                <p className="zone-focus">{selectedZone.focus}</p>

                <ul className="zone-list">
                  {selectedZone.plans.map((plan) => (
                    <li key={plan}>{plan}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section comparison-section">
          <div className="section-head">
            <p className="eyebrow">Salto metropolitano</p>
            <h2>Cuatro propuestas para que Garupa crezca con mas herramientas y menos atraso frente a su entorno.</h2>
          </div>

          <div className="proposal-grid">
            {metroScaleProposals.map((item) => (
              <article className="proposal-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section channels-section">
          <div className="section-head">
            <p className="eyebrow">Canales</p>
            <h2>Espacios para seguir su actividad y conocer mas.</h2>
          </div>

          <div className="channels-grid">
            {channels.map((channel) => (
              <a
                className="channel-link"
                href={channel.href}
                key={channel.name}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="channel-title">{channel.name}</span>
                <span className="channel-description">{channel.description}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="section-head">
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2>Una presentacion clara para que la gente lo conozca mejor.</h2>
          </div>

          <div className="faq-list">
            {faq.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <p className="eyebrow">Mirando a 2027</p>
          <h2>Una pagina pensada para que Garupa pueda conocer mejor a Fernando Samudio.</h2>
          <p>
            A medida que el perfil publico se consolide, este sitio puede seguir sumando
            historia, recorridas, propuestas y canales oficiales de forma ordenada.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Actualizado el 10 de abril de 2026.</p>
        <p>
          Sitio publico: <a href={siteUrl}>{siteUrl}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
