// This file defines everything about our Sanity project
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/lib/sanity.client";

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  title: "Sanity Page Builder",
  // Where the Sanity Studio can be accessed
  // You can change this but you will need to change the /studio folder name in the /pages directory
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
