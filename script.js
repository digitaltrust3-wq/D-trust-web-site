const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableElements = document.querySelectorAll("[data-i18n]");

const translations = {
  es: {
    navServices: "Servicios",
    navSolutions: "Soluciones",
    navProcess: "Proceso",
    navPlans: "Planes",
    navFaq: "FAQ",
    navQuote: "Cotizar",
    heroEyebrow: "Desarrollo web, software a medida y automatizacion",
    heroTitle: "Impulsamos negocios con tecnologia clara, segura y lista para crecer.",
    heroText: "Creamos paginas web corporativas, tiendas online, plataformas internas, portales de clientes, integraciones API y automatizaciones que reducen trabajo manual y mejoran la experiencia de tus usuarios.",
    heroPrimary: "Solicitar cotizacion",
    heroSecondary: "Explorar servicios",
    metricOne: "Tipos de soluciones digitales",
    metricTwo: "Dias para lanzar un MVP",
    metricThree: "Soporte, hosting y mejora continua",
    visualAutomation: "Automatizacion",
    visualSaved: "ahorradas por semana",
    visualPerformance: "Rendimiento digital",
    visualUptime: "Disponibilidad",
    visualMonitoring: "monitoreo activo",
    stripWeb: "Paginas Web",
    stripSoftware: "Software a Medida",
    stripStores: "Tiendas Online",
    stripApps: "Apps Web",
    stripAutomation: "Automatizacion",
    stripSupport: "Soporte Tecnico",
    whatEyebrow: "Que hacemos",
    whatTitle: "Convertimos ideas, procesos y necesidades de negocio en productos digitales funcionales.",
    whatTextOne: "Tu pagina web no deberia ser solo una vitrina. Debe explicar tu oferta, captar clientes, responder dudas, generar confianza y conectarse con las herramientas que ya usas.",
    whatTextTwo: "Por eso trabajamos cada proyecto con una vision completa: estrategia, diseno, desarrollo, contenido, seguridad, rendimiento, analitica y soporte posterior al lanzamiento.",
    servicesEyebrow: "Servicios",
    servicesTitle: "Un portafolio completo para operar y vender mejor en internet",
    servicesText: "Integramos los componentes clave para que tu empresa pueda tener presencia digital, automatizar tareas, atender clientes y escalar procesos.",
    serviceOneTitle: "Diseno y desarrollo de paginas web",
    serviceOneText: "Sitios corporativos, landing pages, blogs, paginas para servicios profesionales y sitios multi-seccion con enfoque comercial.",
    serviceTwoTitle: "Tiendas online y catalogos digitales",
    serviceTwoText: "Soluciones e-commerce para vender productos, recibir pedidos, mostrar catalogos y conectar pasarelas de pago.",
    serviceThreeTitle: "Software a medida",
    serviceThreeText: "Aplicaciones para administrar clientes, ventas, reservas, inventarios, reportes, usuarios y operaciones internas.",
    serviceFourTitle: "Automatizacion de procesos",
    serviceFourText: "Reducimos tareas repetitivas conectando formularios, hojas de calculo, correos, WhatsApp, CRM y herramientas de IA.",
    serviceFiveTitle: "Integraciones y APIs",
    serviceFiveText: "Conectamos plataformas externas para que tus sistemas compartan informacion sin depender de procesos manuales.",
    serviceSixTitle: "Hosting, seguridad y mantenimiento",
    serviceSixText: "Mantenemos tu web o software estable, actualizado, protegido y con soporte para nuevas mejoras.",
    solutionsEyebrow: "Soluciones por necesidad",
    solutionsTitle: "Construimos herramientas para cada etapa de tu negocio",
    solutionOneTitle: "Quiero conseguir mas clientes",
    solutionOneText: "Landing pages, SEO basico, formularios, embudos de contacto, WhatsApp, analitica y contenido orientado a conversion.",
    solutionTwoTitle: "Quiero ordenar mi operacion",
    solutionTwoText: "CRM, reservas, inventario, tableros internos, control de usuarios, reportes y flujos de aprobacion.",
    solutionThreeTitle: "Quiero vender online",
    solutionThreeText: "Tiendas virtuales, catalogos, pagos, gestion de pedidos, cupones, correos automaticos y seguimiento de ventas.",
    solutionFourTitle: "Quiero automatizar tareas",
    solutionFourText: "Integraciones con Google Sheets, correo, WhatsApp, formularios, bases de datos, IA y sistemas existentes.",
    diffEyebrow: "Diferenciales",
    diffTitle: "No solo programamos: ayudamos a que la solucion tenga sentido de negocio.",
    diffText: "Antes de escribir codigo revisamos objetivos, usuarios, contenido, procesos, datos, riesgos y prioridades. Asi evitamos construir funciones innecesarias y enfocamos el presupuesto en lo que realmente genera valor.",
    featureOneTitle: "Arquitectura escalable",
    featureOneText: "Tu proyecto queda preparado para crecer en usuarios, modulos y funcionalidades.",
    featureTwoTitle: "Experiencia de usuario",
    featureTwoText: "Interfaces claras, rapidas y faciles de usar desde celular o escritorio.",
    featureThreeTitle: "Medicion y mejora",
    featureThreeText: "Instalamos analitica, eventos y puntos de seguimiento para tomar decisiones.",
    featureFourTitle: "Acompanamiento tecnico",
    featureFourText: "Te explicamos el proceso, los costos y las decisiones importantes sin lenguaje complicado.",
    industriesEyebrow: "Sectores",
    industriesTitle: "Soluciones para empresas, emprendedores y equipos en crecimiento",
    processEyebrow: "Proceso de trabajo",
    processTitle: "Un metodo simple para pasar de idea a lanzamiento",
    processOneTitle: "Diagnostico",
    processOneText: "Entendemos tu negocio, objetivos, clientes, competencia, procesos actuales y funcionalidades necesarias.",
    processTwoTitle: "Propuesta",
    processTwoText: "Definimos alcance, tiempos, entregables, presupuesto, tecnologia y prioridades para la primera version.",
    processThreeTitle: "Diseno",
    processThreeText: "Organizamos estructura, secciones, pantallas, contenido, experiencia de usuario y rutas de conversion.",
    processFourTitle: "Desarrollo",
    processFourText: "Construimos el sitio o sistema por etapas, con revisiones claras y pruebas funcionales.",
    processFiveTitle: "Lanzamiento",
    processFiveText: "Publicamos en dominio y hosting, configuramos seguridad, analitica, formularios y correos.",
    processSixTitle: "Soporte",
    processSixText: "Acompanamos mejoras, mantenimiento, actualizaciones, nuevas integraciones y soporte mensual.",
    techEyebrow: "Tecnologias",
    techTitle: "Elegimos la tecnologia segun el objetivo, no por moda",
    techText: "Podemos trabajar con herramientas modernas o plataformas administrables segun tu presupuesto, equipo y necesidad de mantenimiento.",
    plansEyebrow: "Planes de referencia",
    plansTitle: "Elige un punto de partida y lo ajustamos a tu proyecto",
    plansText: "Los valores son orientativos. Cada cotizacion depende del alcance, numero de pantallas, integraciones, contenido y nivel de soporte.",
    caseEyebrow: "Caso de uso",
    caseTitle: "De operacion manual a sistema conectado",
    caseText: "Un negocio con pedidos por WhatsApp, inventario en hojas de calculo y reportes manuales puede pasar a una plataforma con catalogo, formulario de pedido, panel interno, alertas automaticas y reportes diarios.",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Respuestas rapidas antes de iniciar",
    faqOneTitle: "Cuanto tarda desarrollar una pagina web?",
    faqOneText: "Una web corporativa suele tardar entre 2 y 4 semanas, dependiendo del contenido, numero de secciones, revisiones y configuraciones necesarias.",
    faqTwoTitle: "Puedo administrar el contenido despues?",
    faqTwoText: "Si. Podemos construir el sitio en una plataforma administrable o dejar una estructura facil de actualizar segun tu equipo y presupuesto.",
    faqThreeTitle: "Tambien ofrecen dominio y hosting?",
    faqThreeText: "Podemos ayudarte a configurar dominio, hosting, correo corporativo, certificado SSL, backups, analitica y herramientas de contacto.",
    faqFourTitle: "Que necesito para cotizar mi proyecto?",
    faqFourText: "Una descripcion del negocio, objetivo principal, secciones o funcionalidades deseadas, referencias visuales y fecha ideal de lanzamiento.",
    contactEyebrow: "Contacto",
    contactTitle: "Cuentanos que quieres construir",
    contactText: "Completa el formulario con la mayor informacion posible. Si aun no tienes claro el alcance, podemos iniciar con una llamada de diagnostico y convertir tu idea en una propuesta organizada.",
    contactWhatsapp: "WhatsApp: +57 318 428 9661",
    contactCall: "Llamar: +57 318 428 9661",
    footerText: "Desarrollo web, software, automatizacion y soporte tecnico."
  },
  en: {
    navServices: "Services",
    navSolutions: "Solutions",
    navProcess: "Process",
    navPlans: "Plans",
    navFaq: "FAQ",
    navQuote: "Quote",
    heroEyebrow: "Web development, custom software and automation",
    heroTitle: "We power businesses with clear, secure technology built to grow.",
    heroText: "We create corporate websites, online stores, internal platforms, client portals, API integrations and automations that reduce manual work and improve your users' experience.",
    heroPrimary: "Request a quote",
    heroSecondary: "Explore services",
    metricOne: "Types of digital solutions",
    metricTwo: "Days to launch an MVP",
    metricThree: "Support, hosting and continuous improvement",
    visualAutomation: "Automation",
    visualSaved: "saved per week",
    visualPerformance: "Digital performance",
    visualUptime: "Uptime",
    visualMonitoring: "active monitoring",
    stripWeb: "Websites",
    stripSoftware: "Custom Software",
    stripStores: "Online Stores",
    stripApps: "Web Apps",
    stripAutomation: "Automation",
    stripSupport: "Technical Support",
    whatEyebrow: "What we do",
    whatTitle: "We turn ideas, processes and business needs into functional digital products.",
    whatTextOne: "Your website should be more than a showcase. It should explain your offer, capture leads, answer questions, build trust and connect with the tools you already use.",
    whatTextTwo: "That is why every project includes strategy, design, development, content, security, performance, analytics and post-launch support.",
    servicesEyebrow: "Services",
    servicesTitle: "A complete portfolio to operate and sell better online",
    servicesText: "We integrate the key components your company needs to build a digital presence, automate tasks, support customers and scale processes.",
    serviceOneTitle: "Website design and development",
    serviceOneText: "Corporate sites, landing pages, blogs, professional service pages and multi-section websites with a commercial focus.",
    serviceTwoTitle: "Online stores and digital catalogs",
    serviceTwoText: "E-commerce solutions to sell products, receive orders, display catalogs and connect payment gateways.",
    serviceThreeTitle: "Custom software",
    serviceThreeText: "Applications to manage clients, sales, bookings, inventory, reports, users and internal operations.",
    serviceFourTitle: "Process automation",
    serviceFourText: "We reduce repetitive tasks by connecting forms, spreadsheets, email, WhatsApp, CRM and AI tools.",
    serviceFiveTitle: "Integrations and APIs",
    serviceFiveText: "We connect external platforms so your systems can share information without manual work.",
    serviceSixTitle: "Hosting, security and maintenance",
    serviceSixText: "We keep your website or software stable, updated, protected and ready for new improvements.",
    solutionsEyebrow: "Solutions by need",
    solutionsTitle: "We build tools for every stage of your business",
    solutionOneTitle: "I want more customers",
    solutionOneText: "Landing pages, basic SEO, forms, contact funnels, WhatsApp, analytics and conversion-focused content.",
    solutionTwoTitle: "I want to organize operations",
    solutionTwoText: "CRM, bookings, inventory, internal dashboards, user control, reports and approval workflows.",
    solutionThreeTitle: "I want to sell online",
    solutionThreeText: "Online stores, catalogs, payments, order management, coupons, automated emails and sales tracking.",
    solutionFourTitle: "I want to automate tasks",
    solutionFourText: "Integrations with Google Sheets, email, WhatsApp, forms, databases, AI and existing systems.",
    diffEyebrow: "Differentiators",
    diffTitle: "We do more than code: we help the solution make business sense.",
    diffText: "Before writing code, we review goals, users, content, processes, data, risks and priorities. This helps avoid unnecessary features and focus the budget on real value.",
    featureOneTitle: "Scalable architecture",
    featureOneText: "Your project is prepared to grow in users, modules and features.",
    featureTwoTitle: "User experience",
    featureTwoText: "Clear, fast interfaces that are easy to use on mobile or desktop.",
    featureThreeTitle: "Measurement and improvement",
    featureThreeText: "We set up analytics, events and tracking points to support better decisions.",
    featureFourTitle: "Technical guidance",
    featureFourText: "We explain the process, costs and key decisions without complicated language.",
    industriesEyebrow: "Industries",
    industriesTitle: "Solutions for companies, entrepreneurs and growing teams",
    processEyebrow: "Work process",
    processTitle: "A simple method to move from idea to launch",
    processOneTitle: "Discovery",
    processOneText: "We understand your business, goals, customers, competition, current processes and required features.",
    processTwoTitle: "Proposal",
    processTwoText: "We define scope, timing, deliverables, budget, technology and first-version priorities.",
    processThreeTitle: "Design",
    processThreeText: "We organize structure, sections, screens, content, user experience and conversion paths.",
    processFourTitle: "Development",
    processFourText: "We build the website or system in stages, with clear reviews and functional testing.",
    processFiveTitle: "Launch",
    processFiveText: "We publish on domain and hosting, configure security, analytics, forms and email.",
    processSixTitle: "Support",
    processSixText: "We support improvements, maintenance, updates, new integrations and monthly assistance.",
    techEyebrow: "Technologies",
    techTitle: "We choose technology based on the goal, not the trend",
    techText: "We can work with modern tools or manageable platforms depending on your budget, team and maintenance needs.",
    plansEyebrow: "Reference plans",
    plansTitle: "Choose a starting point and we adapt it to your project",
    plansText: "Prices are indicative. Every quote depends on scope, screens, integrations, content and support level.",
    caseEyebrow: "Use case",
    caseTitle: "From manual operation to connected system",
    caseText: "A business with WhatsApp orders, spreadsheet inventory and manual reports can move to a platform with catalog, order form, internal panel, automatic alerts and daily reports.",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Quick answers before starting",
    faqOneTitle: "How long does a website take?",
    faqOneText: "A corporate website usually takes 2 to 4 weeks, depending on content, number of sections, revisions and required setup.",
    faqTwoTitle: "Can I manage the content later?",
    faqTwoText: "Yes. We can build the site on a manageable platform or leave a structure that is easy to update according to your team and budget.",
    faqThreeTitle: "Do you also offer domain and hosting?",
    faqThreeText: "We can help configure domain, hosting, business email, SSL certificate, backups, analytics and contact tools.",
    faqFourTitle: "What do I need to quote my project?",
    faqFourText: "A description of the business, main goal, desired sections or features, visual references and ideal launch date.",
    contactEyebrow: "Contact",
    contactTitle: "Tell us what you want to build",
    contactText: "Complete the form with as much information as possible. If the scope is not clear yet, we can start with a discovery call and turn your idea into an organized proposal.",
    contactWhatsapp: "WhatsApp: +57 318 428 9661",
    contactCall: "Call: +57 318 428 9661",
    footerText: "Web development, software, automation and technical support."
  }
};

