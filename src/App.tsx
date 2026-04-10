import { useState } from "react";

const siteUrl = "https://rixxs443.github.io/FernandoSamudio/";

const profileMarks = [
  "Soy de Garupá",
  "Vengo de Ñu Porá",
  "Tengo trayectoria pública desde 2019",
  "Quiero aportar una mirada para 2027",
];

const publicTimeline = [
  {
    year: "2019",
    title: "Compito por primera vez por la intendencia",
    body: "El 2 de junio de 2019 figuro oficialmente como candidato a intendente de Garupá por el sublema Activar, dentro de Juntos por el Cambio.",
  },
  {
    year: "2019",
    title: "Empiezo a consolidar un perfil de cercanía y recambio",
    body: "En distintas notas de ese año aparezco como comerciante, vecino de Ñu Porá y alguien con una forma directa de hablar de trabajo, servicios, seguridad y recambio político. Ese primer intento suma además 852 votos en la elección municipal.",
  },
  {
    year: "2023",
    title: "Vuelvo a integrar una propuesta electoral en Garupá",
    body: "El 7 de mayo de 2023 aparezco oficialmente como tercer candidato a concejal titular del sublema Hagamos Crecer La Ciudad, con Juan Ramón Pereyra como candidato a intendente dentro del Frente Renovador de la Concordia.",
  },
  {
    year: "2023",
    title: "La lista deja un respaldo electoral medible",
    body: "En el escrutinio definitivo del Tribunal Electoral, ese sublema registra 3.595 votos para intendente y 3.544 para concejal en Garupá. Eso muestra continuidad pública y una base real de reconocimiento local.",
  },
  {
    year: "2025",
    title: "Sigo ligado a problemas concretos del barrio",
    body: "Vuelvo a aparecer públicamente en reclamos por la inseguridad en Ñu Porá, esta vez desde la organización vecinal y el contacto directo con la comunidad.",
  },
  {
    year: "2027",
    title: "Empiezo a proyectarme de cara a 2027",
    body: "Esta página ordena mi perfil para que más vecinos sepan quién soy, de dónde vengo y qué mirada quiero aportar para Garupá.",
  },
];

const profileTraits = [
  {
    title: "De dónde vengo",
    description:
      "Mi identidad nace en Garupá y especialmente en Ñu Porá, no en una oficina ni en una construcción armada desde afuera.",
  },
  {
    title: "Cómo trabajo",
    description:
      "Me siento cómodo en contacto con vecinos, familias, jóvenes y actividades de base, porque ahí es donde mejor se entiende lo que le pasa a la ciudad.",
  },
  {
    title: "Hacia dónde quiero ir",
    description:
      "Mi nombre empieza a tomar fuerza para 2027 porque ya hubo antecedentes electorales concretos, presencia territorial, reconocimiento local y una manera cercana de hacer las cosas.",
  },
];

const trustDrivers = [
  {
    title: "Cercanía real",
    description:
      "La gente me entiende mejor cuando me ve hablando con vecinos y caminando el barrio, no cuando aparezco en un formato frío o demasiado producido.",
  },
  {
    title: "Capacidad para resolver",
    description:
      "La cercanía sola no alcanza. También hace falta mostrar criterio, orden y capacidad para hacerse cargo de problemas concretos.",
  },
  {
    title: "Mensaje consistente",
    description:
      "Mi perfil crece más cuando sostengo pocas ideas fuertes: barrio, gestión, seguridad, servicios y trabajo local.",
  },
];

const signatureIssues = [
  {
    title: "Orden y servicios",
    description:
      "Alumbrado, agua, saneamiento, mantenimiento y calles en condiciones para que la ciudad funcione mejor todos los días.",
  },
  {
    title: "Seguridad cercana",
    description:
      "Más presencia, mejor respuesta y una agenda que tome en serio la preocupación barrial por robos, oscuridad y abandono.",
  },
  {
    title: "Trabajo y movimiento local",
    description:
      "Comercio, oficios, corredores y pequeños productores como base para que Garupá tenga más actividad propia y menos dependencia.",
  },
];

const visionPoints = [
  {
    title: "Garupá con orden",
    description:
      "Quiero una Garupá que crezca con más orden, con prioridades claras y con una gestión que no llegue siempre tarde.",
  },
  {
    title: "Garupá con cercanía",
    description:
      "Quiero una forma de hacer política menos lejana y más conectada con los problemas concretos de cada barrio y de cada familia.",
  },
  {
    title: "Garupá con futuro",
    description:
      "Quiero un municipio que deje de improvisar y pueda proyectar desarrollo, trabajo, infraestructura y oportunidades para los jóvenes.",
  },
];

