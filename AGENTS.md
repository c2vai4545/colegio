# AGENTS.md – Colegio Delmira Agustini (Demo)

## Descripción del proyecto
Página web One Page demo para el Colegio Delmira Agustini, institución educativa bilingüe ubicada en Brazo Oriental, Montevideo. Es una demo personalizada para presentar a la institución. El diseño debe transmitir prestigio, calidez, modernidad y excelencia académica.

## Stack técnico
- HTML semántico
- CSS vanilla (variables en :root)
- JavaScript vanilla (datos en objeto companyData)
- Sin frameworks ni librerías externas
- Dependencias permitidas: Font Awesome (CDN), Google Fonts (CDN), Google Maps (iframe)

## Estructura de archivos
/
├── index.html
├── AGENTS.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    └── images/
        └── (fotos del colegio, subidas posteriormente)

## Datos del colegio (variables JavaScript en /assets/js/script.js)
Crear objeto `schoolData` con la siguiente estructura. Inyectar todos los datos dinámicos desde JS, no hardcodear en HTML.

const schoolData = {
  nombre: "Colegio Delmira Agustini",
  eslogan: "Educación bilingüe que forma mentes brillantes y corazones generosos",
  direccion: "Av. General Flores 1234, Brazo Oriental, Montevideo",
  telefono: "+598 2200 0000",
  email: "info@colegiodelmira.edu.uy",
  whatsappURL: "https://wa.me/59899000000?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20el%20Colegio%20Delmira%20Agustini",
  horarios: "Lunes a viernes de 8:00 a 17:30",
  fundacion: 1985,
  niveles: [
    { nombre: "Educación Inicial", edad: "2 a 5 años", icono: "fa-child" },
    { nombre: "Primaria", edad: "6 a 11 años", icono: "fa-book" },
    { nombre: "Secundaria", edad: "12 a 17 años", icono: "fa-graduation-cap" }
  ],
  sliderImages: [
    { src: 'placeholder1.jpg', title: 'Educación bilingüe de excelencia', subtitle: 'Inglés intensivo desde los 3 años con certificaciones internacionales' },
    { src: 'placeholder2.jpg', title: 'Acompañamos el desarrollo integral', subtitle: 'Deporte, arte, música y valores en un ambiente seguro y estimulante' },
    { src: 'placeholder3.jpg', title: 'Comunidad educativa comprometida', subtitle: 'Docentes capacitados y familias involucradas en el proceso de aprendizaje' }
  ],
  programaBilingue: {
    descripcion: "Programa de inmersión en inglés desde Educación Inicial. Preparación para exámenes internacionales de Cambridge (Starters, Movers, Flyers, PET, FCE).",
    puntos: [
      "10 horas semanales de inglés desde los 3 años",
      "Docentes nativos y bilingües certificados",
      "Preparación para exámenes de Cambridge",
      "Proyectos interdisciplinarios en inglés",
      "Certificación internacional al egresar"
    ]
  },
  beneficios: [
    { titulo: "Educación personalizada", descripcion: "Grupos reducidos con atención individual a cada estudiante.", icono: "fa-user-graduate" },
    { titulo: "Bilingüismo real", descripcion: "Inglés todos los días, no solo como materia sino como herramienta.", icono: "fa-language" },
    { titulo: "Tecnología educativa", descripcion: "Aulas digitales, robótica y pensamiento computacional desde primaria.", icono: "fa-laptop" },
    { titulo: "Deportes y arte", descripcion: "Talleres de música, plástica, teatro, fútbol, handball y atletismo.", icono: "fa-palette" },
    { titulo: "Acompañamiento psicopedagógico", descripcion: "Equipo de psicólogas y psicopedagogas para cada nivel.", icono: "fa-heart" },
    { titulo: "Seguridad y contención", descripcion: "Protocolos de seguridad, personal capacitado y seguimiento diario.", icono: "fa-shield-alt" }
  ],
  testimonios: [
    { nombre: "María González", rol: "Madre de alumno de Primaria", texto: "Elegimos el Delmira por su nivel académico y el ambiente cálido. Nuestro hijo va feliz al colegio y habla inglés con naturalidad." },
    { nombre: "Jorge Pérez", rol: "Padre de alumna de Secundaria", texto: "El acompañamiento personalizado es real. Conocen a cada estudiante por su nombre y saben qué necesita." },
    { nombre: "Laura Rodríguez", rol: "Exalumna generación 2015", texto: "Salí con un nivel de inglés que me permitió estudiar en el exterior sin dificultad. El colegio me dio herramientas para la vida." }
  ],
  actividades: [
    { nombre: "Robótica y programación", descripcion: "Talleres desde los 6 años con LEGO Education y Scratch." },
    { nombre: "Música y coro", descripcion: "Ensayos semanales y presentaciones en eventos institucionales." },
    { nombre: "Deportes", descripcion: "Fútbol, handball, atletismo y participación en torneos intercolegiales." },
    { nombre: "Teatro y expresión", descripcion: "Obra anual en inglés y español, trabajando creatividad y confianza." }
  ]
};

## Paleta de colores (variables CSS en :root)
--color-primary: #1B3A5C; (azul institucional)
--color-secondary: #D4AF37; (dorado)
--color-accent: #4A90D9; (celeste)
--color-white: #ffffff;
--color-light-bg: #F5F7FA;
--color-dark-text: #2C3E50;
--color-gray-text: #6B7A8D;
--color-footer: #0F2A44;
--font-heading: 'Playfair Display', serif;
--font-body: 'Montserrat', sans-serif;
--spacing-unit: 1rem;

## Tipografía
- Títulos y encabezados: Google Fonts 'Playfair Display' (serif elegante)
- Texto general: Google Fonts 'Montserrat' (sans-serif moderna)
- Iconos: Font Awesome CDN

## Estructura de la página (One Page, 7 secciones + navbar + footer)

### Navbar sticky
- Logo con texto "CDA" y nombre completo
- Enlaces: Inicio, Quiénes somos, Niveles, Propuesta, Comunidad, Contacto
- Menú hamburguesa en mobile
- Fondo blanco con sombra sutil, al hacer scroll cambia a fondo azul con texto blanco

### 1. Hero con slider automático
- 3 slides rotando cada 6 segundos con transición suave
- Imágenes de fondo (placeholders con gradiente azul oscuro semitransparente)
- Título principal en fuente Playfair Display
- Subtítulo y botón "Conocé más" (ancla a #quienes-somos)
- Flechas de navegación y dots indicadores
- Overlay con gradiente para legibilidad

### 2. Quiénes somos
- Título: "Una institución con historia y visión de futuro"
- Párrafo introductorio: Fundado en 1985, el Colegio Delmira Agustini es un referente en educación bilingüe en la zona de Brazo Oriental. Nuestra propuesta combina excelencia académica, formación en valores y un ambiente de cercanía donde cada estudiante es protagonista de su aprendizaje.
- Párrafo adicional: Creemos en una educación integral que desarrolle el pensamiento crítico, la creatividad y las habilidades socioemocionales. Contamos con un equipo docente en constante capacitación y una comunidad educativa comprometida y participativa.
- 3 tarjetas con estadísticas:
  - 35+ años de trayectoria
  - 500+ estudiantes
  - 95% de aprobación en exámenes internacionales
- Imagen placeholder del edificio o patio del colegio

### 3. Niveles educativos
- Título: "Acompañamos cada etapa del desarrollo"
- Grid de 3 tarjetas (una por nivel) con:
  - Icono representativo
  - Nombre del nivel
  - Rango de edades
  - Descripción breve: "Educación inicial centrada en el juego, la exploración y los primeros vínculos con el inglés." / "Primaria con énfasis en lectoescritura, pensamiento matemático y proyecto bilingüe." / "Secundaria con orientación académica, preparación para universidad y certificaciones internacionales."
- Botón "Consultar por este nivel" (ancla a contacto)

### 4. Propuesta educativa
- Título: "Lo que nos hace diferentes"
- Subtítulo: "Nuestra propuesta bilingüe y los pilares de nuestra educación"
- Grid de 6 tarjetas con beneficios (usar schoolData.beneficios)
- Banner destacado con fondo dorado: "Programa bilingüe certificado. Preparación para exámenes de Cambridge desde los 6 años."
- Listado de puntos del programa bilingüe (schoolData.programaBilingue.puntos)

### 5. Actividades y talleres
- Título: "Más que clases, experiencias"
- Grid de 4 tarjetas con actividades extracurriculares (schoolData.actividades)
- Texto: "Creemos que el aprendizaje trasciende el aula. Por eso ofrecemos una amplia variedad de talleres y actividades para desarrollar talentos y pasiones."

### 6. Comunidad (Testimonios)
- Título: "Lo que dicen nuestras familias"
- Carrusel de testimonios (3 cards visibles en desktop, 1 en mobile)
- Cada card con: foto placeholder circular, nombre, rol, texto del testimonio
- Navegación con flechas y dots
- Autoplay con pausa al hover

### 7. Contacto
- Título: "Visitanos y conocé el colegio"
- Texto: "Coordiná una visita guiada o solicitá información. Respondemos dentro de las 24 horas hábiles."
- Formulario con campos: Nombre, Email, Teléfono, Nivel de interés (select: Inicial/Primaria/Secundaria), Mensaje, botón "Enviar consulta"
- Al enviar: mostrar mensaje de confirmación sin recargar (JS)
- Mapa embebido de Google Maps con dirección del colegio (Brazo Oriental, Montevideo)
- Horarios y datos de contacto (usar schoolData)
- Badges de confianza: "Colegio habilitado por ANEP", "Exámenes internacionales Cambridge", "Grupos reducidos", "Educación personalizada"

### Footer
- Fondo azul oscuro (#0F2A44)
- Nombre del colegio y eslogan
- Enlaces rápidos a secciones
- Datos de contacto
- Redes sociales (iconos de Font Awesome)
- Crédito: "Demo creada por LangaSoft" con enlace a https://www.langasoft.uy
- Año dinámico

## Botón flotante de WhatsApp
- Fijo abajo a la derecha
- Icono de Font Awesome (fa-whatsapp)
- Animación sutil de pulso (escala 1.05 infinito)
- Al hacer clic: abre enlace directo a schoolData.whatsappURL en nueva pestaña
- Tooltip al hover: "¿Tenés dudas? Escribinos"

## Responsive
- Desktop (>1024px): navegación completa, grids de 3 columnas
- Tablet (768-1024px): grids de 2 columnas, nav simplificado
- Mobile (<768px): menú hamburguesa, grids de 1 columna, slider adaptado
- Placeholders de imagen se ajustan al ancho del contenedor

## Placeholders de imágenes
- Usar divs con fondo gris (#E0E0E0), bordes redondeados, ícono de Font Awesome y texto descriptivo
- Ejemplo: "Foto del edificio", "Foto de clase", "Foto de laboratorio", "Foto de patio", "Retrato de familia"
- Las fotos reales se cargarán después en /assets/images/
- Referenciar como /assets/images/nombre-archivo.jpg

## Convenciones de código
- Comentar cada sección del HTML con <!-- Sección: Nombre -->
- CSS organizado por secciones con comentarios claros
- Variables CSS en :root para colores, tipografías y espaciados
- JS con funciones nombradas y comentadas
- Nombres de clases en kebab-case
- Indentación de 2 espacios
- Archivos correctamente enlazados

## Entrega
- Código funcional al abrir index.html
- Sin errores de consola
- Legible, comentado y mantenible
- Listo para que el cliente cargue sus fotos y datos reales
- Respetar el tono profesional y cálido de una institución educativa de prestigio