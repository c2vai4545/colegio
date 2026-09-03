/* ============================================================
   Colegio Delmira Agustini - Script principal
   Inyección de datos dinámicos y funcionalidades (slider,
   carrusel, navbar, formulario, WhatsApp)
   ============================================================ */

'use strict';

/* ============================================================
   Objeto con los datos del colegio
   Toda la información editable se centraliza aquí.
   ============================================================ */
const schoolData = {
  nombre: "Colegio Delmira Agustini",
  eslogan: "Educación bilingüe que forma mentes brillantes y corazones generosos",
  direccion: "Bulevar Artigas 3062, Montevideo, Uruguay",
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
    { src: 'campus.jpeg', title: 'Educación bilingüe de excelencia', subtitle: 'Inglés intensivo desde los 3 años con certificaciones internacionales' },
    { src: 'campus2.jpeg', title: 'Acompañamos el desarrollo integral', subtitle: 'Deporte, arte, música y valores en un ambiente seguro y estimulante' },
    { src: 'campus3.jpeg', title: 'Comunidad educativa comprometida', subtitle: 'Docentes capacitados y familias involucradas en el proceso de aprendizaje' }
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

/* ============================================================
   Utilidades de referencia a elementos del DOM
   Se ejecuta tras cargar el DOM para asegurar disponibilidad.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  inicializarPagina();
});

/* ============================================================
   Inicialización general de la página
   Orquesta todas las funciones de inyección y comportamiento.
   ============================================================ */
function inicializarPagina() {
  inyectarDatosGenerales();
  inyectarNombreColegio();
  inyectarSlider();
  inyectarNiveles();
  inyectarBeneficios();
  inyectarProgramaBilingue();
  inyectarActividades();
  inyectarTestimonios();
  inyectarContacto();
  inyectarFooter();
  configurarNavbar();
  configurarFormulario();
  configurarWhatsApp();
  configurarMenuMovil();
  configurarSlider();
  configurarTestimonios();
}

/* ============================================================
   Inyección de datos generales (quién eres + quiénes somos)
   ============================================================ */
function inyectarDatosGenerales() {
  document.getElementById('qs-fundacion').textContent = schoolData.fundacion;
  document.getElementById('qs-nombre').textContent = schoolData.nombre;
}

/* ============================================================
   Inyección del nombre del colegio en la navbar y footer
   ============================================================ */
function inyectarNombreColegio() {
  const nombre = schoolData.nombre;
  document.getElementById('nav-nombre').textContent = nombre;
  document.getElementById('footer-nombre').textContent = nombre;
  document.getElementById('footer-bottom-nombre').textContent = nombre;
  document.getElementById('footer-eslogan').textContent = schoolData.eslogan;
}

/* ============================================================
   Inyección del slider del hero
   Crea un slide por cada imagen de schoolData.sliderImages.
   ============================================================ */
function inyectarSlider() {
  const contenedor = document.getElementById('hero-slides');
  const dots = document.getElementById('hero-dots');

  // Construir cada slide
  schoolData.sliderImages.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = 'hero__slide';
    if (index === 0) slide.classList.add('hero__slide--active');

    // Imagen de fondo: foto real del campus
    const bg = document.createElement('div');
    bg.className = 'hero__slide-bg';
    bg.style.backgroundImage = `url('./assets/images/${item.src}')`;
    bg.setAttribute('aria-label', `Foto: ${item.title}`);
    slide.appendChild(bg);
    contenedor.appendChild(slide);

    // Dots indicadores
    const dot = document.createElement('button');
    dot.className = 'hero__dot';
    if (index === 0) dot.classList.add('hero__dot--active');
    dot.setAttribute('aria-label', `Ir al slide ${index + 1}`);
    dot.dataset.slide = String(index);
    dots.appendChild(dot);
  });

  // Mostrar contenido del primer slide
  actualizarContenidoHero(0);
}

/* ============================================================
   Actualiza el título y subtítulo visibles del hero
   ============================================================ */
function actualizarContenidoHero(index) {
  const item = schoolData.sliderImages[index];
  document.getElementById('hero-title').textContent = item.title;
  document.getElementById('hero-subtitle').textContent = item.subtitle;
}

/* ============================================================
   Configuración del slider (autoplay, flechas, dots)
   ============================================================ */
function configurarSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  let indiceActual = 0;
  let intervalo;

  // Muestra un slide determinado y sincroniza dots + contenido
  function mostrarSlide(nuevoIndice) {
    slides[indiceActual].classList.remove('hero__slide--active');
    dots[indiceActual].classList.remove('hero__dot--active');

    indiceActual = (nuevoIndice + slides.length) % slides.length;

    slides[indiceActual].classList.add('hero__slide--active');
    dots[indiceActual].classList.add('hero__dot--active');
    actualizarContenidoHero(indiceActual);
  }

  // Autoplay: rota cada 6 segundos
  function iniciarAutoplay() {
    intervalo = setInterval(() => mostrarSlide(indiceActual + 1), 6000);
  }
  function detenerAutoplay() {
    clearInterval(intervalo);
  }

  // Avanza o retrocede un slide y reinicia el autoplay
  function navegarSlide(delta) {
    detenerAutoplay();
    mostrarSlide(indiceActual + delta);
    iniciarAutoplay();
  }

  // Evento del botón "anterior"
  document.getElementById('hero-prev').addEventListener('click', () => {
    navegarSlide(-1);
  });

  // Evento del botón "siguiente"
  document.getElementById('hero-next').addEventListener('click', () => {
    navegarSlide(1);
  });

  // Eventos de los dots
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      detenerAutoplay();
      mostrarSlide(Number(dot.dataset.slide));
      iniciarAutoplay();
    });
  });

  iniciarAutoplay();
}

