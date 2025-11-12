# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a Next.js portfolio website for Arnav Agrawal featuring a personal portfolio with project showcases and an AI chat assistant.

### Tech Stack
- **Framework**: Next.js 15.0.3 with React 19 RC
- **Styling**: Tailwind CSS with custom brutalist design system
- **Fonts**: Custom local fonts (Geist Sans/Mono) + Google Fonts (Inria Serif, Inconsolata)
- **AI Integration**: OpenAI GPT-4o-mini for chat functionality
- **Deployment**: Static export to `out/` directory

### Key Architecture Patterns

**Component Structure**:
- Main sections are organized as separate components in `src/components/`
- Each major section (hero, projects, contact) is a self-contained component
- Modal-based project detail views with custom content components
- Responsive design with mobile-first approach

**Styling System**:
- Brutalist design with bold borders, shadows, and high contrast
- Consistent color scheme: `#CCF1F5` (light blue) backgrounds with black borders
- Shadow pattern: `shadow-[4px_4px_0_rgba(0,0,0,1)]` with hover effects
- Typography mixing serif (Inria Serif) for headings and monospace (Inconsolata) for body text

**Chat API Implementation**:
- API route at `/api/chat/route.ts` handles OpenAI integration
- Uses resume context from `src/lib/chat-context.ts`
- CORS headers configured for cross-origin requests
- Environment variable `OPENAI_API_KEY` required for chat functionality

**Project Showcase System**:
- Projects defined in `src/components/project.tsx` with modal overlays
- Support for custom content components (React elements) per project
- External link integration with custom icons
- Grid-based responsive layout

### File Organization
- `src/app/` - Next.js app router structure
- `src/components/` - Reusable UI components
- `src/lib/` - Utility functions and context
- `public/` - Static assets including project thumbnails and media
- Configuration files in root (`next.config.ts`, `tailwind.config.ts`, etc.)

### Environment Requirements
- Node.js with npm
- `OPENAI_API_KEY` environment variable for chat functionality
- Static export compatible (no server-side features beyond API routes)

### Development Notes
- Uses "use client" directive for interactive components
- Image optimization with Next.js Image component
- Responsive breakpoints: mobile-first with md/lg breakpoints
- CSS-in-JS patterns avoided in favor of Tailwind utility classes