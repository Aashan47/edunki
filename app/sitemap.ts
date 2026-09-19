import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { team } from "@/lib/team";
import { resources } from "@/lib/resources";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://edunki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE_URL, lastModified: now, priority: 1 },
    { url: `${BASE_URL}/consultation`, lastModified: now, priority: 0.9 },
    { url: `${BASE_URL}/resources`, lastModified: now, priority: 0.6 },
    ...services.map((s) => ({
      url: `${BASE_URL}/services/${s.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...team.map((m) => ({
      url: `${BASE_URL}/team/${m.slug}`,
      lastModified: now,
      priority: 0.5,
    })),
    ...resources.map((r) => ({
      url: `${BASE_URL}/resources/${r.slug}`,
      lastModified: now,
      priority: 0.4,
    })),
  ];
}