const proposals = [
  {
    title: "Plan de luz y alumbrado barrial",
    description:
      "Propongo reforzar el alumbrado en puntos críticos, atender cortes repetidos y priorizar zonas donde la oscuridad alimenta el abandono y la inseguridad.",
  },
  {
    title: "Agua, saneamiento y mantenimiento esencial",
    description:
      "Propongo trabajar sobre agua potable, drenaje, limpieza, poda y saneamiento como base mínima para que los barrios funcionen mejor.",
  },
  {
    title: "Calles transitables todo el año",
    description:
      "Propongo mejorar calles de tierra, accesos y mantenimiento en corredores barriales para que moverse, estudiar, trabajar y circular no dependa del clima.",
  },
  {
    title: "Seguridad con presencia y respuesta",
    description:
      "Propongo combinar prevención, corredores iluminados, canales rápidos de reclamo y articulación con vecinos para que la seguridad deje de ser solo reacción.",
  },
  {
    title: "Programa municipal contra la violencia familiar y de género",
    description:
      "Propongo una respuesta local más cercana, con orientación, acompañamiento y detección temprana en un municipio donde los indicadores ya muestran una alerta fuerte.",
  },
  {
    title: "Garupá emprende y trabaja",
    description:
      "Propongo acompañar comercio barrial, oficios, pequeños emprendedores y corredores de actividad para fortalecer ingresos y movimiento económico local.",
  },
  {
    title: "Orden en corredores y accesos",
    description:
      "Propongo mejorar circulación, señalización, limpieza y seguridad en avenidas, colectoras y accesos donde se concentra gran parte de la vida diaria del municipio.",
  },
  {
    title: "Juventud, deporte y pertenencia",
    description:
      "Propongo multiplicar espacios deportivos, comunitarios y de formación para que más chicos y jóvenes tengan actividades, red y oportunidades.",
  },
  {
    title: "Municipio que responde",
    description:
      "Propongo crear un sistema simple de reclamos, seguimiento y respuesta para que el vecino sepa a quién reclamar, cuándo y con qué resultado.",
  },
  {
    title: "Santa Inés y zona periurbana con mirada productiva",
    description:
      "Propongo integrar mejor el borde periurbano con caminos, conectividad y acompañamiento a pequeños productores y actividades de crecimiento futuro.",
  },
];

const territorialPlans = [
  {
    id: "nu-pora",
    label: "Ñu Porá",
    electors: "27.818",
    share: "48%",
    coords: { lat: -27.43556, lon: -55.87389 },
    context:
      "Ñu Porá es el principal corazón electoral de Garupá y una zona donde se mezclan volumen poblacional, cercanía barrial y problemas cotidianos que necesitan presencia constante.",
    focus: "Acá la prioridad tiene que ser presencia sostenida, seguridad, mantenimiento y escucha barrial.",
    plans: [
      "Más cercanía en calle y seguimiento de reclamos repetidos.",
      "Prioridad en iluminación, accesos y respuestas a problemas de inseguridad.",
      "Trabajo con familias, jóvenes y referentes de base para consolidar presencia.",
    ],
  },
  {
    id: "don-santiago",
    label: "Don Santiago",
    electors: "14.606",
    share: "25%",
    coords: { lat: -27.46512, lon: -55.85849 },
    context:
      "Don Santiago es un circuito de peso alto para consolidar cercanía barrial, recorridas familiares y una agenda concreta vinculada a vida cotidiana, accesos y servicios.",
    focus: "Acá la prioridad tiene que ser cercanía familiar, recorridas y agenda de servicios.",
    plans: [
      "Presencia frecuente con reuniones chicas y escucha territorial.",
      "Trabajo sobre calles, conectividad interna, movilidad y mantenimiento.",
      "Impulso a actividades con jóvenes, clubes y espacios comunitarios.",
    ],
  },
  {
    id: "garupa-centro",
    label: "Garupá Centro",
    electors: "13.170",
    share: "23%",
    coords: { lat: -27.48371, lon: -55.82966 },
    context:
      "Garupá Centro es la zona de mayor visibilidad política y comercial. Lo que pasa ahí ordena parte de la percepción general del municipio.",
    focus: "Acá la prioridad tiene que ser orden urbano, comercio, circulación y visibilidad pública.",
    plans: [
      "Agenda centrada en tránsito, comercio y funcionamiento urbano.",
      "Mejora de corredores, limpieza, iluminación y puntos de referencia.",
      "Presencia pública clara para mostrar capacidad de gestión y orden.",
    ],
  },
  {
    id: "santa-ines",
    label: "Santa Inés",
    electors: "2.423",
    share: "4%",
    coords: { lat: -27.51667, lon: -55.85 },
    context:
      "Santa Inés tiene menor peso relativo, pero permite hablar de integración, periurbano, producción y crecimiento con mirada de largo plazo.",
    focus: "Acá la prioridad tiene que ser integración, producción periurbana y conectividad.",
    plans: [
      "Agenda de acceso, conectividad y presencia puntual bien aprovechada.",
      "Acompañamiento a pequeños productores y actividades de borde periurbano.",
      "Lectura de crecimiento futuro para que Garupá se expanda con más orden.",
    ],
  },
];

