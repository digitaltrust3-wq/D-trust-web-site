const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatablePlaceholders = document.querySelectorAll("[data-i18n-placeholder]");

const translations = {
  es: {
    navServices: "Servicios",
    navSolutions: "Soluciones",
    navProcess: "Proceso",
    navPlans: "Planes",
    navFaq: "FAQ",
    navQuote: "Cotizar",
    heroEyebrow: "Desarrollo web, software a medida y automatización",
    heroTitle: "Impulsamos negocios con tecnología clara, segura y lista para crecer.",
    heroText: "Creamos páginas web corporativas, tiendas online, plataformas internas, portales de clientes, integraciones API y automatizaciones que reducen trabajo manual y mejoran la experiencia de tus usuarios.",
    heroPrimary: "Solicitar cotización",
    heroSecondary: "Explorar servicios",
    metricOne: "Tipos de soluciones digitales",
    metricTwo: "Días para lanzar un MVP",
    metricThree: "Soporte, hosting y mejora continua",
    visualAutomation: "Automatización",
    visualSaved: "ahorradas por semana",
    visualPerformance: "Rendimiento digital",
    visualUptime: "Disponibilidad",
    visualMonitoring: "monitoreo activo",
    stripWeb: "Páginas Web",
    stripSoftware: "Software a Medida",
    stripStores: "Tiendas Online",
    stripApps: "Apps Web",
    stripAutomation: "Automatización",
    stripSupport: "Soporte Técnico",
    whatEyebrow: "Qué hacemos",
    whatTitle: "Convertimos ideas, procesos y necesidades de negocio en productos digitales funcionales.",
    whatTextOne: "Tu página web no debería ser solo una vitrina. Debe explicar tu oferta, captar clientes, responder dudas, generar confianza y conectarse con las herramientas que ya usas.",
    whatTextTwo: "Por eso trabajamos cada proyecto con una visión completa: estrategia, diseño, desarrollo, contenido, seguridad, rendimiento, analítica y soporte posterior al lanzamiento.",
    servicesEyebrow: "Servicios",
    servicesTitle: "Un portafolio completo para operar y vender mejor en internet",
    servicesText: "Integramos los componentes clave para que tu empresa pueda tener presencia digital, automatizar tareas, atender clientes y escalar procesos.",
    serviceOneTitle: "Diseño y desarrollo de páginas web",
    serviceOneText: "Sitios corporativos, landing pages, blogs, páginas para servicios profesionales y sitios multi-seccion con enfoque comercial.",
    serviceTwoTitle: "Tiendas online y catálogos digitales",
    serviceTwoText: "Soluciones e-commerce para vender productos, recibir pedidos, mostrar catálogos y conectar pasarelas de pago.",
    serviceThreeTitle: "Software a medida",
    serviceThreeText: "Aplicaciones para administrar clientes, ventas, reservas, inventarios, reportes, usuarios y operaciones internas.",
    serviceFourTitle: "Automatización de procesos",
    serviceFourText: "Reducimos tareas repetitivas conectando formularios, hojas de cálculo, correos, WhatsApp, CRM y herramientas de IA.",
    serviceFiveTitle: "Integraciones y APIs",
    serviceFiveText: "Conectamos plataformas externas para que tus sistemas compartan información sin depender de procesos manuales.",
    serviceSixTitle: "Hosting, seguridad y mantenimiento",
    serviceSixText: "Mantenemos tu web o software estable, actualizado, protegido y con soporte para nuevas mejoras.",
    solutionsEyebrow: "Soluciones por necesidad",
    solutionsTitle: "Construimos herramientas para cada etapa de tu negocio",
    solutionOneTitle: "Quiero conseguir más clientes",
    solutionOneText: "Landing pages, SEO básico, formularios, embudos de contacto, WhatsApp, analítica y contenido orientado a conversión.",
    solutionTwoTitle: "Quiero ordenar mi operación",
    solutionTwoText: "CRM, reservas, inventario, tableros internos, control de usuarios, reportes y flujos de aprobación.",
    solutionThreeTitle: "Quiero vender online",
    solutionThreeText: "Tiendas virtuales, catálogos, pagos, gestión de pedidos, cupones, correos automáticos y seguimiento de ventas.",
    solutionFourTitle: "Quiero automatizar tareas",
    solutionFourText: "Integraciones con Google Sheets, correo, WhatsApp, formularios, bases de datos, IA y sistemas existentes.",
    diffEyebrow: "Diferenciales",
    diffTitle: "No solo programamos: ayudamos a que la solución tenga sentido de negocio.",
    diffText: "Antes de escribir código revisamos objetivos, usuarios, contenido, procesos, datos, riesgos y prioridades. Así evitamos construir funciones innecesarias y enfocamos el presupuesto en lo que realmente genera valor.",
    featureOneTitle: "Arquitectura escalable",
    featureOneText: "Tu proyecto queda preparado para crecer en usuarios, módulos y funcionalidades.",
    featureTwoTitle: "Experiencia de usuario",
    featureTwoText: "Interfaces claras, rápidas y fáciles de usar desde celular o escritorio.",
    featureThreeTitle: "Medición y mejora",
    featureThreeText: "Instalamos analítica, eventos y puntos de seguimiento para tomar decisiones.",
    featureFourTitle: "Acompañamiento técnico",
    featureFourText: "Te explicamos el proceso, los costos y las decisiones importantes sin lenguaje complicado.",
    trustEyebrow: "Confianza y acompañamiento",
    trustTitle: "Trabajamos con claridad, seguridad y seguimiento desde el primer contacto.",
    trustText: "Cada proyecto se organiza con alcance definido, comunicación sencilla, criterios de entrega y soporte posterior para que el cliente sepa qué se está construyendo y por qué.",
    trustOneTitle: "Diagnóstico inicial",
    trustOneText: "Revisamos objetivos, necesidades y prioridades antes de proponer una solución.",
    trustTwoTitle: "Entregas claras",
    trustTwoText: "Definimos fases, tiempos, funcionalidades y próximos pasos para evitar confusión.",
    trustThreeTitle: "Seguridad y respaldo",
    trustThreeText: "Aplicamos buenas prácticas para proteger formularios, datos, accesos y continuidad del servicio.",
    trustFourTitle: "Soporte posterior",
    trustFourText: "Acompañamos ajustes, mejoras y mantenimiento después del lanzamiento.",
    industriesEyebrow: "Sectores",
    industriesTitle: "Soluciones para empresas, emprendedores y equipos en crecimiento",
    processEyebrow: "Proceso de trabajo",
    processTitle: "Un método simple para pasar de idea a lanzamiento",
    processOneTitle: "Diagnóstico",
    processOneText: "Entendemos tu negocio, objetivos, clientes, competencia, procesos actuales y funcionalidades necesarias.",
    processTwoTitle: "Propuesta",
    processTwoText: "Definimos alcance, tiempos, entregables, presupuesto, tecnología y prioridades para la primera versión.",
    processThreeTitle: "Diseño",
    processThreeText: "Organizamos estructura, secciones, pantallas, contenido, experiencia de usuario y rutas de conversión.",
    processFourTitle: "Desarrollo",
    processFourText: "Construimos el sitio o sistema por etapas, con revisiones claras y pruebas funcionales.",
    processFiveTitle: "Lanzamiento",
    processFiveText: "Publicamos en dominio y hosting, configuramos seguridad, analítica, formularios y correos.",
    processSixTitle: "Soporte",
    processSixText: "Acompañamos mejoras, mantenimiento, actualizaciones, nuevas integraciones y soporte mensual.",
    techEyebrow: "Tecnologías",
    techTitle: "Elegimos la tecnología según el objetivo, no por moda",
    techText: "Podemos trabajar con herramientas modernas o plataformas administrables según tu presupuesto, equipo y necesidad de mantenimiento.",
    plansEyebrow: "Planes de referencia",
    plansTitle: "Elige un punto de partida y lo ajustamos a tu proyecto",
    plansText: "Los valores son orientativos. Cada cotización depende del alcance, número de pantallas, integraciones, contenido y nivel de soporte.",
    caseEyebrow: "Caso de uso",
    caseTitle: "De operación manual a sistema conectado",
    caseText: "Un negocio con pedidos por WhatsApp, inventario en hojas de cálculo y reportes manuales puede pasar a una plataforma con catálogo, formulario de pedido, panel interno, alertas automáticas y reportes diarios.",
    caseBenefitOne: "Menos errores de captura",
    caseBenefitTwo: "Pedidos centralizados",
    caseBenefitThree: "Reportes automáticos",
    caseBenefitFour: "Clientes mejor atendidos",
    examplesEyebrow: "Ejemplos y resultados",
    examplesTitle: "Espacio preparado para mostrar proyectos, casos reales o testimonios.",
    examplesText: "Cuando tengas ejemplos listos, puedes agregar aquí capturas, resultados, nombre del sector, problema inicial y solución implementada.",
    exampleOneTag: "Ejemplo 1",
    exampleTwoTag: "Ejemplo 2",
    exampleThreeTag: "Ejemplo 3",
    examplePlaceholderTitle: "Proyecto por agregar",
    examplePlaceholderText: "Espacio reservado para describir el reto, la solución y el resultado obtenido.",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Respuestas rápidas antes de iniciar",
    faqOneTitle: "Cuánto tarda desarrollar una página web?",
    faqOneText: "Una web corporativa suele tardar entre 2 y 4 semanas, dependiendo del contenido, número de secciones, revisiones y configuraciones necesarias.",
    faqTwoTitle: "Puedo administrar el contenido después?",
    faqTwoText: "Sí. Podemos construir el sitio en una plataforma administrable o dejar una estructura fácil de actualizar según tu equipo y presupuesto.",
    faqThreeTitle: "También ofrecen dominio y hosting?",
    faqThreeText: "Podemos ayudarte a configurar dominio, hosting, correo corporativo, certificado SSL, backups, analítica y herramientas de contacto.",
    faqFourTitle: "Qué necesito para cotizar mi proyecto?",
    faqFourText: "Una descripción del negocio, objetivo principal, secciones o funcionalidades deseadas, referencias visuales y fecha ideal de lanzamiento.",
    faqFiveTitle: "¿Qué es el SEO?",
    faqFiveText: "El SEO, o posicionamiento en buscadores, es el conjunto de estrategias que ayudan a que una página web aparezca mejor ubicada en Google y otros motores de búsqueda. Una web optimizada con SEO puede atraer más visitantes, generar más oportunidades comerciales y mejorar la presencia digital de una empresa.",
    contactEyebrow: "Contacto",
    contactTitle: "Cuéntanos qué quieres construir",
    contactText: "Completa el formulario con la mayor información posible. Si aún no tienes claro el alcance, podemos iniciar con una llamada de diagnóstico y convertir tu idea en una propuesta organizada.",
    contactWhatsappLabel: "WhatsApp",
    contactWhatsapp: "Atención directa",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Teléfono",
    contactLocationLabel: "Ubicación",
    contactLocation: "Colombia / Atención internacional",
    formNameLabel: "Nombre",
    formNamePlaceholder: "Tu nombre",
    formEmailLabel: "Email",
    formEmailPlaceholder: "correo@empresa.com",
    formPhoneLabel: "Teléfono",
    formPhonePlaceholder: "+57 318 428 9661",
    formServiceLabel: "Servicio de interés",
    formServiceDefault: "Selecciona una opción",
    formServiceWebsite: "Página web corporativa",
    formServiceStore: "Tienda online",
    formServiceSoftware: "Software a medida",
    formServiceAutomation: "Automatización",
    formServiceSupport: "Soporte y mantenimiento",
    formBudgetLabel: "Presupuesto aproximado",
    formBudgetDefault: "Selecciona un rango",
    formBudgetOne: "Menos de $500",
    formBudgetTwo: "$500 - $1,500",
    formBudgetThree: "$1,500 - $5,000",
    formBudgetFour: "Más de $5,000",
    formBudgetUnknown: "Aún no lo sé",
    formMessageLabel: "Mensaje",
    formMessagePlaceholder: "Cuéntanos sobre tu negocio, objetivo, funcionalidades y fecha ideal",
    formWhatsappOptin: "También notificar por WhatsApp",
    formSubmit: "Enviar solicitud",
    chatbotTooltip: "¿Cómo puedo ayudarte?",
    chatbotFlow: {
      welcome: "¡Hola! Soy el asistente de Digital Trust Solutions. Te ayudo a encontrar la mejor solución paso a paso. Elige una opción o escribe tu consulta.",
      optionsTitle: "Opciones rápidas",
      optionWebsite: "Crear una página web",
      optionImprove: "Mejorar una página existente",
      optionAutomation: "Automatizar procesos",
      optionQuote: "Solicitar una cotización",
      optionAdvisor: "Hablar con un asesor",
      optionSecurity: "Servicios de ciberseguridad",
      optionSupport: "Soporte técnico",
      intro: "Perfecto. Haré unas preguntas rápidas para preparar tu solicitud.",
      askName: "1. ¿Cuál es tu nombre?",
      askEmail: "2. ¿Cuál es tu correo electrónico?",
      askPhone: "3. ¿Cuál es tu número de WhatsApp?",
      askCompany: "4. ¿Cuál es el nombre de tu empresa o negocio?",
      askService: "5. ¿Qué tipo de servicio necesitas?",
      askBudget: "6. ¿Cuál es tu presupuesto aproximado?",
      askUrgency: "7. ¿Qué tan urgente es el proyecto?",
      askDescription: "8. Describe brevemente qué necesitas o qué problema quieres resolver.",
      serviceWebsite: "Página web nueva",
      serviceImprove: "Mejora de página existente",
      serviceAutomation: "Automatización de procesos",
      serviceQuote: "Cotización general",
      serviceAdvisor: "Asesoría personalizada",
      serviceSecurity: "Ciberseguridad",
      serviceSupport: "Soporte técnico",
      urgencyNormal: "Normal",
      urgencyHigh: "Alta",
      summaryTitle: "Resumen de tu solicitud",
      labelName: "Nombre",
      labelEmail: "Email",
      labelPhone: "WhatsApp",
      labelCompany: "Empresa",
      labelService: "Servicio",
      labelBudget: "Presupuesto",
      labelPriority: "Prioridad",
      labelRequest: "Solicitud",
      pending: "Pendiente",
      confirmQuestion: "¿Confirmas que deseas enviar esta solicitud al equipo de Digital Trust Solutions?",
      confirmSend: "Sí, enviar solicitud",
      editRequest: "Editar información",
      cancelRequest: "Cancelar",
      sent: "Listo. Tu solicitud fue enviada y guardada correctamente. Te contactaremos pronto.",
      sendError: "Recibimos tu información, pero no pudimos notificar por correo en este momento. De todas formas quedó guardada para seguimiento.",
      cancelled: "Sin problema. Puedes iniciar una nueva solicitud cuando quieras.",
      edit: "Claro, volvamos a completar la información.",
      fallback: "Puedo ayudarte con páginas web, software, automatización, ciberseguridad, soporte o cotizaciones. Elige una opción para guiarte paso a paso."
    },
    footerText: "Desarrollo web, software, automatización y soporte técnico.",
    footerServices: "Servicios",
    footerPlans: "Planes",
    footerTop: "Volver arriba"
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
    trustEyebrow: "Trust and guidance",
    trustTitle: "We work with clarity, security and follow-up from the first contact.",
    trustText: "Each project is organized with defined scope, simple communication, delivery criteria and post-launch support so clients know what is being built and why.",
    trustOneTitle: "Initial discovery",
    trustOneText: "We review goals, needs and priorities before proposing a solution.",
    trustTwoTitle: "Clear deliverables",
    trustTwoText: "We define phases, timelines, features and next steps to avoid confusion.",
    trustThreeTitle: "Security and backup",
    trustThreeText: "We apply good practices to protect forms, data, access and service continuity.",
    trustFourTitle: "Post-launch support",
    trustFourText: "We support adjustments, improvements and maintenance after launch.",
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
    caseBenefitOne: "Fewer capture errors",
    caseBenefitTwo: "Centralized orders",
    caseBenefitThree: "Automated reports",
    caseBenefitFour: "Better customer support",
    examplesEyebrow: "Examples and results",
    examplesTitle: "A prepared space to show projects, real cases or testimonials.",
    examplesText: "When your examples are ready, you can add screenshots, results, industry, initial problem and implemented solution here.",
    exampleOneTag: "Example 1",
    exampleTwoTag: "Example 2",
    exampleThreeTag: "Example 3",
    examplePlaceholderTitle: "Project to add",
    examplePlaceholderText: "Reserved space to describe the challenge, solution and result.",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Quick answers before starting",
    faqOneTitle: "How long does a website take?",
    faqOneText: "A corporate website usually takes 2 to 4 weeks, depending on content, number of sections, reviews and required setup.",
    faqTwoTitle: "Can I manage the content later?",
    faqTwoText: "Yes. We can build the site on a manageable platform or leave a structure that is easy to update according to your team and budget.",
    faqThreeTitle: "Do you also offer domain and hosting?",
    faqThreeText: "We can help configure domain, hosting, business email, SSL certificate, backups, analytics and contact tools.",
    faqFourTitle: "What do I need to quote my project?",
    faqFourText: "A description of the business, main goal, desired sections or features, visual references and ideal launch date.",
    faqFiveTitle: "What is SEO?",
    faqFiveText: "SEO, or Search Engine Optimization, is the set of strategies that help a website rank better on Google and other search engines. An SEO-optimized website can attract more visitors, generate more business opportunities, and improve a company’s digital presence.",
    contactEyebrow: "Contact",
    contactTitle: "Tell us what you want to build",
    contactText: "Complete the form with as much information as possible. If the scope is not clear yet, we can start with a discovery call and turn your idea into an organized proposal.",
    contactWhatsappLabel: "WhatsApp",
    contactWhatsapp: "Direct support",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone",
    contactLocationLabel: "Location",
    contactLocation: "Colombia / International support",
    formNameLabel: "Name",
    formNamePlaceholder: "Your name",
    formEmailLabel: "Email",
    formEmailPlaceholder: "email@company.com",
    formPhoneLabel: "Phone",
    formPhonePlaceholder: "+57 318 428 9661",
    formServiceLabel: "Service of interest",
    formServiceDefault: "Select an option",
    formServiceWebsite: "Corporate website",
    formServiceStore: "Online store",
    formServiceSoftware: "Custom software",
    formServiceAutomation: "Automation",
    formServiceSupport: "Support and maintenance",
    formBudgetLabel: "Approximate budget",
    formBudgetDefault: "Select a range",
    formBudgetOne: "Less than $500",
    formBudgetTwo: "$500 - $1,500",
    formBudgetThree: "$1,500 - $5,000",
    formBudgetFour: "More than $5,000",
    formBudgetUnknown: "I do not know yet",
    formMessageLabel: "Message",
    formMessagePlaceholder: "Tell us about your business, goal, features and ideal date",
    formWhatsappOptin: "Also notify via WhatsApp",
    formSubmit: "Send request",
    chatbotTooltip: "How can I help you?",
    chatbotFlow: {
      welcome: "Hello! I am the Digital Trust Solutions assistant. I can help you find the right solution step by step. Choose an option or type your question.",
      optionsTitle: "Quick options",
      optionWebsite: "Create a website",
      optionImprove: "Improve an existing website",
      optionAutomation: "Automate processes",
      optionQuote: "Request a quote",
      optionAdvisor: "Talk to an advisor",
      optionSecurity: "Cybersecurity services",
      optionSupport: "Technical support",
      intro: "Perfect. I will ask a few quick questions to prepare your request.",
      askName: "1. What is your name?",
      askEmail: "2. What is your email address?",
      askPhone: "3. What is your WhatsApp number?",
      askCompany: "4. What is your company or business name?",
      askService: "5. What type of service do you need?",
      askBudget: "6. What is your approximate budget?",
      askUrgency: "7. How urgent is the project?",
      askDescription: "8. Briefly describe what you need or what problem you want to solve.",
      serviceWebsite: "New website",
      serviceImprove: "Existing website improvement",
      serviceAutomation: "Process automation",
      serviceQuote: "General quote",
      serviceAdvisor: "Personalized advisory",
      serviceSecurity: "Cybersecurity",
      serviceSupport: "Technical support",
      urgencyNormal: "Normal",
      urgencyHigh: "High",
      summaryTitle: "Request summary",
      labelName: "Name",
      labelEmail: "Email",
      labelPhone: "WhatsApp",
      labelCompany: "Company",
      labelService: "Service",
      labelBudget: "Budget",
      labelPriority: "Priority",
      labelRequest: "Request",
      pending: "Pending",
      confirmQuestion: "Do you confirm that you want to send this request to the Digital Trust Solutions team?",
      confirmSend: "Yes, send request",
      editRequest: "Edit information",
      cancelRequest: "Cancel",
      sent: "Done. Your request was sent and saved successfully. We will contact you soon.",
      sendError: "We received your information, but email notification could not be sent right now. It was still saved for follow-up.",
      cancelled: "No problem. You can start a new request whenever you want.",
      edit: "Sure, let us complete the information again.",
      fallback: "I can help with websites, software, automation, cybersecurity, support or quotes. Choose an option so I can guide you step by step."
    },
    footerText: "Web development, software, automation and technical support.",
    footerServices: "Services",
    footerPlans: "Plans",
    footerTop: "Back to top"
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

  translatablePlaceholders.forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === language);
  });

  document.documentElement.lang = language;
  localStorage.setItem("digital-trust-language", language);
};

