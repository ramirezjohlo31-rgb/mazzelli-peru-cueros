# Informe de Herramientas y Tecnologías

**Proyecto:** Sitio web corporativo — Industrias Mazzelli-Perú Cueros E.I.R.L.
**Autor:** Johan Brayan Ramírez Ccoyllo
**Curso:** 7.º ciclo
**Repositorio:** `github.com/ramirezjohlo31-rgb/mazzelli-peru-cueros`
**Demostración:** `ramirezjohlo31-rgb.github.io/mazzelli-peru-cueros/`
**Versión:** 1.0 — Avance 1 (Semana 8)

---

## 1. Objetivo del informe

Documentar el stack tecnológico, las herramientas de desarrollo y los procesos
de trabajo aplicados en el proyecto, con la justificación de cada decisión,
para dar cumplimiento a los requerimientos del RCU y sustentar el avance y la
entrega final.

---

## 2. Entorno de trabajo

| Componente          | Detalle                                                 | Estado                    |
| ------------------- | ------------------------------------------------------- | ------------------------- |
| Sistema operativo   | Windows 11 (64 bits)                                    | ✅                        |
| Hardware de trabajo | PC personal ASUS                                        | ✅                        |
| Editor de código    | Visual Studio Code                                      | ✅                        |
| Node.js             | v24.21.0 (LTS)                                          | ✅                        |
| npm                 | 11.19.0                                                 | ✅                        |
| Git                 | 2.55.0.5                                                | ✅ Instalado con `winget` |
| GitHub CLI          | Complemento opcional para Issues y PR desde la terminal | ⚙️ Opcional               |
| Navegador de prueba | Chrome / Edge (DevTools, Lighthouse)                    | ✅                        |
| Respaldo del código | GitHub (repositorio, Issues, Projects, Milestones)      | ✅                        |

---

## 3. Lenguajes

| Lenguaje                | Uso                                                              |
| ----------------------- | ---------------------------------------------------------------- |
| **JavaScript (ES2023)** | Lógica de componentes, hooks, servicios y validaciones           |
| **JSX**                 | Sintaxis declarativa de React                                    |
| **HTML5**               | Estructura semántica y metadatos SEO en `index.html`             |
| **CSS3**                | Tokens de diseño, animaciones y transiciones                     |
| **Markdown**            | Documentación técnica y guion de slides                          |
| **YAML**                | Pipeline de CI/CD en `.github/workflows/deploy.yml`              |
| **JSON**                | `package.json`, `package-lock.json` y datos semilla del catálogo |

---

## 4. Framework principal — React

| Aspecto                   | Detalle                                                                                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **React 19.3.1**          | Biblioteca de interfaz con modelo de componentes                                                                                                                                                                                                                                    |
| **Justificación**         | El RCU exige un sitio corporativo con catálogo y contacto, no un sistema transaccional ni un panel administrativo. React ofrece arquitectura por componentes real, curva de aprendizaje moderada y el mayor valor de mercado, con un costo de desarrollo muy inferior al de Angular |
| **Arquitectura adoptada** | Por **capas** (presentación → dominio/features → datos/servicios) combinada con organización por **features**                                                                                                                                                                       |
| **Estado**                | `useState` / `useReducer` local y `useMemo` para las listas filtradas                                                                                                                                                                                                               |
| **Composición**           | Componentes presentacionales puros separados de los contenedores con lógica                                                                                                                                                                                                         |

### 4.1 Alternativas evaluadas

