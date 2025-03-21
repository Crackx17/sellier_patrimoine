import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Unsplash (backgrounds, placeholder images)
      "media.apimo.pro", // Apimo (images des annonces immobilières)
      "randomuser.me", // RandomUser (photos de profil factices)
      "api.apimo.pro", // Apimo API (au cas où certaines images passent par là)
    ],
    dangerouslyAllowSVG: false, // Sécurité : empêche les SVG malveillants
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
