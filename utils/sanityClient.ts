import { createClient as createSanityClient } from '@sanity/client';

export const createClient = createSanityClient({
  projectId: 'cl1p68bz', 
  dataset: 'production', 
  apiVersion: '2023-01-01', 
  useCdn: true, 
});
