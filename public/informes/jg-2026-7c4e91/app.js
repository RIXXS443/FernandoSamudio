const sources = [
  {
    type: "official",
    domain: "BCRA",
    date: "05.2026",
    title: "Central de Deudores · posición personal",
    insight: "Informa $5.839.000 en cinco entidades; la obligación con Rombo figura en situación 4 y Tarjeta Naranja en situación 2.",
    reading: "Registro oficial · corte financiero",
    url: "https://api.bcra.gob.ar/CentralDeDeudores/v1.0/Deudas/20201859639",
  },
  {
    type: "official",
    domain: "BCRA",
    date: "2025—2026",
    title: "Central de Deudores · serie histórica personal",
    insight: "La peor situación pasa de 1 en octubre de 2025 a 2, 3 y finalmente 4 en abril y mayo de 2026.",
    reading: "Registro oficial · tendencia",
    url: "https://api.bcra.gob.ar/CentralDeDeudores/v1.0/Deudas/Historicas/20201859639",
  },
  {
    type: "official",
    domain: "BCRA",
    date: "2025—2026",
    title: "Central de Cheques Rechazados",
    insight: "Devuelve nueve rechazos por falta de fondos vinculados a Garupá Construcciones S.A.; cinco no muestran fecha de pago al corte.",
    reading: "Registro oficial · requiere actualización bancaria",
    url: "https://api.bcra.gob.ar/CentralDeDeudores/v1.0/Deudas/ChequesRechazados/20201859639",
  },
  {
    type: "commercial",
    domain: "Mi Nosis",
    date: "22.07.2026",
    title: "Informe comercial individual · 18 páginas",
    insight: "Agrega compromisos mensuales por $423.456, siete consultas en doce meses, antecedentes de contribución patronal y dos referencias comerciales recientes.",
    reading: "Fuente comercial secundaria · excluir coincidencias sin DNI o CUIT",
    url: "file:///C:/Users/rortigoza/Downloads/MiNosis_20201859639.pdf",
  },
  {
    type: "official",
    domain: "Tribunal Electoral",
    date: "2023",
    title: "Lista oficial de candidatos municipales",
    insight: "Ubica a González como primer convencional titular del sublema Por el Presente y el Futuro, encabezado por Lucho Ripoll.",
    reading: "Documento oficial · vínculo político comprobado",
    url: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2023/03/lista_candidatos_sublemas_oficializada_2023.pdf",
  },
  {
    type: "official",
    domain: "Tribunal Electoral",
    date: "2023",
    title: "Escrutinio definitivo municipal",
    insight: "La lista de Ripoll/González obtiene 5.639 votos en convencionales frente a 5.539 de Vamos Juntos; diferencia de 100.",
    reading: "Documento oficial · voto de lista, no nominal",
    url: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2023/05/Acta-Acuerdo-N%C2%B01166-Anexo-I.pdf",
  },
  {
    type: "official",
    domain: "Tribunal Electoral",
    date: "2024",
    title: "Carta Orgánica Municipal de Garupá",
    insight: "Documenta la Convención Constituyente y su integración institucional.",
    reading: "Documento oficial · función pública comprobada",
    url: "https://www.electoralmisiones.gov.ar/wp-content/uploads/2024/12/Garupa-Bol-Of-16258.pdf",
  },
  {
    type: "official",
    domain: "Boletín Oficial",
    date: "02.11.2022",
    title: "Garupá Construcciones S.A. · composición accionaria",
    insight: "Registra 40% para Julio González y 20% para cada uno de sus hijos; lo designa presidente de la sociedad.",
    reading: "Documento societario oficial",
    url: "https://www.boletindigital.misiones.gov.ar/boletines/15747.pdf",
  },
  {
    type: "official",
    domain: "Boletín Oficial",
    date: "2005",
    title: "Constitución de F.M. Sur Paranaense SRL",
    insight: "Registra a González como socio de Séptimo René Darío Roa en una sociedad de radio, TV, internet, publicidad y encuestas.",
    reading: "Documento oficial · relación histórica, no prueba de alianza actual",
    url: "https://www.boletindigital.misiones.gov.ar/boletines/bo11578.pdf",
  },
  {
    type: "official",
    domain: "Boletín Oficial",
    date: "24.02.2009",
    title: "F.M. Sur Paranaense SRL · cesión y nueva administración",
    insight: "Documenta la transferencia de las 250 cuotas de Séptimo Roa a González, quien queda con 375 de 500 cuotas y asume la administración.",
    reading: "Documento oficial · profundiza el vínculo histórico con Roa",
    url: "https://www.boletindigital.misiones.gov.ar/boletines/bo12455.pdf",
  },
  {
    type: "official",
    domain: "Boletín Oficial",
    date: "2025",
    title: "Ordenanza 714/2025 · cambio de zonificación",
    insight: "Publica un expediente iniciado por González y otro propietario para transformar parcelas rurales en urbanas, sujeto a condiciones.",
    reading: "Acto administrativo público · no prueba favoritismo",
    url: "https://www.boletindigital.misiones.gov.ar/boletines/16374.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "Consulta 2026",
    title: "Perfil institucional de Julio González",
    insight: "Lo presenta como presidente y gerente, fundador en 1994, integrante de entidades inmobiliarias y dirigente del club de la empresa.",
    reading: "Fuente propia · útil para autoimagen y cargos declarados",
    url: "https://garupapropiedades.com/nosotros/",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "Consulta 2026",
    title: "Desarrollo Loteo Don Darío",
    insight: "La empresa promociona el loteo por su entorno natural y cercanía al río.",
    reading: "Fuente comercial propia · no valida situación dominial",
    url: "https://garupapropiedades.com/don-dario/",
  },
  {
    type: "press",
    domain: "Misiones Online",
    date: "07.07.2022",
    title: "28 años de Garupá Propiedades",
    insight: "Recorre el origen familiar, el ingreso al negocio, el club social y la participación en la liga deportiva local.",
    reading: "Entrevista · contiene afirmaciones del propio González",
    url: "https://misionesonline.net/2022/07/07/garupa-propiedades-inmobiliaria/",
  },
  {
    type: "press",
    domain: "Misiones Online",
    date: "03.07.2025",
    title: "Historia empresarial, disciplina y política",
    insight: "Declara 7.200 ventas, 21 desarrollos, una candidatura en 2007, amistad con Ripoll y disposición a volver a competir.",
    reading: "Entrevista extensa · cifras no auditadas",
    url: "https://misionesonline.net/2025/07/03/garupa-propiedades/",
  },
  {
    type: "press",
    domain: "La Voz de Garupá",
    date: "28.11.2024",
    title: "Los constituyentes y la candidatura 2027",
    insight: "Identifica a González como presidente de la Convención y registra su afirmación directa de que será candidato a intendente.",
    reading: "Cobertura local · definición política explícita",
    url: "https://www.lavozdegarupa.com.ar/inicio/noticia/2001/Los-constituyentes-que-dieron-forma-a-la-Carta-Orgnica-Municipal.html",
  },
  {
    type: "press",
    domain: "El Territorio",
    date: "05.09.2023",
    title: "Récord de venta de lotes en Garupá y Candelaria",
    insight: "González declara operar con 90% de lotes en Garupá y 10% en Candelaria y describe el mercado posterior a las PASO.",
    reading: "Declaración sectorial · muestra escala que pretende proyectar",
    url: "https://www.elterritorio.com.ar/noticias/2023/09/05/802627-garupa-y-candelaria-registraron-record-de-venta-de-lotes-en-agosto",
  },
  {
    type: "press",
    domain: "El Territorio",
    date: "06.04.2026",
    title: "Torneo de golf con auto y departamento como premios",
    insight: "Expone patrocinio sostenido, capacidad promocional y la entrega futura de un monoambiente en Edificio Don Darío.",
    reading: "Cobertura de actividad comercial y deportiva",
    url: "https://www.elterritorio.com.ar/noticias/2026/04/06/878534-torneo-de-golf-en-el-tacuru-pone-en-juego-un-auto-0-km-y-un-departamento-de-la-mano-de-garupa-propiedades",
  },
  {
    type: "complaint",
    domain: "La Voz de Misiones",
    date: "26.09.2024",
    title: "Pedido de comisión investigadora por Don Darío",
    insight: "Registra reclamos vecinales, una suspensión del Concejo, el veto del intendente y la insistencia legislativa por un espacio verde.",
    reading: "Denuncia pública · no equivale a resolución de responsabilidad",
    url: "https://www.lavozdemisiones.com/politica/piden-conformar-comision-investigadora-contra-el-intendente-de-garupa/",
  },
  {
    type: "complaint",
    domain: "Misiones Cuatro",
    date: "22.03.2022",
    title: "Conflicto de tierras y desalojo en Punta Alta",
    insight: "Recoge la versión de un ocupante que cuestiona el título, el proceso judicial y una supuesta relación familiar con Ripoll.",
    reading: "Alegación de una parte · parentesco y resultado no corroborados",
    url: "https://misionescuatro.com/provinciales/acusan-a-un-juez-de-estar-en-connivencia-con-un-negocio-inmobiliario-del-primo-del-alcalde-ripoll-que-dejara-a-8-familias-en-la-calle/",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "Consulta 22.07.2026",
    title: "Índice de desarrollos inmobiliarios",
    insight: "Publica siete proyectos: Lomas del Sol, Costa Arena, Santa Helena, Las Flores, Altos de Fátima, Las Américas y Don Darío.",
    reading: "Fuente comercial propia · el inventario no aparece sincronizado con todos los brochures",
    url: "https://garupapropiedades.com/desarrollos/",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "08.2025",
    title: "Costa Arena · planos y lista de precios",
    insight: "Detalla 72 departamentos, 134 cocheras, precios, unidades vendidas y plazo de obra de 32 meses bajo un fideicomiso inmobiliario cofirmado con Grupo Moya.",
    reading: "Documento comercial · valor de catálogo, no ingreso atribuible",
    url: "https://garupapropiedades.com/wp-content/uploads/2025/08/Condominios-Costa-Arena-Agosto.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "08.2025",
    title: "Edificio Don Darío · lista de precios",
    insight: "Publica 69 departamentos, 51 cocheras, cinco locales, precios en dólares, entrega del 30% y financiación hasta 36 cuotas.",
    reading: "Documento comercial · dos unidades aparecen no disponibles",
    url: "https://garupapropiedades.com/wp-content/uploads/2025/08/Don-Dario-Edificio-Agosto.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "05.2025",
    title: "Altos de Fátima · 22 lotes",
    insight: "Lista 22 lotes por un valor bruto conjunto aproximado de USD 529.000, con entrega del 30%, comisión del 5% y financiación.",
    reading: "Documento comercial · fotografía de mayo de 2025",
    url: "https://garupapropiedades.com/wp-content/uploads/2025/05/Garupa-Propiedades-Altos-de-Fatima-Abr-2025.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "05.2025",
    title: "Don Santiago · brochure y precios",
    insight: "La lista exhibe 39 lotes disponibles por aproximadamente ARS 468,85 millones y cuotas ajustadas por el índice CAC.",
    reading: "Documento comercial · valores históricos, no stock actual",
    url: "https://garupapropiedades.com/wp-content/uploads/2025/05/Garupa-Propiedades-Don-Santiago-Abr-2025.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "01.2025",
    title: "Las Américas · primera etapa",
    insight: "El brochure ofrecía seis lotes a ARS 11 millones cada uno, mientras la web actual anuncia 54 lotes; la diferencia requiere aclaración.",
    reading: "Documento comercial · posible diferencia entre escala total y disponibilidad",
    url: "https://garupapropiedades.com/wp-content/uploads/2025/01/Las-Americas-5.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "10.2024",
    title: "Lomas del Sol · disponibilidad publicada",
    insight: "El brochure decía que quedaba un lote, mientras la página actual habla de siete lotes aptos para vivienda o comercio.",
    reading: "Documento comercial · inventario no conciliado",
    url: "https://garupapropiedades.com/wp-content/uploads/2024/10/Lomas-del-Sol-1.pdf",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "Consulta 22.07.2026",
    title: "María Dominga · financiación a diez años",
    insight: "Promociona hasta 120 cuotas fijas en dólares y finalización de agua, luz y cordón cuneta en cinco años.",
    reading: "Fuente comercial propia · flujo largo y obligación de infraestructura",
    url: "https://garupapropiedades.com/maria-dominga/",
  },
  {
    type: "press",
    domain: "Misiones Online",
    date: "03.07.2025",
    title: "Edificio Don Darío · escala, producto y financiación",
    insight: "Describe once pisos, más de 40 monoambientes, unidades de uno a tres dormitorios, cinco locales y cuatro niveles de cocheras.",
    reading: "Entrevista comercial · proyecto anunciado, avance no certificado",
    url: "https://misionesonline.net/2025/07/03/garupa-nuevo-edificio-el-acceso-sur/",
  },
  {
    type: "press",
    domain: "Misiones Online",
    date: "30.12.2025",
    title: "Mercado inmobiliario 2025 y perspectivas 2026",
    insight: "La empresa reconoció caída inicial, repunte transitorio y desaceleración final; destacó loteos financiados hasta 120 meses y proyectos en altura.",
    reading: "Contenido patrocinado · útil para demanda y estrategia declarada",
    url: "https://misionesonline.net/2025/12/30/mercado-inmobiliario-2025-1/",
  },
  {
    type: "self",
    domain: "Grupo Moya",
    date: "Consulta 22.07.2026",
    title: "Costa Arena · avance de obra",
    insight: "El codesarrollador informa mampostería interior en finalización, trabajos en SUM, piscinas, revoques, instalaciones y departamento modelo.",
    reading: "Fuente propia del desarrollador · confirma actividad, no certifica plazo ni costo",
    url: "https://www.grupomoyasrl.com/?idpag=2959",
  },
  {
    type: "press",
    domain: "Primera Edición",
    date: "08.05.2023",
    title: "Lanzamiento de Costa Arena",
    insight: "Atribuye el proyecto a Celia Kozachik y Grupo Moya y describe 70 unidades funcionales, cocheras, amenities y locales.",
    reading: "Cobertura de lanzamiento · obliga a precisar el rol económico de Garupá Propiedades",
    url: "https://www.primeraedicion.com.ar/nota/100700108/el-condominio-mas-vanguardista-e-innovador-del-mercado-regional-ya-esta-en-marcha/",
  },
  {
    type: "self",
    domain: "Garupá Propiedades",
    date: "Página histórica",
    title: "Expansión hacia Candelaria",
    insight: "Las páginas de Haras de Candelaria y Altos de Candelaria muestran una huella comercial fuera del núcleo de Garupá.",
    reading: "Fuente propia · la presencia de la página no prueba stock ni ingresos actuales",
    url: "https://garupapropiedades.com/altos-de-candelaria/",
  },
];

