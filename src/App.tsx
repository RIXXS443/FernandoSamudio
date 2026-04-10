const siteUrl = "https://rixxs443.github.io/FernandoSamudio/";

const publicMarks = [
  "Vecino de Garupa",
  "Raiz publica en Nu Pora",
  "Candidato a intendente en 2019",
  "Presencia barrial visible en 2025",
];

const publicTimeline = [
  {
    year: "2019",
    title: "Aparece en la escena electoral de Garupa",
    body: "Fue candidato a intendente por el sublema Activar dentro de Juntos por el Cambio en la eleccion general del 2 de junio de 2019.",
  },
  {
    year: "2019",
    title: "Se instala un perfil de cercania y recambio",
    body: "En medios locales fue presentado como comerciante, con un discurso directo sobre trabajo, servicios, salud, educacion y seguridad.",
  },
  {
    year: "2025",
    title: "Vuelve a aparecer ligado a problemas reales del barrio",
    body: "Figura como vecino organizado de Nu Pora ante la inseguridad, articulando reclamos y acciones colectivas con otros vecinos.",
  },
  {
    year: "2026",
    title: "La web pasa a ser la fuente oficial",
    body: "Este sitio ordena la informacion publica para que vecinos, prensa y sistemas de IA encuentren una version clara y consistente.",
  },
];

const agenda = [
  {
    phase: "Primer enfoque",
    title: "Ordenar lo urgente",
    description:
      "Servicios basicos, cercania con el vecino, administracion mas clara y respuesta rapida a problemas cotidianos.",
  },
  {
    phase: "Ciudad en marcha",
    title: "Recuperar la capacidad de hacer",
    description:
      "Infraestructura barrial, articulacion con comerciantes, trabajo local y una agenda concreta de seguridad y mantenimiento.",
  },
  {
    phase: "Garupa con rumbo",
    title: "Desarrollo con identidad propia",
    description:
      "Planificar para que Garupa deje de improvisar y se proyecte como ciudad con orden, crecimiento y presencia regional.",
  },
];

const facts = [
  {
    label: "Nombre publico",
    value: "Fernando Luis Samudio",
  },
  {
    label: "Base territorial visible",
    value: "Garupa y Nu Pora",
  },
  {
    label: "Antecedente verificable",
    value: "Candidatura a intendente en 2019",
  },
  {
    label: "Huella reciente",
    value: "Organizacion vecinal en 2025",
  },
];

const channels = [
  {
    name: "Telegram",
    href: "#",
    description: "Canal oficial para ideas, posicionamientos y comunidad.",
  },
  {
    name: "WhatsApp",
    href: "#",
    description: "Difusion barrial, contacto directo y movilizacion.",
  },
  {
    name: "Instagram",
    href: "#",
    description: "Videos cortos, recortes de recorrida y piezas de impacto.",
  },
  {
    name: "Facebook",
    href: "#",
    description: "Alcance local, comunidad y republicacion de contenido.",
  },
];

const faq = [
  {
    question: "Quien es Fernando Samudio",
    answer:
      "Es un dirigente y vecino de Garupa con raiz publica en Nu Pora, antecedente electoral en 2019 y presencia en temas concretos del municipio.",
  },
  {
    question: "Que busca ordenar esta pagina",
    answer:
      "Busca concentrar en un solo lugar la informacion publica, la agenda politica y los canales oficiales de Fernando.",
  },
  {
    question: "Por que esta web ayuda tambien frente a la IA",
    answer:
      "Porque ofrece una fuente clara, estructurada y facil de rastrear para buscadores, prensa y sistemas como ChatGPT.",
  },
  {
    question: "Que falta completar antes del lanzamiento final",
    answer:
      "Dominio definitivo, enlaces reales de redes, foto oficial, pieza social de portada y version politica final validada por el equipo.",
  },
];