const setLanguage = (language) => {
  const dictionary = translations[language] ?? translations.es;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === language);
  });

  document.documentElement.lang = language;
  localStorage.setItem("dtrust-language", language);
};

if (year) {
  year.textContent = new Date().getFullYear();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

setLanguage(localStorage.getItem("dtrust-language") || "es");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const budget = formData.get("budget");
  const message = formData.get("message");
  const notifyWhatsapp = formData.get("notify_whatsapp") === "yes";

  if (notifyWhatsapp) {
    const waText = encodeURIComponent(
      `Hola, soy ${name}. Vi su sitio web y quiero solicitar información sobre ${service}. Presupuesto: ${budget}. ${message}${phone ? ` Telefono: ${phone}` : ""}`
    );
    window.open(`https://wa.me/573184289661?text=${waText}`, "_blank", "noopener,noreferrer");
  }

  // Fallback si EmailJS no está cargado o no configurado
  if (typeof emailjs === "undefined" || !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) {
    const subject = encodeURIComponent(`Solicitud de ${service}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone || "No proporcionado"}\nServicio: ${service}\nPresupuesto: ${budget}\n\nMensaje:\n${message}`
    );
    formStatus.textContent = "Listo. Se abrira tu correo para enviar la solicitud.";
    window.location.href = `mailto:contacto@d-trust.com?subject=${subject}&body=${body}`;
    return;
  }

  formStatus.textContent = "Enviando correos...";

  const emailData = {
    name: name,
    email: email,
    phone: phone || "No proporcionado",
    service: service,
    budget: budget,
    message: message
  };

  const welcomeData = {
    to_email: email,
    name: name,
    service: service,
    phone: phone || "No proporcionado"
  };

  console.log("[EmailJS] Datos notificación:", emailData);
  console.log("[EmailJS] Datos bienvenida:", welcomeData);

  // Envío SIMULTÁNEO de ambos correos (más rápido y robusto)
  const notificationPromise = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
    .then((res) => {
      console.log("[EmailJS] Notificación OK:", res.status, res.text);
      return { type: "notificacion", status: "ok", res };
    })
    .catch((err) => {
      console.error("[EmailJS] Notificación ERROR:", err);
      return { type: "notificacion", status: "error", err };
    });

  const welcomePromise = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_WELCOME_TEMPLATE_ID, welcomeData)
    .then((res) => {
      console.log("[EmailJS] Bienvenida OK:", res.status, res.text);
      return { type: "bienvenida", status: "ok", res };
    })
    .catch((err) => {
      console.error("[EmailJS] Bienvenida ERROR:", err);
      return { type: "bienvenida", status: "error", err };
    });

  Promise.all([notificationPromise, welcomePromise])
    .then((results) => {
      const notificacion = results.find(r => r.type === "notificacion");
      const bienvenida = results.find(r => r.type === "bienvenida");

      const notifOk = notificacion?.status === "ok";
      const bienvenidaOk = bienvenida?.status === "ok";

      console.log("[EmailJS] Resultado notificación:", notifOk ? "OK" : "FALLÓ");
      console.log("[EmailJS] Resultado bienvenida:", bienvenidaOk ? "OK" : "FALLÓ");

      // Guardar en localStorage como respaldo
      const submission = {
        id: crypto.randomUUID?.() || Date.now().toString(),
        timestamp: new Date().toISOString(),
        name,
        email,
        phone: phone || "No proporcionado",
        service,
        budget,
        message,
        notificacionOk: notifOk,
        bienvenidaOk: bienvenidaOk
      };
      const history = JSON.parse(localStorage.getItem("dtrust-submissions") || "[]");
      history.unshift(submission);
      localStorage.setItem("dtrust-submissions", JSON.stringify(history));
      console.log("[D-trust] Solicitud guardada en localStorage.", submission);

      if (notifOk && bienvenidaOk) {
        formStatus.textContent = "Solicitud enviada. Correo recibido y confirmación enviada al cliente.";
        form.reset();
      } else if (notifOk) {
        formStatus.textContent = "Solicitud recibida y guardada, pero el correo de confirmación al cliente falló.";
      } else if (bienvenidaOk) {
        formStatus.textContent = "Confirmación enviada al cliente, pero tu correo de notificación falló. Datos guardados.";
      } else {
        const msg1 = notificacion?.err?.text || notificacion?.err?.message || "";
        const msg2 = bienvenida?.err?.text || bienvenida?.err?.message || "";
        formStatus.textContent = `Error: ${msg1 || msg2}. Intenta de nuevo o escribenos por WhatsApp.`;
      }
    });
});