if (year) {
  year.textContent = new Date().getFullYear();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langSwitch);
    applyManagedContent();
  });
});

setLanguage(localStorage.getItem("digital-trust-language") || "es");

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
    const waText = encodeURIComponent("¡Hola! 👋 Vi su página web y estoy interesado en los servicios que ofrecen. Me gustaría recibir más información y, si es posible, una asesoría para conocer cuál es la mejor solución para mi empresa. ¡Muchas gracias!");
    window.open(`https://wa.me/573184289661?text=${waText}`, "_blank", "noopener,noreferrer");
  }

  // Fallback cuando el servicio de correo no esta disponible.
  if (typeof emailjs === "undefined" || !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) {
    const fallbackSubmission = {
      id: crypto.randomUUID?.() || Date.now().toString(),
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || "No proporcionado",
      service,
      budget,
      message,
      notificacionOk: false,
      bienvenidaOk: false,
      fallback: "mailto"
    };
    saveInteractionToDatabase("contact_form", fallbackSubmission);

    const subject = encodeURIComponent(`Solicitud de ${service}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No proporcionado"}\nServicio: ${service}\nPresupuesto: ${budget}\n\nMensaje:\n${message}`
    );
    formStatus.textContent = "Abriremos tu correo para completar el envío. También puedes contactarnos por WhatsApp.";
    window.location.href = `mailto:contacto@digitaltrustsolutions.com?subject=${subject}&body=${body}`;
    return;
  }

  formStatus.textContent = "Enviando tu solicitud...";

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

  console.log("[Contacto] Datos de solicitud:", emailData);
  console.log("[Contacto] Datos de confirmación:", welcomeData);

  // Envio simultaneo de ambos correos.
  const notificationPromise = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData)
    .then((res) => {
      console.log("[Contacto] Notificación enviada:", res.status, res.text);
      return { type: "notificación", status: "ok", res };
    })
    .catch((err) => {
      console.error("[Contacto] No se pudo enviar la notificación:", err);
      return { type: "notificación", status: "error", err };
    });

  const welcomePromise = emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_WELCOME_TEMPLATE_ID, welcomeData)
    .then((res) => {
      console.log("[Contacto] Confirmación enviada:", res.status, res.text);
      return { type: "bienvenida", status: "ok", res };
    })
    .catch((err) => {
      console.error("[Contacto] No se pudo enviar la confirmación:", err);
      return { type: "bienvenida", status: "error", err };
    });

  Promise.all([notificationPromise, welcomePromise])
    .then((results) => {
      const notificación = results.find(r => r.type === "notificación");
      const bienvenida = results.find(r => r.type === "bienvenida");

      const notifOk = notificación?.status === "ok";
      const bienvenidaOk = bienvenida?.status === "ok";

      console.log("[Contacto] Resultado notificación:", notifOk ? "OK" : "FALLÓ");
      console.log("[Contacto] Resultado confirmación:", bienvenidaOk ? "OK" : "FALLÓ");

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
      const history = JSON.parse(localStorage.getItem("digital-trust-submissions") || "[]");
      history.unshift(submission);
      localStorage.setItem("digital-trust-submissions", JSON.stringify(history));
      console.log("[Digital Trust Solutions] Solicitud guardada en localStorage.", submission);
      saveInteractionToDatabase("contact_form", submission);

      if (notifOk && bienvenidaOk) {
        formStatus.textContent = "Tu mensaje fue enviado correctamente.";
        form.reset();
      } else if (notifOk) {
        formStatus.textContent = "Tu solicitud fue recibida. Te contactaremos pronto.";
      } else if (bienvenidaOk) {
        formStatus.textContent = "Recibimos tu información. Si necesitas respuesta inmediata, contáctanos por WhatsApp.";
      } else {
        formStatus.textContent = "No pudimos enviar tu mensaje en este momento. Intenta nuevamente o contáctanos por WhatsApp.";
      }
    });
});

