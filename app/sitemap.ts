import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laomaitravel.com'
  const locales = ['en', 'th']
  const currentDate = new Date()

  const alternates = {
    languages: {
      en: `${baseUrl}/en`,
      th: `${baseUrl}/th`,
    },
  }

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
      alternates,
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
      alternates,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    })),
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    })),
  ]

  return routes
}
