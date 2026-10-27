---
role: Lead Frontend Developer
start: 2024-04
startLabel: April 2024
end: 2026-06
endLabel: June 2026
employer: Independent contractor
duration: 2 years 3 months
href: https://www.balthazar.app/
hrefLabel: balthazar.app
order: 1
---

Balthazar is a startup building an AI-powered platform for managing experiments in research laboratories across high-tech industries, including semiconductors, photonics, and more.

<p class="tech-stack"><strong>Stack:</strong> React, TypeScript, Effector, Feature-Sliced Design, TanStack Query, TanStack Virtual, TanStack Router, React Hook Form, i18next, shadcn/ui, Tailwind CSS, AG Grid, FINOS Perspective, Monaco Editor, Tiptap, WebSockets, Keycloak, Playwright, Vitest</p>

- Built the platform's frontend from scratch and delivered it to production. Coordinated the work of two full-stack developers on the frontend while remaining the primary frontend developer: made architectural decisions, estimated tasks, conducted code reviews, and aligned API contracts with the backend team.
- Developed feeds and entity cards for platform objects (experiments, devices, etc.), with user-generated text and charts updating in real time. Charts were rendered using Canvas, while infinite-scroll feeds updated only their visible portions to maintain performance.
- Implemented forms for creating and editing entities, configuring relationships between them, and managing access permissions. Forms were built with React Hook Form and validated against Zod schemas generated from the OpenAPI specification.
- Built consolidated analytics for platform data using AG Grid and FINOS Perspective (WASM): complex tables and charts of various types with filtering, sorting, search, data export, and inline editing of entities and their relationships.
- Implemented Python script workflows, including a Monaco Editor-based code editor with autocomplete, an editable file tree for connected Git repositories, and interfaces for linking entities to scripts so their parameters could be used in code. Execution logs updated in real time and could be exported. Cursor-based pagination and virtualization with TanStack Virtual maintained responsiveness regardless of log size.
- Added collaboration features: Markdown documentation with version history and access control, real-time comment threads with replies and attachments, and a chat interface with an AI assistant.
- Established server-state management with TanStack Query and client-side business logic with Effector; integrated authentication through Keycloak. Made the OpenAPI specification the single source of truth for the backend contract: it was used to generate a typed fetch client, TanStack Query hooks, TypeScript types, Zod schemas, and test data.
- Built a custom UI kit based on shadcn/ui with accessibility (a11y) support, made all screens responsive from tablet to desktop, and implemented internationalization. Improved loading performance on low-powered devices and slow network connections through route-based code splitting with TanStack Router and lazy loading of heavy modules using React.lazy and Suspense.
- Set up testing, monitoring, and development standards: end-to-end tests with Playwright, unit tests with Vitest, a unified development environment using Docker, production error tracking with Sentry, and architectural guidelines for AI agents used in development.