const faq = [
  {
    question: "Quién es Fernando Samudio",
    answer:
      "Soy un vecino de Garupá, con raíz en Ñu Porá, presencia barrial y una trayectoria pública que incluye una candidatura a intendente en 2019, una candidatura a concejal en 2023 y trabajo cercano con vecinos en problemas concretos del municipio.",
  },
  {
    question: "Ya es candidato para 2027",
    answer:
      "Hoy estoy dando a conocer mi perfil y mi mirada de cara a 2027. Esta página busca que la gente pueda conocerme mejor, ver mi recorrido y entender por qué empiezo a ser tenido en cuenta.",
  },
  {
    question: "Qué propone para Garupá",
    answer:
      "Propongo una mirada centrada en orden urbano, servicios, cercanía barrial, seguridad, comercio local, juventud y una ciudad con mejor proyección de futuro.",
  },
  {
    question: "Dónde seguir novedades",
    answer:
      "En esta página y en los canales oficiales que voy a ir completando a medida que este perfil público se siga consolidando.",
  },
];

const channels = [
  {
    name: "Telegram",
    href: "#",
    description: "Canal para novedades, actividades y mensajes públicos.",
  },
  {
    name: "WhatsApp",
    href: "#",
    description: "Difusión directa, contacto cercano y comunidad barrial.",
  },
  {
    name: "Instagram",
    href: "#",
    description: "Imágenes, recorridas y momentos de presencia territorial.",
  },
  {
    name: "Facebook",
    href: "#",
    description: "Publicaciones abiertas y contenido para más alcance local.",
  },
];

