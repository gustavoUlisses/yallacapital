import type { MetadataRoute } from "next";
import { locales } from "@/i18n/locales";

const BASE = "https://www.yallacapital.com.br";

const pages = [
  { path: "",             priority: 1.0, changeFrequency: "monthly"  },
  { path: "/sobre",       priority: 0.8, changeFrequency: "monthly"  },
  { path: "/equipe",      priority: 0.8, changeFrequency: "monthly"  },
  { path: "/advisory",    priority: 0.8, changeFrequency: "monthly"  },
  { path: "/transacoes",  priority: 0.7, changeFrequency: "weekly"   },
  { path: "/contato",     priority: 0.7, changeFrequency: "monthly"  },
  { path: "/carreiras",   priority: 0.6, changeFrequency: "monthly"  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  );
}