// ===== EMAILJS CONFIG =====
// INSTRUCCIONES OBLIGATORIAS:
// 1. Ve a https://emailjs.com y conecta tu correo (Email Service).
// 2. Crea DOS plantillas. En CADA UNA configura el campo "To Email" así:
//    - Plantilla A (notificación a TI):   To Email = tu-correo@ejemplo.com (fijo)
//    - Plantilla B (bienvenida al CLIENTE): To Email = {{to_email}} (variable)
// 3. En el CUERPO de cada plantilla usa las variables entre {{dobles_llaves}}:
//    {{name}}, {{email}}, {{phone}}, {{service}}, {{budget}}, {{message}}
// 4. Copia los IDs exactos de tu dashboard aquí abajo.
const EMAILJS_PUBLIC_KEY = "eYzLueLYMlnAXPMkq";
const EMAILJS_SERVICE_ID = "service_2anafbr";
const EMAILJS_TEMPLATE_ID = "template_x8m5dos";        // Plantilla A: notificación a D-trust
const EMAILJS_WELCOME_TEMPLATE_ID = "template_fgixsi4"; // Plantilla B: bienvenida al cliente (REEMPLAZAR)

if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  console.log("[EmailJS] SDK inicializado correctamente.");
} else {
  console.warn("[EmailJS] SDK no cargado o Public Key no configurada.");
}