/* ============================================================
   Inyección de niveles educativos
   Construye las 3 tarjetas desde schoolData.niveles.
   ============================================================ */
function inyectarNiveles() {
  const grid = document.getElementById('niveles-grid');

  schoolData.niveles.forEach((nivel) => {
    const card = document.createElement('article');
    card.className = 'nivel-card';
    card.innerHTML = `
      <i class="fas ${nivel.icono} nivel-card__icon"></i>
      <h3 class="nivel-card__nombre">${nivel.nombre}</h3>
      <p class="nivel-card__edad">${nivel.edad}</p>
      <p class="nivel-card__descripcion">${obtenerDescripcionNivel(nivel.nombre)}</p>
      <a href="#contacto" class="btn btn--level">Consultar por este nivel</a>
    `;
    grid.appendChild(card);
  });
}

// Descripciones fijas por nivel (según guía)
function obtenerDescripcionNivel(nombre) {
  const descripciones = {
    'Educación Inicial': 'Educación inicial centrada en el juego, la exploración y los primeros vínculos con el inglés.',
    'Primaria': 'Primaria con énfasis en lectoescritura, pensamiento matemático y proyecto bilingüe.',
    'Secundaria': 'Secundaria con orientación académica, preparación para universidad y certificaciones internacionales.'
  };
  return descripciones[nombre] || '';
}

/* ============================================================
   Inyección de los beneficios (propuesta educativa)
   Construye las 6 tarjetas desde schoolData.beneficios.
   ============================================================ */
function inyectarBeneficios() {
  const grid = document.getElementById('beneficios-grid');

  schoolData.beneficios.forEach((beneficio) => {
    const card = document.createElement('article');
    card.className = 'beneficio-card';
    card.innerHTML = `
      <div class="beneficio-card__icon"><i class="fas ${beneficio.icono}"></i></div>
      <h3 class="beneficio-card__titulo">${beneficio.titulo}</h3>
      <p class="beneficio-card__descripcion">${beneficio.descripcion}</p>
    `;
    grid.appendChild(card);
  });
}

/* ============================================================
   Inyección del programa bilingüe (descripción + puntos)
   ============================================================ */
function inyectarProgramaBilingue() {
  document.getElementById('programa-descripcion').textContent = schoolData.programaBilingue.descripcion;

  const lista = document.getElementById('programa-lista');
  schoolData.programaBilingue.puntos.forEach((punto) => {
    const li = document.createElement('li');
    li.textContent = punto;
    lista.appendChild(li);
  });
}

/* ============================================================
   Inyección de actividades y talleres
   Construye las 4 tarjetas desde schoolData.actividades.
   ============================================================ */
function inyectarActividades() {
  const grid = document.getElementById('actividades-grid');

  schoolData.actividades.forEach((actividad) => {
    const card = document.createElement('article');
    card.className = 'actividad-card';
    card.innerHTML = `
      <div class="actividad-card__icon"><i class="fas fa-star"></i></div>
      <h3 class="actividad-card__nombre">${actividad.nombre}</h3>
      <p class="actividad-card__descripcion">${actividad.descripcion}</p>
    `;
    grid.appendChild(card);
  });
}

/* ============================================================
   Inyección de testimonios y configuración del carrusel
   3 cards visibles en desktop, 1 en mobile.
   ============================================================ */
function inyectarTestimonios() {
  const carousel = document.getElementById('testimonios-carousel');

  schoolData.testimonios.forEach((testimonio) => {
    const card = document.createElement('article');
    card.className = 'testimonio-card';
    card.innerHTML = `
      <div class="testimonio-card__avatar"><i class="fas fa-user"></i></div>
      <h3 class="testimonio-card__nombre">${testimonio.nombre}</h3>
      <p class="testimonio-card__rol">${testimonio.rol}</p>
      <p class="testimonio-card__texto">"${testimonio.texto}"</p>
    `;
    carousel.appendChild(card);
  });

  // Construir dots según cantidad de testimonios
  const dotsContainer = document.getElementById('testimonios-dots');
  schoolData.testimonios.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'testimonios__dot';
    if (index === 0) dot.classList.add('testimonios__dot--active');
    dot.setAttribute('aria-label', `Testimonio ${index + 1}`);
    dot.dataset.tIndex = String(index);
    dotsContainer.appendChild(dot);
  });
}

