import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "cl1p68bz",  // Replace with your actual project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

// ✅ Separate function for fetching products (to be used in a server function)
export async function fetchProducts(query: string) {
  return await sanityClient.fetch(query);
}