// ===== CHATBOT =====
const chatbotToggle = document.querySelector("[data-chatbot-toggle]");
const chatbotPanel = document.querySelector("[data-chatbot-panel]");
const chatbotMessages = document.querySelector("[data-chatbot-messages]");
const chatbotInput = document.querySelector("[data-chatbot-input]");
const chatbotSend = document.querySelector("[data-chatbot-send]");
const STORAGE_KEY = "dtrust-chatbot-messages";

const isEnglish = () => document.documentElement.lang === "en";

const botReplies = {
  price: {
    es: "Nuestros planes comienzan desde $499 para web profesional y $1,900 para software a medida. Puedes cotizar en el formulario de contacto o seguir hablando conmigo.",
    en: "Our plans start at $499 for a professional website and $1,900 for custom software. You can request a quote in the contact form or keep chatting with me."
  },
  time: {
    es: "Una web corporativa suele tardar 2-4 semanas. Un software a medida puede ser 30-60 dias para el MVP. ¿Tienes fecha limite?",
    en: "A corporate website usually takes 2-4 weeks. Custom software can be 30-60 days for an MVP. Do you have a deadline?"
  },
  human: {
    es: 'Te conecto con un humano. <a href="https://wa.me/573184289661" target="_blank" rel="noreferrer">Abrir WhatsApp</a>',
    en: 'Connecting you to a human. <a href="https://wa.me/573184289661" target="_blank" rel="noreferrer">Open WhatsApp</a>'
  },
  web: {
    es: "Ofrecemos diseno y desarrollo de paginas web corporativas, landing pages, blogs y tiendas online. ¿Que tipo de proyecto tienes en mente?",
    en: "We offer design and development of corporate websites, landing pages, blogs, and online stores. What kind of project do you have in mind?"
  },
  software: {
    es: "Desarrollamos software a medida: CRM, reservas, inventarios, reportes, paneles internos y mas. ¿Que proceso necesitas automatizar?",
    en: "We develop custom software: CRM, bookings, inventory, reports, internal dashboards, and more. What process do you need to automate?"
  },
  ecommerce: {
    es: "Construimos tiendas online con carrito, checkout, pasarelas de pago, inventario y envios. ¿Ya tienes productos listos?",
    en: "We build online stores with cart, checkout, payment gateways, inventory, and shipping. Do you already have products ready?"
  },
  support: {
    es: "Ofrecemos soporte mensual desde $149/mes con backups, actualizaciones, monitoreo y mejoras. ¿Ya tienes un sitio que necesita mantenimiento?",
    en: "We offer monthly support from $149/month with backups, updates, monitoring, and improvements. Do you already have a site that needs maintenance?"
  },
  hello: {
    es: "¡Hola! Soy el asistente de D-trust. ¿En que puedo ayudarte hoy?",
    en: "Hello! I'm the D-trust assistant. How can I help you today?"
  },
  fallback: {
    es: "Entiendo. Puedo ayudarte con informacion sobre desarrollo web, software a medida, tiendas online, automatizacion y soporte. ¿Que necesitas?",
    en: "I understand. I can help you with information about web development, custom software, online stores, automation, and support. What do you need?"
  }
};