// ===== EMAILJS CONFIG =====
// INSTRUCCIONES OBLIGATORIAS:
// 1. Ve a https://emailjs.com y conecta tu correo (Email Service).
// 2. Crea DOS plantillas. En CADA UNA configura el campo "To Email" asi:
//    - Plantilla A (notificación a TI):   To Email = tu-correo@ejemplo.com (fijo)
//    - Plantilla B (bienvenida al CLIENTE): To Email = {{to_email}} (variable)
// 3. En el CUERPO de cada plantilla usa las variables entre {{dobles_llaves}}:
//    {{name}}, {{email}}, {{phone}}, {{service}}, {{budget}}, {{message}}
// 4. Copia los IDs exactos de tu dashboard aquí abajo.
const EMAILJS_PUBLIC_KEY = "eYzLueLYMlnAXPMkq";
const EMAILJS_SERVICE_ID = "service_2anafbr";
const EMAILJS_TEMPLATE_ID = "template_x8m5dos";        // Plantilla A: notificación a Digital Trust Solutions
const EMAILJS_WELCOME_TEMPLATE_ID = "template_fgixsi4"; // Plantilla B: bienvenida al cliente

if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY) {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  console.log("[Contacto] Servicio de correo inicializado correctamente.");
} else {
  console.warn("[Contacto] Servicio de correo no disponible.");
}

