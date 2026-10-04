# Innova Tec — reglas del proyecto

Sitio estático con Astro (`npm run dev`, `npm run build` → `dist/`).

## Regla principal: debe funcionar en celular y en PC tradicional

Todo cambio debe verse y usarse bien en:
- **Celular** (desde 360px de ancho, pantallas táctiles, equipos de gama baja).
- **PC tradicional** (escritorio y portátil, incluidos equipos viejos sin buena tarjeta gráfica).

Al hacer cambios:
- Diseño responsive: las columnas se reacomodan en una sola en pantallas angostas; nunca scroll horizontal; margen lateral mínimo de 16px.
- Zonas táctiles de al menos 44px de alto (botones, campos, enlaces del menú).
- Nada depende del hover: toda acción funciona también con toque y con teclado.
- Efectos pesados (3D, animaciones) son opcionales: si WebGL falla, la página se ve igual sin el efecto; respetar `prefers-reduced-motion`; pausar cuando no están en pantalla; limitar `devicePixelRatio` a 2.
- Dependencias instaladas con npm (no CDN), para que funcione sin depender de servicios externos.
- Compatibilidad con navegadores actuales: Chrome, Edge, Firefox y Safari (incluido Safari de iPhone).
- Antes de dar un cambio por terminado: `npm run build` sin errores y revisar en ancho de celular y de escritorio.

## Datos editables
- Contacto (WhatsApp, correo): `src/config.js`.
- Precios: `src/components/Plans.astro`.
- Estilos y tokens de diseño: `src/styles/global.css`.
