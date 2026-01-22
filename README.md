# Elizabeth Gilardini - Coaching y Desarrollo Personal

Sitio web oficial de Elizabeth Gilardini, especialista en coaching, mentoría y desarrollo personal. Una plataforma dedicada a acompañar tu transformación personal y crecimiento integral.

## 📋 Descripción del Proyecto

Este proyecto es un sitio web moderno y responsivo desarrollado con **Astro**, **React**, **Tailwind CSS** y **Framer Motion**. Presenta los servicios de coaching, información personal, políticas de privacidad y términos de servicio.

## 🚀 Estructura del Proyecto

```
/
├── public/                          # Archivos estáticos públicos
├── src/
│   ├── assets/                      # Archivos de assets (imágenes, SVG)
│   ├── components/                  # Componentes reutilizables
│   │   ├── AnimatedSection.tsx      # Secciones con animaciones
│   │   ├── DesktopMenu.tsx          # Menú para desktop
│   │   ├── MobileMenu.tsx           # Menú para dispositivos móviles
│   │   ├── ScrollToTop.tsx          # Botón para volver al inicio
│   │   └── SmoothScroll.tsx         # Scroll suave
│   ├── layouts/
│   │   └── Layout.astro             # Layout principal
│   ├── pages/                       # Páginas del sitio
│   │   ├── index.astro              # Página de inicio
│   │   ├── cookies.astro            # Política de cookies
│   │   └── terminos.astro           # Términos de servicio
│   └── styles/
│       └── global.css               # Estilos globales
├── astro.config.mjs                 # Configuración de Astro
├── tsconfig.json                    # Configuración de TypeScript
└── package.json                     # Dependencias del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework de desarrollo web estático y dinámico
- **[React](https://react.dev)** - Librería para componentes interactivos
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion)** - Librería para animaciones suaves
- **[TypeScript](https://www.typescriptlang.org)** - Tipado estático para JavaScript

## 📦 Dependencias Principales

```json
{
  "@astrojs/react": "^4.4.2",
  "@tailwindcss/vite": "^4.1.18",
  "astro": "^5.16.9",
  "framer-motion": "^12.26.2",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "tailwindcss": "^4.1.18"
}
```

## 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando             | Acción                                              |
| :------------------ | :-------------------------------------------------- |
| `npm install`       | Instala las dependencias del proyecto               |
| `npm run dev`       | Inicia el servidor local en `localhost:4321`        |
| `npm run build`     | Construye el sitio para producción en `./dist/`     |
| `npm run preview`   | Previsualiza la compilación localmente              |
| `npm run astro`     | Acceso directo a comandos del CLI de Astro          |

## 🌐 Páginas

- **Inicio** (`/`) - Página principal con información y servicios
- **Cookies** (`/cookies`) - Política de cookies del sitio
- **Términos** (`/terminos`) - Términos y condiciones de servicio

## 🎨 Características

- ✨ Diseño moderno y responsivo
- 🎬 Animaciones suaves con Framer Motion
- 📱 Menú adaptativo (Desktop y Mobile)
- ⚡ Scroll fluido y botón de regreso al inicio
- 🎯 Optimizado para SEO
- 🌙 Estructura componetizada y reutilizable

## 📝 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+ 
- npm o pnpm

### Pasos para Instalar

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd eli-web
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

## 🚀 Despliegue

Para construir el proyecto para producción:

```bash
npm run build
npm run preview
```

El sitio compilado se encuentra en la carpeta `dist/`.

## 📄 Licencia

Este proyecto está bajo la propiedad de Elizabeth Gilardini.

## 📧 Contacto

Para más información sobre los servicios de coaching y desarrollo personal, visita el sitio web.
