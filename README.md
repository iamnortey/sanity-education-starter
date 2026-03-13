# Sanity Education Starter

> Ready-to-use Sanity CMS schema for educational content platforms — subjects, topics, lessons, and questions.

![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)
![Sanity](https://img.shields.io/badge/Sanity-v4-red)
![License](https://img.shields.io/badge/license-MIT-blue)

**4 document types** · **Hierarchical content model** · **Schema-first design**

---

## What It Does

A starter schema for building structured educational content in Sanity CMS. Defines a clean `Subject → Topic → Lesson → Question` hierarchy that maps to how educational content is naturally organized — from broad subjects down to individual assessment items.

Use it as a foundation for exam prep platforms, course builders, learning management systems, or any product that needs structured educational content.

---

## Content Model

```
Subject
└── Topic
    └── Lesson
        └── Question
```

| Document Type | Purpose | Key Fields |
|--------------|---------|------------|
| **Subject** | Top-level category (e.g., Mathematics, English) | Title, slug, description, icon |
| **Topic** | Unit within a subject (e.g., Algebra, Grammar) | Title, slug, subject reference, order |
| **Lesson** | Individual lesson within a topic | Title, slug, topic reference, body (rich text), order |
| **Question** | Assessment item attached to a lesson | Question text, options, correct answer, explanation, lesson reference |

---

## Getting Started

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

### Run the Studio

```bash
npx sanity dev
```

Open `http://localhost:3333` to start creating content.

---

## Schema Files

```
schemas/
├── index.ts        # Schema type exports
├── subject.ts      # Subject document type
├── topic.ts        # Topic document type
├── lesson.ts       # Lesson document type
└── question.ts     # Question document type
```

---

## Use Cases

- **Exam preparation platforms** — organize content by subject, topic, and lesson with built-in question types
- **Online course builders** — hierarchical content structure ready for curriculum navigation
- **Learning management systems** — structured schema for educational institutions
- **Educational content APIs** — query structured content via Sanity's GROQ or GraphQL

---

## Related

- [Prepnest Documentation](https://github.com/iamnortey/prepnest-docs) — the educational platform built on this schema
- [Portfolio](https://github.com/iamnortey/portfolio) — architecture and case studies

## License

MIT — see [LICENSE](LICENSE)
