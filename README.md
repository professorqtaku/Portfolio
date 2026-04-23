# Qiling Tan Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design with mobile hamburger menu
- Single-page navigation with smooth scrolling
- Multi-page routing (Home, Experience, Projects)
- Custom design system with Material Symbols icons
- Chip components for skills and technologies
- Interactive hover effects

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS 4
- Vite
- React Router
- Material Symbols Outlined icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Chip.tsx
│   ├── ExperienceItem.tsx
│   ├── ExperienceRow.tsx
│   ├── ExperienceSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── ProjectItem.tsx
│   ├── ProjectsSection.tsx
│   └── SectionTitle.tsx
├── data/               # Data files
│   ├── cv.ts          # CV data (skills, projects, etc.)
│   └── experiences.ts # Work experience data
├── pages/             # Page components
│   ├── ExperiencePage.tsx
│   ├── Home.tsx
│   └── ProjectsPage.tsx
├── assets/            # Static assets
│   ├── profile.jpg
│   └── projects/
├── index.css          # Global styles + Tailwind config
├── App.tsx           # Main app with routing
└── main.tsx          # Entry point
```

## Data Management

- **experiences.ts**: Work experience with `showInHome` filter
- **cv.ts**: Skills, certifications, projects with `isInHome` filter

## Design System

- Custom color palette (warm yellow/blue theme)
- Plus Jakarta Sans font
- Material Symbols for icons
- Window-style card components
- Rounded full design aesthetic