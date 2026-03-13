import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "education-starter",
  title: "Education CMS Starter",

  projectId: "your-project-id",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
