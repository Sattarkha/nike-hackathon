/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'template-03-api.vercel.app'], // Only the domain, no `/api/products`
  },
};

export default nextConfig;
