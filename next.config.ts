import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Your Next.js config here
  reactCompiler: false,
  turbopack:{},
  experimental: {
    //turbo: false,
  },
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig);