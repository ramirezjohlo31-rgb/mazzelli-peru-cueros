<div align="center">

# Mazzelli · Industrias Mazzelli-Perú Cueros E.I.R.L.

**Sitio web corporativo — cuero artesanal del Perú**

[![Deploy to GitHub Pages](https://github.com/ramirezjohlo31-rgb/mazzelli-peru-cueros/actions/workflows/deploy.yml/badge.svg)](https://github.com/ramirezjohlo31-rgb/mazzelli-peru-cueros/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-c89b3c?style=flat-square)](LICENSE)

🌐 **Demo en vivo:** [ramirezjohlo31-rgb.github.io/mazzelli-peru-cueros](https://ramirezjohlo31-rgb.github.io/mazzelli-peru-cueros/)

</div>

---

## 📋 Sobre el proyecto

Sitio web corporativo para **Industrias Mazzelli-Perú Cueros E.I.R.L.**, taller
peruano de curtido vegetal y confección de artículos de cuero (carteras,
cinturones, billeteras, mochilas y accesorios).

El proyecto es un **frontend puro** (SPA) que cumple tres objetivos:

1. **Comunicar la marca** — identidad visual "cuero premium", proceso artesanal y garantías.
2. **Mostrar el catálogo** — 12 referencias con filtros por categoría, buscador y ordenamiento.
3. **Generar contactos** — ficha de producto y formulario que envían la consulta por **WhatsApp** o **correo**, sin necesidad de servidor.

> **Estado del proyecto:** Avance 1 — Semana 8 · Entrega final: Semana 16

---

## 🛠️ Stack tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework de UI | React | 19.3.1 |
| Enrutamiento | React Router | 7.18.4 |
| Bundler / dev server | Vite | 8.3.5 |
| Estilización | Tailwind CSS (config CSS-first con `@theme`) | 4.3.3 |
| Linter | oxlint | 1.88.0 |
| Control de versiones | Git + GitHub | 2.55 |
| CI/CD | GitHub Actions → GitHub Pages | — |
| Documentación | Markdown + Mermaid | — |

📄 Informe detallado: [`docs/INFORME-TECNOLOGICO.md`](docs/INFORME-TECNOLOGICO.md)

---

## 🚀 Puesta en marcha

Requisitos: **Node.js 20+** (probado con v24.21.0) y **npm**.

```bash
# 1. Clonar el repositorio
git clone https://github.com/ramirezjohlo31-rgb/mazzelli-peru-cueros.git
cd mazzelli-peru-cueros

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev        # → http://localhost:5173/mazzelli-peru-cueros/

# 4. Construir para producción
npm run build      # → dist/

# 5. Previsualizar la compilación
npm run preview
```

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR (recarga instantánea) |
| `npm run build` | Compila a `dist/` con minificación y code splitting |
| `npm run preview` | Sirve localmente la compilación de producción |
| `npm run lint` | Análisis estático con oxlint |
| `npm run assets` | Regenera los SVG del catálogo, galería y favicon |
| `npm run wireframes` | Regenera los wireframes de `docs/wireframes/` |

---

## 🏗️ Arquitectura

Arquitectura **por capas** combinada con organización **por features**:

```
src/
├── app/            CAPA 1 · PRESENTACIÓN — App, rutas, Layout (chrome)
├── pages/          Páginas de ruta (lazy-loaded, code splitting)
├── components/
│   ├── ui/         Componentes genéricos (Button, Card, Input, Icon…)
│   └── layout/     Chrome de la aplicación (Navbar, Footer)
├── features/       CAPA 2 · DOMINIO — lógica por módulo
│   ├── catalogo/   ProductCard, ProductGrid, FilterBar, useCatalogo
│   └── contacto/   ContactForm, useContactForm, validacion
├── data/           CAPA 3 · DATOS — catalogo.js, empresa.js, servicios.js
├── services/       Integraciones externas — whatsapp.js, mailto.js
├── hooks/          Hooks reutilizables — useDebounce, useMediaQuery
├── utils/          Utilidades compartidas — recursos.js (rutas de `public/`)
└── styles/         Sistema de diseño — tokens @theme de Tailwind v4
```

**Flujo de datos:** `Página → hook (useCatalogo) → data/catalogo.js`
`Formulario → services/whatsapp.js → window.open(wa.me)`

📄 Detalle y diagramas: [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md)

---

## 🎨 Sistema de diseño

Tokens definidos en `src/styles/index.css` mediante `@theme` de Tailwind v4:

| Token | Color | Uso |
|---|---|---|
| `cuero-900` | `#3E2A20` | Fondos oscuros, navbar, footer |
| `cognac-500` | `#8B5E3C` | Color de marca, CTA |
| `crema-50` | `#FAF6F0` | Fondo general |
| `oro-500` | `#C89B3C` | Acentos, filetes, badges |
| `tinta-900` | `#1C1512` | Texto principal |

Tipografías: **Playfair Display** (títulos) + **Inter** (texto).

---

## ✅ Funcionalidades

- **Catálogo** con 12 productos, filtro por categoría, buscador con *debounce* y 4 criterios de ordenamiento.
- **Ficha de producto** con galería, especificaciones y CTA a WhatsApp con el mensaje precargado.
- **Formulario de contacto** con validación propia (capa de dominio pura), choice de canal (WhatsApp / correo) y alternate sin JavaScript.
- **Navegación responsive** con menú móvil, enlace "saltar al contenido" y botón flotante de WhatsApp.
- **SEO**: metadatos por ruta, Open Graph, `sitemap.xml`, `robots.txt`, `404.html` con fallback SPA.
- **Accesibilidad**: landmarks semánticos, `aria-label`, foco visible, contraste AA, `prefers-reduced-motion`.
- **Rendimiento**: carga diferida por ruta, imágenes SVG livianas, sin dependencias pesadas.

---

## 📂 Documentación del proyecto

| Documento | Contenido |
|---|---|
| [`docs/ARQUITECTURA.md`](docs/ARQUITECTURA.md) | Capas, diagramas Mermaid, estructura, decisiones técnicas |
| [`docs/REQUERIMIENTOS.md`](docs/REQUERIMIENTOS.md) | Requerimientos funcionales y no funcionales |
| [`docs/MODELO-DATOS.md`](docs/MODELO-DATOS.md) | Modelo de datos y diagrama ER |
| [`docs/INFORME-TECNOLOGICO.md`](docs/INFORME-TECNOLOGICO.md) | Informe de herramientas y tecnologías |
| [`docs/wireframes/`](docs/wireframes) | Mockups de las 4 pantallas clave |
| [`docs/slides/avance-1.md`](docs/slides/avance-1.md) | Guion de slides del Avance 1 |

---

## 🚀 Despliegue

El sitio se publica automáticamente en **GitHub Pages** con GitHub Actions:
cada `push` a `main` ejecuta `npm ci → npm run build → deploy`.

1. En el repositorio: **Settings → Pages → Source: GitHub Actions**
2. `git push origin main` → publicación en ~1 minuto

URL resultante: `https://ramirezjohlo31-rgb.github.io/mazzelli-peru-cueros/`

---

## 🌳 Ramas y flujo de trabajo

| Rama | Función |
|---|---|
| `main` | Producción. Protegida: solo entra vía Pull Request y dispara el deploy |
| `develop` | Integración de funcionalidades terminadas |
| `feat/*`, `fix/*`, `docs/*` | Ramas de trabajo por módulo |

Commits con [Conventional Commits](https://www.conventionalcommits.org/):
`feat(catalogo): agrega filtro por disponibilidad` · `fix(navbar): corrige menú en móvil`

---

## 👤 Autor

**Johan Brayan Ramírez Ccoyllo**
Proyecto universitario · 7.º ciclo

[![Perfil de GitHub](https://img.shields.io/badge/GitHub-ramirezjohlo31--rgb-181717?style=flat-square&logo=github)](https://github.com/ramirezjohlo31-rgb)

---

## 📄 Licencia

Código bajo licencia [MIT](LICENSE). Los textos y la identidad de la empresa
pertenecen a Industrias Mazzelli-Perú Cueros E.I.R.L.