| Criterio                     | HTML/CSS/JS puro              | **React + Vite**           | Vue + Vite         | Angular                 |
| ---------------------------- | ----------------------------- | -------------------------- | ------------------ | ----------------------- |
| Curva de aprendizaje         | Baja                          | Media                      | Baja               | **Alta**                |
| Arquitectura por componentes | Manual, limitada              | **Nativa**                 | Nativa             | Nativa                  |
| Peso del bundle              | Mínimo                        | Bajo (92 kB gzip inicial)  | Bajo               | **Alto (~180 kB base)** |
| Velocidad de build           | N/A                           | **Instantánea (Vite)**     | Instantánea        | Lenta (Angular CLI)     |
| Despliegue estático          | Subir archivos                | **`dist/` → GitHub Pages** | `dist/` → Pages    | `dist/` → Pages         |
| Valor para el mercado        | Básico                        | **Máximo**                 | Alto               | Alto (corporativo)      |
| Riesgo para los plazos       | Bajo, pero se percibe "plano" | **Bajo**                   | Bajo               | **Alto**                |
| **Veredicto**                | Descartado                    | **Elegido**                | Alternativa válida | Descartado              |

---

## 5. Librerías y herramientas del ecosistema frontend

| Librería               | Versión | Función                                  |
| ---------------------- | ------- | ---------------------------------------- |
| `react`                | 19.3.1  | Biblioteca base de componentes           |
| `react-dom`            | 19.3.1  | Renderizado en el DOM (`createRoot`)     |
| `react-router-dom`     | 7.18.4  | Enrutamiento SPA y gestor de rutas       |
| `vite`                 | 8.3.5   | Bundler y servidor de desarrollo con HMR |
| `@vitejs/plugin-react` | 6.1.2   | Soporte de JSX y Fast Refresh            |
| `tailwindcss`          | 4.3.3   | Framework de utilidades CSS              |
| `@tailwindcss/vite`    | 4.3.3   | Plugin oficial de integración con Vite   |
| `oxlint`               | 1.88.0  | Análisis estático (linter)               |

Las versiones exactas quedan **fijadas y auditables en `package.json` y
`package-lock.json`**, que constituyen la fuente de verdad reproducible.

---

## 6. Diseño visual y recursos

| Recurso                               | Uso                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Tailwind CSS v4 + tokens `@theme`** | Sistema de diseño: paleta, tipografías, espaciado y sombras declarados como variables CSS en `src/styles/index.css`  |
| **Paleta "cuero premium"**            | `cuero-900 #3E2A20` · `cognac-500 #8B5E3C` · `crema-50 #FAF6F0` · `oro-500 #C89B3C` · `tinta-900 #1C1512`            |
| **Google Fonts**                      | _Playfair Display_ (títulos) + _Inter_ (texto/UI), con `preconnect`                                                  |
| **SVG en línea**                      | Todos los iconos del sitio (`components/ui/Icon.jsx`), sin dependencias de iconos                                    |
| **Generador de recursos**             | `scripts/generar-assets.mjs` produce las ilustraciones SVG de catálogo y galería                                     |
| **Generador de wireframes**           | `scripts/generar-wireframes.mjs` produce los mockups de `docs/wireframes/`                                           |
| **Material gráfico del cliente**      | Fotografías reales de producto — _pendiente de receipt_; las ilustraciones actuales actúan como marcador de posición |

---

## 7. Control de versiones y trabajo colaborativo

| Elemento                 | Configuración                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sistema**              | Git 2.55 (local) + GitHub (hosting remoto)                                                                                                         |
| **Ramas**                | `main` (protegida, dispara el deploy) · `develop` (integración) · `feat/*`, `fix/*`, `docs/*`                                                      |
| **Flujo**                | Rama de feature → commits → Pull Request a `develop` → revisión → merge a `main`                                                                   |
| **Commits**              | _Conventional Commits_: `feat(ámbito): descripción` → `feat`, `fix`, `docs`, `chore`, `style`                                                      |
| **Issues**               | Errores y tareas con etiquetas (`feature`, `bug`, `ui`, `doc`)                                                                                     |
| **Projects**             | Tabla Kanban `Backlog → En curso → Revisión → Hecho`                                                                                               |
| **Milestones**           | `Avance 1 (S8)` · `Desarrollo Core (S9–S10)` · `UX & Pulido (S11–S12)` · `Calidad & SEO (S13)` · `Release Candidate (S14)` · `Entrega Final (S16)` |
| **Autor de los commits** | `Johan Brayan Ramirez Ccoyllo <332580772+ramirezjohlo31-rgb@users.noreply.github.com>`                                                             |
| **Licencia**             | MIT (`LICENSE`)                                                                                                                                    |

