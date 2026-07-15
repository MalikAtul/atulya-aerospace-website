import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/defense`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/delhiver`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/medfly`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/programs`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
