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
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      },
    ],
    categories: ['travel', 'tourism', 'lifestyle'],
    lang: 'en-US',
  }
}
