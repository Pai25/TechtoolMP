# ⚡ TechTools Hub

A modern, fully-functional React.js website for discovering the best online tools across categories like AI, development, design, and productivity.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd techtools-hub

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx + Navbar.css
│   ├── Footer.jsx + Footer.css
│   ├── ToolCard.jsx + ToolCard.css
│   ├── CategoryCard.jsx + CategoryCard.css
│   └── ScrollToTop.jsx
├── pages/
│   ├── Home.jsx + Home.css
│   ├── Categories.jsx
│   ├── CategoryTools.jsx
│   ├── ToolDetails.jsx
│   ├── Tutorials.jsx
│   ├── Alternatives.jsx
│   └── SearchResults.jsx
├── data/
│   ├── tools.js       ← All tool data + helper functions
│   ├── categories.js  ← Category data
│   ├── tutorials.js   ← Tutorial data
│   └── alternatives.js← Alternatives data
├── App.jsx            ← Routes
├── main.jsx
└── index.css          ← Global design system
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#2563EB` (Deep Blue) |
| Secondary | `#4F46E5` (Indigo) |
| Background | `#F9FAFB` |
| Text | `#111827` |
| Font Display | Syne |
| Font Body | DM Sans |

## 📱 Pages

| Route | Page |
|-------|------|
| `/` | Home – hero, featured tools, categories |
| `/categories` | All categories grid |
| `/categories/:id` | Tools within a category + filtering |
| `/tools/:id` | Full tool details page |
| `/tutorials` | Tutorial listings |
| `/alternatives` | Compare tool alternatives |
| `/search?q=...` | Search results |

## 🔧 Adding New Tools

Edit `src/data/tools.js` and add a new tool object:

```js
{
  id: "tool-slug",
  name: "Tool Name",
  category: "ai-tools", // must match a category id
  tagline: "Short tagline",
  description: "Full description...",
  logo: "🔧",  // emoji placeholder
  color: "#FF0000",
  features: ["Feature 1", "Feature 2"],
  useCases: ["Use case 1"],
  url: "https://example.com",
  rating: 4.5,
  tags: ["Tag1", "Tag2"],
  featured: false,
  alternatives: ["other-tool-id"],
}
```

## 🔌 Backend Integration Notes

- All data lives in `src/data/*.js` — swap these for API calls
- Each page uses helpers like `getToolById()` — replace with `fetch()`/`axios` calls
- React Router params are already set up for dynamic routing
- Add `useEffect` hooks in page components to fetch data on mount

## 📦 Tech Stack

- **Vite** — Build tool
- **React 18** — UI framework
- **React Router 6** — Client-side routing
- **Lucide React** — Icons
- **Google Fonts** — Syne + DM Sans typography
- **Custom CSS** — No Tailwind dependency, pure CSS modules