const typeLabels = {
  official: "Oficial",
  commercial: "Informe comercial",
  self: "Fuente propia",
  press: "Prensa / entrevista",
  complaint: "Denuncia / controversia",
};

const mapPoints = [
  { id: "office", region: "core", type: "current", label: "Sede de Garupá Propiedades", note: "Colectora RN 12, km 10,5.", query: "Garupá Propiedades, Garupá, Misiones", lat: -27.4541632, lon: -55.8600091 },
  { id: "lomas-sol", region: "core", type: "current", label: "Lomas del Sol", note: "Loteo sobre Av. Las Américas.", query: "Lomas del Sol, Garupá, Misiones", lat: -27.478973, lon: -55.834868 },
  { id: "santa-helena", region: "core", type: "current", label: "Santa Helena", note: "Loteo próximo a RN 105.", query: "Santa Helena, Garupá, Misiones", lat: -27.4663929, lon: -55.8627189 },
  { id: "don-santiago", region: "core", type: "current", label: "Don Santiago / Las Américas", note: "Corredor RN 105, Las Américas y By-Pass.", query: "Don Santiago, Garupá, Misiones", lat: -27.468019, lon: -55.858233 },
  { id: "las-flores", region: "core", type: "current", label: "Las Flores", note: "Alberto Roth, a 300 metros de RN 12.", query: "Alberto Roth, Garupá, Misiones", lat: -27.450282, lon: -55.863579 },
  { id: "altos-fatima", region: "core", type: "current", label: "Altos de Fátima", note: "Loteo próximo a los corredores comerciales del oeste.", query: "Altos de Fátima, Garupá, Misiones", lat: -27.442224, lon: -55.879564 },
  { id: "maria-dominga", region: "core", type: "current", label: "María Dominga", note: "Zona del By-Pass, a 1.000 metros de RN 105.", query: "María Dominga, Garupá, Misiones", lat: -27.458865, lon: -55.877214 },
  { id: "don-dario", region: "coast", type: "current", label: "Don Darío / corredor del nuevo edificio", note: "Loteo costero y expansión vertical sobre Acceso Sur.", query: "Don Darío, Garupá, Misiones", lat: -27.449173, lon: -55.847875 },
  { id: "costa-arena", region: "coast", type: "current", label: "Condominio Costa Arena", note: "Fideicomiso inmobiliario cofirmado con Grupo Moya.", query: "Costa Arena, Garupá, Misiones", lat: -27.444404, lon: -55.849102 },
  { id: "altos-anahi", region: "core", type: "legacy", label: "Altos de Anahí", note: "Página histórica aún accesible; estado comercial no verificado.", query: "Altos de Anahí, Garupá, Misiones", lat: -27.477377, lon: -55.833694 },
  { id: "30-viviendas", region: "core", type: "legacy", label: "30 Viviendas", note: "Página histórica aún accesible; estado comercial no verificado.", query: "30 Viviendas, Garupá, Misiones", lat: -27.4773687, lon: -55.8396741 },
  { id: "haras-candelaria", region: "east", type: "legacy", label: "Haras de Candelaria", note: "Huella comercial histórica fuera de Garupá.", query: "Haras de Candelaria, Misiones", lat: -27.469342, lon: -55.772602 },
  { id: "altos-candelaria", region: "east", type: "legacy", label: "Altos de Candelaria", note: "Barrio privado con lotes desde 800 m²; estado actual no verificado.", query: "Altos de Candelaria, Misiones", lat: -27.492999, lon: -55.769349 },
  { id: "municipio", region: "risk", type: "risk", label: "Municipalidad de Garupá", note: "Decisiones sobre suelo, permisos, infraestructura y servicios.", query: "Municipalidad de Garupá, Misiones", lat: -27.4804411, lon: -55.8282478 },
  { id: "punta-alta", region: "risk", type: "risk", label: "Punta Alta · ubicación orientativa", note: "Zona del conflicto territorial difundido en 2022.", query: "Punta Alta, Garupá, Misiones", lat: -27.4623954, lon: -55.8244613 },
];

