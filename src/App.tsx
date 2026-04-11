import { useState } from "react";

const siteUrl = "https://fernandosamudio.com.ar/";
const instagramUrl = "https://www.instagram.com/fernando_samudio1823/";

const heroTags = [
  "Raíz en Ñu Porá",
  "Trayectoria pública desde 2019",
  "Cercanía con vecinos",
  "Mirada de ciudad hacia 2027",
];

const proofFacts = [
  {
    label: "2019",
    value: "Candidato a intendente de Garupá",
  },
  {
    label: "852 votos",
    value: "Primer respaldo electoral medible en la elección municipal de 2019",
  },
  {
    label: "2023",
    value: "Candidato a concejal titular 3 en Hagamos Crecer La Ciudad",
  },
  {
    label: "2025",
    value: "Presencia pública barrial en reclamos por inseguridad en Ñu Porá",
  },
];

const publicTimeline = [
  {
    year: "2019",
    title: "Primera candidatura a intendente",
    body: "El 2 de junio de 2019 mi nombre aparece oficialmente como candidato a intendente de Garupá por el sublema Activar, dentro de Juntos por el Cambio.",
  },
  {
    year: "2019",
    title: "Aparece un perfil de cercanía y recambio",
    body: "En entrevistas de ese año aparezco como comerciante, vecino de Ñu Porá y alguien dispuesto a hablar de trabajo, servicios, seguridad y renovación política sin vueltas.",
  },
  {
    year: "2023",
    title: "Vuelvo a integrar una propuesta electoral",
    body: "El 7 de mayo de 2023 figuro oficialmente como candidato a concejal titular 3 del sublema Hagamos Crecer La Ciudad, con Juan Ramón Pereyra a la intendencia dentro del Frente Renovador de la Concordia.",
  },
  {
    year: "2023",
    title: "El recorrido suma volumen político",
    body: "En el escrutinio definitivo, esa lista registra 3.595 votos para intendente y 3.544 para concejal en Garupá. Eso marca continuidad pública y base real de reconocimiento local.",
  },
  {
    year: "2025",
    title: "Sigo vinculado a problemas concretos del barrio",
    body: "Vuelvo a aparecer públicamente en reclamos por inseguridad en Ñu Porá, esta vez desde la organización vecinal y el contacto directo con la comunidad.",
  },
];

const profileTraits = [
  {
    title: "Raíz real",
    description:
      "Mi historia nace en Garupá y especialmente en Ñu Porá. No vengo de una construcción armada desde afuera, sino de una experiencia concreta de barrio.",
  },
  {
    title: "Presencia sostenida",
    description:
      "Mi perfil no aparece solo en tiempos electorales. Se entiende mejor cuando se me ve en la calle, en actividades comunitarias y cerca de los problemas cotidianos.",
  },
  {
    title: "Mirada de gestión",
    description:
      "Quiero que Garupá deje de vivir apagando incendios. Me interesa una ciudad con prioridades claras, respuestas concretas y una idea de futuro más seria.",
  },
];

const trustDrivers = [
  {
    title: "Cercanía que se ve",
    description:
      "En política local la confianza crece cuando la gente puede verte hablar, escuchar, caminar y sostener presencia real en el territorio.",
  },
  {
    title: "Coherencia entre historia y mensaje",
    description:
      "Mi perfil es más creíble cuando lo que digo coincide con lo que ya hice: barrio, recorrida, contacto con vecinos y participación pública verificable.",
  },
  {
    title: "Pocas prioridades, bien defendidas",
    description:
      "No hace falta prometer todo. Hace falta poner el foco en seguridad, servicios, orden urbano, trabajo local y un municipio que responda.",
  },
];