const getBotResponse = (text) => {
  const lower = text.toLowerCase();
  const lang = isEnglish() ? "en" : "es";
  if (/precio|costo|cotiz|plan|price|cost|quote/.test(lower)) return botReplies.price[lang];
  if (/tiempo|tarda|cuando|dias|time|long|take|week/.test(lower)) return botReplies.time[lang];
  if (/whatsapp|chat|hablar|humano|persona|human|talk|person/.test(lower)) return botReplies.human[lang];
  if (/web|pagina|sitio|website|page|site/.test(lower)) return botReplies.web[lang];
  if (/software|app|sistema|plataforma|application|system|platform/.test(lower)) return botReplies.software[lang];
  if (/ecommerce|tienda|vender|online|store|shop|sell/.test(lower)) return botReplies.ecommerce[lang];
  if (/soporte|mantenimiento|hosting|support|maintenance/.test(lower)) return botReplies.support[lang];
  if (/hola|buenos|hey|hello|hi/.test(lower)) return botReplies.hello[lang];
  return botReplies.fallback[lang];
};

const addMessage = (html, sender) => {
  const bubble = document.createElement("div");
  bubble.className = `chatbot-bubble ${sender}`;
  bubble.innerHTML = html;
  chatbotMessages?.appendChild(bubble);
  chatbotMessages?.scrollTo({ top: chatbotMessages.scrollHeight, behavior: "smooth" });
  saveMessages();
};

