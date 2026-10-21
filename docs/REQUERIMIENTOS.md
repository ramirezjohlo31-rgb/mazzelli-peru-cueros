# Requerimientos del Sistema

**Proyecto:** Sitio web Industrias Mazzelli-Perú Cueros E.I.R.L.
**Autor:** Johan Brayan Ramírez Ccoyllo
**Versión:** 1.0 — Avance 1 (Semana 8)

---

## 1. Objetivo general

Desarrollar un sitio web corporativo que permita a Industrias Mazzelli-Perú
Cueros E.I.R.L. presentar su identidad de marca, exhibir su catálogo de
productos de cuero y facilitar el contacto de clientes potenciales y
empresarios.

## 2. Alcance

|                 | Descripción                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Incluido**    | Sitio de 8 vistas, catálogo interactivo, fichas de producto, formulario de contacto, contenido institucional, despliegue público en GitHub Pages |
| **No incluido** | Panel de administración, base de datos, carrito de compras, pasarela de pago, cuentas de usuario, multi-idioma                                   |

---

## 3. Requerimientos funcionales

### RF-01 · Navegación principal

El sitio debe ofrecer una barra de navegación fija con acceso a todas las
secciones principales y un botón de acceso directo a contacto por WhatsApp.

**Criterio de aceptación:** desde cualquier página se alcanza cada sección en
un máximo de un clic; la opción activa se destaca visualmente.

### RF-02 · Página de inicio

Debe presentar la propuesta de valor, las categorías de productos, una
selección de productos destacados, el proceso artesanal, las garantías de la
empresa, los servicios B2B, testimonios y una llamada a la acción.

**Criterio de aceptación:** la página carga sin interacción previa y contiene
las ocho secciones señaladas.

### RF-03 · Catálogo de productos

El sistema debe listar el catálogo completo con, al menos, 12 productos
distribuidos en 5 categorías (carteras, cinturones, billeteras, mochilas y
accesorios).

**Criterio de aceptación:** cada producto muestra imagen, nombre, categoría,
precio, colores y disponibilidad.

### RF-04 · Filtrado por categoría

El usuario debe poder filtrar el catálogo por categoría, viendo el número de
productos disponibles en cada una.

**Criterio de aceptación:** al seleccionar una categoría, la rejilla muestra
únicamente los productos correspondientes y un contador actualizado.

### RF-05 · Búsqueda de productos

Debe existir un buscador que compare el texto introducido con el nombre, la
descripción y los materiales de cada producto.

**Criterio de aceptación:** la búsqueda es insensible a mayúsculas y se
actualiza con un retardo de 250 ms (debounce) para no bloquear la interfaz.

### RF-06 · Ordenamiento de resultados

El usuario debe poder ordenar el catálogo por: destacados, menor precio, mayor
precio y nombre alfabético.

**Criterio de aceptación:** el orden se aplica de inmediato sobre el conjunto
filtrado.

### RF-07 · Ficha de producto

Cada producto debe contar con una vista de detalle con galería de imágenes,
descripción extendida, materiales, medidas, colores, código, precio, estado de
stock y productos relacionados de la misma categoría.

**Criterio de aceptación:** el acceso es mediante una URL propia
(`/productos/:slug`); una URL inexistente muestra la página de error 404 del
sitio.

### RF-08 · Contacto por WhatsApp

Todo el sitio debe ofrecer la posibilidad de iniciar una conversación por
WhatsApp, con el mensaje prellenado según el contexto (general o producto
específico).

**Criterio de aceptación:** el enlace se abre en una pestaña nueva y el texto
incluye los datos del producto cuando corresponde.

### RF-09 · Formulario de contacto

Debe existir un formulario con los campos nombre, correo, teléfono, motivo y
mensaje, que permita elegir entre envío por WhatsApp o por correo electrónico.

**Criterio de aceptación:** el formulario impide el envío si falta un campo
obligatorio o si el correo tiene un formato inválido, mostrando el error bajo
el campo correspondiente.

### RF-10 · Contenido institucional

El sitio debe incluir una página "Nosotros" (misión, visión, valores, proceso
e historia) y una "Galería" con el proceso de fabricación.

**Criterio de aceptación:** ambas páginas están enlazadas desde el menú y
responden con información de la empresa.

### RF-11 · Servicios B2B

Debe existir una sección que describa producción a medida, venta mayorista,
corporativos y reparación, con el detalle de qué incluye cada servicio.

**Criterio de aceptación:** la página incluye además las preguntas frecuentes
y el proceso de contratación.

### RF-12 · Página de error

Todo acceso a una ruta inexistente debe mostrar una página 404 institucional
con enlace al inicio y al catálogo.

**Criterio de aceptación:** no se muestra una pantalla en blanco ni el error
del servidor.

---

## 4. Requerimientos no funcionales