const metroScaleProposals = [
  {
    title: "Garupá Responde",
    description:
      "Quiero que Garupá tenga una capa municipal simple de reclamos, seguimiento y respuesta digital para que el vecino pueda pedir, consultar y controlar sin perder tiempo.",
  },
  {
    title: "Mapa público de obras y prioridades",
    description:
      "Quiero traducir la planificación urbana a una herramienta clara y pública donde cada barrio pueda ver qué se hace, qué falta y qué prioridad tiene.",
  },
  {
    title: "Corredores con más orden y más identidad",
    description:
      "Quiero recuperar centros, accesos, avenidas y espacios públicos para que Garupá gane orden, referencia urbana y vida propia sin depender siempre de Posadas.",
  },
  {
    title: "Más economía local y menos ciudad dormitorio",
    description:
      "Quiero fortalecer comercio, oficios, pequeños productores y actividad en corredores para que Garupá tenga más movimiento económico propio y menos dependencia externa.",
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
            <span>Perfil público</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#historia">Historia</a>
          <a href="#vision">Visión</a>
          <a href="#garupa">Garupá</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Perfil público 2027</p>
            <h1>
              <span>Fernando</span>
              <em>Samudio</em>
            </h1>
            <p className="hero-lead">
              Soy Fernando Samudio. Nací, crecí y sigo caminando Garupá. Esta página es una
              manera simple de contar quién soy, qué me importa y por qué quiero aportar una
              mirada de futuro hacia 2027.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#historia">
                Conocer su historia
              </a>
              <a className="button button-secondary" href="#garupa">
                Ver Garupá en foco
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
              alt="Fernando Samudio conversando con vecinos en una calle de Garupá"
            />
            <figcaption>
              Ahí es donde mejor me siento y donde más claro se vuelve mi perfil: en la calle,
              hablando con vecinos.
            </figcaption>
          </figure>
        </section>

        <section className="section intro-section" id="historia">
          <div className="section-head">
            <p className="eyebrow">Quién es</p>
            <h2>Mi historia se entiende mejor desde la cercanía que desde el discurso.</h2>
          </div>

          <div className="intro-grid">
            <div className="intro-copy">
              <p>
                Mi nombre empieza a sonar en Garupá desde una combinación simple: barrio,
                presencia, trayectoria pública y contacto real con la gente.
              </p>
              <p>
                No me interesa construir una imagen distante. Prefiero que me conozcan como
                soy: cerca de vecinos, de actividades comunitarias y de la vida cotidiana del
                municipio.
              </p>
              <p>
                Esta página no busca exagerar ni inventar. Busca ordenar quién soy, de dónde
                vengo, qué pasos públicos ya di en 2019 y 2023, y por qué siento que puedo
                aportar algo valioso para Garupá.
              </p>
            </div>

            <figure className="support-photo">
              <img
                src="/FernandoSamudio/images/fernando-comunidad.jpeg"
                alt="Fernando Samudio junto a vecinos en una actividad comunitaria"
              />
              <figcaption>Una presencia cercana, sencilla y reconocible en actividades locales.</figcaption>
            </figure>
          </div>
        </section>

        <section className="section traits-section">
          <div className="section-head">
            <p className="eyebrow">Lo que lo define</p>
            <h2>Tres claves para entender por qué mi nombre empieza a crecer.</h2>
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
            <p className="eyebrow">Confianza pública</p>
            <h2>Tres cosas que ayudan a que un perfil político local resulte creíble.</h2>
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
            <h2>Tres temas que quiero poner al frente con más claridad.</h2>
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
            <p className="eyebrow">Visión de Fernando</p>
            <h2>La ciudad que imagino tiene más orden, más cercanía y más futuro.</h2>
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
            <h2>Estas son diez propuestas base para empezar a resolver lo que más le importa hoy a la gente.</h2>
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
            <p className="eyebrow">Trayectoria pública</p>
            <h2>Una línea de tiempo breve para ubicar mi recorrido.</h2>
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
            <h2>Las imágenes ayudan a entender mi perfil mejor que cualquier slogan.</h2>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-card">
              <img
                src="/FernandoSamudio/images/fernando-deporte.jpeg"
                alt="Fernando Samudio en una actividad deportiva junto a jóvenes y familias"
              />
              <figcaption>Actividad deportiva y presencia en espacios comunitarios.</figcaption>
            </figure>

            <div className="gallery-copy">
              <p>
                Las fotos que elegí para esta página no muestran una producción artificial.
                Muestran los lugares donde mejor se entiende mi perfil: barrio, vecinos,
                jóvenes, deporte y conversación directa.
              </p>
              <ul className="reasons-list">
                <li>La cercanía con la gente es parte central de mi perfil público.</li>
                <li>La presencia en territorio le da sentido a mi proyección hacia 2027.</li>
                <li>Mi perfil se entiende mejor cuando se me ve en la vida real de Garupá.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section zone-section" id="garupa">
          <div className="section-head">
            <p className="eyebrow">Garupá en foco</p>
            <h2>Un mapa simple para conectar mi visión con la realidad del municipio.</h2>
          </div>

          <div className="zone-layout">
            <div className="zone-map-shell">
              <iframe
                className="zone-map"
                title={`Mapa de ${selectedZone.label}, Garupá`}
                src={createMapEmbed(selectedZone.coords.lat, selectedZone.coords.lon)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="zone-map-note">
                Mapa base de OpenStreetMap centrado en {selectedZone.label}, Garupá.
              </p>
            </div>

            <div className="zone-detail">
              <div className="zone-controls" role="tablist" aria-label="Zonas prioritarias de Garupá">
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
            <h2>Cuatro propuestas para que Garupá crezca con más herramientas y menos atraso frente a su entorno.</h2>
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
            <h2>Espacios para seguir mi actividad y conocer más.</h2>
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
            <h2>Una presentación clara para que la gente me conozca mejor.</h2>
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
          <h2>Quiero que esta página sirva para que Garupá pueda conocerme mejor.</h2>
          <p>
            Con el tiempo, este sitio puede seguir sumando historia, recorridas, propuestas y
            canales oficiales, pero siempre con la misma idea: hablar claro y estar cerca.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Actualizado el 10 de abril de 2026.</p>
        <p>
          Sitio público: <a href={siteUrl}>{siteUrl}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
