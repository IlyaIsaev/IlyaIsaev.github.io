---
role: Senior Frontend Developer
start: 2024-04
startLabel: April 2024
end: 2026-06
endLabel: June 2026
employer: Balthazar Labs
tagline: Amsterdam-based deep tech SaaS startup
duration: 2 years 3 months
href: https://www.balthazar.app/
hrefLabel: balthazar.app
note: Remote, contract
order: 1
---

SaaS platform for research labs in deep tech industries (semiconductors, photonics, quantum technologies, etc.): tracking of experiments, prototypes and results, real-time dashboards, Python scripting.

<p class="tech-stack"><strong>Stack:</strong> React, TypeScript, Effector, Feature-Sliced Design, TanStack Query, TanStack Virtual, TanStack Router, React Hook Form, Zod, Kubb, AG Grid, WebSockets, Monaco Editor, Keycloak, Playwright, Vitest</p>

- Designed an architecture based on Feature-Sliced Design and developed the platform frontend from scratch through to production. Owned the frontend end to end: made technical decisions, planned and estimated work, and aligned API contracts with the backend team.
- Built server data handling on TanStack Query (caching, optimistic updates) and client business logic on Effector. Made the OpenAPI specification the single source of truth for the backend contract: requests are typed via openapi-typescript and openapi-react-query, and Kubb generates TypeScript types, Zod schemas for validating server responses and React Hook Form forms, and test data with Faker.
- Developed AG Grid interfaces for experiment management and results analysis, and implemented real-time updates of data, threaded comments and charts over WebSockets. Rendered data-heavy charts with the Canvas API to avoid the DOM overhead of SVG.
- Embedded a Python code editor built on Monaco Editor, with execution of user scripts and log streaming over WebSockets. Implemented a custom file tree for the connected Git repository: lazy folder loading, virtualization with TanStack Virtual for large repositories, and file and folder operations.
- Ensured responsiveness on low-end devices and slow connections: built all data feeds, including high-volume logs, on TanStack Virtual with server-side pagination; route-based code splitting and lazy loading of heavy modules (React.lazy, Suspense) reduced the JavaScript loaded at startup.
- Set up automated testing: Playwright for e2e, Vitest for unit tests, and Docker for identical environments locally and in CI. Set up production error monitoring with Sentry.
- Formalized architectural rules for AI agents (FSD, Effector, TypeScript) and introduced AI-agent workflows for routine tasks: developing new features within the FSD architecture, refactoring, and writing tests.