---

## 8. Integración y despliegue continuo (CI/CD)

| Elemento                     | Detalle                                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Plataforma**               | GitHub Actions (`ubuntu-latest`)                                                                                        |
| **Pipeline**                 | `push` a `main` → `checkout` → `setup-node v24` → `npm ci` → `npm run build` → `upload-pages-artifact` → `deploy-pages` |
| **Resultado**                | `https://ramirezjohlo31-rgb.github.io/mazzelli-peru-cueros/`                                                            |
| **Costo**                    | $0 (GitHub Pages es gratuito para repositorios públicos)                                                                |
| **Configuración del bundle** | `base: '/mazzelli-peru-cueros/'` en `vite.config.js`                                                                    |
| **Fallback SPA**             | Plugin de Vite que genera `dist/404.html` con redirección por `sessionStorage`                                          |
| **Secretos**                 | Ninguno; el deploy usa el token nativo `GITHUB_TOKEN`                                                                   |

---

## 9. Documentación y diagramación

| Herramienta               | Uso                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Markdown**              | `README.md` y los documentos de `docs/`                                               |
| **Mermaid**               | Diagramas de capas, secuencia, clases, ER y CI/CD renderizados directamente en GitHub |
| **SVG generado por Node** | Mockups de las 4 pantallas clave (`docs/wireframes/`)                                 |
| **VS Code**               | Editor con las extensiones ESLint, Prettier, Tailwind IntelliSense y Mermaid Preview  |

---

## 10. Calidad y buenas prácticas

| Práctica                    | Implementación                                                                                                              |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Linter**                  | oxlint sobre todo el proyecto (`npm run lint`)                                                                              |
| **Formato**                 | Prettier con configuración compartida en `.editorconfig`                                                                    |
| **Accesibilidad (WCAG AA)** | Landmarks semánticos, enlace de salto al contenido, foco visible, `aria-label`, contraste ≥ 4.5:1, `prefers-reduced-motion` |
| **Responsive mobile-first** | Verificado en 360 px, 768 px, 1280 px y 1920 px                                                                             |
| **Rendimiento**             | Code splitting por ruta, SVG livianos, `preconnect` a fuentes, sin dependencias pesadas                                     |
| **SEO**                     | Metadatos por ruta, Open Graph, `sitemap.xml`, `robots.txt`, un solo `h1` por página                                        |
| **Seguridad**               | Sin `dangerouslySetInnerHTML`, enlaces externos con `rel="noopener noreferrer"`, `npm audit` sin vulnerabilidades           |
| **Versionado semántico**    | Etiquetas `v0.1.0` (Avance 1) · `v0.5.0` (RC) · `v1.0.0` (Entrega final)                                                    |

---

## 11. Estructura de carpetas (arquitectura de software)

```
mazzelli-peru-cueros/
├── public/                # favicon, og-image, robots.txt, sitemap.xml, SVG
├── docs/                  # documentación, wireframes y slides
├── scripts/               # generadores de recursos y mockups
├── src/
│   ├── app/               # CAPA 1 · PRESENTACIÓN (App, rutas, Layout)
│   ├── pages/             # páginas de ruta (lazy-loaded)
│   ├── components/
│   │   ├── ui/            # Button, Card, Input, Select, Badge, Icon…
│   │   └── layout/        # Navbar, Footer, ScrollToTop, WhatsApp flotante
│   ├── features/          # CAPA 2 · DOMINIO
│   │   ├── catalogo/      # ProductCard, ProductGrid, FilterBar, useCatalogo
│   │   └── contacto/      # ContactForm, useContactForm, validacion
│   ├── data/              # CAPA 3 · DATOS (catalogo, empresa, servicios, navegacion)
│   ├── services/          # Integraciones externas (whatsapp, mailto)
│   ├── hooks/             # useDebounce, useMediaQuery
│   ├── utils/             # recursos.js (rutas de los archivos de public/)
│   └── styles/            # tokens @theme y utilidades
│   └── main.jsx
├── .github/workflows/deploy.yml
└── vite.config.js · package.json · LICENSE
```

