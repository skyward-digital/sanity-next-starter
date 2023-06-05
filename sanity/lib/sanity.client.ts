import { createClient } from "next-sanity";
import { apiVersion, projectId, dataset, useCdn } from "@/sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
