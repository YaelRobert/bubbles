import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url/signed";

export const sanityClient = createClient({
  projectId: 'd90c6pe3',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: false, // since we have caching in next js 16 - Incremental Static Regeneration (ISR) 
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}