import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    const portal = "https://portal.gloryautohub.ca";
    return [
      { source: "/login", destination: portal + "/login", permanent: false },
      {
        source: "/register",
        destination: portal + "/signup",
        permanent: false,
      },
      { source: "/signup", destination: portal + "/signup", permanent: false },
      ...[
        "dashboard",
        "forgot-password",
        "reset-password",
        "privacy",
        "terms",
        "about",
      ].map((path) => ({
        source: "/" + path + "/:path*",
        destination: portal + "/" + path + "/:path*",
        permanent: false,
      })),
    ];
  },
};
export default nextConfig;