/* ============================================================
   Configuración del carrusel de testimonios
   → En desktop (<1024px se muestran 3, se usa autoplay con
     desplazamiento; en mobile se muestra 1).
   Para simplicidad y robustez, en pantallas grandes se
   recorren índices; en mobile el CSS muestra 1 columna.
   ============================================================ */
function configurarTestimonios() {
  const cards = document.querySelectorAll('.testimonio-card');
  const dots = document.querySelectorAll('.testimonios__dot');
  let indiceActual = 0;
  let intervalo;
  const carousel = document.getElementById('testimonios-carousel');
  const total = cards.length;

  // Calcula cuántos cards deben ser visibles según el ancho
  function obtenerVisibles() {
    return window.innerWidth <= 767 ? 1 : 3;
  }

  // Mantiene activo el dot correspondiente y resalta el grupo visible
  function actualizarVista() {
    const visibles = obtenerVisibles();
    // Aplicar la posición del grupo si hay más cards que los visibles
    if (total <= visibles) {
      // Todos visibles; solo se resalta el card activo para referencia
      cards.forEach((c, i) => c.classList.toggle('testimonio-card--active', i === indiceActual % total));
    } else {
      carousel.style.transform = `translateX(-${indiceActual * (100 / visibles)}%)`;
    }

    dots.forEach((d, i) => d.classList.toggle('testimonios__dot--active', i === indiceActual % total));
  }

  // Autoplay con pausa al hover
  function iniciarAutoplay() {
    intervalo = setInterval(() => {
      indiceActual = (indiceActual + 1) % total;
      actualizarVista();
    }, 5000);
  }
  function detenerAutoplay() {
    clearInterval(intervalo);
  }

  document.getElementById('testimonio-prev').addEventListener('click', () => {
    detenerAutoplay();
    indiceActual = (indiceActual - 1 + total) % total;
    actualizarVista();
    iniciarAutoplay();
  });

  document.getElementById('testimonio-next').addEventListener('click', () => {
    detenerAutoplay();
    indiceActual = (indiceActual + 1) % total;
    actualizarVista();
    iniciarAutoplay();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      detenerAutoplay();
      indiceActual = Number(dot.dataset.tIndex);
      actualizarVista();
      iniciarAutoplay();
    });
  });

  // Pausa al pasar el mouse sobre la sección de comunidad
  const seccion = document.getElementById('comunidad');
  seccion.addEventListener('mouseenter', detenerAutoplay);
  seccion.addEventListener('mouseleave', iniciarAutoplay);

  // Recalcular la vista al redimensionar
  window.addEventListener('resize', actualizarVista);

  actualizarVista();
  iniciarAutoplay();
}

/* ============================================================
   Inyección de datos de contacto (formulario info, mapas, badges)
   ============================================================ */
function inyectarContacto() {
  document.getElementById('contacto-direccion').textContent = schoolData.direccion;

  const tel = document.getElementById('contacto-telefono');
  tel.textContent = schoolData.telefono;
  tel.href = `tel:${schoolData.telefono.replace(/\s/g, '')}`;

  const email = document.getElementById('contacto-email');
  email.textContent = schoolData.email;
  email.href = `mailto:${schoolData.email}`;

  document.getElementById('contacto-horarios').textContent = schoolData.horarios;
}

/* ============================================================
   Inyección de datos en el footer
   ============================================================ */
function inyectarFooter() {
  document.getElementById('footer-direccion').textContent = schoolData.direccion;
  document.getElementById('footer-telefono').textContent = schoolData.telefono;
  document.getElementById('footer-email').textContent = schoolData.email;

  // Año dinámico
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

/* ============================================================
   Configuración del navbar (scroll + menú móvil)
   Al hacer scroll cambia de fondo blanco a azul oscuro.
   ============================================================ */
function configurarNavbar() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
}

/* ============================================================
   Configuración del menú hamburguesa (mobile)
   ============================================================ */
function configurarMenuMovil() {
  const toggle = document.getElementById('navbar-toggle');
  const list = document.getElementById('navbar-list');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const abierto = list.classList.toggle('navbar__list--open');
    toggle.setAttribute('aria-expanded', String(abierto));
  });

  // Cerrar el menú al hacer clic en un enlace
  list.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      list.classList.remove('navbar__list--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Cerrar al hacer clic fuera del menú
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#navbar-menu') && !e.target.closest('#navbar-toggle')) {
      list.classList.remove('navbar__list--open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ============================================================
   Configuración del formulario de contacto
   Muestra confirmación sin recargar la página.
   ============================================================ */
function configurarFormulario() {
  const form = document.getElementById('contacto-form');
  const confirmacion = document.getElementById('contacto-confirm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmacion.hidden = false;
    form.reset();
    // Ocultar el mensaje después de 6 segundos
    setTimeout(() => { confirmacion.hidden = true; }, 6000);
  });
}

/* ============================================================
   Configuración del botón flotante de WhatsApp
   Abre el enlace en nueva pestaña.
   ============================================================ */
function configurarWhatsApp() {
  const btn = document.getElementById('whatsapp-btn');
  btn.href = schoolData.whatsappURL;
}