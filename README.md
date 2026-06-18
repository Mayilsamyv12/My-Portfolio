# Mayilsamy V — Personal Portfolio

A premium, highly-interactive, responsive developer portfolio built with React, Vite, and Tailwind CSS. The design features micro-animations, scroll reveal transitions, dark mode support, and scaled global typography for comfortable reading.

## 🚀 Features

- **Modern Stack:** React 18, Vite, and Tailwind CSS.
- **Micro-Animations & Smooth Scrolling:** Integrated with Lenis, GSAP, and Framer Motion for high-fidelity interactive elements.
- **Scroll Reveal Transitions:** Elements animate smoothly into view as the user scrolls.
- **Dark Mode Support:** Smooth theme toggling with theme persistence in `localStorage`.
- **Global Typography Scaling:** Designed with base font sizes optimized dynamically across viewport widths (16px on mobile, scaling to 18px on desktops).
- **Projects Registry:** Interactive portfolio display showing key full-stack and front-end projects.
- **Interactive Contact Form:** Responsive contact section with feedback mechanisms.

---

## 📋 System Requirements & Dependencies

To install and run this project locally, make sure you meet the following requirements:

### Prerequisites
- **Node.js:** `v18.0.0` or higher (Recommended: `v20.x` or higher)
- **NPM:** `v9.0.0` or higher (typically bundled with Node.js)

### Project Dependencies (from `package.json`)
- **React Ecosystem:**
  - `react` (`^18.3.1`)
  - `react-dom` (`^18.3.1`)
  - `react-router-dom` (`^6.23.1`)
- **Animation & Typography Library:**
  - `framer-motion` (`^12.40.0`)
  - `gsap` (`^3.15.0`)
  - `lenis` (`^1.3.23`)
  - `three` (`^0.184.0`)
- **Icon Libraries:**
  - `lucide-react` (`^1.21.0`)
  - `react-icons` (`^5.6.0`)
- **Dev Dependencies & Build Tools:**
  - `vite` (`^5.2.11`)
  - `tailwindcss` (`^3.4.3`)
  - `postcss` (`^8.4.38`)
  - `autoprefixer` (`^10.4.19`)
  - `@vitejs/plugin-react` (`^4.3.0`)

---

## 🛠️ Getting Started

Follow these steps to run the portfolio website locally on your machine:

### 1. Extract/Clone the Repository
Ensure all files are placed in your working directory.

### 2. Install Project Dependencies
In the root directory of the project, run:
```bash
npm install
```

### 3. Start the Development Server
To launch the hot-reloading development server locally:
```bash
npm run dev
```
The application will be accessible at: [http://localhost:5173/](http://localhost:5173/)

### 4. Build for Production
To generate a production-ready build:
```bash
npm run build
```
The optimized bundle will be compiled into the `dist/` directory, ready for hosting.

---

## 📁 Project Structure

```text
My-Portfolio-main/
├── dist/                # Production build output
├── public/              # Static public assets (resume, image mockups)
├── src/
│   ├── components/
│   │   └── Layout.jsx   # Header, mobile menu, footer, and theme layout
│   ├── pages/
│   │   ├── Home.jsx     # Main landing page containing hero, skills, projects, and contact sections
│   │   └── Projects.jsx # Interactive showcase page for all projects
│   ├── App.jsx          # Route definitions and observer configurations
│   ├── index.css        # Global CSS rules, custom animations, and responsive base font scaling
│   └── main.jsx         # App entry point
├── index.html           # Main template file
├── tailwind.config.js   # Custom Tailwind CSS configuration
└── package.json         # Node.js dependencies and scripts
```
