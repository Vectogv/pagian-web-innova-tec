// Servicios: se usan en la página de servicios y en el selector del formulario de contacto
export const serviceGroups = [
  { id: "automatizar", title: "Automatizar", lead: "Que las tareas repetitivas se hagan solas.", items: [
    ["Flujos con n8n", "Conectamos CRM, correo, hojas de cálculo y facturación para que los datos se muevan solos."],
    ["Chatbots y asistentes virtuales", "Para WhatsApp, web o Telegram: responden, agendan citas y califican prospectos."],
    ["Lectura de documentos", "Extracción automática de datos de facturas, PDFs y formularios."],
  ]},
  { id: "construir", title: "Construir", lead: "Herramientas hechas a la medida de cómo trabaja tu negocio.", items: [
    ["Software a medida", "Paneles administrativos, inventarios y herramientas internas hechas para tu operación."],
    ["Integraciones y APIs", "Webhooks, ERPs, pasarelas de pago y bases de datos conectadas entre sí."],
    ["Páginas web", "Sitios rápidos y listos para captar clientes, conectados a tus automatizaciones."],
  ]},
  { id: "acompanar", title: "Acompañar", lead: "Para que todo siga funcionando y crezca contigo.", items: [
    ["Reportes automáticos", "Dashboards y reportes que se generan y envían sin que nadie los arme."],
    ["Consultoría", "Revisamos tus procesos y te decimos qué automatizar primero y por qué."],
    ["Capacitación y soporte", "Tu equipo aprende a usar lo que construimos y nosotros lo mantenemos."],
  ]},
];

export const serviceNames = serviceGroups.flatMap((g) => g.items.map(([name]) => name));