const mapRegions = {
  all: { label: "Huella territorial publicada", description: "Cartera actual, páginas históricas y puntos de decisión o controversia.", query: "Garupá, Misiones" },
  core: { label: "Núcleo RN 12 · RN 105 · Las Américas", description: "Concentración de loteos, sede comercial y planes de financiación de tierra.", query: "Ruta Nacional 12 y Ruta Provincial 105, Garupá, Misiones" },
  coast: { label: "Corredor Paraná · Acceso Sur", description: "Don Darío y Costa Arena expresan el salto desde loteos hacia construcción en altura.", query: "Acceso Sur, Garupá, Misiones" },
  east: { label: "Expansión histórica hacia Candelaria", description: "Haras y Altos de Candelaria muestran alcance fuera del núcleo; el estado comercial actual no fue verificado.", query: "Candelaria, Misiones" },
  risk: { label: "Interfaz negocio · decisión pública", description: "Municipalidad y Punta Alta muestran dónde permisos, suelo y controversias pueden transferirse a una alianza política.", query: "Garupá, Misiones" },
};

const sourceList = document.querySelector("[data-source-list]");
const filters = [...document.querySelectorAll("[data-filter]")];

document.querySelectorAll("[data-source-total]").forEach((node) => {
  node.textContent = String(sources.length);
});

