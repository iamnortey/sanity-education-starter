# Sanity Education Starter

> Ready-to-use Sanity CMS schema for educational content platforms — subjects, topics, lessons, and questions.

> **Status: Archived (July 2026).** This starter was extracted from an earlier architecture generation of [Prepnest](https://github.com/iamnortey/prepnest-docs), which has since moved to an offline-first, bundled-SQLite design. The schema remains a usable reference for Sanity-based education projects, but it is no longer maintained.

![Status](https://img.shields.io/badge/status-archived-lightgrey)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)
![Sanity](https://img.shields.io/badge/Sanity-v4-red)
![License](https://img.shields.io/badge/license-MIT-blue)

**4 document types** · **Hierarchical content model** · **Schema-first design**

---

## What it does

A starter schema for building structured educational content in Sanity CMS. Defines a clean `Subject → Topic → Lesson → Question` hierarchy that maps to how educational content is naturally organized — from broad subjects down to individual assessment items.

Use it as a foundation for exam prep platforms, course builders, learning management systems, or any product that needs structured educational content.

---

## Content model

```
Subject
└── Topic
    └── Lesson
        └── Question
```

| Document Type | Purpose | Key Fields |
|--------------|---------|------------|
| **Subject** | Top-level category (e.g., Mathematics, English) | Name, code, description, order |
| **Topic** | Unit within a subject (e.g., Algebra, Grammar) | Title, slug, subject reference, order |
| **Lesson** | Individual lesson within a topic | Title, slug, topic reference, body (rich text), order |
| **Question** | Assessment item attached to a lesson | Question text, options, correct answer, explanation, lesson reference |

---

## Getting started

### Prerequisites

- Node.js ≥ 18
- A [Sanity.io](https://sanity.io) account and project

### Installation

```bash
git clone https://github.com/iamnortey/sanity-education-starter.git
cd sanity-education-starter
npm install
```

### Configuration

Update `sanity.config.ts` with your Sanity project ID and dataset:

```typescript
export default defineConfig({
  name: "education-starter",
  title: "Education CMS Starter",
  projectId: "your-project-id",  // ← replace
  dataset: "production",          // ← replace if needed
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
```

### Run the studio

```bash
npx sanity dev
```

Open `http://localhost:3333` to start creating content.

---

## Schema files

```
schemas/
├── index.ts        # Schema type exports
├── subject.ts      # Subject document type
├── topic.ts        # Topic document type
├── lesson.ts       # Lesson document type
└── question.ts     # Question document type
```

---

## Use cases

- **Exam preparation platforms** — organize content by subject, topic, and lesson with built-in question types
- **Online course builders** — hierarchical content structure ready for curriculum navigation
- **Learning management systems** — structured schema for educational institutions
- **Educational content APIs** — query structured content via Sanity's GROQ or GraphQL

---

## What this is not

- **Not a CMS** — it's a schema starter that runs inside Sanity, which provides the CMS
- **Not a UI library** — the frontend is yours to build
- **Not a curriculum standard** — the schema is structural; aligning to a specific curriculum (WASSCE, BECE, Common Core, IB, etc.) is left to you
- **Not opinionated about delivery** — works equally for web, mobile, or pure API delivery

---

## Related

- [Prepnest Documentation](https://github.com/iamnortey/prepnest-docs) — Prepnest has since moved to an offline-first architecture; the docs cover the current design
- [Portfolio](https://github.com/iamnortey/portfolio) — architecture and case studies

## License

MIT — see [LICENSE](LICENSE)
