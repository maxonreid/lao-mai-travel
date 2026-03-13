import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://laomaitravel.com'
  
  const locales = ['en', 'lo']
  const currentDate = new Date()

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          lo: `${baseUrl}/lo`,
        },
      },
    },
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          lo: `${baseUrl}/lo`,
        },
      },
    })),
  ]

  return routes
}
