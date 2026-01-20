# Campus Hub - React JS Version

This is a React.js + Vite version of the Campus Hub application, converted from Next.js/TypeScript.

## Project Structure

```
src/
├── main.jsx                 # Application entry point
├── App.jsx                  # Root component with routing
├── pages/                   # Page components
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   └── app/                 # Protected routes
│       ├── DashboardLayout.jsx
│       ├── Dashboard.jsx
│       ├── Clubs.jsx
│       ├── Events.jsx
│       ├── Resources.jsx
│       ├── Timetable.jsx
│       └── LostAndFound.jsx
├── components/              # Reusable components
│   └── ui/                  # UI library components
├── hooks/                   # Custom React hooks
│   └── use-toast.js
├── lib/                     # Utilities and data
│   ├── data.js
│   ├── types.js
│   ├── utils.js
│   └── placeholder-images.js
└── app/
    └── globals.css         # Global styles
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The application will open at `http://localhost:9002`

## Build

To build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Key Changes from Next.js to React

- **Routing**: Changed from Next.js App Router to React Router v6
- **Image handling**: Changed from Next.js `Image` component to standard HTML `<img>` tags
- **Navigation**: Changed from Next.js `Link` to React Router `Link`
- **TypeScript**: Removed all TypeScript types and converted to JavaScript
- **Build tool**: Changed from Next.js to Vite for faster builds
- **Client components**: Removed "use client" directives as all components are client-side by default

## Configuration Files

- `vite.config.js` - Vite build configuration
- `jsconfig.json` - JavaScript/import path configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `index.html` - HTML entry point

## Features

- Dashboard with activity overview
- Club discovery and management
- Event calendar
- Course resources
- Timetable view
- Lost and found system
- User authentication (basic)
- Responsive design with Tailwind CSS
- Radix UI components library

## Development

The project uses:
- **React 19** - UI library
- **React Router v6** - Routing
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Lucide React** - Icons
- **Recharts** - Charts

## Notes

- All authentication is basic/mock and should be replaced with real backend
- Storage uses localStorage for simplicity
- All images are using placeholder URLs from the data
