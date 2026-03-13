import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lao Mai Travel - Your Trusted Local Travel Partner Laos',
    short_name: 'Lao Mai Travel',
    description: 'Authentic Laos travel experiences crafted by local experts',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0f2e',
    theme_color: '#c9a84c',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
