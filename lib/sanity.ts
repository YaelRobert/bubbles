import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: 'd90c6pe3',
  dataset: 'production',
  apiVersion: '2024-06-01',
});