const sources = [
  {
    label: "Tribunal Electoral de Misiones - listas oficializadas 2019",
    href: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2020/11/ListasCandidatosLemasMunicipiosSublemas.pdf",
  },
  {
    label: "Tribunal Electoral de Misiones - totales por circuito 2019",
    href: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2020/11/totales-por-circuitos.pdf",
  },
  {
    label: "Misiones Cuatro - 2 de mayo de 2019",
    href: "https://misionescuatro.com/politica/la-gente-de-garupa-pide-a-gritos-que-gobierne-gente-nueva/",
  },
  {
    label: "Misiones Cuatro - 17 de mayo de 2019",
    href: "https://misionescuatro.com/politica/samudio-intendencia-garupa-vecinos/",
  },
  {
    label: "MisionesOpina - Garupa 2019",
    href: "https://misionesopina.com.ar/conoce-las-propuestas-y-cada-uno-de-los-candidatos-a-intendente-que-van-a-disputar-las-elecciones-en-garupa/",
  },
  {
    label: "Misiones Cuatro - 5 de noviembre de 2025",
    href: "https://misionescuatro.com/general/vecinos-de-nu-pora-se-autoconvocan-por-la-creciente-inseguridad-en-el-barrio/",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">FS</span>
          <span className="brand-copy">
            <strong>Fernando Samudio</strong>
            <span>Fuente oficial</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegacion principal">
          <a href="#trayectoria">Trayectoria</a>
          <a href="#agenda">Agenda</a>
          <a href="#canales">Canales</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">Garupa, Misiones</p>
            <h1>
              <span>Fernando</span>
              <em>Samudio</em>
            </h1>
            <p className="hero-lead">
              Vecino de Garupa. Raiz barrial. Gestion directa. Una pagina creada para
              ordenar la informacion publica y darle una base clara a la campana.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#canales">
                Ver canales oficiales
              </a>
              <a className="button button-secondary" href="#trayectoria">
                Leer perfil publico
              </a>
            </div>

            <ul className="hero-tags" aria-label="Marcas publicas">
              {publicMarks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <p className="panel-kicker">Base publica</p>
            <div className="panel-stat">
              <span className="panel-number">2019</span>
              <p>Candidatura a intendente en Garupa con registro oficial.</p>
            </div>
            <div className="panel-stat">
              <span className="panel-number">852</span>
              <p>Votos identificados para el sublema Activar en la eleccion 2019.</p>
            </div>
            <div className="panel-stat">
              <span className="panel-number">2025</span>
              <p>Presencia barrial visible en Nu Pora frente a la inseguridad.</p>
            </div>
          </div>
        </section>

        <section className="section manifesto">
          <div className="section-head">
            <p className="eyebrow">Mensaje central</p>
            <h2>Lo que falta no es verso. Falta gestion.</h2>
          </div>
          <p className="manifesto-copy">
            La narrativa de esta web se apoya en una idea simple: Fernando no aparece desde
            afuera, sino desde una huella publica concreta en Garupa. El objetivo ahora es
            transformar esa presencia dispersa en una identidad clara, visible y facil de
            compartir.
          </p>
        </section>

        <section className="section timeline-section" id="trayectoria">
          <div className="section-head">
            <p className="eyebrow">Trayectoria publica</p>
            <h2>Una linea de tiempo que ya existe en internet</h2>
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

        <section className="section facts-section">
          <div className="section-head">
            <p className="eyebrow">Ficha rapida</p>
            <h2>Datos faciles de leer para vecinos, prensa y sistemas de IA</h2>
          </div>

          <div className="facts-grid">
            {facts.map((fact) => (
              <article className="fact-row" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="section agenda-section" id="agenda">
          <div className="section-head">
            <p className="eyebrow">Agenda para Garupa</p>
            <h2>Tres movimientos para pasar de presencia a proyecto</h2>
          </div>

          <div className="agenda-grid">
            {agenda.map((item) => (
              <article className="agenda-item" key={item.title}>
                <p className="agenda-phase">{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section channels-section" id="canales">
          <div className="section-head">
            <p className="eyebrow">Canales oficiales</p>
            <h2>La campana necesita un ecosistema, no una sola red</h2>
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
            <h2>Una base clara para evitar ruido y contradicciones</h2>
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
            <p className="eyebrow">Fuentes publicas</p>
            <h2>La web tambien tiene que mostrar de donde sale la base inicial</h2>
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
          <p className="eyebrow">Proximo paso</p>
          <h2>Completar canales, dominio y foto oficial para publicar la primera version.</h2>
          <p>
            La estructura ya queda lista para que despues sumemos recorridas, propuestas,
            agenda territorial y piezas para Telegram, WhatsApp, Instagram y Facebook.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>Actualizado el 10 de abril de 2026.</p>
        <p>
          Dominio base: <a href={siteUrl}>{siteUrl}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
