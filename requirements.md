# Project Requirements

This document specifies the software environment, runtime versions, package dependencies, and compatibility guidelines required to develop, build, and deploy the portfolio application.

## 💻 Environment & Runtime

- **Runtime Environment:** Node.js `v18.0.0` or higher (tested on Node `v20.x`).
- **Package Manager:** NPM `v9.0.0` or higher (or Yarn / PNPM equivalent).
- **Operating System:** Platform-agnostic (Windows, macOS, Linux).

## 📦 Package Dependencies

### Core Libraries
| Package | Version | Description |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | UI component library |
| **React DOM** | `^18.3.1` | Entry point for browser rendering |
| **React Router DOM** | `^6.23.1` | Single-Page Application client-side routing |

### Styling & Iconography
| Package | Version | Description |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.3` | Utility-first CSS styling framework |
| **PostCSS** | `^8.4.38` | CSS post-processing tool |
| **Autoprefixer** | `^10.4.19` | Tailwind vendor prefixing helper |
| **React Icons** | `^5.6.0` | Comprehensive collection of React iconography |
| **Lucide React** | `^1.21.0` | Modern SVG icons pack |

### Animations & Transitions
| Package | Version | Description |
| :--- | :--- | :--- |
| **Framer Motion** | `^12.40.0` | Interactive motion declarations and hover states |
| **GSAP (GreenSock)** | `^3.15.0` | Timeline-based micro-animations |
| **Lenis Scroll** | `^1.3.23` | High-fidelity smooth inertia scrolling |
| **Three.js** | `^0.184.0` | 3D elements and canvas hooks |

### Build Tools
| Package | Version | Description |
| :--- | :--- | :--- |
| **Vite** | `^5.2.11` | Ultra-fast local HMR dev server and bundler |
| **@vitejs/plugin-react** | `^4.3.0` | React-specific configuration for Vite |

---

## 🌐 Browser Compatibility

The portfolio targets modern browsers supporting standard ES modules and flexbox/grid layouts:
- Google Chrome (latest 3 versions)
- Mozilla Firefox (latest 3 versions)
- Apple Safari (latest 3 versions)
- Microsoft Edge (latest 3 versions)
- **Mobile Support:** Fully optimized for iOS Safari and Android Chrome viewports.

---

## 🛠️ Environment Verification

To check if your local environment meets the runtime prerequisites, execute:
```bash
# Verify Node.js Version
node -v

# Verify NPM Version
npm -v
```