const signatureIssues = [
  {
    title: "Seguridad y presencia",
    description:
      "Robos, oscuridad, desprotección y falta de respuesta aparecen una y otra vez en la conversación barrial. Ese tema necesita prioridad política real.",
  },
  {
    title: "Servicios y orden cotidiano",
    description:
      "Agua, alumbrado, limpieza, mantenimiento, drenaje y calles en condiciones son la base para que la ciudad funcione y la gente viva mejor.",
  },
  {
    title: "Trabajo y movimiento local",
    description:
      "Garupá necesita más actividad propia, más apoyo al comercio, más oficios y más oportunidades para que la ciudad no dependa siempre de lo que pasa afuera.",
  },
];

const visionPoints = [
  {
    title: "Una ciudad que responda",
    description:
      "Quiero un municipio que deje de reaccionar tarde y empiece a responder con más orden, más seguimiento y más presencia en los barrios.",
  },
  {
    title: "Una ciudad más cercana",
    description:
      "Quiero una política menos distante, menos burocrática y más conectada con la vida real de las familias, los jóvenes, los comerciantes y los vecinos.",
  },
  {
    title: "Una ciudad con más futuro",
    description:
      "Garupá puede crecer con más infraestructura, más desarrollo local y más oportunidades si deja de improvisar y empieza a pensar en serio el 2027 y los años que vienen.",
  },
];

const proposals = [
  {
    title: "Plan de alumbrado y puntos seguros",
    description:
      "Priorizar iluminación en zonas críticas, corredores oscuros y sectores con robos repetidos para devolver tranquilidad y presencia en la calle.",
  },
  {
    title: "Agua, saneamiento y drenaje como base",
    description:
      "Ordenar lo esencial: agua potable, drenaje, limpieza, poda y mantenimiento para que los barrios funcionen mejor todos los días.",
  },
  {
    title: "Calles transitables todo el año",
    description:
      "Mejorar calles de tierra, accesos, cuneteo y mantenimiento en corredores barriales para que moverse no dependa del clima.",
  },
  {
    title: "Municipio que responde reclamos",
    description:
      "Crear un sistema claro de reclamos, seguimiento y respuesta para que cada vecino sepa dónde reclamar, qué pasó con su pedido y en qué plazo se resuelve.",
  },
  {
    title: "Seguridad con articulación barrial",
    description:
      "Combinar prevención, corredores iluminados, alertas vecinales y trabajo coordinado con instituciones para que la seguridad no sea solo reacción.",
  },
  {
    title: "Comercio, oficios y emprendedores",
    description:
      "Acompañar al comercio barrial, los pequeños emprendimientos y los oficios para fortalecer ingresos, empleo local y movimiento económico propio.",
  },
  {
    title: "Corredores y accesos más ordenados",
    description:
      "Mejorar señalización, limpieza, circulación y seguridad en avenidas, colectoras y accesos donde se concentra gran parte de la vida diaria de Garupá.",
  },
  {
    title: "Juventud, deporte y pertenencia",
    description:
      "Multiplicar espacios deportivos, comunitarios y de formación para que más chicos y jóvenes tengan actividad, contención y oportunidades.",
  },
  {
    title: "Atención local a la violencia familiar y de género",
    description:
      "Acercar orientación, acompañamiento y detección temprana con una respuesta municipal más humana y más presente en el territorio.",
  },
  {
    title: "Santa Inés y periurbano con mirada productiva",
    description:
      "Integrar mejor el borde periurbano con caminos, conectividad y apoyo a pequeños productores para pensar crecimiento y desarrollo con más criterio.",
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
      "Es el principal corazón electoral de Garupá y una zona donde se cruzan volumen poblacional, cercanía barrial y problemas cotidianos que requieren presencia constante.",
    focus: "Acá la prioridad es seguridad, mantenimiento, escucha sostenida y capacidad de respuesta.",
    plans: [
      "Más presencia en calle y seguimiento de reclamos repetidos.",
      "Iluminación, accesos y respuesta rápida a situaciones de inseguridad.",
      "Trabajo con familias, jóvenes y referentes de base para consolidar cercanía real.",
    ],
  },
  {
    id: "don-santiago",
    label: "Don Santiago",
    electors: "14.606",
    share: "25%",
    coords: { lat: -27.46512, lon: -55.85849 },
    context:
      "Es un circuito de peso alto para consolidar recorridas familiares, presencia de cercanía y una agenda ligada a servicios, movilidad y vida cotidiana.",
    focus: "Acá la prioridad es recorrida frecuente, agenda de servicios y presencia familiar.",
    plans: [
      "Reuniones chicas con vecinos y escucha territorial constante.",
      "Trabajo sobre calles, movilidad interna y mantenimiento.",
      "Actividades con clubes, jóvenes y espacios comunitarios.",
    ],
  },
  {
    id: "garupa-centro",
    label: "Garupá Centro",
    electors: "13.170",
    share: "23%",
    coords: { lat: -27.48371, lon: -55.82966 },
    context:
      "Es la zona de mayor visibilidad política y comercial. Lo que pasa ahí influye mucho en la percepción general del municipio.",
    focus: "Acá la prioridad es orden urbano, comercio, circulación y señal de gestión.",
    plans: [
      "Agenda centrada en tránsito, comercio y funcionamiento urbano.",
      "Mejora de corredores, limpieza, iluminación y puntos de referencia.",
      "Visibilidad pública de gestión y capacidad de ordenar lo cotidiano.",
    ],
  },
  {
    id: "santa-ines",
    label: "Santa Inés",
    electors: "2.423",
    share: "4%",
    coords: { lat: -27.51667, lon: -55.85 },
    context:
      "Tiene menor peso relativo, pero sirve para hablar de integración, periurbano, producción y crecimiento con mirada de largo plazo.",
    focus: "Acá la prioridad es conectividad, producción periurbana e integración con la ciudad.",
    plans: [
      "Agenda de acceso y conectividad bien aprovechada.",
      "Acompañamiento a pequeños productores y actividades de borde periurbano.",
      "Lectura de crecimiento futuro para que Garupá se expanda con más orden.",
    ],
  },
];

