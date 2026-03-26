import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lao Mai Travel',
    short_name: 'Lao Mai Travel',
    description: 'Authentic Laos travel experiences crafted by local experts. Day tours, weekend escapes, and grand Laos journeys from Vientiane.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#0a1628',
    theme_color: '#c9a84c',
    orientation: 'portrait-primary',
    lang: 'en',
    scope: '/',
    categories: ['travel', 'lifestyle'],
    icons: [
      {
        src: '/img/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/img/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