---

## 12. Flujo de datos

```
Vista (pages / features)
        │  props y eventos
        ▼
Lógica (hooks: useCatalogo, useContactForm)
        │  consulta
        ▼
Datos (data/catalogo.js)  ─────────►  Servicios (whatsapp.js, mailto.js)
                                            │
                                            ▼
                        RENDER (componentes UI)   window.open(wa.me / mailto:)
```

---

## 13. Licencias de las herramientas

| Herramienta                    | Licencia                                | Uso comercial permitido      |
| ------------------------------ | --------------------------------------- | ---------------------------- |
| React, React DOM, React Router | MIT                                     | Sí                           |
| Vite y sus plugins             | MIT                                     | Sí                           |
| Tailwind CSS                   | MIT                                     | Sí                           |
| Node.js                        | MIT                                     | Sí                           |
| Git                            | GPL v2                                  | Sí                           |
| GitHub / GitHub Pages          | Según el plan                           | Repo público: Pages gratuito |
| oxlint                         | MIT                                     | Sí                           |
| Google Fonts (Playfair, Inter) | SIL Open Font License                   | Sí                           |
| Material propio del proyecto   | MIT (código) / © de la empresa (textos) | Según autorización           |

Todas las dependencias son de **código abierto con licencia permisiva**, sin
costos de licenciamiento para el cliente.

---

## 14. Costos

| Concepto                                    | Costo          |
| ------------------------------------------- | -------------- |
| Node.js, React, Vite, Tailwind, Git, oxlint | **$0**         |
| GitHub Pages (hosting y CI/CD)              | **$0**         |
| Dominio personalizado (fase futura)         | ~$12–15 al año |
| **Total del proyecto**                      | **$0**         |

---

## 15. Glosario técnico

| Término               | Significado en este proyecto                                                             |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **SPA**               | _Single Page Application_: una sola página que cambia de vista sin recargar el navegador |
| **Componente**        | Unidad reutilizable de interfaz (botón, tarjeta, navbar)                                 |
| **Hook**              | Función que permite usar estado y lógica en componentes funcionales                      |
| **Vite**              | Herramienta de build y servidor de desarrollo para frontend                              |
| **Token de diseño**   | Variable reutilizable de diseño (color, tipografía, espacio)                             |
| **CI/CD**             | Integración y despliegue continuos: construir y publicar automáticamente                 |
| **Wireframe**         | Boceto de baja fidelidad que define la estructura de una pantalla                        |
| **Code splitting**    | División del bundle en chunks que se descargan bajo demanda                              |
| **Responsive**        | Diseño que se adapta a distintos tamaños de pantalla                                     |
| **Noreply de GitHub** | Correo de atribución de commits que protege la privacidad del correo real                |

---

## 16. Conclusión

El proyecto se desarrolla con un stack **moderno, gratuito y de alto valor
curricular**: React como framework de componentes con arquitectura por capas,
Tailwind CSS v4 como sistema de diseño basado en tokens, Vite como herramienta de
build, Git/GitHub como control de versiones con flujo profesional (ramas, PR,
issues, milestones) y GitHub Actions como pipeline de despliegue continuo que
materializa una **URL pública** para la presentación y la defensa.

La total ausencia de costos de licenciamiento y la reproducibilidad del
proyecto (`npm ci && npm run build`) favorecen la evaluación técnica por parte
del docente.
