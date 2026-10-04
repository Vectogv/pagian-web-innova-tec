// Datos de contacto: cámbialos aquí y se actualizan en toda la página
export const WHATSAPP = "570000000000"; // número con código de país, sin + ni espacios
export const EMAIL = "contacto@innovatec.com";

export const waUrl = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
