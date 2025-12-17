export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://transbuild.in/sitemap.xml",
  };
}