const saveMessages = () => {
  if (!chatbotMessages) return;
  const msgs = [...chatbotMessages.children].map(el => ({
    html: el.innerHTML,
    sender: el.classList.contains("bot") ? "bot" : "user"
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
};

const loadMessages = () => {
  try {
    const msgs = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    msgs.forEach(m => {
      const bubble = document.createElement("div");
      bubble.className = `chatbot-bubble ${m.sender}`;
      bubble.innerHTML = m.html;
      chatbotMessages?.appendChild(bubble);
    });
  } catch {}
};

const showWelcome = () => {
  if (!chatbotMessages || chatbotMessages.children.length > 0) return;
  const lang = isEnglish() ? "en" : "es";
  const text = lang === "en"
    ? "Hello! I'm the D-trust assistant. How can I help you today?<br><br>You can ask me about prices, timelines, web development, software, online stores, or support."
    : "¡Hola! Soy el asistente de D-trust. ¿En que puedo ayudarte hoy?<br><br>Puedes preguntarme sobre precios, tiempos, desarrollo web, software, tiendas online o soporte.";
  addMessage(text, "bot");
};

const handleChatbotSend = () => {
  const text = chatbotInput?.value.trim();
  if (!text) return;
  addMessage(text, "user");
  chatbotInput.value = "";
  setTimeout(() => {
    addMessage(getBotResponse(text), "bot");
  }, 500 + Math.random() * 400);
};

chatbotToggle?.addEventListener("click", () => {
  const isOpen = chatbotPanel?.classList.toggle("is-open");
  chatbotToggle.classList.toggle("is-open", isOpen);
  chatbotToggle.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) showWelcome();
});

chatbotSend?.addEventListener("click", handleChatbotSend);
chatbotInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleChatbotSend();
});

loadMessages();
