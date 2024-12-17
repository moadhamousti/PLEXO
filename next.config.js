/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['ixmgziukmmmksywzqidm.supabase.co'],
  },
};

module.exports = nextConfig;
