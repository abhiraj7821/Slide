import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'instagram.frpr1-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com'
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