filters.forEach((button) => {
  const filter = button.dataset.filter;
  const count = filter === "all" ? sources.length : sources.filter((source) => source.type === filter).length;
  let countNode = button.querySelector("span");
  if (!countNode) {
    countNode = document.createElement("span");
    button.append(countNode);
  }
  countNode.textContent = String(count);
});

function renderSources(filter = "all") {
  sourceList.replaceChildren();

  sources.forEach((source, index) => {
    if (filter !== "all" && source.type !== filter) return;

    const row = document.createElement("a");
    row.className = "source-row";
    row.href = source.url;
    row.target = "_blank";
    row.rel = "noreferrer";
    row.dataset.type = source.type;
    row.innerHTML = `
      <span class="source-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="source-domain">${source.domain}<span>${source.date}</span></span>
      <span class="source-title">
        <h3>${source.title}</h3>
        <span class="source-type">${typeLabels[source.type]}</span>
      </span>
      <span class="source-reading">
        <p>${source.insight}</p>
        <strong>${source.reading}</strong>
      </span>
      <span class="source-arrow" aria-hidden="true">↗</span>
    `;
    sourceList.append(row);
  });
}

renderSources();

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderSources(button.dataset.filter);
  });
});

const mapFrame = document.querySelector("[data-map-frame]");
const mapLabel = document.querySelector("[data-map-label]");
const mapDescription = document.querySelector("[data-map-description]");
const mapLink = document.querySelector("[data-map-link]");
const mapButtons = [...document.querySelectorAll("[data-map-region]")];
const projectMapButtons = [...document.querySelectorAll("[data-focus-map]")];
let leafletMap;
let mapLayer;