const metroScaleProposals = [
  {
    title: "Garupá puede responder mejor",
    description:
      "La ciudad necesita una capa municipal más moderna de reclamos, seguimiento y respuesta para que el vecino pueda pedir, consultar y controlar sin perder tiempo.",
  },
  {
    title: "Garupá puede planificar mejor",
    description:
      "Un mapa público de obras y prioridades ayudaría a transparentar qué se hace, qué falta y qué lugar ocupa cada barrio en la agenda municipal.",
  },
  {
    title: "Garupá puede ordenar mejor sus corredores",
    description:
      "Recuperar accesos, avenidas y espacios públicos daría más identidad urbana, más seguridad y una señal concreta de ciudad en movimiento.",
  },
  {
    title: "Garupá puede generar más actividad propia",
    description:
      "Fortalecer comercio, oficios, pequeños productores y corredores económicos permitiría depender menos de otras ciudades y mover más la economía local.",
  },
];

const faq = [
  {
    question: "¿Quién es Fernando Samudio?",
    answer:
      "Soy un vecino de Garupá, con raíz en Ñu Porá, presencia barrial y una trayectoria pública que incluye una candidatura a intendente en 2019, una candidatura a concejal en 2023 y participación cercana en temas concretos del municipio.",
  },
  {
    question: "¿Ya es candidato para 2027?",
    answer:
      "Esta página presenta mi perfil público y mi mirada de ciudad de cara a 2027. La idea es que más vecinos puedan conocer quién soy, qué recorrí y qué quiero aportar.",
  },
  {
    question: "¿Qué propone para Garupá?",
    answer:
      "Una agenda centrada en seguridad, servicios, orden urbano, municipio que responda, trabajo local, juventud y una ciudad con más futuro.",
  },
  {
    question: "¿Dónde seguir novedades?",
    answer:
      "En esta página y en los canales oficiales que voy a seguir consolidando a medida que esta presencia pública crezca.",
  },
];

const channels = [
  {
    name: "Instagram",
    href: instagramUrl,
    description: "Recorridas, momentos de cercanía y presencia territorial.",
  },
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
    name: "Facebook",
    href: "#",
    description: "Publicaciones abiertas para ampliar alcance local.",
  },
];