// ===== DATABASE CONFIG =====
// Para guardar conversaciones reales en una base central, crea una tabla en Supabase
// con el archivo database-schema.sql y reemplaza estos valores.
const SUPABASE_URL = window.DTS_CONFIG?.SUPABASE_URL || "";
const SUPABASE_ANON_KEY = window.DTS_CONFIG?.SUPABASE_ANON_KEY || "";
const DATABASE_TABLES = {
  sessions: "chat_sessions",
  messages: "chat_messages",
  leads: "leads",
  contactRequests: "contact_requests",
  events: "interaction_events"
};

const isDatabaseConfigured = () => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const postToDatabase = async (table, data, options = {}) => {
  if (!isDatabaseConfigured()) return { skipped: true };

  const params = options.upsertOnConflict ? `?on_conflict=${options.upsertOnConflict}` : "";
  const prefer = options.upsertOnConflict ? "resolution=merge-duplicates,return=minimal" : "return=minimal";

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}${params}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: prefer
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase ${table} error: ${response.status} ${errorText}`);
  }

  return { ok: true };
};

const getFromDatabase = async (table, query = "select=*") => {
  if (!isDatabaseConfigured()) return [];

  const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${query}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error(`Supabase ${table} read error: ${response.status}`);
  }

  return response.json();
};

const applyManagedContent = async () => {
  if (!isDatabaseConfigured()) return;

  try {
    const language = document.documentElement.lang || "es";
    const contentRows = await getFromDatabase(
      "site_content",
      `select=content_key,language,value&is_published=eq.true&language=in.(${language},all)`
    );

    contentRows.forEach((row) => {
      const element = document.querySelector(`[data-i18n="${row.content_key}"]`);
      if (element && row.value) {
        element.textContent = row.value;
      }
    });

    const assetRows = await getFromDatabase(
      "site_assets",
      "select=asset_slot,file_url,alt_text&is_active=eq.true"
    );

    assetRows.forEach((asset) => {
      if (asset.asset_slot === "logo") {
        const logo = document.querySelector(".brand-logo");
        if (logo && asset.file_url) {
          logo.src = asset.file_url;
          logo.alt = asset.alt_text || "Logo Digital Trust Solutions";
        }
      }

      if (asset.asset_slot === "hero") {
        const hero = document.querySelector(".hero-asset");
        if (hero && asset.file_url) {
          hero.src = asset.file_url;
          hero.alt = asset.alt_text || "Imagen principal";
        }
      }
    });
  } catch (error) {
    console.warn("[Content] No se pudo cargar contenido administrado.", error);
  }
};

const getSessionIdSafe = (payload = {}) => {
  if (payload.session_id) return payload.session_id;
  if (typeof getSessionId === "function") return getSessionId();
  return localStorage.getItem("digital-trust-chat-session-id") || `session-${Date.now()}`;
};

const createBaseDatabaseRecord = (eventType, payload) => ({
  session_id: getSessionIdSafe(payload),
  event_type: eventType,
  payload,
  page: window.location.href,
  user_agent: navigator.userAgent,
  language: document.documentElement.lang,
  created_at: new Date().toISOString()
});

const upsertSessionTrace = async (sessionId) => {
  await postToDatabase(
    DATABASE_TABLES.sessions,
    {
      session_id: sessionId,
      last_seen_at: new Date().toISOString(),
      page: window.location.href,
      language: document.documentElement.lang,
      user_agent: navigator.userAgent
    },
    { upsertOnConflict: "session_id" }
  );
};

const saveContactRequestTrace = async (sessionId, payload) => {
  await postToDatabase(DATABASE_TABLES.contactRequests, {
    session_id: sessionId,
    name: payload.name || "No proporcionado",
    email: payload.email || "No proporcionado",
    phone: payload.phone || null,
    service: payload.service || "No especificado",
    budget: payload.budget || "No indicado",
    message: payload.message || "",
    notification_ok: payload.notificaciónOk ?? null,
    welcome_ok: payload.bienvenidaOk ?? null,
    metadata: payload
  });

  await postToDatabase(DATABASE_TABLES.leads, {
    session_id: sessionId,
    source: "contact_form",
    status: "new",
    name: payload.name || null,
    email: payload.email || null,
    phone: payload.phone || null,
    service: payload.service || null,
    budget: payload.budget || null,
    urgency: "Normal",
    message: payload.message || "",
    metadata: payload
  });
};

const saveChatMessageTrace = async (sessionId, payload) => {
  await postToDatabase(DATABASE_TABLES.messages, {
    session_id: sessionId,
    sender: payload.sender === "user" ? "cliente" : payload.sender,
    message: payload.message || "",
    page: window.location.href,
    language: document.documentElement.lang
  });
};

const saveLeadTrace = async (sessionId, payload) => {
  const lead = payload.lead || {};
  const transcript = Array.isArray(payload.transcript) ? transcriptToText(payload.transcript) : "";

  await postToDatabase(DATABASE_TABLES.leads, {
    session_id: sessionId,
    source: "chatbot",
    status: "new",
    name: lead.name || (lead.email || lead.phone ? "Cliente desde chatbot" : null),
    email: lead.email || null,
    phone: lead.phone || null,
    service: lead.service || (Array.isArray(lead.services) ? lead.services.join(", ") : null),
    budget: lead.budget || null,
    urgency: lead.urgency || null,
    message: lead.rawText || lead.description || payload.reason || "",
    transcript,
    metadata: { ...payload, company: lead.company || null }
  });
};

const saveInteractionToDatabase = async (eventType, payload) => {
  const record = createBaseDatabaseRecord(eventType, payload);
  const sessionId = record.session_id;

  const localHistory = JSON.parse(localStorage.getItem("digital-trust-interactions") || "[]");
  localHistory.unshift(record);
  localStorage.setItem("digital-trust-interactions", JSON.stringify(localHistory.slice(0, 250)));

  if (!isDatabaseConfigured()) return;

  try {
    await upsertSessionTrace(sessionId);
    await postToDatabase(DATABASE_TABLES.events, record);

    if (eventType === "chat_message") {
      await saveChatMessageTrace(sessionId, payload);
    }

    if (eventType === "contact_form") {
      await saveContactRequestTrace(sessionId, payload);
    }

    if (
      eventType === "chat_lead_confirmed"
      || ((eventType === "chat_lead_email_sent" || eventType === "chat_lead_email_failed") && !payload.skip_lead_save)
    ) {
      await saveLeadTrace(sessionId, { ...payload, event_type: eventType });
    }
  } catch (error) {
    console.warn("[Database] No se pudo guardar en Supabase. Quedo respaldo local.", error);
  }
};

// ===== CHATBOT =====
const chatbotToggle = document.querySelector("[data-chatbot-toggle]");
const chatbotPanel = document.querySelector("[data-chatbot-panel]");
const chatbotMessages = document.querySelector("[data-chatbot-messages]");
const chatbotInput = document.querySelector("[data-chatbot-input]");
const chatbotSend = document.querySelector("[data-chatbot-send]");
const STORAGE_KEY = "digital-trust-chatbot-messages";
const CHAT_SESSION_KEY = "digital-trust-chat-session-id";
const LEAD_EMAIL_COOLDOWN_KEY = "digital-trust-last-lead-email";
const CHAT_LEAD_DRAFT_KEY = "digital-trust-chatbot-lead-draft";
const CHAT_LEAD_TEMPLATE_ID = EMAILJS_TEMPLATE_ID;

const isEnglish = () => document.documentElement.lang === "en";
const getChatCopy = () => translations[isEnglish() ? "en" : "es"].chatbotFlow;
const getSessionId = () => {
  let sessionId = localStorage.getItem(CHAT_SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID?.() || `session-${Date.now()}`;
    localStorage.setItem(CHAT_SESSION_KEY, sessionId);
  }
  return sessionId;
};

const leadSignals = /cotiz|cotizar|presupuesto|precio|valor|contratar|comprar|interesad|quiero|necesito|llamar|contact|agenda|propuesta|quote|budget|price|hire|buy|interested|need|call|proposal/i;
const guidedLeadSignals = /cotiz|cotizar|asesor|presupuesto|contratar|contact|interesad|quote|advisor|budget|hire|interested/i;

const chatbotServices = [
  { key: "website", label: "optionWebsite", service: "serviceWebsite" },
  { key: "improve", label: "optionImprove", service: "serviceImprove" },
  { key: "automation", label: "optionAutomation", service: "serviceAutomation" },
  { key: "quote", label: "optionQuote", service: "serviceQuote" },
  { key: "advisor", label: "optionAdvisor", service: "serviceAdvisor" },
  { key: "security", label: "optionSecurity", service: "serviceSecurity" },
  { key: "support", label: "optionSupport", service: "serviceSupport" }
];

const leadQuestionFlow = [
  { field: "name", question: "askName" },
  { field: "email", question: "askEmail" },
  { field: "phone", question: "askPhone" },
  { field: "company", question: "askCompany" },
  { field: "service", question: "askService" },
  { field: "budget", question: "askBudget" },
  { field: "urgency", question: "askUrgency" },
  { field: "description", question: "askDescription" }
];

const serviceLabels = {
  website: { es: "Página web / landing page", en: "Website / landing page" },
  ecommerce: { es: "Tienda online / e-commerce", en: "Online store / e-commerce" },
  software: { es: "Software a medida / plataforma", en: "Custom software / platform" },
  automation: { es: "Automatización de procesos", en: "Process automation" },
  support: { es: "Soporte, hosting o mantenimiento", en: "Support, hosting or maintenance" },
  integrations: { es: "Integraciones / APIs", en: "Integrations / APIs" },
  security: { es: "Seguridad, backups o monitoreo", en: "Security, backups or monitoring" },
  consulting: { es: "Consultoria técnica", en: "Technical consulting" }
};

const getChatTranscript = () => {
  if (!chatbotMessages) return [];
  return [...chatbotMessages.children].map((element) => ({
    sender: element.classList.contains("bot") ? "bot" : "cliente",
    text: element.textContent.replace(/\s+/g, " ").trim()
  }));
};

const transcriptToText = (messages) =>
  messages.map((message) => `${message.sender.toUpperCase()}: ${message.text}`).join("\n");

const extractLeadInfo = (messages = []) => {
  const text = messages.map((message) => message.text || message.html || "").join("\n");
  const lower = text.toLowerCase();
  const lang = isEnglish() ? "en" : "es";
  const services = [];

  if (/web|página|landing|sitio|website|site/.test(lower)) services.push("website");
  if (/tienda|ecommerce|e-commerce|shopify|woocommerce|catalogo|store|shop|sell|vender/.test(lower)) services.push("ecommerce");
  if (/software|app|sistema|plataforma|crm|dashboard|panel|inventario|reservas|system|platform|inventory|booking/.test(lower)) services.push("software");
  if (/automat|automatic|workflow|proceso|process|ia|ai/.test(lower)) services.push("automation");
  if (/api|integraci|webhook|erp|crm|integration/.test(lower)) services.push("integrations");
  if (/soporte|mantenimiento|hosting|support|maintenance/.test(lower)) services.push("support");
  if (/seguridad|ssl|backup|protección|security|secure|monitor/.test(lower)) services.push("security");
  if (/consult|asesor|diagnóstico|strategy|audit/.test(lower)) services.push("consulting");

  return {
    services: [...new Set(services)].map((service) => serviceLabels[service][lang]),
    email: text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || "",
    phone: text.match(/(?:\+?\d[\s-]?){8,16}/)?.[0]?.trim() || "",
    budget: text.match(/(?:\$|usd|cop|dólares|dólares)\s?[\d.,]+|[\d.,]+\s?(?:usd|cop|dólares|dólares)/i)?.[0] || "",
    urgency: /urgente|esta semana|hoy|rápido|rápido|asap|urgent|this week|today|soon/.test(lower)
      ? (lang === "en" ? "High" : "Alta")
      : (lang === "en" ? "Normal" : "Normal"),
    rawText: text
  };
};

const getLeadDraft = () => {
  try {
    return JSON.parse(localStorage.getItem(CHAT_LEAD_DRAFT_KEY) || "null");
  } catch {
    return null;
  }
};

const setLeadDraft = (draft) => {
  localStorage.setItem(CHAT_LEAD_DRAFT_KEY, JSON.stringify(draft));
};

const clearLeadDraft = () => {
  localStorage.removeItem(CHAT_LEAD_DRAFT_KEY);
};

const getServiceLabel = (serviceKey) => {
  const copy = getChatCopy();
  const option = chatbotServices.find((item) => item.key === serviceKey);
  return option ? copy[option.service] : serviceKey;
};

const normalizeLeadForSubmission = (draft = {}) => {
  const messages = getChatTranscript();
  const extracted = extractLeadInfo(messages);
  const service = draft.service || (draft.serviceKey ? getServiceLabel(draft.serviceKey) : "");
  const urgency = draft.urgency || extracted.urgency || getChatCopy().urgencyNormal;
  const priority = /alta|high|urgent|urgente|asap|hoy|today/i.test(urgency)
    ? getChatCopy().urgencyHigh
    : getChatCopy().urgencyNormal;

  return {
    name: draft.name || "",
    email: draft.email || extracted.email || "",
    phone: draft.phone || extracted.phone || "",
    company: draft.company || "",
    service: service || extracted.services.join(", ") || "",
    budget: draft.budget || extracted.budget || "",
    urgency: priority,
    description: draft.description || extracted.rawText || "",
    rawText: draft.description || extracted.rawText || "",
    transcript: messages
  };
};

const notifyLeadByEmail = async (reason = "Cliente interesado desde el chatbot", providedLead = null, options = {}) => {
  const messages = getChatTranscript();
  const lead = providedLead || normalizeLeadForSubmission(getLeadDraft() || {});
  const now = Date.now();
  const lastEmail = Number(localStorage.getItem(LEAD_EMAIL_COOLDOWN_KEY) || 0);

  if (now - lastEmail < 120000 && !providedLead) return { skipped: true };
  if (typeof emailjs === "undefined" || !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.startsWith("YOUR_")) return { skipped: true };

  const emailData = {
    name: lead.name || lead.email || lead.phone || "Cliente desde chatbot",
    email: lead.email || "No proporcionado",
    phone: lead.phone || "No proporcionado",
    service: lead.service || lead.services?.join(", ") || "Pendiente por definir",
    budget: lead.budget || "No indicado",
    message: `Motivo: ${reason}\nEmpresa: ${lead.company || "No proporcionada"}\nPrioridad: ${lead.urgency || "Normal"}\n\nResumen de solicitud:\n${lead.rawText || lead.description || ""}\n\nTranscripción:\n${transcriptToText(messages)}`
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, CHAT_LEAD_TEMPLATE_ID, emailData);
    localStorage.setItem(LEAD_EMAIL_COOLDOWN_KEY, String(now));
    await saveInteractionToDatabase("chat_lead_email_sent", {
      session_id: getSessionId(),
      reason,
      lead,
      transcript: messages,
      skip_lead_save: Boolean(options.skipLeadSave)
    });
    return { ok: true };
  } catch (error) {
    await saveInteractionToDatabase("chat_lead_email_failed", {
      session_id: getSessionId(),
      reason,
      lead,
      error: error?.text || error?.message || String(error),
      transcript: messages,
      skip_lead_save: Boolean(options.skipLeadSave)
    });
    return { ok: false, error };
  }
};

const botReplies = {
  price: {
    es: "Claro. Estos son valores de referencia:<ol><li><strong>Web profesional:</strong> desde $499.</li><li><strong>Software a medida:</strong> desde $1,900.</li><li><strong>Soporte mensual:</strong> desde $149/mes.</li></ol>Para cotizar mejor, dime:<ul><li>Servicio que necesitas.</li><li>Funciones principales.</li><li>Presupuesto aproximado.</li><li>Fecha ideal de lanzamiento.</li></ul>",
    en: "Sure. These are reference prices:<ol><li><strong>Professional website:</strong> from $499.</li><li><strong>Custom software:</strong> from $1,900.</li><li><strong>Monthly support:</strong> from $149/month.</li></ol>For a better quote, tell me:<ul><li>Service needed.</li><li>Main features.</li><li>Approximate budget.</li><li>Ideal launch date.</li></ul>"
  },
  time: {
    es: "Los tiempos dependen del alcance:<ol><li><strong>Landing page:</strong> 1 a 2 semanas.</li><li><strong>Web corporativa:</strong> 2 a 4 semanas.</li><li><strong>Tienda online:</strong> 3 a 6 semanas.</li><li><strong>Software a medida:</strong> 30 a 60 días para un MVP.</li></ol>Si tienes una fecha límite, cuéntamela y revisamos la mejor ruta.",
    en: "Timelines depend on scope:<ol><li><strong>Landing page:</strong> 1 to 2 weeks.</li><li><strong>Corporate website:</strong> 2 to 4 weeks.</li><li><strong>Online store:</strong> 3 to 6 weeks.</li><li><strong>Custom software:</strong> 30 to 60 days for an MVP.</li></ol>If you have a deadline, share it and we will review the best route."
  },
  human: {
    es: 'Perfecto. Puedes hablar directamente con nosotros por WhatsApp:<br><br><a href="https://wa.me/573184289661?text=%C2%A1Hola!%20%F0%9F%91%8B%20Vi%20su%20p%C3%A1gina%20web%20y%20estoy%20interesado%20en%20los%20servicios%20que%20ofrecen.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%2C%20si%20es%20posible%2C%20una%20asesor%C3%ADa%20para%20conocer%20cu%C3%A1l%20es%20la%20mejor%20soluci%C3%B3n%20para%20mi%20empresa.%20%C2%A1Muchas%20gracias!" target="_blank" rel="noreferrer">Abrir WhatsApp</a><br><br>Para ayudarte más rápido, envía:<ol><li>Tu nombre.</li><li>Servicio que necesitas.</li><li>Fecha ideal.</li><li>Presupuesto aproximado.</li></ol>',
    en: 'Perfect. You can talk directly with us on WhatsApp:<br><br><a href="https://wa.me/573184289661?text=%C2%A1Hola!%20%F0%9F%91%8B%20Vi%20su%20p%C3%A1gina%20web%20y%20estoy%20interesado%20en%20los%20servicios%20que%20ofrecen.%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20y%2C%20si%20es%20posible%2C%20una%20asesor%C3%ADa%20para%20conocer%20cu%C3%A1l%20es%20la%20mejor%20soluci%C3%B3n%20para%20mi%20empresa.%20%C2%A1Muchas%20gracias!" target="_blank" rel="noreferrer">Open WhatsApp</a><br><br>To help you faster, send:<ol><li>Your name.</li><li>Service needed.</li><li>Ideal date.</li><li>Approximate budget.</li></ol>'
  },
  web: {
    es: "Podemos ayudarte con desarrollo web profesional:<ol><li>Landing pages para captar clientes.</li><li>Páginas corporativas para presentar servicios.</li><li>Blogs o secciones de contenido.</li><li>Formularios, WhatsApp, mapas y analítica.</li></ol>Pregunta clave: ¿quieres una web para informar, captar clientes o vender?",
    en: "We can help with professional web development:<ol><li>Landing pages to capture leads.</li><li>Corporate websites to present services.</li><li>Blogs or content sections.</li><li>Forms, WhatsApp, maps, and analytics.</li></ol>Key question: do you want a website to inform, capture leads, or sell?"
  },
  software: {
    es: "El software a medida sirve para ordenar procesos internos. Podemos crear:<ol><li>CRM para clientes y ventas.</li><li>Sistemas de reservas o citas.</li><li>Inventarios y reportes.</li><li>Paneles administrativos.</li><li>Portales para clientes o empleados.</li></ol>Para orientarte mejor: ¿qué proceso quieres controlar?",
    en: "Custom software helps organize internal processes. We can build:<ol><li>CRM for clients and sales.</li><li>Booking or appointment systems.</li><li>Inventory and reports.</li><li>Admin dashboards.</li><li>Client or employee portals.</li></ol>To guide you better: what process do you want to control?"
  },
  ecommerce: {
    es: "Para una tienda online podemos incluir:<ol><li>Catálogo de productos.</li><li>Carrito y checkout.</li><li>Pasarela de pago.</li><li>Inventario y cupones.</li><li>Gestión de pedidos y envíos.</li></ol>Para cotizar: ¿cuántos productos quieres vender y qué método de pago necesitas?",
    en: "For an online store we can include:<ol><li>Product catalog.</li><li>Cart and checkout.</li><li>Payment gateway.</li><li>Inventory and coupons.</li><li>Order and shipping management.</li></ol>To quote: how many products do you want to sell and what payment method do you need?"
  },
  support: {
    es: "El soporte mensual puede cubrir:<ol><li>Backups y recuperación.</li><li>Actualizaciones técnicas.</li><li>Monitoreo y seguridad.</li><li>Corrección de errores.</li><li>Mejoras pequeñas mensuales.</li></ol>Pregunta: ¿tu sitio ya está publicado o está en desarrollo?",
    en: "Monthly support can include:<ol><li>Backups and recovery.</li><li>Technical updates.</li><li>Monitoring and security.</li><li>Bug fixes.</li><li>Small monthly improvements.</li></ol>Question: is your site already published or still in development?"
  },
  automation: {
    es: "Podemos automatizar tareas repetitivas como:<ol><li>Enviar correos o WhatsApp automáticos.</li><li>Guardar formularios en hojas de cálculo o CRM.</li><li>Generar reportes programados.</li><li>Crear recordatorios y alertas.</li><li>Conectar herramientas internas.</li></ol>Para empezar: ¿qué tarea repites todos los días?",
    en: "We can automate repetitive tasks such as:<ol><li>Sending automatic emails or WhatsApp messages.</li><li>Saving forms into spreadsheets or CRM.</li><li>Generating scheduled reports.</li><li>Creating reminders and alerts.</li><li>Connecting internal tools.</li></ol>To start: what task do you repeat every day?"
  },
  integrations: {
    es: "Podemos conectar tus herramientas para que trabajen juntas:<ol><li>APIs y webhooks.</li><li>Pasarelas de pago.</li><li>CRM o ERP.</li><li>Google Sheets y formularios.</li><li>Sistemas internos existentes.</li></ol>Dime qué herramientas usas y que información debe viajar entre ellas.",
    en: "We can connect your tools so they work together:<ol><li>APIs and webhooks.</li><li>Payment gateways.</li><li>CRM or ERP.</li><li>Google Sheets and forms.</li><li>Existing internal systems.</li></ol>Tell me what tools you use and what information should move between them."
  },
  security: {
    es: "En seguridad podemos ayudarte con:<ol><li>Certificado SSL.</li><li>Backups periódicos.</li><li>Control de accesos.</li><li>Actualizaciones y monitoreo.</li><li>Buenas prácticas para datos de clientes.</li></ol>Si manejas información sensible, podemos revisar el nivel de protección necesario.",
    en: "For security we can help with:<ol><li>SSL certificate.</li><li>Periodic backups.</li><li>Access control.</li><li>Updates and monitoring.</li><li>Best practices for customer data.</li></ol>If you handle sensitive information, we can review the protection level needed."
  },
  lead: {
    es: "Excelente. Para prepararte una propuesta necesito estos datos:<ol><li><strong>Servicio:</strong> web, software, tienda online, automatización o soporte.</li><li><strong>Objetivo:</strong> qué problema quieres resolver.</li><li><strong>Presupuesto aproximado:</strong> si ya tienes un rango.</li><li><strong>Fecha ideal:</strong> cuándo quieres lanzar.</li><li><strong>Contacto:</strong> correo o WhatsApp.</li></ol>Con eso puedo enviar un resumen al equipo comercial.",
    en: "Excellent. To prepare a proposal, I need these details:<ol><li><strong>Service:</strong> website, software, online store, automation, or support.</li><li><strong>Goal:</strong> what problem you want to solve.</li><li><strong>Approximate budget:</strong> if you already have a range.</li><li><strong>Ideal date:</strong> when you want to launch.</li><li><strong>Contact:</strong> email or WhatsApp.</li></ol>With that, I can send a summary to the sales team."
  },
  hello: {
    es: "Hola, soy el asistente de Digital Trust Solutions. Puedo ayudarte con:<ol><li>Páginas web.</li><li>Software a medida.</li><li>Tiendas online.</li><li>Automatización.</li><li>Soporte y mantenimiento.</li></ol>¿Sobre qué servicio quieres información?",
    en: "Hello, I'm the Digital Trust Solutions assistant. I can help with:<ol><li>Websites.</li><li>Custom software.</li><li>Online stores.</li><li>Automation.</li><li>Support and maintenance.</li></ol>Which service would you like information about?"
  },
  fallback: {
    es: "Entiendo. Para orientarte mejor, elige una opción:<ol><li>Quiero una página web.</li><li>Necesito software a medida.</li><li>Quiero vender online.</li><li>Necesito automatizar un proceso.</li><li>Busco soporte o mantenimiento.</li></ol>También puedes escribir tu caso con tus propias palabras.",
    en: "I understand. To guide you better, choose one option:<ol><li>I need a website.</li><li>I need custom software.</li><li>I want to sell online.</li><li>I need to automate a process.</li><li>I need support or maintenance.</li></ol>You can also describe your case in your own words."
  }
};

const buildActionButtons = (actions) => `
  <div class="quick-replies">
    ${actions.map((action) =>
      `<button type="button" data-chat-action="${action.action}" data-chat-value="${action.value || ""}">${action.label}</button>`
    ).join("")}
  </div>
