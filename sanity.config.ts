/* This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route */
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

// See https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from "@/sanity/env";
import schemas from "@/sanity/schemas";
import { defaultDocumentNode } from "@/sanity/structure";

const config = defineConfig({
  // Path to access Sanity Studio. You can change it but you'll need to change the corresponding folder name in the /pages directory
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  title: "Sanity Page Builder",
  plugins: [
    deskTool({ defaultDocumentNode }),
    // Vision lets you query your content with GROQ in the studio
    // Documentation: https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: schemas },
});

export default config;