### RNF-01 · Diseño responsive

El sitio debe verse correctamente en anchos de 360 px, 768 px, 1280 px y 1920 px,
con navegación móvil desplegable.

### RNF-02 · Performance

El bundle inicial no debe superar 120 kB (gzip) y cada ruta debe cargarse de
forma diferida. El objetivo de Lighthouse en escritorio es ≥ 90 en
_Performance_, _Accessibility_, _Best Practices_ y _SEO_.

### RNF-03 · Accesibilidad (WCAG 2.1 nivel AA)

- Landmarks semánticos (`header`, `nav`, `main`, `footer`).
- Enlace de salto al contenido principal.
- Foco visible en todos los elementos interactivos.
- Contraste mínimo 4.5:1 en texto corriente.
- Textos alternativos en imágenes y `aria-label` en botones de solo icono.
- Respeto de `prefers-reduced-motion`.

### RNF-04 · SEO

Metadatos de título y descripción por ruta, etiquetas Open Graph, `robots.txt`,
`sitemap.xml` y estructura semántica de encabezados (`h1` único por página).

### RNF-05 · Compatibilidad

Navegadores actuales: Chrome, Edge, Firefox y Safari (últimas dos versiones).
Diseño _mobile-first_.

### RNF-06 · Mantenibilidad

- Separación estricta de capas y responsabilidades.
- Componentes de UI reutilizables y agnósticos al negocio.
- Código formateado con Prettier y validado con oxlint.
- Documentación técnica en `docs/`.

### RNF-07 · Seguridad y privacidad

Sin almacenamiento de datos personales en servidor. Enlaces externos con
`rel="noopener noreferrer"`. Sin dependencias con vulnerabilidades conocidas.

### RNF-08 · Despliegue y reproducibilidad

Publicación automática en GitHub Pages mediante GitHub Actions. El proyecto
debe poder reconstruirse con `npm ci && npm run build` en un entorno limpio.

### RNF-09 · Costo

El proyecto no debe requerir licencias de pago ni servicios de hosting
pagados.

### RNF-10 · Versionado

Todo el código en GitHub con ramas protegidas, Pull Requests, commits
convencionales e historial trazable por _milestones_.

---

## 5. Reglas de negocio

| Código | Regla                                                                                 |
| ------ | ------------------------------------------------------------------------------------- |
| RB-01  | Los precios se muestran en soles (S/) con dos decimales                               |
| RB-02  | El IGV no está incluido en el precio mostrado; se indica explícitamente               |
| RB-03  | Un producto sin stock se marca "Agotado · por encargo" y mantiene su ficha            |
| RB-04  | La garantía de fabricación es de 1 año contra defectos de curtido, costura y herrajes |
| RB-05  | Todo el material es cuero genuino de curtido vegetal                                  |

---

## 6. Casos de uso principales

| ID    | Actor       | Caso de uso                                                              |
| ----- | ----------- | ------------------------------------------------------------------------ |
| CU-01 | Visitante   | Explorar el catálogo por categoría y encontrar un producto de su interés |
| CU-02 | Visitante   | Consultar el precio y las medidas de un producto concreto                |
| CU-03 | Visitante   | Enviar una consulta general por WhatsApp desde la portada                |
| CU-04 | Visitante   | Enviar una consulta detallada con sus datos desde el formulario          |
| CU-05 | -Empresario | Conocer los servicios de producción a medida y venta mayorista           |
| CU-06 | Visitante   | Localizar la dirección, el teléfono y el horario de atención             |

---

## 7. Trazabilidad de losAvance 1

| Requerimiento | Implementación                                            | Estado |
| ------------- | --------------------------------------------------------- | ------ |
| RF-01         | `components/layout/Navbar.jsx`                            | ✅     |
| RF-02         | `pages/Home.jsx`                                          | ✅     |
| RF-03         | `data/catalogo.js`, `features/catalogo/ProductGrid.jsx`   | ✅     |
| RF-04         | `features/catalogo/FilterBar.jsx`, `useCatalogo.js`       | ✅     |
| RF-05         | `features/catalogo/FilterBar.jsx`, `hooks/useDebounce.js` | ✅     |
| RF-06         | `useCatalogo.js` (orden)                                  | ✅     |
| RF-07         | `pages/ProductoDetalle.jsx`, `ProductGallery.jsx`         | ✅     |
| RF-08         | `services/whatsapp.js`                                    | ✅     |
| RF-09         | `features/contacto/ContactForm.jsx`, `validacion.js`      | ✅     |
| RF-10         | `pages/Nosotros.jsx`, `pages/Galeria.jsx`                 | ✅     |
| RF-11         | `pages/Servicios.jsx`                                     | ✅     |
| RF-12         | `pages/NoEncontrado.jsx`                                  | ✅     |