const sources = [
  {
    label: "Tribunal Electoral de Misiones, candidatos municipales 2019",
    href: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2020/11/ListasCandidatosLemasMunicipiosSublemas.pdf",
  },
  {
    label: "Tribunal Electoral de Misiones, resultados 2019 por circuito",
    href: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2020/11/totales-por-circuitos.pdf",
  },
  {
    label: "Tribunal Electoral de Misiones, candidatos municipales 2023",
    href: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2023/04/Reporte-Candidatos-Municipales-completo.pdf",
  },
  {
    label: "Tribunal Electoral de Misiones, escrutinio definitivo 2023",
    href: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2023/05/Acta-Acuerdo-N%C2%B01166-Anexo-I.pdf",
  },
  {
    label: "Misiones Cuatro, reclamos vecinales por inseguridad en Ñu Porá",
    href: "https://misionescuatro.com/general/vecinos-de-nu-pora-se-autoconvocan-por-la-creciente-inseguridad-en-el-barrio/",
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
            <span>Garupá 2027</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#trayectoria">Trayectoria</a>
          <a href="#propuestas">Propuestas</a>
          <a href="#garupa">Garupá</a>
          <a href="#canales">Canales</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">Garupá 2027</p>
            <h1>
              <span>Fernando</span>
              <em>Samudio</em>
            </h1>
            <p className="hero-lead">
              Nací, crecí y sigo caminando Garupá. Creo que la ciudad necesita una etapa de más
              orden, más cercanía y más futuro. Esta página reúne mi trayectoria, mi mirada y
              una base de propuestas para lo que viene.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#propuestas">
                Ver propuestas base
              </a>
              <a className="button button-secondary" href="#trayectoria">
                Recorrer su trayectoria
              </a>
            </div>

            <ul className="hero-tags" aria-label="Marcas del perfil">
              {heroTags.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className="hero-photo">
            <img
              src="/images/fernando-hero.jpeg"
              alt="Fernando Samudio conversando con vecinos en una calle de Garupá"
            />
            <figcaption>
              Ahí es donde mejor se entiende mi perfil: en la calle, cerca de la gente y de los
              problemas reales de la ciudad.
            </figcaption>
          </figure>
        </section>

        <section className="section intro-section" id="trayectoria">
          <div className="section-head">
            <p className="eyebrow">Perfil</p>
            <h2>No vengo a inventarme un personaje político.</h2>
          </div>

          <div className="intro-grid">
            <div className="intro-copy">
              <p>
                Mi nombre empieza a sonar en Garupá desde una combinación concreta: barrio,
                presencia pública y contacto real con los vecinos.
              </p>
              <p>
                No me interesa una política lejana. Prefiero que me conozcan como soy: cerca de
                las familias, de las actividades comunitarias y de la vida cotidiana del municipio.
              </p>
              <p>
                Esta página no busca exagerar. Busca ordenar quién soy, qué pasos públicos di,
                qué temas me importan y por qué creo que puedo aportar una mirada valiosa hacia
                2027.
              </p>
            </div>

            <figure className="support-photo">
              <img
                src="/images/fernando-comunidad.jpeg"
                alt="Fernando Samudio junto a vecinos en una actividad comunitaria"
              />
              <figcaption>
                Una presencia cercana, sencilla y reconocible en actividades locales.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section manifesto">
          <div className="section-head">
            <p className="eyebrow">Mirada</p>
            <h2>Garupá puede vivir una etapa más ordenada, más presente y más viva.</h2>
          </div>
          <p className="manifesto-copy">
            Mi idea no es prometer una ciudad perfecta. Mi idea es que Garupá funcione mejor,
            responda mejor y recupere la confianza de la gente en lo cotidiano: seguridad,
            servicios, orden, trabajo local y un municipio que esté donde tiene que estar.
          </p>
        </section>

        <section className="section facts-section">
          <div className="section-head">
            <p className="eyebrow">Hechos verificables</p>
            <h2>Una base pública concreta para entender mi recorrido.</h2>
          </div>

          <div className="facts-grid">
            {proofFacts.map((fact) => (
              <article className="fact-row" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section">
          <div className="section-head">
            <p className="eyebrow">Trayectoria pública</p>
            <h2>Una línea de tiempo breve para ubicar mi recorrido con hechos.</h2>
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

        <section className="section traits-section">
          <div className="section-head">
            <p className="eyebrow">Lo que define mi perfil</p>
            <h2>Tres razones por las que este nombre empieza a crecer con más fuerza.</h2>
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
            <h2>Qué hace que un perfil político local resulte creíble de verdad.</h2>
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
            <p className="eyebrow">Prioridades</p>
            <h2>Tres temas que hoy aparecen al frente cuando se habla de Garupá.</h2>
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

        <section className="section vision-section">
          <div className="section-head">
            <p className="eyebrow">Visión de ciudad</p>
            <h2>Lo que imagino para Garupá es simple: una ciudad que funcione mejor.</h2>
          </div>

          <div className="agenda-grid">
            {visionPoints.map((item) => (
              <article className="agenda-item" key={item.title}>
                <p className="agenda-phase">Visión</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section proposals-section" id="propuestas">
          <div className="section-head">
            <p className="eyebrow">Propuestas base</p>
            <h2>Diez líneas de trabajo para una Garupá más ordenada, más presente y más activa.</h2>
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

        <section className="section community-section">
          <div className="section-head">
            <p className="eyebrow">En comunidad</p>
            <h2>La política también se entiende en la calle.</h2>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-card">
              <img
                src="/images/fernando-deporte.jpeg"
                alt="Fernando Samudio en una actividad deportiva junto a jóvenes y familias"
              />
              <figcaption>Deporte, actividad comunitaria y presencia en espacios de encuentro.</figcaption>
            </figure>

            <div className="gallery-copy">
              <p>
                Las imágenes elegidas para esta página no muestran una producción artificial.
                Muestran los lugares donde mejor se entiende mi perfil: barrio, vecinos, jóvenes,
                deporte y conversación directa.
              </p>
              <ul className="reasons-list">
                <li>La cercanía con la gente es parte central de mi perfil público.</li>
                <li>La presencia en territorio le da sentido a una proyección hacia 2027.</li>
                <li>Mi recorrido se entiende mejor cuando se lo ve en la vida real de Garupá.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section zone-section" id="garupa">
          <div className="section-head">
            <p className="eyebrow">Garupá en foco</p>
            <h2>Un mapa simple para conectar la visión de ciudad con la realidad del municipio.</h2>
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
            <p className="eyebrow">Escala de ciudad</p>
            <h2>Cuatro líneas para que Garupá gane herramientas y más capacidad de respuesta.</h2>
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

        <section className="section channels-section" id="canales">
          <div className="section-head">
            <p className="eyebrow">Canales</p>
            <h2>Espacios para seguir de cerca la actividad pública y el recorrido de Fernando.</h2>
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
            <h2>Una presentación clara para que más gente pueda conocer el perfil de Fernando.</h2>
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

        <section className="section sources-section">
          <div className="section-head">
            <p className="eyebrow">Fuentes</p>
            <h2>Base documental usada para ordenar este perfil público.</h2>
          </div>

          <ul className="sources-list">
            {sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="section cta-section">
          <p className="eyebrow">Mirando a 2027</p>
          <h2>Quiero que esta página sirva para que Garupá conozca mejor a la persona antes que al personaje.</h2>
          <p>
            Con el tiempo, este sitio puede seguir sumando recorridas, ideas, canales y propuestas.
            La base es una sola: hablar claro, sostener presencia y construir una mirada de ciudad
            más seria para lo que viene.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Actualizado el 11 de abril de 2026.</p>
        <p>
          Sitio público: <a href={siteUrl}>{siteUrl}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