const markerColors = {
  current: "#cf6b51",
  legacy: "#78877b",
  risk: "#d13c3c",
};

function updateMapCopy(label, description, query) {
  mapLabel.textContent = label;
  mapDescription.textContent = description;
  mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function addMapPoint(point) {
  const marker = window.L.circleMarker([point.lat, point.lon], {
    radius: point.type === "risk" ? 8 : 7,
    color: "#f5efe4",
    weight: 2,
    fillColor: markerColors[point.type],
    fillOpacity: 0.96,
  }).addTo(mapLayer);
  marker.bindPopup(`<strong>${point.label}</strong><br>${point.note}`);
  marker.on("click", () => updateMapCopy(point.label, point.note, point.query));
  marker.pointId = point.id;
  return marker;
}

function renderMapRegion(regionKey = "all") {
  if (!leafletMap || !mapLayer) return;
  mapLayer.clearLayers();
  const points = regionKey === "all" ? mapPoints : mapPoints.filter((point) => point.region === regionKey);
  const markers = points.map(addMapPoint);
  if (markers.length === 1) {
    leafletMap.flyTo(markers[0].getLatLng(), 15, { duration: 0.65 });
  } else if (markers.length > 1) {
    leafletMap.fitBounds(window.L.featureGroup(markers).getBounds().pad(0.16), { animate: true, duration: 0.65 });
  }
  const region = mapRegions[regionKey];
  updateMapCopy(region.label, region.description, region.query);
}

function focusMapPoint(pointId) {
  const point = mapPoints.find((item) => item.id === pointId);
  if (!point || !leafletMap || !mapLayer) return;
  if (![...mapLayer.getLayers()].some((layer) => layer.pointId === point.id)) {
    renderMapRegion("all");
  }
  const marker = [...mapLayer.getLayers()].find((layer) => layer.pointId === point.id);
  if (!marker) return;
  mapButtons.forEach((item) => item.classList.remove("is-active"));
  leafletMap.flyTo([point.lat, point.lon], 15, { duration: 0.65 });
  marker.openPopup();
  updateMapCopy(point.label, point.note, point.query);
  document.querySelector("#mapa")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (window.L) {
  leafletMap = window.L.map(mapFrame, {
    zoomControl: true,
    scrollWheelZoom: false,
  }).setView([-27.465, -55.84], 13);

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap",
  }).addTo(leafletMap);

  mapLayer = window.L.layerGroup().addTo(leafletMap);
  renderMapRegion("all");
  window.setTimeout(() => leafletMap.invalidateSize(), 80);
} else {
  mapFrame.textContent = "El mapa necesita conexión a internet para cargar.";
  mapFrame.classList.add("map-fallback");
}

mapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    mapButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMapRegion(button.dataset.mapRegion);
  });
});

projectMapButtons.forEach((button) => {
  button.addEventListener("click", () => focusMapPoint(button.dataset.focusMap));
});

const radarAxes = [
  { label: "Arraigo|territorial", value: 4.5 },
  { label: "Capacidad|comercial", value: 4.2 },
  { label: "Ejecución|declarada", value: 3.8 },
  { label: "Red|institucional", value: 4.0 },
  { label: "Solvencia|verificada", value: 2.0 },
  { label: "Transparencia|documental", value: 2.3 },
  { label: "Compatibilidad|narrativa", value: 2.1 },
  { label: "Complementariedad|con Fernando", value: 2.7 },
];

const radar = document.querySelector("[data-radar]");

if (radar) {
  const ns = "http://www.w3.org/2000/svg";
  const center = { x: 260, y: 235 };
  const radius = 150;
  const labelRadius = 205;
  const pointAt = (index, ratio, targetRadius = radius) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / radarAxes.length;
    return [center.x + Math.cos(angle) * targetRadius * ratio, center.y + Math.sin(angle) * targetRadius * ratio];
  };
  const polygonPoints = (ratio) => radarAxes.map((_, index) => pointAt(index, ratio).join(",")).join(" ");
  const grid = radar.querySelector("[data-radar-grid]");

  for (let level = 1; level <= 5; level += 1) {
    const polygon = document.createElementNS(ns, "polygon");
    polygon.setAttribute("points", polygonPoints(level / 5));
    polygon.setAttribute("class", "radar-ring");
    grid.append(polygon);
  }

  radarAxes.forEach((axis, index) => {
    const [x, y] = pointAt(index, 1);
    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", String(center.x));
    line.setAttribute("y1", String(center.y));
    line.setAttribute("x2", String(x));
    line.setAttribute("y2", String(y));
    line.setAttribute("class", "radar-axis");
    grid.append(line);

    const [labelX, labelY] = pointAt(index, 1, labelRadius);
    const text = document.createElementNS(ns, "text");
    text.setAttribute("x", String(labelX));
    text.setAttribute("y", String(labelY));
    text.setAttribute("text-anchor", Math.abs(labelX - center.x) < 20 ? "middle" : labelX > center.x ? "start" : "end");
    axis.label.split("|").forEach((part, partIndex) => {
      const tspan = document.createElementNS(ns, "tspan");
      tspan.setAttribute("x", String(labelX));
      tspan.setAttribute("dy", partIndex === 0 ? "0" : "14");
      tspan.textContent = part;
      text.append(tspan);
    });
    const score = document.createElementNS(ns, "tspan");
    score.setAttribute("x", String(labelX));
    score.setAttribute("dy", "15");
    score.setAttribute("class", "radar-label-score");
    score.textContent = axis.value.toFixed(1).replace(".", ",");
    text.append(score);
    radar.querySelector("[data-radar-labels]").append(text);
  });

  const valuePoints = radarAxes.map((axis, index) => pointAt(index, axis.value / 5));
  const pointString = valuePoints.map((point) => point.join(",")).join(" ");
  radar.querySelector("[data-radar-area]").setAttribute("points", pointString);
  radar.querySelector("[data-radar-line]").setAttribute("points", `${pointString} ${valuePoints[0].join(",")}`);

  valuePoints.forEach(([x, y]) => {
    const circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", String(x));
    circle.setAttribute("cy", String(y));
    circle.setAttribute("r", "4.5");
    radar.querySelector("[data-radar-dots]").append(circle);
  });
}

document.querySelector("[data-print]").addEventListener("click", () => window.print());

const progressBar = document.querySelector(".reading-progress span");
let progressTicking = false;

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  progressTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (progressTicking) return;
    progressTicking = true;
    requestAnimationFrame(updateProgress);
  },
  { passive: true },
);

updateProgress();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = [...document.querySelectorAll(".reveal")];

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5%" },
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
    observer.observe(item);
  });
}