`;

const escapeChatText = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));

const buildMainMenu = () => {
  const copy = getChatCopy();
  return `<strong>${copy.optionsTitle}</strong>${buildActionButtons(chatbotServices.map((service) => ({
    action: "start-lead",
    value: service.key,
    label: copy[service.label]
  })))}`
};

const askCurrentLeadQuestion = () => {
  const draft = getLeadDraft();
  if (!draft) return;
  const copy = getChatCopy();
  const question = leadQuestionFlow[draft.step];
  if (!question) {
    showLeadSummary();
    return;
  }

  if (question.field === "service") {
    addMessage(`${copy[question.question]}${buildActionButtons(chatbotServices.map((service) => ({
      action: "answer-lead",
      value: copy[service.service],
      label: copy[service.label]
    })))}`, "bot");
    return;
  }

  if (question.field === "urgency") {
    addMessage(`${copy[question.question]}${buildActionButtons([
      { action: "answer-lead", value: copy.urgencyNormal, label: copy.urgencyNormal },
      { action: "answer-lead", value: copy.urgencyHigh, label: copy.urgencyHigh }
    ])}`, "bot");
    return;
  }

  addMessage(copy[question.question], "bot");
};

const startGuidedLead = (serviceKey = "quote") => {
  const copy = getChatCopy();
  const draft = {
    step: 0,
    serviceKey,
    service: getServiceLabel(serviceKey),
    status: "collecting",
    createdAt: new Date().toISOString()
  };
  setLeadDraft(draft);
  addMessage(`${copy.intro}<br><br>${copy.askName}`, "bot");
};

const updateLeadAnswer = (answer) => {
  const draft = getLeadDraft();
  if (!draft) return false;
  const question = leadQuestionFlow[draft.step];
  if (!question) return false;

  draft[question.field] = answer;
  draft.step += 1;

  if (draft.serviceKey && question.field === "service") {
    draft.serviceKey = "";
  }

  setLeadDraft(draft);
  askCurrentLeadQuestion();
  return true;
};

const leadSummaryHtml = (lead) => {
  const copy = getChatCopy();
  const item = (label, value) => `<li><strong>${label}:</strong> ${escapeChatText(value || copy.pending)}</li>`;
  return `
    <strong>${copy.summaryTitle}</strong>
    <ol>
      ${item(copy.labelName, lead.name)}
      ${item(copy.labelEmail, lead.email)}
      ${item(copy.labelPhone, lead.phone)}
      ${item(copy.labelCompany, lead.company)}
      ${item(copy.labelService, lead.service)}
      ${item(copy.labelBudget, lead.budget)}
      ${item(copy.labelPriority, lead.urgency || copy.urgencyNormal)}
      ${item(copy.labelRequest, lead.description || lead.rawText)}
    </ol>
    ${copy.confirmQuestion}
    ${buildActionButtons([
      { action: "confirm-lead", value: "send", label: copy.confirmSend },
      { action: "edit-lead", value: "edit", label: copy.editRequest },
      { action: "cancel-lead", value: "cancel", label: copy.cancelRequest }
    ])}
  `;
};

const showLeadSummary = () => {
  const draft = getLeadDraft();
  if (!draft) return;
  const lead = normalizeLeadForSubmission(draft);
  draft.status = "confirming";
  setLeadDraft(draft);
  addMessage(leadSummaryHtml(lead), "bot");
};

const submitGuidedLead = async () => {
  const copy = getChatCopy();
  const draft = getLeadDraft();
  if (!draft) return;
  const lead = normalizeLeadForSubmission(draft);
  const transcript = getChatTranscript();

  await saveInteractionToDatabase("chat_lead_confirmed", {
    session_id: getSessionId(),
    reason: "Solicitud confirmada desde chatbot",
    lead,
    transcript
  });

  const emailResult = await notifyLeadByEmail("Solicitud confirmada desde chatbot", lead, { skipLeadSave: true });
  clearLeadDraft();
  addMessage(emailResult?.ok ? copy.sent : copy.sendError, "bot");
};

const getBotResponse = (text) => {
  const lower = text.toLowerCase();
  const lang = isEnglish() ? "en" : "es";
  if (leadSignals.test(lower)) return botReplies.lead[lang];
  if (/precio|costo|cotiz|plan|price|cost|quote/.test(lower)) return botReplies.price[lang];
  if (/tiempo|tarda|cuando|días|time|long|take|week/.test(lower)) return botReplies.time[lang];
  if (/whatsapp|chat|hablar|humano|persona|human|talk|person/.test(lower)) return botReplies.human[lang];
  if (/web|página|sitio|website|page|site/.test(lower)) return botReplies.web[lang];
  if (/software|app|sistema|plataforma|application|system|platform/.test(lower)) return botReplies.software[lang];
  if (/ecommerce|tienda|vender|online|store|shop|sell/.test(lower)) return botReplies.ecommerce[lang];
  if (/automat|workflow|proceso|ia|ai|automatic/.test(lower)) return botReplies.automation[lang];
  if (/api|integraci|webhook|erp|crm|integration/.test(lower)) return botReplies.integrations[lang];
  if (/seguridad|ssl|backup|protección|security|secure/.test(lower)) return botReplies.security[lang];
  if (/soporte|mantenimiento|hosting|support|maintenance/.test(lower)) return botReplies.support[lang];
  if (/hola|buenos|hey|hello|hi/.test(lower)) return botReplies.hello[lang];
  return botReplies.fallback[lang];
};

const sanitizeBotHtml = (html = "") => {
  const template = document.createElement("template");
  template.innerHTML = String(html);
  const allowedTags = new Set(["A", "BR", "OL", "UL", "LI", "STRONG", "DIV", "BUTTON"]);
  const allowedButtonAttrs = new Set(["type", "data-quick-reply", "data-chat-action", "data-chat-value"]);

  [...template.content.querySelectorAll("*")].forEach((node) => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent || ""));
      return;
    }

    [...node.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();
      if (node.tagName === "A") {
        if (!["href", "target", "rel"].includes(name)) node.removeAttribute(attr.name);
        if (name === "href" && !/^https?:\/\//i.test(attr.value)) node.removeAttribute(attr.name);
      } else if (node.tagName === "BUTTON") {
        if (!allowedButtonAttrs.has(name)) node.removeAttribute(attr.name);
      } else if (name !== "class" || node.className !== "quick-replies") {
        node.removeAttribute(attr.name);
      }
    });

    if (node.tagName === "A") {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noreferrer");
    }
  });

  return template.innerHTML;
};

const addMessage = (html, sender) => {
  const bubble = document.createElement("div");
  bubble.className = `chatbot-bubble ${sender}`;
  if (sender === "user") {
    bubble.textContent = html;
  } else {
    bubble.innerHTML = sanitizeBotHtml(html);
  }
  chatbotMessages?.appendChild(bubble);
  chatbotMessages?.scrollTo({ top: chatbotMessages.scrollHeight, behavior: "smooth" });
  saveMessages();
  saveInteractionToDatabase("chat_message", {
    session_id: getSessionId(),
    sender,
    message: bubble.textContent.replace(/\s+/g, " ").trim()
  });
};

const saveMessages = () => {
  if (!chatbotMessages) return;
  const msgs = [...chatbotMessages.children].map(el => ({
    html: el.innerHTML,
    text: el.textContent,
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
      if (m.sender === "user") {
        bubble.textContent = m.text || m.html || "";
      } else {
        bubble.innerHTML = sanitizeBotHtml(m.html || m.text || "");
      }
      chatbotMessages?.appendChild(bubble);
    });
  } catch {}
};

const showWelcome = () => {
  if (!chatbotMessages || chatbotMessages.children.length > 0) return;
  const copy = getChatCopy();
  addMessage(`${copy.welcome}<br><br>${buildMainMenu()}`, "bot");
};

const handleChatbotSend = () => {
  const text = chatbotInput?.value.trim();
  if (!text) return;
  addMessage(text, "user");
  chatbotInput.value = "";
  setTimeout(() => {
    const activeDraft = getLeadDraft();
    if (activeDraft?.status === "confirming") {
      if (/^(si|sí|yes|confirmo|send|enviar)/i.test(text)) {
        submitGuidedLead();
        return;
      }
      if (/^(no|cancel|cancelar)/i.test(text)) {
        clearLeadDraft();
        addMessage(getChatCopy().cancelled, "bot");
        return;
      }
    }

    if (getLeadDraft()?.status === "collecting") {
      updateLeadAnswer(text);
      return;
    }

    if (guidedLeadSignals.test(text)) {
      startGuidedLead("quote");
      return;
    }

    addMessage(getBotResponse(text), "bot");
    const lead = extractLeadInfo(getChatTranscript());
    if (leadSignals.test(text) || lead.email || lead.phone) {
      notifyLeadByEmail("Cliente interesado desde el chatbot");
    }
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

chatbotMessages?.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-chat-action]");
  if (actionButton) {
    const action = actionButton.dataset.chatAction;
    const value = actionButton.dataset.chatValue || "";

    addMessage(actionButton.textContent.trim(), "user");

    if (action === "start-lead") {
      startGuidedLead(value || "quote");
      return;
    }

    if (action === "answer-lead") {
      updateLeadAnswer(value || actionButton.textContent.trim());
      return;
    }

    if (action === "confirm-lead") {
      submitGuidedLead();
      return;
    }

    if (action === "edit-lead") {
      const copy = getChatCopy();
      clearLeadDraft();
      addMessage(copy.edit, "bot");
      startGuidedLead("quote");
      return;
    }

    if (action === "cancel-lead") {
      clearLeadDraft();
      addMessage(getChatCopy().cancelled, "bot");
      return;
    }
  }

  const button = event.target.closest("[data-quick-reply]");
  if (!button || !chatbotInput) return;
  chatbotInput.value = button.dataset.quickReply;
  handleChatbotSend();
});

// ===== REVEAL ON SCROLL =====

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -80px",
      threshold: 0.12
    }
  );

  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}

loadMessages();
applyManagedContent();
